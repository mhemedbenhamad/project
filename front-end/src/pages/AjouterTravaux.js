import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AjouterTravaux() {
  const [Contenue, setCON] = useState("");
  const [CodeEtab, setCOD] = useState("");
  const [Matricule, setMAT] = useState("");
  const [DateDesignation, setDAT] = useState("");

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/Travaux", {
        Contenue,
        CodeEtab,
        Matricule,
        DateDesignation,
      })
      .then((res) => {
        console.log(res);
        navigate("/Travaux");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Ajouter Travaux</h2>
          <div className="mb-2">
            <label htmlFor="">
              <strong>Contenue</strong>
            </label>
            <input
              type="text"
              placeholder="Entrer Contenue"
              className="form-control"
              onChange={(e) => setCON(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">
              <strong>Code Etablissement</strong>
            </label>
            <input
              type="text"
              placeholder="Entrer code etablissement"
              className="form-control"
              onChange={(e) => setCOD(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">
              <strong>Matricule</strong>
            </label>
            <input
              type="text"
              placeholder="Entrer matricule"
              className="form-control"
              onChange={(e) => setMAT(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">
              <strong>Date de désignation</strong>
            </label>
            <input
              type="text"
              placeholder="Entrer Date de désignation"
              className="form-control"
              onChange={(e) => setDAT(e.target.value)}
            />
          </div>

          <button className="btn btn-success w-100">ajouter</button>
          <Link to="/Travaux" className="btn btn-secondary w-100">
            Annuler
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AjouterTravaux;
