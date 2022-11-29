import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helperr/Wrapper';
import classes from './AddUser.module.css';

const AddUser = props => {
    const [enteredUserName, setEnteredUsername] = useState(''); 
    const [enteredAge, setEnteredAge] = useState(''); 
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+enteredAge < 1) {
            // 입력된 나이값을 숫자로 캐스팅
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUsername('');
        setEnteredAge('')
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
    <>
        {error &&(
            <ErrorModal 
                title={error.title} 
                message={error.message} 
                onConfirm={errorHandler}  
            />
        )}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>    
    </>
    )
};

export default AddUser;