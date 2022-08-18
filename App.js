import './App.css';
import axios from 'axios';
import { useState } from 'react';
import UsersList from './components/usersList';

function App() {

  const [userName, setUserName] = useState()
  const [usersList, setUsersList] = useState()


  const getRequest = () => {
    axios.get('http://localhost:8081/users')
    .then((res) => {
      console.log(res.data);
      setUsersList(res.data)
    }).catch(err => {
      console.log(err);
    })
  }


  const postRequest = (payload) => {
    axios.post('http://localhost:8081/', {
      payload: payload
    })
    .then((res) => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <button onClick={getRequest}>Get</button>
      <input type="text" placeholder='user name' onChange={(e) => setUserName(e.target.value)}></input>
      <button onClick={() => postRequest(userName)}>Post</button>

      {usersList && <UsersList list={usersList}/>}
    </div>
  );
}

export default App;
