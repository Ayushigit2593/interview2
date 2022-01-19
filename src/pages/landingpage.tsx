import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
const Landingpage = () => {
  const history = useNavigate();
  const routeHandler = (page: string) => {
    history(`/${page}`);
  };
  return (
    <>
      <Box sx={{ width: 50, height: 500 }}>
        <Button
          variant="contained"
          onClick={() => routeHandler("people")}
          color="primary"
        >
          People
        </Button>
        <Button
          variant="contained"
          onClick={() => routeHandler("planets")}
          color="primary"
        >
          Planet
        </Button>
        <Button
          variant="contained"
          onClick={() => routeHandler("films")}
          color="primary"
        >
          Movie
        </Button>
      </Box>
    </>
  );
};

export default Landingpage;
