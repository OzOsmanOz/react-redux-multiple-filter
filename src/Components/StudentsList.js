import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const StudentsList = () => {
  const { StudentsState } = useSelector((state) => state); //StudentsListReducer a sub olundu
  //   console.log("StudentsState", StudentsState); // veriler kontrol edildi

  const [searchText, setSearchText] = useState(""); //search input değerini burada tutuyoruz
  //   console.log("searchText", searchText);
  const [filterStudentName, setFilterStudentName] = useState(""); // isme göre filtrelenmiş listeyi bu state de tutuyoruz
  const [filterStudentSurname, setFilterStudentSurname] = useState(""); // soyisme göre filtrelenmiş listeyi bu state de tutuyoruz
  const [radioButton, setRadioButton] = useState(false); // radioButton un durumunu bu state de tutuyoruz

  useEffect(() => {
    const filteredName = StudentsState.students.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
    setFilterStudentName(filteredName);

    const filteredSurname = StudentsState.students.filter((item) =>
      item.surname.toLowerCase().includes(searchText)
    );
    setFilterStudentSurname(filteredSurname);
  }, [searchText, StudentsState]);

  if (!filterStudentName) {
    return null;
  }

  return (
    <div
      className="students container "
      style={{ fontSize: "14px", marginTop: "20px" }}
    >
      <h3>OsmanOz Okulları Öğrenci Listesi</h3>
      <div className="row mt-5">
        <div className="col">
          {radioButton === false ? (
            <input
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              style={{ fontSize: "14px" }}
              type="text"
              className="form-control"
              placeholder="Ad'a göre filtrele"
              aria-label="Last name"
            />
          ) : (
            <input
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              style={{ fontSize: "14px" }}
              type="text"
              className="form-control"
              placeholder="Soyad'a göre filtrele"
              aria-label="Last name"
            />
          )}
        </div>
        <div className="form-check-inline my-3">
          <input
            onChange={(e) => setRadioButton(!radioButton)}
            value={radioButton}
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
          />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label ms-2"
            htmlFor="inlineCheckbox1"
          >
            Soyada göre filtrele
          </label>
        </div>
      </div>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">Adı</th>
            <th scope="col">Soyadı</th>
            <th className="text-center" scope="col">
              Okul No
            </th>
            <th className="text-center" scope="col">
              Sınıfı
            </th>
          </tr>
        </thead>
        <tbody>
          {radioButton === false
            ? filterStudentName.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td className="text-center">{item.studentNumber}</td>
                    <td className="text-center">{item.class}</td>
                  </tr>
                );
              })
            : filterStudentSurname.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td className="text-center">{item.studentNumber}</td>
                    <td className="text-center">{item.class}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};
export default StudentsList;
