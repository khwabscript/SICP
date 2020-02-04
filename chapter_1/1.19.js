function fib(n) {
    return fib_iter(1,0,0,1,n);
}
function fib_iter(a,b,p,q,count) {
    var message=(count==0)? b:
    (count%2==0)? fib_iter(a,b,p*p+q*q,2*p*q+q*q,count/2):
    fib_iter(b*q+a*q+a*p,b*p+a*q,p,q,count-1);
    return message;
}
fib(7);