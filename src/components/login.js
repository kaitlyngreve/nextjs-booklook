import { auth } from "../pages/firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <div>
            <button onClick={signInWithGoogle}>Login</button>
        </div>
    )
}