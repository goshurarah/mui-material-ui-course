import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CustomModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography variant="h2">
        Modal
      </Typography>
      <div>
      <Box sx={{display:'flex',justifyContent:'center'}}>
        <Button sx={{ bgcolor: "secondary.main" }} variant="contained" onClick={handleOpen}>Open modal</Button></Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              This is Modal!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Be happy always...
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
export default CustomModal