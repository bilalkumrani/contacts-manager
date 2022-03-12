import { ListGroup, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  return (
    <>
      <h1 className="mb-5">Contact List</h1>
      <Link to="/add">
        <Button>Add Contact</Button>
      </Link>

      <ListGroup className="mt-5">
        {props.state.map((item, index) => {
          return (
            <ContactCard
              name={item.name}
              email={item.email}
              index={index}
              key={index}
              deleteHandler={props.deleteHandler}
            />
          );
        })}
      </ListGroup>
    </>
  );
};

export default ContactList;
