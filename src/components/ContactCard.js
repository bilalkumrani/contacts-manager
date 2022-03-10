import { ListGroup } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
const ContactCard = (props) => {
  return (
    <>
      <ListGroup.Item>
        <div className="d-inline mr-3">{props.index + 1}</div>
        <FaUser size="2em" className="mr-1" />
        <div className="d-inline ml-3 h4">{props.name}</div>
        <div className="d-block ml-5 pl-4 h6">{props.email}</div>
      </ListGroup.Item>
    </>
  );
};

export default ContactCard;
