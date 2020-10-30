var gulp = require("gulp"),
  // Include Our Plugins
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify");
//---------------------------------------------

var paths = {
  webroot: "./",
  appJs: ["./src/*.js", "./src/features/*.js"]
};

//-----------CONCAT-----------------
gulp.task("concat", function() {
  return (
    gulp
      .src(paths.appJs)
      .pipe(concat({ path: "spec.js", cwd: "" })) // Make a single file
      // .pipe(uglify())
      .pipe(gulp.dest(paths.webroot + "/dist/")) // Write single versioned file to build/release folder
  );
});

gulp.task("js:watch", function() {
  gulp.watch(paths.appJs, ["concat"]);
});

gulp.task("start", ["concat", "js:watch"]);
