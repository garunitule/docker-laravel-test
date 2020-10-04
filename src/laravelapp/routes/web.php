<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// TODO api.phpにまとめる
Route::get('/api/articles/{id}', 'Api\ArticlesController@get');
Route::get('/api/articles', 'Api\ArticlesController@getAll');
