// No.1-------------------------------
function ex1(n) {
   let str = '';
   for (let i = 0; i < n; i++) {
      str += '*';
   }
   return str;
}
// console.log(ex1(n));
//---------------------------------------------
// No.2
function ex2(n) {
   let star = '';

   for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
         star += '*';
      }
      star += '\n';
   }

   return star;
}
// console.log(ex2(2));
//------------------or------------------------------
// function ex2(n) {
//    sum = '';

//    for (let i = 1; i <= n * n; i++) {
//      sum += '*';

//      if (i%n === 0) {
//       sum += '\n';
//      }
//    }
//    return sum;
// }
// console.log(ex2(3));
//-----------------------------------------------
//No.3
function ex3(n) {
   let sum = '';

   for (let j = 1; j <= n; j++) {
      for (let i = 1; i <= n; i++) {
         sum += i;
      }
      sum += '\n';
   }
   return sum;
}
// console.log(ex3(4));
//---------------------------------------------------
//No.4
function ex4(n) {
   let sum = '';

   for (let j = 1; j <= n; j++) {
      for (let i = 1; i <= n; i++) {
         sum += j;
      }
      sum += '\n';
   }
   return sum;
}
// console.log(ex4(4));
//------------------------------------------------
//No.5
function ex5(n) {
   let sum = '';

   for (let j = n; j >= 1; j--) {
      for (let i = 1; i <= n; i++) {
         sum += j;
      }
      sum += '\n';
   }
   return sum;
}
//console.log(ex5(2));
//------------------------------------------------
//No. 6
function ex6(n) {
   let sum = '';

   for (let i = 1; i <= n * n; i++) {
      sum += i;
      if (i % n === 0) {
         sum += '\n';
      }
   }
   return sum;
}
// console.log(ex6(3));
//--------------------------------------------------
// No.7
function ex7(n) {
   let sum = '';
   let num = 0;

   for (let i = n * n; i >= 1; i--) {
      num++;
      sum += i;

      if (num % n === 0) {
         sum += '\n';
      }
   }
   return sum;
}
// console.log(ex7(4));
//-----------------------------------------------------
// No.8
function ex8(n) {
   let sum = '';

   for (let i = 0; i < n; i++) {
      sum += i * 2;
      sum += '\n';
   }

   return sum;
}
// console.log(ex8(4));
//-----------------------------------------------------
// No. 9
function ex9(n) {
   let sum = '';

   for (let i = 1; i <= n; i++) {
      sum += i * 2;
      sum += '\n';
   }

   return sum;
}
// console.log(ex9(4));
//------------------------------------------------------
//No. 10
function ex10(n) {
   let sum = '';

   for (let j = 1; j <= n; j++) {
      for (let i = 1; i <= n; i++) {
         sum += j * i;

      }
      sum += '\n';
   }

   return sum;
}
// console.log(ex10(3));
//-----------------------------------------------------------
//No. 11
function ex11(n) {
   let star = '';

   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
         if (i === j) {
            star += '-';
         } else {
            star += '*';
         }
      }
      star += '\n';
   }

   return star;
}
//console.log(ex11(4));
//------------------------------------------------
//  No.12
function ex12(n) {
   let star = '';

   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {

         if ((i + j) === n - 1) {
            star += '-';
         } else {
            star += '*';
         }
      }
      star += '\n';
   }

   return star;
}
//console.log(ex12(3));
//----------------------------------------------
//No. 13
function ex13(n) {
   let star = '';

   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {

         if (i >= j) {
            star += '*';
         } else {
            star += '-';
         }
      }
      star += '\n';
   }

   return star;
}
//console.log(ex13(4));
//--------------------------------------------------
// No.14
function ex14(n) {
   let star = '';

   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {

         if ((i + j) >= n) {
            star += '-';
         } else {
            star += '*';
         }
      }
      star += '\n';
   }

   return star;
}
//console.log(ex14(4));
//----------------------------------------
//No.15
function ex15(n) {
   let str = '';

   for (let i = 0; i < 2 * n - 1; i++) {
      for (let j = 0; j < n; j++) {

         if (i < n) {
            if (i >= j) {
               str += "*";
            } else {
               str += "-";
            }
         } else {
            if (j < ((2 * n - 1) - i)) {
               str += "*";
            } else {
               str += "-";
            }
         }
      }
      str += '\n';
   }
   return str;
}
//console.log(ex15(3));
//---------------------------------------------------
//No.16
function ex16(n) {
   let str = '';

   for (let i = 0; i < 2 * n - 1; i++) {
      for (let j = 0; j < n; j++) {

         if (i < n) {
            if (i >= j) {
               str += i + 1;
            } else {
               str += "-";
            }
         } else {
            if (j < ((2 * n - 1) - i)) {
               str += (2 * n - 1 - i);
            } else {
               str += "-";
            }
         }
      }
      str += '\n';
   }
   return str;
}
//console.log(ex16(3));
//---------------------------------------------------
//No.17
function ex17(n) {
   let star = '';

   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {

         if (i + j <= n - 2) {
            star += '-';
         } else {
            star += '*';
         }
      }
      star += '\n';
   }

   return star;
}
//console.log(ex17(4));
//-------------------------------------------------
//No.18
function ex18(n) {
   let star = '';

   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {

         if (i > j) {
            star += '-';
         } else {
            star += '*';
         }
      }
      star += '\n';
   }

   return star;
}
//console.log(ex18(4));
//-------------------------------------------------
//test

function ex19(n) {
   let str = '';

   for (let i = 0; i < 2 * n - 1; i++) {
      for (let j = 0; j < n; j++) {

         if (i < n) {
            if (i >= j) {
               str += "*";
            } else {
               str += "-";
            }
         } else {
            if (j < ((2 * n - 1) - i)) {
               str += "*";
            } else {
               str += "-";
            }
         }
      }
      str += '\n';
   }
   return str;
}
//console.log(ex19(3));
//---------------------------------------------------
//No.20
function ex20(n) {
   let num = 0;
   let str = '';
   for (let i = 0; i < 2 * n - 1; i++) {
      for (let j = 0; j < n; j++) {
         if (i <= n - 1) {
            if (j < n - 1 - i) {
               str += '-';
            } else {
               num++;
               str += `${num}`;
            }
         } else {
            if (j < i - n + 1) {
               str += '-';
            } else {
               num++;
               str += `${num}`;
            }
         }
      }
      str += '\n';
   }
   return str;
}
//console.log(ex20(3));
//-----------------------------------------------------
//No.21
function ex21(n) {
   let str = '';
   for (let i = 0; i < n; i++) {
      for (let j = 0; j < 2 * n - 1; j++) {
         if (j >= (n - 1 - i) && j <= (n - 1 + i)) {
            str += '*';
         } else {
            str += '-';
         }
      }
      str += '\n';
   }
   return str;
}
//console.log(ex21(4));
//-------------------------------------------------------
//No.22
function ex22(n) {
   let str = '';
   for (let i = 0; i < n; i++) {
      for (let j = 0; j < (2 * n - 1); j++) {
         if (j >= i && j < ((2 * n - 1) - i)) {
            str += '*';
         } else {
            str += '-';
         }
      }
      str += '\n';
   }
   return str;
}
//console.log(ex22(3));
//----------------------------------------------------------
//No.23
function ex23(n) {
   let str = '';
   for (let i = 0; i < (2 * n - 1); i++) {

      if (i < n) {
         for (let j = 0; j < (2 * n - 1); j++) {
            if (j >= ((n - 1) - i) && j <= ((n - 1) + i)) {
               str += '*';
            } else {
               str += '-';
            }
         }
         str += '\n';
      } else {
         for (let j = 0; j < (2 * n - 1); j++) {
            if (j >= (i - (n - 1)) && j <= ((2 * n - 1) - (i - n + 2))) {
               str += '*';
            } else {
               str += '-';
            }
         }
         str += '\n';
      }
   }
   return str;
}
//console.log(ex23(3));
//-------------------------------------------------------
//No.24
function ex24(n) {
   let num = 0;
   let str = '';
   for (let i = 0; i < (2 * n - 1); i++) {

       if (i < n) {
           for (let j = 0; j < (2 * n - 1); j++) {
               if (j >= ((n - 1) - i) && j <= ((n - 1) + i)) {
                   num++;
                   str += num;
               } else {
                   str += '-';
               }
           }
           str += '\n';
       } else {
           for (let j = 0; j < (2 * n - 1); j++) {
               if (j >= (i - (n - 1)) && j <= ((2 * n - 1)-(i - n + 2))) {
                   num++;
                   str += num;
               } else {
                   str += '-';
               }
           }
           str += '\n';
       }
   }
   return str;
}
//console.log(ex24(4));