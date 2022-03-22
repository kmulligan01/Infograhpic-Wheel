var gulp = require("gulp");
var plumber = require("gulp-plumber");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");

// Scripts Task
// Minify JS
function scripts() {
  return gulp
    .src("assets/js/*.js")
    .pipe(plumber())
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(
      gulp.dest("assets/js", {
        overwrite: true,
      })
    );
}

// Styles Task
// Compile Main Styles
function styles() {
  return gulp
    .src("scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
        sourceComments: true,
        sourceMap: true,
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("maps"))
    .pipe(gulp.dest("css"));
}



// Gulp
exports.compile = gulp.series(styles, scripts);
