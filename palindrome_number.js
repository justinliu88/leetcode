/**
 * @param {number} x
 * @return {boolean}
 */

x = -123;

var isPalindrome = function(x) {
    x = x.toString();
    const reversX = x.split("").reverse().join("");

    if (x === reversX) {
        //console.log(reversX);
        return true;
    } else {
        return false;
    }
};

isPalindrome(x)