function nod(a,b) {
    if(a%b==0) {
        return b;
    } else {
        return nod(b,a%b);
    }
}
nod(28,16);