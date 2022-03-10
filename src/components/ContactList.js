import { ListGroup } from "react-bootstrap";
import ContactCard from "./ContactCard";
const ContactList = () => {
  return (
    <>
      <ListGroup className="mt-5">
        <ContactCard />
      </ListGroup>
    </>
  );
};

export default ContactList;
