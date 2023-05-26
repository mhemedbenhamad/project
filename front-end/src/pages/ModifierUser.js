import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ModifierUser() {
  const [Username, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [MotDePasse, setPass] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch("http://localhost:8080/User/" + id, {
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
          <h2>Modifier User</h2>
          <div className="mb-2">
            <label htmlFor="">
              <strong>UserName</strong>
            </label>
            <input
              type="text"
              placeholder="Modifier userName"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Modifier email"
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
              placeholder="Modifier password"
              className="form-control"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <button className="btn btn-success w-100">modifier</button>
          <Link to="/User" className="btn btn-secondary w-100">
            Annuler
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ModifierUser;
