//recursive process
var f = function square(x) {
    return x*x;
}
function constructor(f,a,b) {
    if(a>b) {
        return 1;
    } else {
        return f(a)*constructor(f,a+1,b);
    }
}
fact = function factorial(x) {
    return x;
}
constructor(fact,1,5);
var next = function n(x) {
    return x+2;
}
function product(f,next,a,b) {
    if(a>b) {
        return 1;
    } else {
        return f(a)*product(f,next,next(a),b);
    }
}
function pi(n) {
    var b=n;
    if(n%2==0) {
        b=1/(n+1);
    }
    return 8*b*product(f,next,4,n)/product(f,next,3,n);
}
pi(150);
//iterative process
function product_iter(f,next,a,b) {
    function iter(a,result) {
        if(a>b) {
            return result;
        } else {
            return iter(next(a),f(a)*result);
        }
    }
    return iter(a,1);
}
product_iter(f,next,1,10);
function pi_iter(n) {
    var b=n;
    if(n%2==0) {
        b=1/(n+1);
    }
    return 8*b*product_iter(f,next,4,n)/product_iter(f,next,3,n);
}
pi_iter(150);