// webpack.mix.js

let mix = require('laravel-mix');

mix
.js('src/app.js', '')
.sass('src/style.scss','')
.copy('src/index.html','dist')
.setPublicPath('dist');
