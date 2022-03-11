import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import { Container } from "react-bootstrap";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContact = (name, email) => {
    setContacts([...contacts, { name, email }]);
  };

  useEffect(() => {
    const retContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retContacts) {
      setContacts(retContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteHandler = (id) => {
    setContacts(contacts.filter((item, index) => id !== index));
  };

  return (
    <>
      <Header />
      <Container className="w-50">
        <AddContact addContact={addContact} />
        <ContactList state={contacts} deleteHandler={deleteHandler} />
      </Container>
    </>
  );
}

export default App;
