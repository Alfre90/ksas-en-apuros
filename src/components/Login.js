import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useMutation, gql } from '@apollo/client';

export const AUTH_TOKEN = 'auth-token';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://ksasenapuros.com/">
        Ksas en Apuros
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $username: String!
    $password: String!
  ) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      username: dataForm.get('username'),
      password: dataForm.get('password'),
    });
    login({
      variables: {
        username:  dataForm.get('username'),
        password:  dataForm.get('password'),
      },
      onCompleted: ({ login }) => {
        if (dataForm.get('remember')) localStorage.setItem(AUTH_TOKEN, login.token);
        navigate('/main');
      }
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              error={error && error.message === 'No such user found'}
              helperText={error && error.message === 'No such user found' ? error.message : ''}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={error && error.message === 'Invalid password'}
              helperText={error && error.message === 'Invalid password' ? error.message : ''}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{ mt: 3, mb: 2 }}
            >
              {
                loading ? 
                <CircularProgress color="success"/> :
                  <div>Login</div>
              }
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}