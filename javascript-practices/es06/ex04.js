/**
 * 4. default parameter
 */

const print = function (strs, e='\n') {
    console.log(strs.join(e));
}

print(['always', 'with', 'me']);
print(['always', 'with', 'me'],'    ');