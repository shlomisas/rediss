/**
 * Created by Shlomi
 */

import gulp from 'gulp';
import pluginsFn from 'gulp-load-plugins';
import fs from 'graceful-fs';
import path from 'path';
import yargs from 'yargs';

import paths from './build/paths.js';
import aliases from './build/gulp/aliases.js';

var plugins = pluginsFn();
let options = yargs
    .alias('e', 'env')
    .default({env: 'dev'})
    .argv;

try{

    // Load aliases
    aliases(gulp, plugins, options);

    // Load all tasks
    fs
        .readdirSync(paths.gulp.tasks)
        .forEach(function(filename) {
            let file = path.join(paths.gulp.tasks, filename);
            let stat = fs.statSync(file);

            if (stat.isFile() && filename.slice(-3) !== '.js') return;

            let name = filename.slice(0, -3);
            let task = require(paths.gulp.tasks +'/'+ filename)(gulp, plugins, options);

            // Register the task
            gulp.task(`prv-${name}`, task);
        });
}catch(e){
    console.log(e);
}
