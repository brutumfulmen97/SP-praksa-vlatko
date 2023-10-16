const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
exports.buildStyles = function () {
    return gulp
        .src("./css/**/*.scss")
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(gulp.dest("./test"));
};

exports.watch = function () {
    gulp.watch("./css/**/*.scss", ["sass"]);
};
