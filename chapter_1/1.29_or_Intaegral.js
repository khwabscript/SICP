var f=function cube(x) {
    return x*x*x;
}
function integral(f,a,b,n) {
   var h = (b-a)/n;
   console.log(h);
   var sum = f(a);
   for (k=1;k<n-1;k++) {
        if(k%2==0) {
            sum = sum + 2*f(a+k*h);
        } else {
            sum = sum + 4*f(a+k*h);
        }
   }
   sum = sum + f(b);
   console.log(f(a+500*h));
   return sum*h/3;
}
integral(f,0,1,1000);