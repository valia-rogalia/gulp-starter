var gulp        = require('gulp');
var runSequence = require('gulp4-run-sequence');
var config      = require('../config');

gulp.task('default', function(cb) {
    // runSequence(
		// 		'build:dev',
    //     'watch',
		// 		'server',
    //     cb
		// );
		
		gulp.series([
			'build:dev',
			gulp.parallel(['watch','server']),
			cb
		])
});
