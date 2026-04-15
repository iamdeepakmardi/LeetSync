/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filtered = "";

    for(let ch of s){
        if(
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= '0' && ch <= '9')
        ){
            filtered += ch.toLowerCase();
        }
    }

    let start = 0;
    let end = filtered.length -1;

    while(start<end){
        if(filtered[start] !== filtered[end]) return false;
        start++;
        end--;
    }

    return true;
};