/**
 * Created by Shlomi
 */

import path from 'path';
import through2 from 'through2';

import buildHelper from '../../helper';
import paths from '../../paths';

export default (gulp, plugins)=>{
    return () => {

        plugins.util.log('Waiting for files changes...');

        return plugins.watch(`${paths.server.src}/**/*.js`)
            .pipe(plugins.plumber())
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.babel(buildHelper.babelServerOptions))
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest(paths.server.dest))
            .pipe(through2.obj(function (file, enc, cb) {

                if (!file.path) {return cb();}

                plugins.util.log(`Babelify ${path.basename(file.path)}`);
                cb();
            }));
    }
};