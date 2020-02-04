function count_change(amount) {
    return cc(amount, 5);
}
function cc(amount, kinds_of_coins) {
    var result=(amount==0)? 1:
    ((amount<0)||(kinds_of_coins==0))? 0:
    cc(amount,kinds_of_coins-1)+cc(amount-first_denomination(kinds_of_coins),kinds_of_coins);
    return result;
}
function first_denomination(kinds_of_coins) {
    var message=kinds_of_coins==1? 1:
    kinds_of_coins==2? 5:
    kinds_of_coins==3? 10:
    kinds_of_coins==4? 25:
    50;
    return message;
}
count_change(100);