
function reducer(state = [], action)
{
    switch(action.type)
    {
        case "Update_Guests":
            return action.payload;
                    
        default:
            return state;
    }
}

export default reducer;