import styles from './SignupForm.module.css';
import { useState } from 'react';

//username, password
export default function SignupForm(){
    const [signUpStatus, setSignUpStatus] = useState('-----');

    async function handleSignup(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObject = Object.fromEntries(formData.entries());

        const { username, password1, password2 } = formDataObject;

        if(password1 !== password2){
            setSignUpStatus("passwords don't match...");
            return null;
        }
    }

    return (
        <form onSubmit={(event) => handleSignup(event)} className={styles['sign-up-form']}>
            this is the Signup form
            <br></br>
            <label>username</label>
            <input name='username'></input>
            <label>password</label>
            <input type="password" name='password1'></input>
            <label>repeat password</label>
            <input type="password" name='password2'></input>
            <label>{signUpStatus}</label>
            <button>sign up</button>
        </form>
    )
}