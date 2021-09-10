import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';
import ApiIcon from '@material-ui/icons/Send';

// @ts-ignore
import iconImage from '../../assets/icon.png';

const useStyles = makeStyles(theme => ({
  solidButton: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    borderRadius: '6px',
    // boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
    padding: '7px 14px',
    '&:hover': {  
      backgroundColor: theme.palette.primary.dark,
      cursor: 'pointer'
    }
  },
  menuButton: {
    color: theme.palette.common.white
  },
  linkButton: {
    textTransform: 'none',
    textDecoration: 'none'
  },
  linkLogo: {
    // Seems to fit the 48px navbar height...
    // height: '48px',
    alignItems: 'center',
    display: 'flex',
  },
}))
  
export default function NavBar() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar title="" position='static'>
      <Toolbar variant='dense'>
        <Link to="/" className={classes.linkLogo}>
          <Tooltip title='All Things FAIR evaluation tool ☑️'>
            <img src={iconImage} style={{height: '2em', width: '2em', marginRight: '10px'}} alt="Logo" />
          </Tooltip>
        </Link>
        <div className="flexGrow"></div>

        <Link to="/about" className={classes.linkButton}>
          <Tooltip title='About the FAIR evaluation tool'>
            <Button className={classes.menuButton}>
              <InfoIcon />
            </Button>
          </Tooltip>
        </Link>
        {/* TODO: add URL link to the FUJI API */}
        <Tooltip title='Access the grlc OpenAPI (which query the SPARQL endpoint)'>
          <Button className={classes.menuButton} target="_blank" rel="noopener noreferrer"
          href="https://fuji-137-120-31-148.sslip.io/fuji/api/v1/ui">
            <ApiIcon style={{ marginRight: theme.spacing(1)}} />
            API
          </Button>
        </Tooltip>
        <Tooltip title='Go to https://github.com/MaastrichtU-IDS/allthingsfair '>
          <Button className={classes.menuButton} target="_blank"
          href="https://github.com/MaastrichtU-IDS/allthingsfair ">
            <GitHubIcon />
          </Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}