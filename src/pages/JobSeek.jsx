
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Paper } from "@mui/material";

export default function JobSeek() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://192.168.29.249:8080/api/jobs/seek");
        setJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Box sx={{p:{xs:6}}}> 
      <Typography variant="h4" mb={2}>All Job Listings</Typography>
      {jobs.map((job) => (
        <Paper key={job._id} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6">{job.title}</Typography>
          <Typography>{job.company} – {job.location}</Typography>
          <Typography>{job.type}</Typography>
          <Typography>{job.description}</Typography>
          <Typography variant="body2" color="text.secondary">
            Posted by: {job.postedBy?.name }
          </Typography>
        </Paper>
      ))}
    </Box>
  );    
}
