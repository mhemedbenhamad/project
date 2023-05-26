import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ModifierTravaux() {
  const [Contenue, setCIN] = useState("");
  const [CodeEtab, setNom] = useState("");
  const [Matricule, setPrenom] = useState("");
  const [DateDesignation, setDateDeNaissance] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch("http://localhost:8080/Travaux/" + id, {
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
          <h2>Modifier Travaux</h2>
          <div className="mb-2">
            <label htmlFor="">
              <strong>Contenue</strong>
            </label>
            <input
              type="text"
              placeholder="Modifier contenue"
              className="form-control"
              onChange={(e) => setCIN(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">
              <strong>Code établissement</strong>
            </label>
            <input
              type="text"
              placeholder="Modifier code établissement"
              className="form-control"
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">
              <strong>Matricule</strong>
            </label>
            <input
              type="text"
              placeholder="Modifier matricule"
              className="form-control"
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">
              <strong>Date de désignation</strong>
            </label>
            <input
              type="text"
              placeholder="Modifier Date de désignation"
              className="form-control"
              onChange={(e) => setDateDeNaissance(e.target.value)}
            />
          </div>

          <button className="btn btn-success w-100">modifier</button>
          <Link to="/Travaux" className="btn btn-secondary w-100">
            Annuler
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ModifierTravaux;
