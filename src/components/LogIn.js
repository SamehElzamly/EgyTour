import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
export function LogIn(){
    return(
        <div className="logIn">
            <div className="leftSide">
                <h1>Welcome back !</h1>
                <p>Log in with google</p>
                <div className="googleLogIn">
                    <GoogleOAuthProvider clientId="54325229123-5ch6u2e6savpeqniv1en8o330psnormr.apps.googleusercontent.com">
                        <GoogleLogin onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            />
                    </GoogleOAuthProvider>;
                </div>
                <form>
                    <label>Email</label>
                    <input type='email' />
                    <label>Password</label>
                    <input type='password' />
                    <input type='submit' value='Log in' />
                </form>
                <p>Don't have am account? <Link to='/sign up'>Sign up for free</Link></p>
            </div>
            <div className="rightSide"></div>
        </div>
    );
}