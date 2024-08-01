import React from 'react';
import { useVehicles } from './hooks'
import { GlobalStyleSheet } from './styles'
import Header from './ui/Header'
import Dialog from './ui/dialog'

const App: React.FC = () => {
  useVehicles()
  
  return (
    <main>
      <GlobalStyleSheet/>
      <Header/>
      <Dialog/>
    </main>
  );
};

export default App;
