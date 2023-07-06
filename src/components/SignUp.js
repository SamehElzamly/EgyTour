import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";
import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserId } from "../store/users";

export function SignUp(){

            // check validation
            // variables
            const [checked,setChecked] =useState(false)
            const [newUser,setNewUser]=useState({})
            const users=useSelector(state=>state.reducer.getUsers)
            const userId=useSelector(state=>state.reducer.fetchUserId)
            const dispatch=useDispatch()

            // function to add new user
            const  addUSer=(user)=>{
                return new Promise((resolve,reject)=>{
                    fetch('http://localhost:4000/newUser',{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify(user)
                    }).then(res=>res.json())
                    .then(()=>{
                        resolve()
                    })
                    .catch(err=>reject(err))
                })
            }

    const addNewUSer=()=>{
        // check validation
            // variables
            const firstNameInput=document.getElementById('firstName')
            const lastNameInput=document.getElementById('lastName')
            const moblieNumberInput=document.getElementById('moblieNumber')
            const emailInput=document.getElementById('email')
            const passwordInput=document.getElementById('password')
            const confirmPasswordInput=document.getElementById('confirmPassword')
            const p=document.querySelectorAll('.signUp form p')
            if(firstNameInput.value.length<2){
                p[0].classList.add('warning')
                firstNameInput.focus()
            }
            else {
                p[0].classList.remove('warning');
                if(lastNameInput.value.length<2){
                    p[1].classList.add('warning')
                    lastNameInput.focus()
                }
                else {
                    p[1].classList.remove('warning')
                    if (!(moblieNumberInput.value.match(/01\d{9}/) && !moblieNumberInput.value.match(/\D/)))
                    {
                        p[2].classList.add('warning')
                        moblieNumberInput.focus()
                    }
                    else{
                        p[2].classList.remove('warning')
                        let counter=0

                        for (const key in users) {
                            if(emailInput.value===users[key].email)
                            {
                                counter=counter+1
                                p[3].classList.add('warning')
                                emailInput.focus()
                            break
                            }
                        }

                        if(!emailInput.value.match(/\w@gmail.com$/)||emailInput.value.match(/\s+/g))
                        {
                            p[3].classList.add('warning')
                            emailInput.focus()
                        }
                        else{
                            p[3].classList.remove('warning')
                            if (passwordInput.value.length<8){
                                p[4].classList.add('warning')
                                passwordInput.focus()
                            }
                            else{
                                p[4].classList.remove('warning')
                                if(confirmPasswordInput.value!==passwordInput.value){
                                p[5].classList.add('warning')
                                confirmPasswordInput.focus()
                                }
                                else{
                                    if(counter>0){
                                        p[6].classList.add('warning')
                                        setChecked(false)
                                    }
                                    else{
                                        p[6].classList.remove('warning')
                                        setChecked(true)
                                        p[5].classList.remove('warning')
                                        setNewUser({
                                            firstName:firstNameInput.value,
                                            lastName:lastNameInput.value,
                                            moblieNumber:moblieNumberInput.value,
                                            email:emailInput.value,
                                            password:passwordInput.value
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        useEffect(()=>{
            document.querySelectorAll('.signUp form input').forEach(e=>{
                e.addEventListener('click',addNewUSer)
            })
        },[])

    return(
        <div className="signUp">
            <div className="leftSide">
                <h1>Welcome !</h1>
                <p>Sign up with google</p>
                <div className="googleLogIn">
                    <GoogleOAuthProvider clientId="825861407148-1445b25r5mfj99d2s22a1rgkscmbkvus.apps.googleusercontent.com">
                        <GoogleLogin onSuccess={credentialResponse => {
                                var userToken=jwtDecode(credentialResponse.credential);
                                let counter=0
                                users.forEach(user=>{
                                    if(user.email===userToken.email)
                                    counter=counter+1
                                    })
                                    if(counter===0){
                                        const user={
                                            firstName:userToken.given_name,
                                            email:userToken.email,
                                            password:'google'
                                        }
                                        addUSer(user)
                                    }
                                    dispatch(fetchUserId(userToken.email))
                                    localStorage.setItem("id",userId[0]._id);
                                    localStorage.setItem("case","logedIn");
                                    window.location.assign('http://localhost:3000')
                                    }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            />
                    </GoogleOAuthProvider>;
                </div>
                <form action="/log in">
                    <div>
                        <label>First name</label>
                        <p>invalid name</p>
                        <input type='text' id='firstName' placeholder="sameh"/>
                        <label>Last name</label>
                        <p>invalid name</p>
                        <input type='text' id='lastName' placeholder="ashraf"/>
                    </div>
                    <label>Phone</label>
                    <p>invalid mobile number</p>
                    <input type='tel' id='moblieNumber' placeholder="01234567890"/>
                    <label>Email</label>
                    <p>invalid email</p>
                    <input type='email' id='email' placeholder="ex@gmail.com"/>
                    <label>Password</label>
                    <p>password must be more than 8 digits</p>
                    <input type='password' id='password'/>
                    <label>Confirm password</label>
                    <p>passwords dose't match  </p>
                    <input type='password' id='confirmPassword'/>
                    <p>you have an account already</p>
                    <input type='submit' value='Sign up' onClick={e=>{
                        if(!checked)
                        e.preventDefault();
                        
                        else{
                            addUSer(newUser)
                            localStorage.setItem("id",document.getElementById('email').value);
                            localStorage.setItem("case","logedIn");
                            window.location.assign('/')
                        }
                    }}/>
                </form>
                <p>You have am account already! <Link to='/log in'>Log in</Link></p>
            </div>
            <div className="rightSide"></div>
        </div>
    );
}