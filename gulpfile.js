const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber')
const webp = require('gulp-webp');
// const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser-js');

function css( done ){
    src('src/scss/**/*.scss')
        .pipe( plumber())
        .pipe( sass() )
        .pipe( dest('build/css') )

    done();
}

function versionWebp( done ){
    const opciones = {
        quality: 50
    };
    src('src/img/**.*{png,jpeg}')
        .pipe( webp(opciones) )
        .pipe( dest('build/img'))
}

function javascript( done ){
    src('src/js/**/*.js')
    //    .pipe( sourcemaps.init() )
        .pipe( terser() )
    //    .pipe( sourcemaps.write('.') )
        .pipe(dest('build/js'))

    done();
}

function dev( done ){
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', javascript)

    done();
}

exports.css = css;
exports.javascript = javascript;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev, javascript);
