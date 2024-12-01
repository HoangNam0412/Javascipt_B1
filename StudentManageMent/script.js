const students = [
  {
    id: 1,
    name: "Nguyễn Hoàng Nam",
    gender: "Nam",
    mathScore: "8",
    englishScore: "9",
    literatureScore: "9",
  },
  {
    id: 2,
    name: "Nguyễn Hoàng Nữ",
    gender: "Nam",
    mathScore: "7",
    englishScore: "7",
    literatureScore: "8",
  },
  {
    id: 3,
    name: "Nguyeen",
    gender: "Nam",
    mathScore: "7",
    englishScore: "7",
    literatureScore: "8",
  }
];
const tbodyDom = document.getElementById("studentTable");

function renderList(studentList = students) {
    let rows = '';
  studentList.forEach((student, index) => {
    const avgScore = (
      parseFloat(student.mathScore) +
      parseFloat(student.englishScore) +
      parseFloat(student.literatureScore) / 3
    ).toFixed(2);
    const row = `
       <tr>
          <td>${index +1}</td>
          <td>${student.name}</td>
          <td>${student.gender}</td>
          <td>${student.mathScore}</td>
          <td>${student.englishScore}</td>
          <td>${student.literatureScore}</td>
          <td>${avgScore}</td>
          <td>
            <button class="btn btn-primary mt-2">Sửa</button>
            <button class="btn btn-primary mt-2">Xóa</button>
          </td>
        </tr>
      `;
    rows += row;
  });
  tbodyDom.innerHTML=rows;
}
renderList();
