var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
/*uglify       = require('gulp-uglifyjs'),*/
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer');
spritesmith = require('gulp.spritesmith');
sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', gulp.parallel(function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 10 versions', '> 1%', 'ie 9', 'ie 10'], {cascade: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
}));

gulp.task('browser-sync', gulp.parallel(function () {
    browserSync({
        server: {
            baseDir: './',
            serveStaticOptions: {
                extensions: ['html']
            }
        }
    });
}));

gulp.task('sprite', gulp.parallel(function () {
    var sprite = gulp.src('app/img/icons/*.png').pipe(spritesmith({
        imgName: '../img/sprite.png',
        cssName: '_sprite.scss',
        cssFormat: 'scss',
        algoritm: 'binary-tree',
        padding: 5
    }));
    sprite.img.pipe(rename('sprite.png')).pipe(gulp.dest('app/img/'));
    sprite.css.pipe(gulp.dest('app/scss/utils/'));
}));

gulp.task('css-libs', gulp.parallel(['sass'], function () {
    return gulp.src('app/css/main.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
}));
gulp.task('watch', gulp.parallel(['browser-sync', 'sprite', 'css-libs'], function () {
    gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
    gulp.watch(['app/img/icons/**/*.png'], gulp.series(['sprite']));
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
}));

gulp.task('clean', gulp.parallel(function () {
    return del.sync('dist');
}));

gulp.task('img', gulp.parallel(function () {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
}));

gulp.task('build', gulp.parallel(['clean', 'img', 'sass'], function () {

    var buildCss = gulp.src([
        'app/css/main.css'
    ])
        .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/scss/**/*')
        .pipe(gulp.dest('dist/scss'))

    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));

}));

gulp.task('clear', gulp.parallel(function (callback) {
    return cache.clearAll();
}));

gulp.task('default', gulp.parallel(['watch']));
