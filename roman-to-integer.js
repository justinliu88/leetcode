/**
 * @param {string} 
 * @return {number}
 */

s = "IV"
var romanToInt = function(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    var result = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] in roman) {
            if ((roman[s[i]] < roman[s[i + 1]]) && (i + 1 < s.length)) {
                result -= roman[s[i]];
                continue;
            }

            //console.log(roman[s[i]]);
            result = result + roman[s[i]];
        }
    }
    console.log(result);
    return result;
};

romanToInt(s)