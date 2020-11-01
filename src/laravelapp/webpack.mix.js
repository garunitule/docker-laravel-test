const mix = require('laravel-mix');
const marked = require("marked");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const renderer = new marked.Renderer();
mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        module: {
            rules: [{
                test: /\.md$/,
                use: [{
                    loader: 'html-loader'
                }, {
                    loader: 'markdown-loader',
                    options: {
                        pedantic: true,
                        renderer
                    }
                }]
            }]
        }
    });
