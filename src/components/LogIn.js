import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

export function LogIn(){

    const users=useSelector(state=>state.reducer.getUsers)
    
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

    return(
        <div className="logIn">
            <div className="leftSide">
                <h1>Welcome back !</h1>
                <p>Log in with google</p>
                <div className="googleLogIn">
                    <GoogleOAuthProvider clientId="825861407148-1445b25r5mfj99d2s22a1rgkscmbkvus.apps.googleusercontent.com">
                        <GoogleLogin onSuccess={credentialResponse => {
                                var userToken=jwtDecode(credentialResponse.credential);
                                let counter=0
                                for(const key in users){
                                    if(users[key].email===userToken.email)
                                    counter=counter+1
                                }
                                if(counter===0){
                                    addUSer({
                                        firstName:userToken.given_name,
                                        img:userToken.picture,
                                        email:userToken.email,
                                        password:'google'
                                    }).then(()=>{
                                        localStorage.setItem("case","logedIn");
                                        localStorage.setItem("id",userToken.email);
                                        window.location.assign('/')
                                    })
                                }
                                else{
                                    localStorage.setItem("case","logedIn");
                                    localStorage.setItem("id",userToken.email);
                                    window.location.assign('/')
                                }
                            }
                        }
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            
                            />
                    </GoogleOAuthProvider>;
                </div>
                <form action="/">
                    <label>Email</label>
                    <p>Wrong email or password</p>
                    <input type='email' id="email"/>
                    <label>Password</label>
                    <input type='password' id="password"/>
                    <input type='submit' value='Log in' onClick={e=>{
                        let inputs=document.querySelectorAll('form input')
                        for(const key in users){
                            if(users[key].email===inputs[0].value && users[key].password===inputs[1].value)
                            {
                                
                                localStorage.setItem("id",users[key]._id);
                                localStorage.setItem("case","logedIn");
                                document.querySelector('form p').classList.remove('warning')
                                window.location.href='/'
                                return
                            }
                            else
                            {
                                inputs[0].focus();
                                document.querySelector('form p').classList.add('warning')
                                e.preventDefault();
                            }
                        }
                        
                    }}/>
                </form>
                <p>Don't have am account? <Link to='/sign up'>Sign up for free</Link></p>
            </div>
            <div className="rightSide"></div>
        </div>
    );
}