import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Homepage = () => {
  const [item, setitem] = useState([]);
  const navigate = useNavigate();

  const editpage = (id) => {
    navigate(`/edit-contact/${id}`);
  };

  useEffect(() => {
    if (!localStorage.getItem("list")) {
      localStorage.setItem("list", JSON.stringify([]));
    }
    setitem(JSON.parse(localStorage.getItem("list")));
  }, []);

  const deleteContact = (e, index) => {
    const data = item.filter((arr, i) => index !== i);
    setitem(data);
    localStorage.clear();
    localStorage.setItem("list", JSON.stringify(data));
  };

  return (
    <div>
      {item.length > 0 ? (
        <>
          {item.map((data, index) => (
            <div className="row">
              <div className="col-sm-6">
                <div className="card" key={index}>
                  <div className="card-body">
                    <h5 className="card-title">Contact List</h5>
                    <p className="card-text">
                      Name:{data.name}
                      <br />
                      Phone:{data.phone}
                      <br />
                      Type of contact:{data.datadropdown}
                      <br />
                      whatsapp:{data.whatsapp}
                      <br />
                      Profilepic:{data.profilepic}
                    </p>

                    <br />
                    <div class="d-grid gap-2 d-md-block">
                      <button
                        onClick={(e) => {
                          deleteContact(e, index);
                        }}
                        className="btn btn-danger"
                        style={{ marginRight: "50px" }}
                        type="button"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => editpage(index)}
                        className="btn btn-primary"
                        type="button"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {alert("There are no saved contact!")}
          <NavLink to="/contact-form">Add Contact</NavLink>
        </>
      )}
    </div>
  );
};

export default Homepage;
