import { ListGroup } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
const ContactCard = (props) => {
  return (
    <>
      <ListGroup.Item>
        <div className="d-inline w-3">1</div>
        <FaUser size="2em" />
      </ListGroup.Item>
    </>
  );
};

export default ContactCard;
