import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {auth} from './firebase';
import Login from './components/Login';

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        setUser({
          name : authUser.displayName,
          email: authUser.email,
          img: authUser.photoURL
        })
      } else {
        setUser(null);
      }
    })
  }, [])

  return !user ? <Login setLoading={setLoading} /> : (
        <div className="app">
        <Header img={user.img}/>
        <div>
          <Sidebar user={user} channels={channels} setChannels={setChannels}/>
          <Switch>
            <Route exact path="/">
              <Chat user={user} channels={channels}/>
            </Route>
          </Switch>
        </div>
       </div>
       )
}      

export default App;
