function x() {
    let a = 10;
    return [function y() {
        console.log(a);
    }]
}

const res = x()
res()