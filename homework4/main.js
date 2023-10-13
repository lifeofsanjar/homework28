// While 1 //

// function while1(a, b, c) {
//     while (a > 0, b > 0, a > b + c) {
//         console.log(b + c);
//         b++;
//     }
// }

// While 2 //

// function while2(a, b, c) {
//     while (a > 0 && b > 0 && a > b + c) {
//         console.log(b + c);
//         b++;
//     }
// }

// while2(10, 5, 1);



// While 3 //

// function while3(N, K) {
//     if (K === 0) {
//         console.log("Division by zero is not allowed.");
//         return;
//     }

//     let quotient = 0;
//     let remainder = N;

//     while (remainder >= K) {
//         remainder -= K;
//         quotient++;
//     }

//     console.log(`Quotient: ${quotient}`);
//     console.log(`Remainder: ${remainder}`);
// }

// const N = 20; 
// const K = 11;

// while3(N, K);



// While 4 //

// function while4(n) {
//     if (n === 1) {
//         return "power of 3";
//     }

//     while (n > 1) {
//         if (n % 3 !== 0) {
//             return "not a power of 3";
//         }
//         n = n / 3; 
//     }
    
//     return "not a power of 3";
// }

// const number = 3; 
// const result = while4(number);
// console.log(result);



// While 5 //

// function while5(n) {
//     let k = 0;
//     while (n > 1) {
//       n = n / 2;
//       k++;
//     }
//     return k;
//   }
  
//   const n = 25; 
//   const k = while5(n);
//   console.log(`k is ${k}`);



// While 17 //

// function while17(n, m) {
//     if (m === 0) return Infinity; 
  
//     let quotient = 0;
//     while (n >= m) {
//       n -= m;
//       quotient++;
//     }
//     return quotient;
//   }
  
//   const n = 20;
//   const m = 4;
//   const result = while17(n, m);
//   console.log(`Result: ${result}`);