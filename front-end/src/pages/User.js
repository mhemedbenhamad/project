import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function User() {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/User")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = async (id) => {
    try {
      axios.delete("http://localhost:8080/User/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-3">
        <Link to="/AjouterUser" className="btn btn-success">
          Ajouter+
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {List.map((data, i) => (
              <tr key={i}>
                <td>{data.Username}</td>
                <td>{data.Email}</td>
                <td>{data.MotDePasse}</td>

                <td>
                  <Link
                    to={`/ModifierUser/${data.id}`}
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
}

export default User;
