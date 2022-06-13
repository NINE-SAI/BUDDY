import React, { useEffect, useState } from "react";
const Phone = () => {
  const [phone, setPhone] = useState({
    first: "",
    last: "",
    email: "",
    number: "",
  });
  const [store, setStore] = useState([]);
  const [formerror, setFormerror] = useState({});

  const updateHandler = (event) => {
    setPhone({ ...phone, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setFormerror(validate(phone));
  };
  const deleteHandler = (indexvalue) => {
    const filtredstore = store.filter((element, index) => index !== indexvalue);
    setStore(filtredstore);
  };

  useEffect(() => {
    if (Object.keys(formerror).length === 0 && submit) {
      const newStore = [...store, phone];
      setStore(newStore);
    }
  }, [formerror]);
  const validate = (values) => {
    const errors = {};
    setFormerror(errors);
    const OnlyStrings = /^[a-zA-z]*$/;
    if (!values.first) {
      errors.first = "ENTER FIRST NAME";
    } else if (!values.first.match(OnlyStrings)) {
      errors.first = "ENTER ONLY ALPHABETS";
    }
    if (!values.last) {
      errors.last = "ENTER LAST NAME";
    } else if (!values.last.match(OnlyStrings)) {
      errors.last = "ENTER ONLY ALPHABETS";
    }
    if (!values.email) {
      errors.email = "ENTER EMAIL ID";
    }
    if (!values.number) {
      errors.number = "ENTER MOBILE NUMBER";
    } else if (values.number.length < 10) {
      errors.number = "MOBILE NUMBER NOT LESSTHAN TEN DIGITS";
    } else if (values.number.length > 10) {
      errors.number = "MOBILE NUMBER NOT MORETHAN TEN DIGITS";
    }
    return errors;
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/home" className="navbar-brand">
          OLA CONTACTS
        </a>
      </nav>
      <div className="container mt-5">
        <pre>{JSON.stringify(phone)}</pre>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form onSubmit={submitHandler}>
                <div className="card-header bg-dark text-white">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="ENTER FIRST NAME"
                      className="form-control"
                      name="first"
                      value={phone.first}
                      onChange={updateHandler}
                    />
                    <span>{formerror.first}</span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="ENTER LAST NAME"
                      className="form-control"
                      name="last"
                      value={phone.last}
                      onChange={updateHandler}
                    />
                    <span>{formerror.last}</span>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="ENTER ENAIL ID"
                      className="form-control"
                      name="email"
                      value={phone.email}
                      onChange={updateHandler}
                    />
                    <span>{formerror.email}</span>
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      placeholder="ENTER MOBILE NUMBER"
                      className="form-control"
                      name="number"
                      value={phone.number}
                      onChange={updateHandler}
                    />
                    <span>{formerror.number}</span>
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="SAVE CONTACT"
                      className="btn-success"
                    />
                  </div>
                </div>
              </form>
              <div className="card-body">
                <table className="table table-hover">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th>FIRST NAME</th>
                      <th>LAST NAME</th>
                      <th>EMAIL ID</th>
                      <th>NUMBER</th>
                      <th>DELETE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.map((event, index) => {
                      return (
                        <tr key={index}>
                          <td>{event.first}</td>
                          <td>{event.last}</td>
                          <td>{event.email}</td>
                          <td>{event.number}</td>
                          <td>
                            <input
                              type="submit"
                              value="DELETE"
                              className="btn-danger"
                              onClick={() => deleteHandler(index)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Phone;