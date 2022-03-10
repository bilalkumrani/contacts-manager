import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import { Container } from "react-bootstrap";
import ContactList from "./ContactList";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (name, email) => {
    setContacts([...contacts, { name, email }]);
  };

  return (
    <>
      <Header />
      <Container className="w-50">
        <AddContact addContact={addContact} />
        <ContactList state={contacts} />
      </Container>
    </>
  );
}

export default App;
