const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// const buildStyles = function () {
//     return gulp
//         .src("./css/**/*.scss")
//         .pipe(sass.sync().on("error", sass.logError))
//         .pipe(gulp.dest("./test"));
// };

// const watch = function () {
//     gulp.watch("./css/**/*.scss", ["sass"]);
// };

// module.exports = {
//     default: gulp.parallel(buildStyles, watch),
//     build: buildStyles,
//     watch: watch,
// };

gulp.task("watch", function () {
    // Define the files to watch
    gulp.watch("./css/**/*.scss", gulp.series("sass"));
});

gulp.task("sass", function () {
    return gulp
        .src("./css/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./test"));
});

gulp.task("default", gulp.series("watch"));
