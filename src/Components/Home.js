import { Grid, Typography } from '@material-ui/core';
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';



function Home(props) {
    return (
        <Grid item xs={11} container justifyContent="center" alignItems="center" >
           <Typography variant="h3">
            Welcome To Our Website!
            </Typography>
        </Grid>
    );
}

export default Home;