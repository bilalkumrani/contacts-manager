import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <label htmlFor="name">Name</label>
      <FormControl
        className="mb-2 w-50"
        name="name"
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
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          props.addContact(name, email);
        }}
      >
        Add Contact
      </Button>
    </>
  );
};

export default AddContact;
