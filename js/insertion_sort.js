//sort by insertion implementation

const x = [5, 3, 67, 22, 5, 22 ,66, 443];
const dest = [];

while(x.length) {
    const key = x.shift();
    let i = dest.length;
    
    while(i>0 && dest[i-1]>key) {
        dest[i] = dest[i-1];
        --i;
    }
    dest[i] = key;
}

console.log(dest);