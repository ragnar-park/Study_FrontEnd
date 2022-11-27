import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button'
import classes from './AddUser.module.css'


const AddUser = props => {
    const [enteredUserName, setEnteredUsername] = useState(''); 
    const [enteredAge, setEnteredAge] = useState(''); 

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            // 입력된 나이값을 숫자로 캐스팅
            return;
        }
        console.log(enteredUserName, enteredAge)
        setEnteredUsername('');
        setEnteredAge('')
    };

    return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
    </Card>    
    )
};

export default AddUser;