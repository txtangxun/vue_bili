var temp = null;

function fn(callback) {
    var a = 10;
    // temp = a;
    callback(a);
}
fn(function(b) {
    console.log(b);
});
// console.log(temp);