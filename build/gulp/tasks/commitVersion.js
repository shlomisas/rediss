/**
 * Created by Shlomi
 */

import fs from 'graceful-fs';
import git from 'gulp-git';

// Here you must add each option/flag you need. Without it even webpack specific flags will throw an exception.
export default (gulp, plugins, options)=>{
    return (cb)=>{
        var packageJson = JSON.parse(fs.readFileSync('./package.json'));
        return gulp.src('./package.json')
            .pipe(git.commit(`Released v${packageJson.version}`))
    }
};