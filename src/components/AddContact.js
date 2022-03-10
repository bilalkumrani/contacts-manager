import { FormControl, Button } from "react-bootstrap";

const AddContact = () => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <FormControl className="mb-2 w-50" />

      <label htmlFor="Email" className="w-50">
        Email
      </label>
      <FormControl className="w-50 mb-2" />
      <Button>Add Contact</Button>
    </>
  );
};

export default AddContact;
