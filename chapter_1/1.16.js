    function fast_iter_exp(a,b,n) {
        var message=(n==0)? a:
        (n%2==0)? fast_iter_exp(a,b*b,n/2):
        fast_iter_exp(a*b,b,n-1);
        return message;
    }
    fast_iter_exp(1,2,7);