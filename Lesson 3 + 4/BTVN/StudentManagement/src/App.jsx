import React from "react";
import StudentCard from "../components/StudentCard";
import "./App.css";
function App() {
  const students = [
    { id: 1, name: "Nguyễn Đức Kiên", total: "0 ₫" },
    { id: 2, name: "Nguyễn Minh Hiển", total: "20.000 ₫" },
    { id: 3, name: "Nguyễn Xuân Nguyên", total: "0 ₫" },
    { id: 4, name: "Hoàng Kim Ngân", total: "0 ₫" },
    { id: 5, name: "Lê Minh Hiếu", total: "0 ₫" },
    { id: 6, name: "Hoàng Thái Linh", total: "0 ₫" },
    { id: 7, name: "Lê Hoài Nam", total: "0 ₫" },
    { id: 8, name: "Nguyễn Văn Duy", total: "0 ₫" },
    { id: 9, name: "Nguyễn Văn Tuấn Anh", total: "0 ₫" },
    { id: 10, name: "Trần Huy Cường", total: "0 ₫" },
    { id: 11, name: "Nguyễn Viết Thái", total: "20.000 ₫" },
    { id: 12, name: "Quan Vĩ Dân", total: "20.000 ₫" },
    { id: 13, name: "Đặng Minh Nhật", total: "0 ₫" },
    { id: 14, name: "Nguyễn Gia Huy", total: "0 ₫" },
    { id: 15, name: "Phạm Đức Tài", total: "0 ₫" },
    { id: 16, name: "Đinh Văn Thành Đạt", total: "0 ₫" },
    { id: 17, name: "Cao Lê Công Thành", total: "0 ₫" },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              total={student.total}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
