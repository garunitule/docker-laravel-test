# docker-laravel-test

docker-compose buildしたら以下のコマンドを実行してlaravelプロジェクトを作成して、reactをのせる

## laravelプロジェクト作成
docker exec -it laravel_app bash
cd /var/www/html
composer create-project "laravel/laravel=~7.0" --prefer-dist laravelapp

## reactを使えるように
cd /var/www/html/laravelapp
composer require laravel/ui:^2.4
php artisan ui react
npm install && npm run dev

## マークダウンをHTMLにパースするライブラリインストール
cd /var/www/html/laravelapp
npm install --save react-markdown

## axiosをインストール
cd /var/www/html/laravelapp
npm install axios --save

## react-router-domをインストール
cd /var/www/html/laravelapp

## マイグレーション
php artisan migrate

## laravel_appコンテナに入る
docker exec -it laravel_app bash

## laravel_dbコンテナに入る
docker exec -it laravel_db mysql -u laravel_user -p laravel_db