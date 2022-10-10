import React from "react";

const Login = () => {
  return (
    <div
      className="login "
      style={{ backgroundColor: "#A27B5C", height: "91vh" }}
    >
      <div className="container d-flex justify-content-center align-items-center">
        <div
          className="py-3 rounded-3"
          style={{
            backgroundColor: "#3F4E4F",
            width: "400px",
            height: "450px",
            marginTop: "80px",
          }}
        >
          <h3
            className="text-center fw-bold my-5"
            style={{ fontSize: "22px", color: "#DCD7C9" }}
          >
            Maya Portal Girişi
          </h3>
          <div className="text-center">
            <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control-sm w-75"
                id="floatingInput"
                placeholder="Kullanıcı Adı"
              />
              {/* <label htmlFor="floatingInput">Email address</label> */}
            </div>
            <div className="form-floating ">
              <input
                type="password"
                className="form-control-sm w-75"
                id="floatingPassword"
                placeholder="Parola"
              />
              {/* <label htmlFor="floatingPassword">Password</label> */}
            </div>
            <button
              className="btn btn-sm btn-light fw-bold my-5 w-75"
              style={{ backgroundColor: "#A27B5C" }}
            >
              Giriş Yap
            </button>
            <div>
              <h4
                className="fw-bold"
                style={{ fontSize: "22px", color: "#DCD7C9" }}
              >
                Sosyal Medya
              </h4>
              <div className="my-3">
                <i class="fa-brands fa-square-facebook fa-2x me-4"></i>
                <i class="fa-brands fa-square-instagram fa-2x me-4"></i>
                <i class="fa-brands fa-square-twitter fa-2x me-4"></i>
                <i class="fa-brands fa-linkedin fa-2x me-4"></i>
                <i class="fa-brands fa-youtube fa-2x me-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
