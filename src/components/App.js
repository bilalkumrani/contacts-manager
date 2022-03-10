import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import { Container } from "react-bootstrap";
import ContactList from "./ContactList";

function App() {
  return (
    <>
      <Header />
      <Container className="w-50">
        <AddContact />
        <ContactList />
      </Container>
    </>
  );
}

export default App;
