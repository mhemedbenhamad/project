import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Travaux = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/Travaux")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = async (id) => {
    try {
      axios.delete("http://localhost:8080/Travaux/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-3">
        <Link to="/AjouterTravaux" className="btn btn-success">
          Ajouter+
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Contenue</th>
              <th>Code Etablissement</th>
              <th>Matricule</th>
              <th>Date de désignation</th>
            </tr>
          </thead>
          <tbody>
            {List.map((data, i) => (
              <tr key={i}>
                <td>{data.Contenue}</td>
                <td>{data.CodeEtab}</td>
                <td>{data.Matricule}</td>
                <td>{data.DateDesignation}</td>

                <td>
                  <Link
                    to={`/ModifierTravaux/${data.id}`}
                    className="btn btn-primary">
                    Modifier
                  </Link>
                  <button
                    className="btn btn-danger "
                    onClick={(e) => handleDelete(data.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Travaux;
