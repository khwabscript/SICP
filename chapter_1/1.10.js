function A(x,y) {
    var message=(y==0)? 0:
                (x==0)? (2*y):
                (y==1)? 2:
                A((x-1),A(x,(y-1)));
    return message;
}
console.log(A(1,10),A(2,4),A(3,3));