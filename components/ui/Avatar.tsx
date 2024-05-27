import { SignedIn, SignedOut } from "@clerk/nextjs";

const Avatar = ()=> {
    return (
        <div>
            <SignedIn>
                Logged IN
            </SignedIn>

            <SignedOut>
                Logged out
            </SignedOut>
        </div>
    )
}

export default Avatar;
