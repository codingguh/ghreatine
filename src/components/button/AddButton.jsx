import { Button, Input, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPencilCode } from "@tabler/icons-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddButton = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        size="lg"
        opened={opened}
        onClose={close}
        title={
          <div style={{ fontWeight: "bold" }}>
           
            <span style={{ fontSize: "21px" ,display:'flex'}}>  <IconPencilCode style={{ marginRight: "6px" }} /> Add Thread</span>
          </div>
        }
        centered
      >
        <form>
          <Input
            variant="unstyled"
            placeholder="Enter Title Here"
            size="lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill style={{height:250}} theme="snow" value={body} onChange={setBody} />
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Modal>
      <div
        style={{
          position: "fixed",
          bottom: "15px",
          right: "15px",
          background: "rgb(51, 154, 240)",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          color: "white",
          fontSize: 21,
          cursor: "pointer",
        }}
        onClick={open}
      >
        <h2>+</h2>
      </div>
    </>
  );
};

export default AddButton;
