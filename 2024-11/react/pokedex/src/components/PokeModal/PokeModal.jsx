import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import styles from './PokeModal.module.css';
import Pokemon from '../Pokemon/Pokemon.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // maxWidth: '90%',
  // bgcolor: 'none',
  border: 0,
  outline: 'none',
  // boxShadow: 24,
  p: 0
};

const modalStyle = {
  border: 0
}

export default function PokeModal( { pokemon, pokeballImg }) {
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    console.log("handle open called...");
    setOpen(true);
  }
  
  const handleClose = (event) => {
    console.log("handle close called...");
    event.stopPropagation();
    setOpen(false);
  }

  const toggleOpen = () => {
    // console.log("toggle open called...");
    setOpen((formerValue) => !formerValue);
  }

  return (
    <div className={styles['modal-div']} onClick={ handleOpen }>
      {/* <Button onClick={handleOpen}>Expand</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <Box sx={style}>
          <Pokemon pokemon={ pokemon } pokeballImg={ pokeballImg } handleBackClick={ handleClose }/>
        </Box>
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
      </Modal>
    </div>
  );
}