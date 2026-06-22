import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import { Dashboard, ShoppingCart, People, Settings, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
    { text: 'Orders', icon: <ShoppingCart />, path: '/orders' },
    { text: 'Customers', icon: <People />, path: '/customers' },
    { text: 'Settings', icon: <Settings />, path: '/settings' },
  ];

  return (
    <Box sx={{ width: 250, height: '100vh', background: '#1a237e', color: 'white', p: 2 }}>
      <Typography variant="h6" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
        Azan Store
      </Typography>
      <Divider sx={{ backgroundColor: 'white' }} />
      
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} onClick={() => navigate(item.path)} sx={{ borderRadius: 2, mb: 1, '&:hover': { background: '#303f9f' } }}>
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ position: 'absolute', bottom: 20, width: '200px' }}>
        <ListItem button onClick={() => navigate('/login')}>
          <ListItemIcon sx={{ color: 'white' }}><Logout /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </Box>
    </Box>
  );
}