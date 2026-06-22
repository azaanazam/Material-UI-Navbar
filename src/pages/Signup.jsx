import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Container, IconButton, InputAdornment } from '@mui/material';
import { Person, Email, Lock } from '@mui/icons-material';

export default function Signup() {
  return (
    <Box sx={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' // Professional Gradient Background
    }}>
      <Paper elevation={10} sx={{ 
        p: 5, 
        borderRadius: 4, 
        width: '100%', 
        maxWidth: 400, 
        textAlign: 'center' 
      }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
          Create Account
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField 
            fullWidth 
            label="Full Name" 
            variant="outlined" 
            InputProps={{ startAdornment: (<InputAdornment position="start"><Person /></InputAdornment>) }}
          />
          <TextField 
            fullWidth 
            label="Email Address" 
            variant="outlined" 
            InputProps={{ startAdornment: (<InputAdornment position="start"><Email /></InputAdornment>) }}
          />
          <TextField 
            fullWidth 
            label="Password" 
            type="password" 
            variant="outlined" 
            InputProps={{ startAdornment: (<InputAdornment position="start"><Lock /></InputAdornment>) }}
          />
          
          <Button variant="contained" size="large" sx={{ 
            mt: 2, 
            py: 1.5, 
            fontSize: '1rem', 
            borderRadius: 2,
            background: '#764ba2',
            '&:hover': { background: '#5a377d' } 
          }}>
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}