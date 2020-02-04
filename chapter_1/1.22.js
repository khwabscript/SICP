function smallest_divisor(n) {
    return find_divisor(n,3);
}
function find_divisor(n,test_divisor) {
    var message=(square(test_divisor-2)>n)? n:
    (n%2==0)? 2:
    (n%test_divisor==0)? test_divisor:
    find_divisor(n,test_divisor+2);
    return message;
}
function square(x) {
    return x*x;
}
function prime(n) {
    return n==smallest_divisor(n);
}
function report(n) {
    if(prime(n)) {
        return n;
    }
    return '-';
}
function search_for_primes(i,n) {
    console.time('a');
    for(i;i<n+1;i++) {
        console.log(report(i));
    }
    console.timeEnd('a');
}
var count=0;
function find_three(i) {
    console.time('a');
    while(count<3) {
        if(prime(i)) {
            console.log(i);
            count++;
        }
        i++;
    }
    count=0;
    console.timeEnd('a');
}
find_three(1000);