import { Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Guest from './Guest';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

function Reservations() {
    // a state that represents all the guests
    const [guests, setGuests] = useState([{guestNum: uuidv4(),first: "",main: "",dessert: ""}]);
    // a state thet represent if the last guest is ready (we can add new guest only if the last guest is ready)
    const [canAddNewGuest, setCanAddNewGuest] = useState(false);
    const dispatch = useDispatch();
    const savedGuests = useSelector(state=>state);

    //gets the saved guest from the store
   useEffect(() => {
        setGuests([...savedGuests]);
   }, []);

    //whenever the last guest is changed, checks if he is ready and updates the state
    useEffect(() => {
        let lastGuest = guests[guests.length-1];
        if(lastGuest?.dessert !== ""){
            setCanAddNewGuest(true)
        }
        else{
            setCanAddNewGuest(false)
        }
    }, [guests[guests.length-1]]?.dessert);

   
    /**
     * a callback function that is called when the user presses the delete guest btn 
     * this function deletes a guest from the guest list state by his id
     * @param {*} guestId the id of the guest to delete
     */
    const handleDelete = (guestId) =>{
        let updatedGuests = guests.filter((guest)=> guest.guestNum !== guestId );
        setGuests(updatedGuests);
    }

    /**
     * this function adds an empty guest to the guest list state
     */
    const handleAdd = () => {
        setCanAddNewGuest(false)
        setGuests([...guests,{guestNum: uuidv4(),first: "",main: "",dessert: ""}]);
    }

     /**
     * a callback function that is called when the user changes one of the autocomplete inputs 
     * this function updates a guest in the guest list state by his id
     * @param {*} newGuest an object with the guestId,
     *                     the name of the input that has changed
     *                      and the new value to this input
     */
    const updateGuest = (newGuest) => {
        let index = guests.findIndex(guest => guest.guestNum === newGuest.guestNum)
        const tempGuest = [...guests];
        let guest = tempGuest[index];
        //whenever the user updates a guest input, the next steps will be initialize
        if(newGuest.name === "first"){
            guest.main = "";
            guest.dessert=""
        }
        else if(newGuest.name === "main"){
            guest.dessert=""
        }
        guest[newGuest.name] = newGuest.value; 
        tempGuest[index] = guest;
        setGuests(tempGuest);
    }

    // saved the guest list in the global store
    const handleSave = () =>{
        dispatch({type:"Update_Guests", payload: guests})
    }

    return (
        
        <Grid container spacing={2}>
            {guests?.map((guest,index)=>{
                return <Grid item xs={12} container justifyContent="center" key={index}>
                        <Guest guest={guest} onGuestChange={updateGuest} deleteGuest={handleDelete}></Guest>
                        </Grid>})
            }
            <Grid item xs={12} container justifyContent="center">
                {canAddNewGuest && <Button variant="contained" color="primary" onClick={handleAdd}> Add Guest </Button> } 
                {canAddNewGuest && guests.length > 0 && <Button variant="contained" color="primary" onClick={handleSave}> Save Guests </Button> } 
            </Grid>
        </Grid>
    );
}

export default Reservations;