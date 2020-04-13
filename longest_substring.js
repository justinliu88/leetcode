var s = "aaa"

var lengthOfLongestSubstring = function(s) {

    let map = {}
    let start = 0
    let maxLen = 0
    let arr = s.split('')

    for (i = 0; i < s.length; i++) {
        var current = map[arr[i]];
        //console.log(current)
        if (current != null && start <= current) {
            start = current + 1;
        } else {
            maxLen = Math.max(maxLen, i - start + 1);
        }

        map[arr[i]] = i
    }
    console.log(map)
    return maxLen
};

lengthOfLongestSubstring(s);