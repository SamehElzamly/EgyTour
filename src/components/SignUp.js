import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
export function SignUp(){
    return(
        <div className="signUp">
            <div className="leftSide">
                <h1>Welcome !</h1>
                <p>Sign up with google</p>
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
                    <div>
                        <label>First name</label>
                        <input type='text' />
                        <label>Last name</label>
                        <input type='text' />
                    </div>
                    <label>Phone</label>
                    <input type='tel' />
                    <label>Email</label>
                    <input type='email' />
                    <label>Password</label>
                    <input type='password' />
                    <label>Confirm password</label>
                    <input type='password' />
                    <input type='submit' value='Sign up' />
                </form>
                <p>You have am account already! <Link to='/log in'>Log in</Link></p>
            </div>
            <div className="rightSide"></div>
        </div>
    );
}