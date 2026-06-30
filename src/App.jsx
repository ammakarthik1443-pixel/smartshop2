import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fff9' }}>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;