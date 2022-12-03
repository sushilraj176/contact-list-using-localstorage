import React, { useState, useEffect } from "react";

const Contact = (props) => {
  const [contactlist, setcontactlist] = useState([]);

  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [datadropdown, setdatadropdown] = useState("");
  const [whatsapp, setwhatsapp] = useState(false);
  const [profilepic, setprofilepic] = useState("");

  const handleformsubmit = (e) => {
    e.preventDefault();
    const data = [
      ...contactlist,
      {
        name: name,
        phone: phone,
        datadropdown: datadropdown,
        whatsapp: whatsapp,
        profilepic: profilepic,
      },
    ];
    setcontactlist(data);
    localStorage.clear();
    const data1 = localStorage.setItem("list", JSON.stringify(data));
    console.log(localStorage.getItem("list"));
    setname("");
    setphone("");
    setdatadropdown("");
    setwhatsapp(false);
    setprofilepic("");
  };

  useEffect(() => {
    if (localStorage.getItem("list").length === 0) {
      localStorage.setItem("list", JSON.stringify(contactlist));
    }
  }, [contactlist]);

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
              Saved contact
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default Contact;
