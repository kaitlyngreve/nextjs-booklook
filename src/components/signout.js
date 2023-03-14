import { auth } from "../pages/firebase-config";

export default function Signout() {

    const signUserOut = () => {
        auth.signOut();
    }

    return (
        <div>
            <button onClick={signUserOut}>Sign Out</button>
        </div>
    )
}
