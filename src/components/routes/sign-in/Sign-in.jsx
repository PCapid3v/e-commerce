import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase";
import SignUpForm from "../../sign-up/SignUpForm";

function SignIn(){
const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
};
    return (
        <div className="signIn-container">
            <h1>Sign In Page</h1>
            <button className="btn btnGoogle" onClick={logGoogleUser}>Sign in with Google</button>
            <SignUpForm />
        </div>

    )
}

export default SignIn;