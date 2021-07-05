import logo from './logo.svg';
import './App.css';
import firebase from './firebase'
import React, {useState} from 'react'

function App() {
  const [number, setNumber] = useState('');

  const handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e)=>{
      let otp = prompt('enter the otp', '');
      if (otp==null) return;
      e.confirm(otp).then((result)=>{
        console.log(result.user, 'user');
        document.querySelector('label').textContent = result.user.phoneNumber + "number verified";
  
      }).catch((error)=>{
        console.log(error)
      })
    })
  }


  return (
    <div className="App">
      <form onSubmit={(e)=>e.preventDefault()}>
        <input onChange={e=> setNumber(e.target.value)} value={number} type="text" placeholder="enter your number"  />
        <button onClick={handleClick}>send otp</button>
      </form>
      <div id="recaptcha"></div>
      <label></label>
    </div>
  );
}

export default App;
