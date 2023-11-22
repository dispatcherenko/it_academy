import gulp from "gulp";
import del from "del";

import include from "gulp-file-include";
import formatHTML from "gulp-format-html";
import autoprefixer from "autoprefixer";

const recources = {
    html: "src/html/**/*.html",
    jsVendor: "src/scripts/vendor/*.js",
    less: "src/styles/**/*.less",
    static: [
        "src/assets/icons/**/*.*",
        "src/assets/fonts/**/*.{woff,woff2}"
    ],
    images: "src/assets/images/**/*.*",
    svgSprite: "src/assets/svg-sprite/*.svg"
};

const build = gulp.series(
    clean,
    copy,
    includeHtml,
    style,
    js,
    jsCopy,images,
    svgSprite
);

const start = gulp.series(build, serve);

export {
    clean,
    copy,
    includeHtml,
    style,
    js,
    jsCopy,
    images,
    svgSprite,
    build,
    serve,
    start
};

function clean() {
    return del("dist");
}

function includeHtml() {
    return gulp
    .src("src/html/**/*.html")
    .pipe(plumber())
    .pipe(
        include({
            prefix: "@@",
            basepath: "@file"
        })
    )
    .pipe(formatHTML())
    .pipe(gulp.dest("dist"))
}

function style() {
    return gulp
    .src("src/styles/styles.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(
        postcss([
            autoprefixer({ overrideBrowerslist:["last 4 version"] }),
            sortMediaQueries({
                sort: "desktop-first"
            })
        ])
    )
    .pipe(gulp.dest("dist/styles"))
    .pipe(minify())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("dist/styles"));
}

function js() {
    return gulp
    .src("src/scripts/dev/*.js")
    .pipe(plumber())
    .pipe(
        include({
            prefix: "//@@",
            basepath: "@file"
        })
    )
    .pipe (gulp.dest("dist/scripts"))
    .pipe(terser())
    .pipe(
        rename(function (path) {
            path.basename += ".min";
        })
    )
    .pipe(gulp.dest("dist/scripts"));
}

function jsCopy() {
    return gulp
    .src(recources.jsVendor)
    .pipe(plumber())
    .pipe(gulp.dest("dist/scripts"));
}

function copy() {
    return gulp
    .src(recources.static, {
        base: "src"
    })
    .pipe(gulp.dest("dist/"));
}

function images() {
    return gulp
    .src(resources.images)
    .pipe(
        imagemin([
            imagemin_gifsicle({ interlaced: true }),
            imagemin_mozjpeg({ quality: 100, progressive: true }),
            imagemin_optpng({ optimizationLevel: 3 })
        ])
    )
    .pipe(gulp.dest("dist/assets/images"));
}

function svgSprite() 
{
    return gulp
    .src(recources.svgSprite)
    .pipe(
        svgmin({
            js2svg: {
                pretty: true
            }
        })
    )
    .pipe(
        svgstore({
            inlineSvg: true
        })
    )
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("dist/assets/icons"))
}

function serve() {
    ServiceWorkerRegistration.init({
        server: "dist"
    });
    gulp.watch(recources.html, gulp.series(includeHtml, reloadServer));
    gulp.watch(recources.less, gulp.series(style, reloadServer));
    gulp.watch(recources.jsDev, gulp.series(js, reloadServer));
    gulp.watch(recources.jsVendor, gulp.series(jsCopy, reloadServer));
    gulp.watch(recources.static, { delay: 500 }, gulp.series(copy, reloadServer));
    gulp.watch(recources.images, { delay: 500 }, gulp.series(images, reloadServer));
    gulp.watch(recources.svgSprite, gulp.series(svgSprite, reloadServer));
}

function reloadServer(done) {
    server.reload();
    done();
}