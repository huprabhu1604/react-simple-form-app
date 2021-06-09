import { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserLIst';

function App() {
  const [userDetails, setUserDetails] = useState([]);
  
  const updateList = (userSubmittedDetails) => {
    setUserDetails((prevState) => {
      return [userSubmittedDetails, ...prevState];
    });
  }
  return (
    <div>
      <UserInput onUpdateList={updateList}/>
      <UserList userDetails={userDetails}/>
    </div>
  );
}

export default App;
