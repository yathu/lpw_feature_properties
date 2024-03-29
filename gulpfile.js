var {src, dest, watch, series, parallel} = require('gulp');

const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
// const sass = require('gulp-sass');
// const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-sass');
sass.compiler = require('sass');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const cp = require("child_process");
const browserSync = require('browser-sync').create();


// File paths
const files = {
    scssPath: '_sass/**/*.scss',
    cssPath: 'assets/css/**/*.scss',
    allJsPath: 'assets/js/**/*.js',
    jsPath: 'assets/js/main.js',
    jsPath1: 'assets/js/map.js',
    jsPath2: 'assets/js/details.js',
    jsPath3: 'assets/js/common.js',
    imgPath: 'assets/img/**/*',
    _site: '_site/**/*',
}

// Sass task: compiles the style.scss file into style.css
function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest('_site/assets/css/')) // put final CSS in dist folder
        .pipe(browserSync.reload({stream: true}))
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask() {
    return src(files.allJsPath)
        .pipe(uglify())
        .pipe(dest('_site/assets/js/'))
        .pipe(browserSync.reload({stream: true}))
}

//img task
function imgTask() {
    return src(files.imgPath)
        .pipe(newer("_site/assets/img/"))
        .pipe(imagemin())
        .pipe(dest("_site/assets/img/"))
        .pipe(browserSync.reload({stream: true}))
}

// Jekyll
function jekyll() {
    return cp.spawn("bundle", ["exec", "jekyll", "build"], {stdio: "inherit"});
}

// Jekyll
function jekyllStart() {
    return cp.spawn("bundle", ["exec", "jekyll", "serve"], {stdio: "inherit"});
}

function copyToLive() {
    return src(files._site)
        .pipe(dest('docs'))
}

function watchTask() {
    watch(files.scssPath, scssTask);
    watch([files.allJsPath], jsTask);
    watch(['_includes/**/*.html', '_layouts/**/*.html', 'pages/**/*.html', '*.html'], series(jekyll, browserSyncReload));
    watch(files.imgPath, imgTask);
    watch(files._site, copyToLive);
}

// Clean assets
function clean() {
    return del(["_site/assets/"]);
}

//browsersynce function
function browserSyncServe(done) {
    browserSync.init({
        server: {
            baseDir: "_site"
        },
        online: true
    });
    done();
}

function browserSyncReload(done) {
    browserSync.reload({});
    done();
}


exports.default = series(
    jekyll,
    parallel(scssTask, jsTask, imgTask),
    browserSyncServe,
    watchTask
);
