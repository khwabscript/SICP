function fib(n) {
    return fib_iter(1,0,n);
}
function fib_iter(a, b, count) {
    if(count==0) {
        return b;
    } else {
        return fib_iter(a+b,a,count-1);
    }
}
var x = 35;
console.time('a');
console.log(fib(x));
console.timeEnd('a');
function fib2(n) {
    var message = n==0? 0:
    n==1? 1:
    fib2(n-1)+fib2(n-2);
    return message;
}
console.time('b');
console.log(fib2(x));
console.timeEnd('b');