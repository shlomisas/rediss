/**
 * Created by Shlomi
 */

import runSequence from 'run-sequence';

export default function (gulp, plugins, options) {

    runSequence.use(gulp);
    checkClientSpecificTask(gulp, options);

    // Write aliases
    gulp
        .task('build', callback => {
            runSequence('prv-cleanDist', 'prv-createFolders', 'prv-config', 'prv-babel', callback);
        })
        .task('watch', callback => {
            options.watch = true;
            runSequence('prv-babelWatch', callback);
        })
        .task('buildAndWatch', callback => {
            runSequence('build', 'watch', callback);
        })
        .task('release', function(callback){
            runSequence('prv-bumpVersion', 'prv-commitVersion', 'prv-tagVersion', callback);
        })
        .task('releaseMinor', function(callback){
            options.versionType = 'minor';
            runSequence('release', callback);
        })
        .task('default', ['build']);
}

/**
 *
 * @param gulp
 * @param options
 */
function checkClientSpecificTask(gulp, options = {}) {
    const task = options._[0];

    if (task && task.includes('buildClient') && task.includes(':')) {
        const parts = task.split(':');

        if (parts.length < 4) throw new Error(`The proper syntax is 'buildClient:<client>:<app>:<what>`);

        options.client = parts[1];
        options.app = parts[2];
        options.what = parts[3];

        gulp.task(task, callback => buildClients(callback));
    }


}

/**
 *
 * @param callback
 * @returns {*}
 */
function buildClients(callback) {
    return runSequence('prv-publicCleanWebpackDist', 'prv-publicCopyNonJs', 'prv-webpack', callback);
}