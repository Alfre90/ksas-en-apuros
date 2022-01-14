import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';

export const AUTH_TOKEN = 'auth-token';

const theme = createTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
    light: {
      main: "#FFFFFF"
    }
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
};

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" style={{padding: 0}}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="secondary" enableColorOnDark>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "white", fontWeight: 'bold' }}>
                Ksas en Apuros
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={handleOpen}>Add House</Button>
                <Tooltip title="Logout">
                    <IconButton aria-label="logout"  onClick={() => {
                        localStorage.removeItem(AUTH_TOKEN);
                        navigate(`/`);
                      }}>
                        <LogoutIcon color="light" />
                    </IconButton>
                </Tooltip>
            </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <Box flexDirection="row" style={{backgroundColor: '#9E9E9E', height: 30, paddingLeft: 2}}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "white", width: '90%' }}>
                Add new house
              </Typography>
              <Tooltip title="Close">
                    <IconButton aria-label="logout"  onClick={handleClose}>
                        <CloseIcon color="light" />
                    </IconButton>
                </Tooltip>
            </Box> */}
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <Box style={{backgroundColor: '#9E9E9E', height: '100%', paddingLeft: 2}}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "white", paddingTop: .5 }}>
                    Add new house
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2} style={{paddingLeft: 0}}>
                <Box style={{backgroundColor: '#9E9E9E', height: '100%', paddingRight: 2, justifyContent: 'end', display: 'flex'}}>
                  <Tooltip title="Close">
                      <IconButton aria-label="logout" onClick={handleClose}>
                          <CloseIcon color="light" />
                      </IconButton>
                  </Tooltip>
                </Box>
              </Grid>
            </Grid>
            <div>
             Resto de los datos necesarios
            </div>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
};

export default Header;