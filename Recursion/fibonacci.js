function fibo(n) {
    if(n===1 || n===2) {
        return 1;
    } else {
        return fibo(n-1) + fibo(n-2);
    }
}

console.log(fibo(20));