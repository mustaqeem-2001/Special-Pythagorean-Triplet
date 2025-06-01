function PythagoreanTripley(num) {
    // a + b + c = 2m(m + n)
    for (let n = 1; n < num; n++) {
        for (let m = n + 1; m < num; m++) {
            if (2 * m * (m + n) === num) {
                let a = (m * m) - (n * n);
                let b = 2 * m * n;
                let c = (m * m) + (n * n);
                return a * b * c;
            }
        }
    }

}
console.log(PythagoreanTripley(1000));