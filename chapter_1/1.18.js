function mult_iter(a,b,invariant) {
    var message=(a==0)? invariant:
    (a%2==0)? mult_iter(a/2,b+b,invariant):
    mult_iter(a-1,b,invariant+b);
    return message;
}
mult_iter(7,9,0);