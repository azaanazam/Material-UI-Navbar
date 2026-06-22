import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Container, Alert } from '@mui/material';

export default function Account() {
  // Simple state, koi Context API nahi
  const [formData, setFormData] = useState({
    fullName: "Azan Azam",
    username: "azan_azam",
    email: "azan@example.com"
  });
  
  const [success, setSuccess] = useState(false);

  const handleSave = () => {
    // Yahan aap apna save logic (ya API call) daal sakte hain
    console.log("Saved Data:", formData);
    
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Box sx={{ background: '#f0f2f5', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 5, borderRadius: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <Typography variant="h5" fontWeight={800} sx={{ color: '#1a237e', mb: 3 }}>Account Settings</Typography>
          
          {success && <Alert severity="success" sx={{ mb: 3 }}>Profile updated successfully!</Alert>}

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField 
              fullWidth 
              label="Full Name" 
              value={formData.fullName} 
              onChange={(e) => setFormData({...formData, fullName: e.target.value})} 
            />
            <TextField 
              fullWidth 
              label="Username" 
              value={formData.username} 
              onChange={(e) => setFormData({...formData, username: e.target.value})} 
            />
            <TextField 
              fullWidth 
              label="Email" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
            
            <Button 
              variant="contained" 
              onClick={handleSave} 
              sx={{ bgcolor: '#1a237e', py: 1.5, mt: 2 }}
            >
              Save Changes
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}