//linear search implementation

const x = [5, 3, 67, 24, 6, 22 ,66, 443];

function find(needle, haystack) {
    let i = -1;
    while(haystack[i] !== needle) {
        ++i;
    }
    return i;
}


console.log(find(443, x));
