import React from 'react'
import * as Styled from './styles'
import {auth, provider} from '../../firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useAuthState} from "react-firebase-hooks/auth"

const Login = () => {
    const [user, loading] = useAuthState(auth);

    const onSignIn = () => {
        auth.signInWithPopup(provider)
        .catch(err => alert(err.message));
    }

    return (

        <Styled.LoginContainer>
            <div>
                <img src="https://play-lh.googleusercontent.com/fSawm5yT9bKSR03l8mnoE3zBe86ApbxIrEoqnDUGnrZnHl3wir-3F0h2Ql8yyOVYJedC" alt="" />
                <div>
                    <img src="https://cdn0.iconfinder.com/data/icons/social-media-with-fill/64/telegram_colour-512.png" alt="" />
                    <h2>Join Us Now</h2>
                    {!loading ? <button onClick={onSignIn}>Login With Google</button> : (
                        <div>
                            <h4>Logging in</h4>
                            <CircularProgress className="loading" />
                        </div>
                    )}
                </div>
            </div>
            <ul>
                <li>Help</li>
                <li>About</li>
                <li>Contact</li>
                <li>Terms of Service</li>
                <li>Privacy</li>
                <li>Blog</li>
                <li>Status</li>
                <li>Career</li>
                <li>Resources</li>
                <li>Advertising</li>
                <li>Marketing</li>
                <li>Developers</li>
            </ul>
        </Styled.LoginContainer>
    )
}

export default Login
