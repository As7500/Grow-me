import Header from "../components/Header";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GatingInformation = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem("info", JSON.stringify({ name, phone, email }));
    navigate("/my-post");
  };

  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "500px",
            marginTop: "60px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <TextField
            id="name"
            type="text"
            required
            label="Name"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "20px" }}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            id="phone"
            type="text"
            required
            label="Phone number"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "20px" }}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <TextField
            id="email"
            type="email"
            required
            label="email"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "10px" }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button
            type="submit"
            sx={{
              textTransform: "capitalize",
              background: "linear-gradient(#120E43, #120E43)",
              color: "#fff",
              fontFamily: "Poppins",
              padding: "7px 20px",
            }}
          >
            Save & Next
          </Button>
        </form>
      </Box>
    </Box>
  );
};
export default GatingInformation;
