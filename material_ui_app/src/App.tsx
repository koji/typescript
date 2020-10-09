import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';

import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles ({
  root: {
    background: 'linear-gradient(45deg, #f3a33f, #09b990)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px',
  }
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 50,
    }
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    }
  }

});

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

const CheckboxExample = () => {
  const [ checked, setChecked ] = useState<boolean>(true)
  return(
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e)=>setChecked(e.target.checked)}
            // color="primary"
            inputProps={{
              'aria-label': 'secondary checkbox'
            }}
          />
        }
        label="Testing Checkbox"
      />
    </div>
  )
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
      >
        <div className="App">
          <header className="App-header">
            <Appbar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6'>
                  MUI
                </Typography>
                <Button>Login</Button>
              </Toolbar>
            </Appbar>

          <Typography
            variant="h2"
            component="div"
          >
            Hello Material UI with TypeScript
          </Typography>
          <Typography
            variant="subtitle1"
          >
            sample
          </Typography>

          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{height:75, width: '100%'}} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{height:75, width: '100%'}} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{height:75, width: '100%'}} />
            </Grid>
          </Grid>

            <ButtonStyled />
            <TextField
              variant="filled"
              color="primary"
              type="date"
            />
            <TextField
              variant="filled"
              color="primary"
              type="time"
            />
            <TextField
              variant="filled"
              color="primary"
              type="email"
              // value="test@example.com"
              placeholder="test@example.com"
            />
            <CheckboxExample />
            <ButtonGroup
              variant="contained"
              color="primary"
            >
              <Button
                startIcon={<SaveIcon />}
                // endIcon={<SaveIcon />}
                size="large"
                style={{
                  fontSize: 24
                }}
              >Save</Button>
              <Button
                startIcon={<DeleteIcon />}
                // endIcon={<SaveIcon />}
                size="large"
                style={{
                  fontSize: 24
                }}
                color="secondary"
              >Discard</Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
