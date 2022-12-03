import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Editcontact = (props) => {
  const { id } = useParams();
  const [contactlist, setcontactlist] = useState([]);

  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [datadropdown, setdatadropdown] = useState("");
  const [whatsapp, setwhatsapp] = useState(false);
  const [profilepic, setprofilepic] = useState("");

  const handleformsubmit = (e) => {
    e.preventDefault();
    setcontactlist(JSON.parse(localStorage.getItem("list")));
    const data1 = contactlist;
    const data = {
      name: name,
      phone: phone,
      datadropdown: datadropdown,
      whatsapp: whatsapp,
      profilepic: profilepic,
    };
    for (var i = 0; i < data1.length; i++) {
      if (i == id) {
        console.log(data1[i]);
        data1[i] = data;
      }
    }
    localStorage.clear();
    localStorage.setItem("list", JSON.stringify(data1));
    setcontactlist(data1);
  };

  useEffect(() => {
    if (localStorage.getItem("list").length > 0) {
      setcontactlist(JSON.parse(localStorage.getItem("list")));
      setname(JSON.parse(localStorage.getItem("list"))[id].name);
      setphone(JSON.parse(localStorage.getItem("list"))[id].phone);
      setwhatsapp(JSON.parse(localStorage.getItem("list"))[id].whatsapp);
      // setprofilepic(JSON.parse(localStorage.getItem("list"))[id].profilepic);
      setdatadropdown(
        JSON.parse(localStorage.getItem("list"))[id].datadropdown
      );
    }
  }, []);

  return (
    <>
      <form>
        <section className="main">
          <div className="container">
            <h1 className="">Contact List</h1>

            <div className="row">
              <div className="col-md-6 form-group">
                <label for="fname">Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label for="fname">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  maxLength={10}
                />
              </div>
            </div>
            <div className="col-md-3 col-6 group-control">
              <label for="state">Type of contact</label>
              <select
                className="form-control"
                name="state"
                id="state"
                value={datadropdown}
                onChange={(e) => setdatadropdown(e.target.value)}
                required
              >
                <option value="Personal">Personal</option>
                <option value="Office">Office</option>
              </select>
            </div>

            <div className="form-group">
              <div className="checkbox form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="tos"
                  id="tos"
                  value={whatsapp}
                  onChange={(e) => setwhatsapp(e.target.value)}
                />
                <label className="form-check-label" for="tos">
                  Whatsapp
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label for="fname">Profile Pic</label>
                <input
                  type="file"
                  className="form-control"
                  value={profilepic}
                  onChange={(e) => setprofilepic(e.target.value)}
                  required
                />
              </div>
            </div>
            <br />

            <button
              type="submit"
              onClick={(e) => {
                handleformsubmit(e);
              }}
              className="form-group btn btn-primary"
            >
              Save contact
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default Editcontact;
