function smallest_divisor(n) {
    return find_divisor(n,2);
}
function find_divisor(n,test_divisor) {
    var message=(square(test_divisor>n))? n:
    (n%test_divisor==0)? test_divisor:
    find_divisor(n,test_divisor+1);
    return message;
}
function square(x) {
    return x*x;
}
console.log(smallest_divisor(199),
smallest_divisor(1999),
smallest_divisor(19999));