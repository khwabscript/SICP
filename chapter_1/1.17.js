function multiplication(a,b) {
    var message=(a==0)? 0:
    (a%2==0)? multiplication(a/2,b+b):
    b+multiplication(a-1,b);
    return message;
}
multiplication(3,7);