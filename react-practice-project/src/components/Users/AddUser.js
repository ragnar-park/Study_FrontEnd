import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helperr/Wrapper';
import classes from './AddUser.module.css';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUserName, setEnteredUsername] = useState(''); 
    // const [enteredAge, setEnteredAge] = useState(''); 
    const [error, setError] = useState();

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge  = ageInputRef.current.value;
        //  state가 필요없이 제출 버튼이 눌렸을때 읽을 수 있다.
        // 값만 읽고 싶을때 ref사용 
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+enteredUserAge  < 1) {
            // 입력된 나이값을 숫자로 캐스팅
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setEnteredUsername('');
        // setEnteredAge('');
        // 리스너는 있지만 state를 사용하지 않기 때문에 필요하지 않음
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
                <input 
                    id="username" 
                    type="text" 
                    // value={enteredUserName} 
                    // onChange={usernameChangeHandler} 
                    ref={nameInputRef}
                    // nameInputRef안에 들어 있는 것은 나중에 실제 DOM요소가 될 예정이다
                />
                <label htmlFor="age">Age (Years)</label>
                <input 
                    id="age" 
                    type="number" 
                    // value={enteredAge} 
                    // onChange={ageChangeHandler} 
                    ref={ageInputRef}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>    
    </>
    )
};

export default AddUser;