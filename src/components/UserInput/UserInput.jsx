import React, {useState, useRef} from 'react';
import userInputStyles from './UserInput.module.css';
import Button from '../Button/Button';
import ErrorModal from '../ErrorModal/ErrorModal';
import Card from '../Card/Card';

const UserInput = (props) => {
    const [error, setError] = useState();
    const [message, setMessage] = useState('');
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    
    const submitHandler = (event) => {
        event.preventDefault();
        const userNameRef = nameInputRef.current.value;
        const ageRef = ageInputRef.current.value;
        if(userNameRef === "" && ageRef === "") { 
            setMessage("Please enter Username and Age");
            setError(true);
            return
        } else if (+ageRef < 1){
            setMessage("Please enter valid age (> 0)");
            setError(true);
            return
        }
        props.onUpdateList({
            id: Math.floor((Math.random() * 100) + 1),
            name: userNameRef,
            age: ageRef
        });  
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";     
    }
    const closeModal = () => {
        setError(false);
    }
    return(
        <React.Fragment>
            {                
                error && 
                <ErrorModal onConfirm={closeModal} onError={error} onMessage={message}/>
            }
            
            <Card>
                <form onSubmit={submitHandler}>
                    <div className={userInputStyles.input}>
                        <label>Username</label>
                        <input type="text" ref={nameInputRef}/>
                    </div>
                    <div className={userInputStyles.input}>
                        <label>Age</label>
                        <input type="number" ref={ageInputRef}/>
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}

export default UserInput;