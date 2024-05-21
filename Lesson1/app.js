//Bai1

// const binhPhuong1 = (x) => {
//   let a = x * x;
//   console.log(a);
// };

// function binhPhuong2(x) {
//   return (b = x * x);
// }
// const binhPhuong3 = (x) => x * x;
// binhPhuong1(3);
// console.log(binhPhuong3(2));
// console.log(binhPhuong2(2));

//---------------------------------------------------------

//Bai2

// const checkChuoi = (x, y) => x.includes(y);

// const checkChuoi2 = (x, y) => {
//   return x.indexOf(y) > -1;
// };

// const checkChuoi3 = (x, y) => {
//   a = x.toUpperCase();
//   b = y.toUpperCase();
//   return a.includes(b);
// };

// console.log(checkChuoi("hello world", "world"));
// console.log(checkChuoi2("hello world", "world"));
// console.log(checkChuoi3("hello world", "WORld"));

// --------------------------------------------------------

//Bai3

// const addPrefix = (arr, pr) => {
//   let chuoi = [];
//   for (let i = 0; i < arr.length; i++) {
//     let index = pr + arr[i];
//     chuoi[i] = index;
//   }
//   return chuoi;
// };

// const addPrefix = (arr, pr) => {
//   return arr.map((chuoi) => pr + chuoi);
// };

// console.log(addPrefix(["one", "Two", "Three"], "Number :"));

//--------------------------------------------------------

//Bai4

// const double = (arr) => {
//   let chuoi = [];
//   for (let i = 0; i < arr.length; i++) {
//     chuoi[i] = arr[i] * 2;
//   }
//   return chuoi;
// };
// console.log(double([2, 4, 6, 3]));

//----------------------------------------------------------

//Bai5

// const soLe = (arr) => {
//   let chuoi = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       chuoi.push(arr[i]);
//     }
//   }
//   return chuoi;
// };

// console.log(soLe([1, 2, 3, 4, 5]));

//------------------------------------------------------------

//Bai6

// const employees = [
//   { id: 1, name: "John", workingDays: 22 },
//   { id: 2, name: "Jane", workingDays: 20 },
//   { id: 3, name: "Mark", workingDays: 25 },
// ];
// const sumWorking = (employees) => {
//   let sum = 0;
//   for (let employ of employees) {
//     sum += employ.workingDays;
//   }
//   return sum;
// };
// console.log(sumWorking(employees));

//-----------------------------------------------

//Bai7

const employees = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
];

const findMax = (employees) => {
  let max = 0;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > max) {
      max = employees[i].salary;
      id = i;
    }
  }
  return employees[id];
};

console.log(findMax(employees));
