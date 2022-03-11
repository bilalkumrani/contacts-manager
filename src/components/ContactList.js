import { ListGroup, NavItem } from "react-bootstrap";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  return (
    <>
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
