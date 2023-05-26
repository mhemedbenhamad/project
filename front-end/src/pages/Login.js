import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [UserName, setUserName] = useState("");
  const [MotDePasse, setMotDePasse] = useState("");

  const navigate = useNavigate();
  function handleSubmit(event) {
    const data={UserName:UserName,MotDePasse:MotDePasse}
    axios
      .post("http://localhost:8080/Login", data)
      .then((res) => {
        console.log(res.data);
        navigate("/Travaux");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form action="" onSubmit={handleSubmit}>
          <h2 className="text-center">Identification</h2>
          <div className="mb-3">
            <label htmlFor="User Name">
              <strong>Utilisateur</strong>
            </label>
            <input
              type="text"
              onChange={(event) => setUserName(event.target.value)}
              placeholder="Entrer User Name"
              name="username"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="PASSWORD">
              <strong>Mot de passe</strong>
            </label>
            <input
              type="password"
              onChange={(event) => setMotDePasse(event.target.value)}
              placeholder="Entrer mot de passe"
              name="password"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Entrer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
