<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;

class ArticlesController extends Controller
{
    /**
     * 全記事を取得
     * 
     * @return array 全記事
     */
    public function getAll(): array
    {
        $this->article = new Article();
        $articles = $this->article->orderBy("updated_at", "desc")->get();

        return self::convertArticlesForDisplay($articles);
    }
    
    /**
     * 記事を取得
     * 
     * @param int $id 記事ID
     * 
     * @return array 記事
     */
    public function get(int $id): array
    {
        $this->article = new Article();
        $article = $this->article->find($id);

        return [
            "id" => $article->id,
            "title" => $article->title,
            "content" => self::convertIndention($article->content),
            "updated_at" => $article->updated_at->format("Y年m月d日"),
        ];
    }

    /**
     * 全記事を表示用に変換
     * 
     * @param Collection $article 全記事を
     * 
     * @return array 表示用全記事
     */
    private function convertArticlesForDisplay(Collection $articles): array
    {
        $articles = $articles->map(function ($article) {
            $converted_article = [];
            $converted_article["id"] = $article->id;
            $converted_article["title"] = $article->title;
            $converted_article["content"] = self::convertIndention($article->content);
            $converted_article["updated_at"] = $article->updated_at->format("Y年m月d日");
            return $converted_article;
        }, $articles);

        return $articles->all();
    }

    /**
     * 改行文字列を改行
     * 
     * @param string $content 記事
     * 
     * @return string 置換された文字列
     */
    private function convertIndention(string $content): string
    {
        return preg_replace("/\\\\n/", "\n", $content);
    }
}
