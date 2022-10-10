import React from "react";

import Header from "../Components/Header";
import StudentsList from "../Components/StudentsList";

const StudentListPage = () => {
  return (
    <div className="student-list-pag">
      <Header />
      <StudentsList />
    </div>
  );
};
export default StudentListPage;
