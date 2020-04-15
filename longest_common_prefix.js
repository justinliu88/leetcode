/**
 * @param {string[]} strs
 * @return {string}
 */

var strs = [""]

var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return '';
    }
    let result = '';
    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every(item => {
                return strs[0][i] === item[i];
            })) {
            result += strs[0][i];
        } else {
            break;
        }
    }
    console.log(result);
    return result;
};

longestCommonPrefix(strs);