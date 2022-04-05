import React from 'react';
import {
  Drawer, Grid, List, ListItem,
  ListItemIcon, ListItemText, Paper, Switch
} from "@material-ui/core";

import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from "@material-ui/core/styles"

//style
const useStyles = makeStyles((theme) => ({
  drawerPaper: { position:"absolute",top:"8vh", width:"80vw", left:"10vw" },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

function DrawerComp(props) {
  const classes = useStyles();
    return (<Grid>
            <Drawer
                  variant="permanent"
                  anchor="top"
                  open={true}
                  classes={{ paper: classes.drawerPaper }}>
              <List>
                <Link to="/" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                  </ListItem>
                </Link>
                <Link to="/reservations" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Dinner Reservations"} />
                  </ListItem>
                </Link>
              </List>
              </Drawer> 
              </Grid>
        
    );
}

export default DrawerComp;