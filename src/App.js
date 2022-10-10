import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import HomePage from "./Pages/HomePage";
import StudentListPage from "./Pages/StudentsListPage";
import LoginPage from "./Pages/LoginPage";
import actionTypes from "./Redux/Action/actionTypes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_STUDENTS_START });
    axios
      .get("http://localhost:3004/students")
      .then((resStu) => {
        // console.log("resStu", resStu);//data'dan veri kontrol edildi
        dispatch({
          type: actionTypes.FETCH_STUDENTS_SUCCESS,
          payload: resStu.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: actionTypes.FETCH_STUDENTS_FAIL,
          payload: "Yükleme sırasında bir hata oluştu",
        });
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<StudentListPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
