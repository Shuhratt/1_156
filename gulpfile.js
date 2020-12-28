const {src, dest, series, watch, parallel } = require('gulp')
const sass = require('gulp-dart-sass')
const htmlValidator = require('gulp-w3c-html-validator');

const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const sourcemaps = require('gulp-sourcemaps')
const include = require('gulp-file-include')

const del = require('del')
const concat = require('gulp-concat')
const minify = require('gulp-minify')
const svgSprite = require('gulp-svg-sprite')
const babel = require('gulp-babel')
const copy = require('gulp-contrib-copy')
// const imagemin = require('gulp-imagemin')
// const px2rem = require('gulp-px2rem')
const sync = require('browser-sync').create()
const browserify = require('gulp-browserify')
const cache = require('gulp-cache')

function html() {
    return src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        // .pipe(htmlValidator())
        // .pipe(htmlValidator.reporter())

        .pipe(dest('dist'))
}

// FOR Rem
// const px2remOptions = {
//     replace: true
// };
// const postCssOptions = {
//     map: true
// };

function scss() {
    return src('src/scss/**/*.scss', { noCache: true, style: 'compressed' })
        .pipe(sourcemaps.init())//инициализируем создание Source Maps
        .pipe(sass().on('error', sass.logError))
        .pipe(sass())
        .pipe(cssnano())
        .pipe(autoprefixer({
            overrideBrowserslist: [ "last 20 version", "> 1%", "IE 10"],
            cascade: false
        }))
        // .pipe(px2rem(px2remOptions, postCssOptions))//rem
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('./'))// пути для записи SourceMaps
        .pipe(dest('dist/css'))

}

function js() {
    return src([
        'src/js/main.js',
    ])
    // .pipe(browserify({
    //     insertGlobals : true,
    //     require : ['global.js']
    // }))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('global.js'))
    .pipe(minify({
        noSource: true
    }))
    .pipe(dest('dist/js'))
}


// Experemental
function copyImg (){
    return src('src/images/pic/*')
        .pipe(copy())
        .pipe(dest('dist/img'))
}

function copyFavicons (){
    return src('src/images/favicon/*')
      .pipe(copy())
      .pipe(dest('dist/img/favicons'))
}

function copyFonts (){
    return src('src/fonts/**/*')
      .pipe(copy())
      .pipe(dest('dist/fonts'))
}

function copyLibs (){
    return src('src/js/libs/*.js')
      .pipe(copy())
      .pipe(dest('dist/js'))
}
//


config = {
    shape: {
        // spacing: { // Add padding
        //     padding: 5
        // },
    },
    mode: {
        stack: {
            sprite: "../icons/sprite.svg"  //sprite file name
        }
    },
};


function svgBuild() {
    return src('src/images/svg/**.svg')
        .pipe(svgSprite(config))
        .on('error', function(error) {
            done(error);
        })
        .pipe(dest('dist/img'))
}

// function imgMin() {
//     return src('src/img/*.png')
//         .pipe(imagemin([
//             imagemin.optipng({optimizationLevel: 5}),
//         ],{
//             progressive: true
//         }))
//         .pipe(dest('dist/img'))
// }

function clear(){
    return del('dist')
}

function clearCache() {
    return src('src/scss/**/*.scss')
        .pipe(cache.clear());

        // Or, just call this for everything
        // cache.clearAll();
}

function serve(){
    sync.init({
        server: './dist',
        stream: true
    })

    watch('src/**/*.html', series(html)).on('change', sync.reload)
    watch('src/scss/**/*.scss', series(scss)).on('change', sync.reload)
    watch('src/js/**.js', series(js)).on('change', sync.reload)
    watch('src/images/svg/**.svg', series(svgBuild)).on('change', sync.reload)
}

exports.build = series(clear, clearCache, scss, svgBuild, copyImg, copyFavicons, copyFonts, copyLibs, html, js )
exports.serve = series(clear, clearCache, scss, svgBuild, copyImg, copyFavicons, copyFonts, copyLibs, html, js, serve)

exports.default = serve


// exports.imgMin = imgMin
// exports.html = html
// exports.scss = scss
// exports.clear = clear

