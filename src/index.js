module.exports = function reverse (n) {
    let str = n.toString();
    let arr = [];
    for(let i = 0; i<=str.length; i++) {
        if(str[i] != "-") {
            arr.push(str[i]);
        }
    };
    return Number(arr.reverse().join(''));
}
