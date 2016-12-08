/**
 * Created by Shlomi
 */

import del from 'del';

let buildHelper = {
    get babelServerOptions(){
        return {
            plugins: [
                'add-module-exports'
            ],
            presets: [
                'node6',
                'stage-0'
            ]
        };
    },
    async removeDir(path) {
        return del(path, {force: true});
    }
};

export default buildHelper;