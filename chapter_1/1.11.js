function f(n) {
    if(n<3) {
        return n;
    } else {
        return f(n-1)+f(n-2)+f(n-3);
    }
}
function f2(n) {
    if(n<3) {
        return n;
    } else {
        return iter(n, 2, 1, 0);
    }
}
var count=2;
function iter(n, f2, f1, f0) {
    if (count>=n) {
        return f2;
    } else {
        count++;
        return iter(n, f2+f1+f0, f2, f1);
    }
}
console.time('f');
console.log(f(25));
console.timeEnd('f');
console.time('f2');
console.log(f2(25));
console.timeEnd('f2');