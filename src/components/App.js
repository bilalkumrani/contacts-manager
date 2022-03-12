import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ContactList state={contacts} deleteHandler={deleteHandler} />
            }
          />
          <Route
            exact
            path="/add"
            element={<AddContact addContact={addContact} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
