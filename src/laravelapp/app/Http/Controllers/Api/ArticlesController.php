<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;

class ArticlesController extends Controller
{
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
