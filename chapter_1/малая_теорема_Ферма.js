function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
//работает неверно
function fast_exp(b,n) {
    b=BigInt(b);
    n=BigInt(n);
    var message = n==0n? 1n:
    n%2n==0n? double(fast_exp(b,n/2n)):
    b*fast_exp(b,n-1n);
    return message;
}
function double(x) {
    return x*x;
}
function equal_module(a,b,n) {
    return (a%n==b%n);
}
function ferma_test(n) {
    a=BigInt(randomInteger(2,n-1));    
    n=BigInt(n);
    return equal_module(fast_exp(a,n),a,n);
}
function fast_prime(n, times) {
    if(times==0) {
        return true;
    }
    if(ferma_test(n)) {
        return fast_prime(n,times-1);
    } else {
        return false;
    }
}
fast_prime(19,4);