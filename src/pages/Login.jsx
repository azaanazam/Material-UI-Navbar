import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, InputAdornment } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', form);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert("Login Kamyab!"); // Filhal alert use kar lein
      window.location.href = '/dashboard';
    } catch (err) {
      alert("Login fail! Email ya Password check karein.");
    }
  };

  return (
    <Box sx={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    }}>
      <Paper elevation={10} sx={{ p: 5, borderRadius: 4, width: '100%', maxWidth: 400, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
          Welcome Back
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField 
            fullWidth label="Email Address" variant="outlined" 
            onChange={(e) => setForm({...form, email: e.target.value})}
            InputProps={{ startAdornment: (<InputAdornment position="start"><Email /></InputAdornment>) }}
          />
          <TextField 
            fullWidth label="Password" type="password" variant="outlined" 
            onChange={(e) => setForm({...form, password: e.target.value})}
            InputProps={{ startAdornment: (<InputAdornment position="start"><Lock /></InputAdornment>) }}
          />
          
          <Button variant="contained" size="large" onClick={handleLogin} sx={{ 
            mt: 2, py: 1.5, fontSize: '1rem', borderRadius: 2,
            background: '#764ba2', '&:hover': { background: '#5a377d' } 
          }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}