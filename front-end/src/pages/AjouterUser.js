import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AjouterUser() {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [MotDePasse, setMotDePasse] = useState("");

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/User", {
        Username,
        Email,
        MotDePasse,
      })
      .then((res) => {
        console.log(res);
        navigate("/User");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Ajouter User</h2>
          <div className="mb-2">
            <label htmlFor="">
              <strong>UserName</strong>
            </label>
            <input
              type="text"
              placeholder="Entrer UserName"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Entrer Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">
              <strong>Password</strong>
            </label>
            <input
              type="text"
              placeholder="Entrer password"
              className="form-control"
              onChange={(e) => setMotDePasse(e.target.value)}
            />
          </div>

          <button className="btn btn-success w-100">ajouter</button>
          <Link to="/User" className="btn btn-secondary w-100">
            Annuler
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AjouterUser;
