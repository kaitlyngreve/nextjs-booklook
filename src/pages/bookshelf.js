import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase-config';

import Link from "next/link";

export default function Bookshelf() {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h4>{user.displayName}</h4>
            <Link href={'/'}>Back</Link>
        </div>
    )
}