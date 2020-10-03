<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function get($id)
    {
        $testData = [
            ["id" => "3", "title" => "baz", "content" => "# This is a header\n\n## This is a second header\n\nAnd this is a paragraph"]
        ];
        return $testData;
    }
}
