
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
    return src("src/sass/style.scss")
        .pipe(sass())
        .pipe(dest("dist")) // relative path to destination folder
}

function copyHtml() {
    return src("./src/*.html")
        .pipe(dest("dist"))
}

// name this (watcher function) as you'd like
function watchTask() {
    watch(["src/**/*.scss"], buildStyles) 
}

exports.build = series(buildStyles, copyHtml);
exports.default = series(buildStyles, watchTask);