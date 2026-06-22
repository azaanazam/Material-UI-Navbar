import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Storage se data hata dein
    localStorage.removeItem('user');
    
    // 2. Browser ki cache saaf karke wapas login par bhej dein
    window.location.href = '/login';
  }, [navigate]);

  return null; // Is page par kuch dikhane ki zaroorat nahi
}