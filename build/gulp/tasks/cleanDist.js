/**
 * Created by Shlomi
 */

import paths from '../../paths';
import buildHelper from '../../helper';

export default ()=>{
    return ()=>{
        return buildHelper.removeDir([paths.server.dest]);
    }
};