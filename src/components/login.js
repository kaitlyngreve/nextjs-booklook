import { auth } from "../pages/firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default function Login() {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <div>
            <button
                className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
                onClick={signInWithGoogle}>
                Login
            </button>
        </div>
    )
}