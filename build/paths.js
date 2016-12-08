/**
 * Created by Shlomi
 */

let paths = {
    base: {
        src: './src',
        dest: './dist'
    },
    server: {
        get src(){
            return paths.base.src;
        },
        get dest(){
            return paths.base.dest;
        }
    },
    gulp: {
        base: './build/gulp',
        tasks: './build/gulp/tasks'
    }
};

export default paths;
