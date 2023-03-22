function fibonacciSeries(n){
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    let fib = ``;

    for (let i = 1; i <= n; i++) {
        fib += `${n1} `
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    console.log('Fibonacci Series:');
    console.log(fib);
}

fibonacciSeries(10)