import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import {
  Grid,
  Box,
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
  Card,
  CardContent,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
  footerBox: {
    width: '100%',
    backgroundColor: '#1976d2',
    position: 'fixed',
    bottom: 0,
    marginLeft: -8,
    height: 80,
  },
  padding: {
    paddingLeft: '50%',
  },
});

export default function Home() {
  const classes = styles();
  return (
    <div>
      <Grid>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Guvi
              </Typography>
              <Button color="inherit">Login</Button>
              <BrowserRouter>
              <NavLink to='/'><Button variant="contained">Home</Button></NavLink>
              </BrowserRouter>
            </Toolbar>
          </AppBar>
        </Box>{' '}
        <br />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              XYZ Organization
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              India
            </Typography>
            <Typography variant="body2">
              Learning is the
              <br />
              {'"KEY to SUCCESS"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Contact Us</Button>
          </CardActions>
        </Card>{' '}
        <br /> <br />
        <Grid container spacing={2}>
          <Grid item>
            <NavLink to="/Admin">
              <Button variant="contained" onClick={Admin()}>Admin Login</Button>
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink to="/Student">
             <Button variant="contained" onClick={Student()}>Student Login</Button>
            </NavLink>
          </Grid>
        </Grid>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>React JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. It is maintained
              by Meta and a community of individual developers and companies.
              React can be used as a base in the development of single-page or
              mobile applications.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Node JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Angular</Typography>
          </AccordionSummary>
        </Accordion>
      </Grid>
      <Box className={classes.footerBox}>
        <List className={classes.padding}>
          <NavLink to="/Contactus">
            <Button color="secondary" onClick={Contactus()}>Contact US</Button>
          </NavLink>
          <NavLink to="/Aboutus">
            <Button color="secondary" onClick={AboutUs()}> About US </Button>
          </NavLink>
          <NavLink to="/Branches">
            <Button color="secondary"onClick={Branches()}> Branches </Button>
          </NavLink>
        </List>
      </Box>
    </div>
  );
}
export function AboutUs(){
  const history=useHistory();
  console.log(history);
  return(
    <>
      <h3>About Us Component</h3>
      <button onClick={history.goBack}> Go Back</button>&nbsp;
      <button onClick={history.goForward}>Go Forward</button>&nbsp;
      <NavLink 
      style={(isActive)=>({
        color:isActive?'green': 'blue',
      })}
      to="/Admin"
      >
        {' '}
        Admin{' '}
      </NavLink>{' '}&nbsp;
      <NavLink 
      style={(isActive)=>({
        color:isActive?'green': 'blue',
      })}
      to="/Contactus"
      >
        {' '}
        Contact Us{' '}
      </NavLink>{' '}&nbsp;
      <NavLink 
      style={(isActive)=>({
        color:isActive?'green': 'blue',
      })}
      to="/Branches"
      >
        {' '}
        Branches{' '}
      </NavLink>{' '}&nbsp;
    </>
  )
}

export function Admin() {
  const history=useHistory();
  console.log(history);
  return (
    <>
  
      <h3> Admin Component </h3>
      <button onClick={history.goBack}> Go Back </button> &nbsp;
      <button onClick={history.goForward}> Go Forward </button> &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/"
      >
        {' '}
        Home{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Student"
      >
        {' '}
        Student{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Aboutus"
      >
        {' '}
        About us{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Contactus"
      >
        {' '}
        Contact us{' '}
      </NavLink>{' '}
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Branches"
      >
        {' '}
        Branches{' '}
      </NavLink>{' '}

    </>

  );
}
export function Student() {
  const history=useHistory();
  console.log(history);
  return (
    <>
     
      <h3> Student Component </h3>
      <button onClick={history.goBack}> Go Back </button> &nbsp;
      <button onClick={history.goForward}> Go Forward </button> &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/"
      >
        {' '}
        Home{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Admin"
      >
        {' '}
        Admin{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Aboutus"
      >
        {' '}
        About us{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Contactus"
      >
        {' '}
        Contact us{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Branches"
      >
        {' '}
        Branches{' '}
      </NavLink>{' '}


    </>
  );
}
export function Contactus() {
  const history=useHistory();
  console.log(history);
  return (
    <>
  
      <h3> Contact us Component </h3>
      <button onClick={history.goBack}> Go Back </button> &nbsp;
      <button onClick={history.goForward}> Go Forward </button> &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/"
      >
        {' '}
        Home{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Admin"
      >
        {' '}
        Admin{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Aboutus"
      >
        {' '}
        About us{' '}
      </NavLink>{' '} &nbsp;
      
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Branches"
      >
        {' '}
        Branches{' '}
      </NavLink>{' '}
    </>
  );
}
export function Branches() {
  const history=useHistory();
  console.log(history);
  return (
    <>
  
      <h3> Branch Component </h3>
      <button onClick={history.goBack}> Go Back </button> &nbsp;
      <button onClick={history.goForward}> Go Forward </button> &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/"
      >
        {' '}
        Home{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Admin"
      >
        {' '}
        Admin{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Aboutus"
      >
        {' '}
        About us{' '}
      </NavLink>{' '} &nbsp;
      <NavLink
        style={(isActive) => ({
          color: isActive ? 'green' : 'blue',
        })}
        to="/Contactus"
      >
        {' '}
        Contact us{' '}
      </NavLink>{' '}
      

    </>
  );
}