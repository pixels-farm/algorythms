//linear search implementation

const x = [5, 3, 67, 24, 6, 22 ,66, 433];

function find(needle, haystack) {
    let i = 0;
    while(haystack[i] !== needle && i<haystack.length) {
        ++i;
    }
    return i<haystack.length? i : -1;
}


console.log(find(433, x));
