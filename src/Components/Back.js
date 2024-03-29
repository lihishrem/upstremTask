import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Back = () => {
    const navigate = useNavigate();
    return (
        <>
          <Button onClick={() => navigate(-1)}>Back
          <ArrowBackIcon></ArrowBackIcon>
          </Button>
        </>
    );
};