import * as React from "react";
import Box from "@mui/material/Box";
import { Img } from "../Components/Card";
import { Button } from "../Components/Card";
import { Icon } from "../Components/Card";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { addToCart } from "../functions";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function BasicModal({
  open,
  handleClose,
  title,
  img,
  info,
  id,
  setItems,
  setAdded,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Img src={img} alt={title}></Img>
          <Typography
            sx={{ mt: -5 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 12 }}>
            {info}
          </Typography>
          <Button
            onClick={() => {
              setItems((items) => items.map((item) => addToCart(item, id)));
              setAdded(true);
            }}
          >
            <Icon className="fa-solid fa-2x fa-cart-plus"></Icon>
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
