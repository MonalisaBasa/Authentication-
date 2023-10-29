import {useRef,useContext} from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../Store/auth-context';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = event =>{
    event.preventDefault();

    const enteredPassword = newPasswordInputRef.current.value;
    
    //add validation 
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAy1x8U_13KlYqai3cwii7J-Hdy4Wv4PMM',{
      method:'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredPassword,
        returnSecureToken:false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res =>{
      
    })
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
