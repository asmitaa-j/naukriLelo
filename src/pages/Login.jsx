import React, { useState, useContext } from "react";
import axios, { AxiosError } from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Card } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://192.168.29.249:8080/api/auth/login", form)
        .then((ress) => {
          console.log(ress.data.user);
          localStorage.setItem("user", JSON.stringify(ress.data.user));
          login(ress.data.user);
        });
      navigate("/");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <>
      <Box
        sx={{
          height:{md:"100vh", xs:"80vh"},
          bgcolor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/" style={{ color: "white", marginBottom: "20px", marginTop:"20px" }}>
          {" "}
          Back to Home{" "}
        </Link>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "400px",
            height: {md:"400px", xs:"60vh"},
            bgcolor: "#f5f5f5",
            padding: 1,
            borderRadius: 2,
            boxShadow: 3,
            mb:{xs:"80px", md:0}
          }}
        >
          <Typography variant="h4" sx={{ color: "black", mb: 3 }}>
            Login{" "}
          </Typography>

          <Box sx={{ mb: 2 }}>
            <TextField
              label="Email"
              name="email"
              placeholder="Enter Email"
              variant="outlined"
              fullWidth
              type="email"
              autoComplete="off"
              sx={{ width: "300px" }}
              onChange={handleChange}
              required
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              label="Password"
              name="password"
              placeholder="Enter Password"
              variant="outlined"
              fullWidth
              type="password"
              sx={{ width: "300px" }}
              onChange={handleChange}
              required
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "black",
              alignSelf: "flex-start",
              mb: 2,
              ml: 6,
              mt: 1,
            }}
            onClick={handleSubmit}
          >
            Login
          </Button>

          <Typography sx={{ color: "black", alignSelf: "flex-start", ml: 6 }}>
            {" "}
            Don't have an account?
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/register"
            sx={{
              bgcolor: "black",
              alignSelf: "flex-start",
              mb: 2,
              ml: 6,
              mt: 2,
              textDecoration: "none",
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Login;
