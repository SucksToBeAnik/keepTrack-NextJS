import {
    SignInButton,
    SignOutButton,
    SignedIn,
    SignedOut,
  } from "@clerk/nextjs";

const LoginLogoutButton = ()=> {
    return (
         <div className="flex justify-end items-center gap-4 my-12">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn btn-link text-2xl md:text-3xl text-white">
                  Login
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <SignOutButton>
                <button className="btn btn-link text-2xl md:text-3xl text-white">
                  Logout
                </button>
              </SignOutButton>
            </SignedIn>
          </div> 
    )
}

export default LoginLogoutButton ;
