import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("info");
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#F8F8F7", boxShadow: "none" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#120E43", fontFamily: "Poppins" }}
          >
            GrowMeOrganic
          </Typography>
          {localStorage.getItem("info") && (
            <Button
              onClick={handleLogout}
              color="inherit"
              sx={{
                color: "#020202",
                fontFamily: "Poppins",
                textTransform: "capitalize",
                fontSize: "20px",
              }}
            >
              LogOut
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
