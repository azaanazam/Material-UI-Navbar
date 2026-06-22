import React from "react";
import { Box, Typography, Grid, Paper, Card, CardContent, Container, Avatar } from "@mui/material";
import { ShoppingCart, AttachMoney, People, Inventory } from "@mui/icons-material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 400 }, { name: 'Tue', sales: 300 }, { name: 'Wed', sales: 600 },
  { name: 'Thu', sales: 800 }, { name: 'Fri', sales: 500 }, { name: 'Sat', sales: 900 }, { name: 'Sun', sales: 700 },
];

export default function Dashboard() {
  const stats = [
    { title: "Total Sales", value: "$45,231", icon: <AttachMoney />, color: "#e8f5e9" },
    { title: "Total Orders", value: "1,205", icon: <ShoppingCart />, color: "#e3f2fd" },
    { title: "Customers", value: "850", icon: <People />, color: "#e1f5fe" },
    { title: "Stock Items", value: "128", icon: <Inventory />, color: "#fff3e0" }
  ];

  return (
    <Box sx={{ background: '#f0f2f5', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="lg">
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a237e' }}>Store Overview</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Welcome back, check your store performance.
          </Typography>
        </Box>

        {/* Stats Row */}
        <Grid 
          container 
          spacing={3} 
          sx={{ mb: 4 }} 
          justifyContent="center" 
          alignItems="center"
        >
          {stats.map((stat, i) => (
            <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: 'flex', justifyContent: 'center', ml:'70px' }}>
              <Card sx={{ borderRadius: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', width: '100%', maxWidth: 280 }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ p: 2, borderRadius: '50%', background: stat.color }}>{stat.icon}</Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" fontWeight={700}>{stat.title}</Typography>
                    <Typography variant="h6" fontWeight={800}>{stat.value}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Main Content Area */}
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4, borderRadius: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>Sales Analytics</Typography>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#1a237e" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper sx={{ p: 4, borderRadius: 4, width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <Typography variant="h6" fontWeight={1000} sx={{ mb: 3 }}>Trending Products</Typography>
              {[1, 2, 3].map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center', mb: 3, pb: 1, borderBottom: '1px solid #f0f0f0' }}>
                  <Avatar variant="rounded" sx={{ bgcolor: '#1a237e', mr: 2 }} />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography fontWeight={600}>Product {item}</Typography>
                    <Typography variant="caption" color="text.secondary">High Demand</Typography>
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}