/**
 * @param {number} x
 * @return {number}
 */
x = -123001001;

var reverse = function(x) {
    let outStr = "";

    x = x.toString();
    if (x === "0") {
        outStr = "0";
    }

    if (Math.abs(x) > 0x7FFFFFFF) {
        outStr = "0";
    }
    //console.log(x);
    for (i = 0; i < x.length; i++) {
        outStr = x[i] + outStr;
    }

    while (outStr[0] == "0" && outStr.length != 1) {
        outStr = outStr.substring(1);
    }

    if (x[0] === "-") {
        outStr = outStr.substring(0, outStr.length - 1);
        outStr = "-" + outStr;
        while (outStr[0] == "0") {
            outStr = outStr.substring(1);
        }
    }
    let outNum = parseInt(outStr);
    if (Math.abs(outNum) > 0x7FFFFFFF) {
        outNum = 0;
    }
    //console.log(outNum);
    return outNum
};

reverse(x);