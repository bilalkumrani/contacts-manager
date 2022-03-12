import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h1 className="mb-5">Add Contact</h1>
      <Link to="/">
        <Button className="d-block mb-5">Contacts List</Button>
      </Link>
      <label htmlFor="name">Name</label>
      <FormControl
        className="mb-2 w-50"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label htmlFor="Email" className="w-50">
        Email
      </label>
      <FormControl
        className="w-50 mb-2"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          if (name && email) {
            props.addContact(name, email);
          }
          setEmail("");
          setName("");
        }}
      >
        Add Contact
      </Button>
    </>
  );
};

export default AddContact;
