//Bai4
// const list = [1, 2, 3, 4];
// const double = list.map((item) => {
//   return item * 2;
// });
// console.log(double);

//---------------------------------------

//Bai5
// const listNumber = [1, 2, 3, 4, 5];
// const filter = listNumber.filter((item) => {
//   return item % 2 !== 0;
// });
// console.log(filter);

//--------------------------------------

//Bai6
// const employees = [
//   { id: 1, name: "John", workingDays: 22 },
//   { id: 2, name: "Jane", workingDays: 20 },
//   { id: 3, name: "Mark", workingDays: 25 },
// ];

// const result6 = employees.reduce(
//   (prev, item) => {
//     return { workingDays: prev.workingDays + item.workingDays };
//   },
//   { workingDays: 0 }
// );
// console.log(result6);

//--------------------------------------

//Bai7
// const employees = [
//   { id: 1, name: "John", salary: 2000 },
//   { id: 2, name: "Jane", salary: 2500 },
//   { id: 3, name: "Mark", salary: 3000 },
// ];

// const result7 = employees.reduce((prev, item) => {
//   return {
//     employees: prev.salary > item.salary ? prev : item,
//   };
// });
// console.log(result7);

//---------------------------------------
//Bai8

// const employees = [
//   { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//   { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//   { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];

// const findMax = (employees) => {
//   let max = 0;
//   let id = 0;
//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].workingDays - employees[i].lateDays > max) {
//       max = employees[i].workingDays - employees[i].lateDays;
//       id = i;
//     }
//   }
//   return employees[id];
// };

// console.log(findMax(employees));

//---------------------------------------
//Bai9

// const employees = [
//   { id: 1, name: "John", salary: 2000 },
//   { id: 2, name: "Jane", salary: 2500 },
//   { id: 3, name: "Mark", salary: 3000 },
//   { id: 4, name: "John", salary: 2200 },
// ];

// const filter = (employees) => {
//   return employees.reduce((prev, employee) => {
//     if (!prev[employee.name]) {
//       prev[employee.name] = [];
//     }
//     prev[employee.name].push(employee);
//     return prev;
//   }, {});
// };

// const filter = (employees) => {
//   let result = {};
//   employees.map((item) => {
//     if (!result[item.name]) {
//       result[item.name] = [];
//     }
//     result[item.name].push(item);
//   });
//   return result;
// };
// console.log(filter(employees));

//-----------------------------------

//Bai 10

// const employees = [
//   { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//   { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//   { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];
// const findMax = (employees) => {
//   let max = 0;
//   let id = 0;
//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].workingDays / employees[i].salary > max) {
//       max = employees[i].workingDays / employees[i].salary;
//       id = i;
//     }
//   }
//   return employees[id];
// };

// console.log(findMax(employees));

//---------------------------------

//Bai11
// const employees = [
//   { id: 1, name: "John", workingDays: 20 },
//   { id: 2, name: "Jane", workingDays: 22 },
//   { id: 3, name: "Mark", workingDays: 20 },
//   { id: 4, name: "Sam", workingDays: 24 },
//   { id: 5, name: "Lucy", workingDays: 22 },
// ];

// const filter = (employees) => {
//   let result = {};
//   employees.map((item) => {
//     if (!result[item.workingDays]) {
//       result[item.workingDays] = 1;
//     } else {
//       result[item.workingDays]++;
//     }
//   });
//   return result;
// };
// console.log(filter(employees));

//------------------------------------

//Bai12
// const employees = [
//   {
//     id: 1,
//     name: "John",
//     email: "john@example.com",
//     workingDays: 22,
//     lateDays: 2,
//     salary: 2000,
//   },
//   {
//     id: 2,
//     name: "Jane",
//     email: "jane@example.com",
//     workingDays: 20,
//     lateDays: 0,
//     salary: 2500,
//   },
//   {
//     id: 3,
//     name: "Mark",
//     email: "mark@example.com",
//     workingDays: 25,
//     lateDays: 1,
//     salary: 3000,
//   },
// ];
// const newEmployees = employees.map((employee) => {
//   return {
//     name: employee.name,
//     email: employee.email,
//     workInfo: {
//       workingDays: employee.workingDays,
//       lateDays: employee.lateDays,
//     },
//   };
// });

// console.log(newEmployees);

//--------------------------------------

//bai13

let tasks = [
  {
    name: "Hoàn thành bài tập JavaScript",
    description: "Làm xong bài tập về Array và Object",
    completed: false,
  },
  { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
  {
    name: "Đi mua hàng",
    description: "Mua thêm thức ăn cho tuần",
    completed: false,
  },
];
//Them Task
const addTask = (tasks, task) => {
  tasks.push(task);
};

let newTask = {
  name: "Học tiếng Anh",
  description: "Học 50 từ vựng mới",
  completed: false,
};
addTask(tasks, newTask);

console.log(tasks);

// //Danh dau hoan thanh
const markTasksCompleted = (tasks, taskNames) => {
  tasks.forEach((task) => {
    if (taskNames.includes(task.name)) {
      task.completed = true;
    }
  });
};

let completedTasks = ["Học tiếng Anh", "Đọc sách"];
markTasksCompleted(tasks, completedTasks);

console.log(tasks);

//Sap xep

const sortTasks = (tasks, direction) => {
  if (direction === "A-Z") {
    return tasks.sort((a, b) => a.name.localeCompare(b.name));
  } else if (direction === "Z-A") {
    return tasks.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    return tasks;
  }
};
let sortedTasksA = sortTasks([...tasks], "A-Z");
let sortedTasksZ = sortTasks([...tasks], "Z-A");
console.log("A-Z", sortedTasksA);
console.log("Z-A", sortedTasksZ);
