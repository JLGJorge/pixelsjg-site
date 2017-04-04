var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
	browserSync.init({
			server: {
				baseDir: "docs"
			}
		});
});

gulp.task('deleteDistFolder', function() {
	return del('./docs');
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
 return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
 
 .pipe(imagemin({
 	progressive: true,
 	interlaced: true,
 	multipass: true
 }))
 .pipe(gulp.dest("./docs/assets/images"));

});


gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
	return gulp.src(['./app/index.html',
	 './app/portfolio-1.html', 
	 './app/portfolio-2.html', 
	 './app/portfolio-3.html',
	'./app/portfolio-4.html',
	'./app/portfolio-5.html',
	'./app/portfolio-6.html',
	'./app/colorGame.html'])

	.pipe(usemin({
		css: [function() {return rev()}, function() {return cssnano()}],
		js: [function() {return rev()}, function() {return uglify()}]
	}))
	.pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);