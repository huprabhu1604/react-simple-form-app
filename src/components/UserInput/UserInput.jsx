import React, {useState} from 'react';
import userInputStyles from './UserInput.module.css';
import Button from '../Button/Button';
import ErrorModal from '../ErrorModal/ErrorModal';
import Card from '../Card/Card';

const UserInput = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();
    const [message, setMessage] = useState('');
    
    const userNameHandler = (event) => {
        setUserName(event.target.value);
    }
    const userAgeHandler = (event) => {
        setUserAge(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if(userName === "" && userAge === "") { 
            setMessage("Please enter Username and Age");
            setError(true);
            return
        } else if (+userAge < 1){
            setMessage("Please enter valid age (> 0)");
            setError(true);
            return
        }
        props.onUpdateList({
            id: Math.floor((Math.random() * 100) + 1),
            name: userName,
            age: userAge
        });  
        setUserName('');
        setUserAge('');      
    }
    const closeModal = () => {
        console.log("clicked");
        setError(false);
    }
    return(
        <div>
            {                
                error && 
                <ErrorModal onConfirm={closeModal} onError={error} onMessage={message}/>
            }
            
            <Card>
                <form onSubmit={submitHandler}>
                    <div className={userInputStyles.input}>
                        <label>Username</label>
                        <input type="text" onChange={userNameHandler} value={userName}/>
                    </div>
                    <div className={userInputStyles.input}>
                        <label>Age</label>
                        <input type="number" onChange={userAgeHandler} value={userAge}/>
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default UserInput;