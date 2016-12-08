/**
 * Created by Shlomi
 */

import fs from 'graceful-fs';
import git from 'gulp-git';

// Here you must add each option/flag you need. Without it even webpack specific flags will throw an exception.
export default (gulp, plugins, options)=>{
    return (cb)=>{
        var packageJson = JSON.parse(fs.readFileSync('./package.json'));
        git.tag(`release-v${packageJson.version}`, `Released version ${packageJson.version}`, err => {
            if (err) throw err;
            cb();
        });
    }
};
