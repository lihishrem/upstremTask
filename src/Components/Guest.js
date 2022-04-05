import { Button, Grid, Typography } from '@material-ui/core';
import { Autocomplete, FormControl, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Guest(props) {
    //initialize the options for the autocomplete fields
    const firstOptions = ['salad','soup','Phyllo Cigars'];
    const mainOptions = ['steak','chicken','Fish'];
    const dessertOptions= ['malaby','ice cream','Chocolate Souffle'];

    return (
        <Grid container>
            <FormControl fullWidth>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={2}>
                        <Typography variant="h6">Guest Id  {props.guest.guestNum?.slice(0,5)}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Autocomplete
                            disableClearable
                            id="combo-box-first"
                            options={firstOptions}
                            defaultValue = {null}
                            value = {props.guest.first}
                            renderInput={(params) => <TextField {...params} label="First" 
                            style={{backgroundColor:"#E0E0E0"}}
                            onSelect={(e) => {
                                props.onGuestChange({guestNum: props.guest.guestNum,
                                    name: 'first',
                                    value: e.target.value})
                            }} />} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {props.guest.first !== "" && 
                        <Autocomplete
                                disableClearable
                                id="combo-box-main"
                                options={mainOptions}
                                defaultValue = {null}
                                value = {props.guest.main}
                                renderInput={(params) => <TextField {...params} label="Main" 
                                style={{backgroundColor:"#E0E0E0"}}
                                onSelect={(e) => {
                                    props.onGuestChange({guestNum: props.guest.guestNum,
                                        name: 'main',
                                        value: e.target.value})
                                }}/>} />
                            }
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {props.guest.main !== "" && 
                        <Autocomplete
                                disableClearable
                                id="combo-box-dessert"
                                options={dessertOptions}
                                defaultValue = {null}
                                value = {props.guest.dessert}
                                style={{backgroundColor:"#E0E0E0"}}
                                renderInput={(params) => <TextField {...params} label="Dessert" onSelect={(e) => {
                                    props.onGuestChange({guestNum: props.guest.guestNum,
                                        name: 'dessert',
                                        value: e.target.value})
                                }}/>} 
                            />
                        }
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {(props.guest.dessert!== "") && <Button variant="outlined" startIcon={<DeleteIcon />} color="secondary" onClick={()=>{props.deleteGuest(props.guest.guestNum);}}>Delete Guest</Button>} 
                    </Grid>
                </Grid>
                
                 
            </FormControl>
           
        </Grid>
    );
}

export default Guest;