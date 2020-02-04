function cube(x) {
    return x*x*x;
}
function abs(x) {
    if (x>0) {
        return x;
    } else {
        return -x;
    }
}
function p(x) {
    return 3*x-4*cube(x);
}
var count = 0;
function sine(angle) {
    if(!(abs(angle)>0.1)) {
        return angle;
    } else {
        count++;
        return p(sine(angle/3));
    }
}
sine(12.15);