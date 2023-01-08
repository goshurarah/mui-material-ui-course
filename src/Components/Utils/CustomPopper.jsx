import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


function CustomPopper() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <>
      <Typography variant="h2">
        Popper
      </Typography>
      <div>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <button aria-describedby={id} type="button" onClick={handleClick}>
            Toggle Popper
          </button></Box>
        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                The content of the Popper.
              </Box>
            </Fade>
          )}
        </Popper>
      </div>
    </>
  );
}
export default CustomPopper