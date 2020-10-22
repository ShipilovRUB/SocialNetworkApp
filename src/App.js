import React from 'react'
import './App.css'
import Dialogs from './components/dialogs/Dialogs'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'


const App = () => {
  return (
    <div className="header-wrapper">
      <div className="app-wrapper">

        <Header />
        <Navbar />
        
        <div className="app-wrapper-content">
          {/* <Profile />  */} 
          <Dialogs />
        </div>
        

      </div>
    </div>
  );
}

export default App;
