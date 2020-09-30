# docker-laravel-test

docker-compose buildしたら以下のコマンドを実行してlaravelプロジェクトを作成して、reactをのせる

docker exec -it laravel_app bash
cd /var/www/html
composer create-project "laravel/laravel=~7.0" --prefer-dist laravelapp

cd /var/www/html/laravelapp
composer require laravel/ui:^2.4
php artisan ui react
npm install && npm run dev