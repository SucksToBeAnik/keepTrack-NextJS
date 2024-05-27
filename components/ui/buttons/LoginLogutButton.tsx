import {
    SignInButton,
    SignOutButton,
    SignedIn,
    SignedOut,
  } from "@clerk/nextjs";

const LoginLogoutButton = ()=> {
    return (
         <div className="flex justify-end items-center gap-4 mt-16">
            <SignedOut>
              <SignInButton mode="modal" fallbackRedirectUrl="/profile/create">
                <button className="btn btn-link text-3xl text-white">
                  Login
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <SignOutButton>
                <button className="btn btn-link text-3xl text-white">
                  Logout
                </button>
              </SignOutButton>
            </SignedIn>
          </div> 
    )
}

export default LoginLogoutButton ;
