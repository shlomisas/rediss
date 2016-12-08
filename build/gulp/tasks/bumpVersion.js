/**
 * Created by Shlomi
 */

import bump from 'gulp-bump';

// Here you must add each option/flag you need. Without it even webpack specific flags will throw an exception.
export default (gulp, plugins, options)=>{
    return () => {
        return gulp.src('./package.json')
            .pipe(bump({type: options.versionType || 'patch'}))
            .pipe(gulp.dest('./'));

    }
};
