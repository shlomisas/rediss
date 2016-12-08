/**
 * Created by Shlomi
 */

import buildHelper from '../../helper';
import paths from '../../paths';

export default (gulp, plugins, options)=>{
    return () => {

        return gulp.src(`${paths.server.src}/**/*.js`).pipe(plugins.sourcemaps.init())
            .pipe(plugins.babel(buildHelper.babelServerOptions))
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest(paths.server.dest));
    }
};