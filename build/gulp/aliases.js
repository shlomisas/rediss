/**
 * Created by Shlomi
 */

import runSequence from 'run-sequence';

export default function (gulp, plugins, options) {

    runSequence.use(gulp);

    // Write aliases
    gulp
        .task('build', callback => {
            runSequence('prv-cleanDist', 'prv-babel', callback);
        })
        .task('watch', callback => {
            options.watch = true;
            runSequence('prv-babelWatch', callback);
        })
        .task('buildAndWatch', callback => {
            runSequence('build', 'watch', callback);
        })
        .task('default', ['build']);
}