function cube_sqrt(y, sqrt_y) {
    if(abs(y - cube(sqrt_y))<0.001) {
        return console.log('Кубический корень из ' + y + ' равен: ' + sqrt_y);
    }
    else {
        console.log(sqrt_y + ' пока не подходит, попробуем другой.');
        sqrt_y = approximate(y, sqrt_y);
        cube_sqrt(y, sqrt_y);
    }
}
function square(x) {
    return x*x;
}
function cube(x) {
    return x*x*x;
}
function approximate(x, y) {
    return (x/square(y)+2*y)/3;
}
function abs(x) {
    if(x<0) {
        return -x;
    }
    else {
        return x;
    }
}
cube_sqrt(81,4);