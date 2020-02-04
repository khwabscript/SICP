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
fast_exp(7,19);