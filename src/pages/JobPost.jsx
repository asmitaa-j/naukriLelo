
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

export default function JobPost() {
   const user = JSON.parse(localStorage.getItem("user"));
  const employerId = user?._id;

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    description: "",
    postedBy: employerId,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://192.168.29.249:8080/api/jobs/create", formData);
      alert("Job posted successfully!");
      setFormData({
        title: "",
        company: "",
        location: "",
        type: "",
        description: "",
        postedBy: employerId,
      });
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job.");
    }
  };

  if (!user || user.role !== "employer") return <p>Access denied. <br/>Only employers can post jobs. <br/> Register as an employer to post jobs.
  </p>;

  return (
     <Container maxWidth="sm" sx={{mt:7}}>
      <Typography variant="h4" mb={4}>Post a Job</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Job Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <TextField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <TextField
          label="Job Type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          select
          required
        >
          <MenuItem value="Full-Time">Full-Time</MenuItem>
          <MenuItem value="Part-Time">Part-Time</MenuItem>
          <MenuItem value="Contract">Contract</MenuItem>
          <MenuItem value="Internship">Internship</MenuItem>
        </TextField>
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" sx={{bgcolor:"black"}}>Post Job</Button>
      </Box>
    </Container>
  );
}
