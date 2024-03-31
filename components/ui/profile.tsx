import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import GoogleLoginBtn from "@/components/ui/google-login-btn";
import { Button } from "@/components/ui/button";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

export default function Profile() {
  const [user, loadingUser, errorUser] = useAuthState(auth);
  const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-40 px-2 pb-2 pt-2 hover:bg-opacity-50">
          <FontAwesomeIcon icon={faUser} className="inline w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="m-2">
        {user ? (
          <div className="flex flex-col space-y-2">
            <div>
              Logged in as <span className="font-bold">{user.displayName}</span>
            </div>
            <PopoverClose asChild>
              <Button onClick={async () => await signOut()}>Logout</Button>
            </PopoverClose>
          </div>
        ) : (
          <div className="flex justify-center">
            <GoogleLoginBtn />
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
