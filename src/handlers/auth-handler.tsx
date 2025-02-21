import { LoaderPage } from "@/routes/loader-page";
import { useAuth, useUser } from "@clerk/clerk-react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "@/types";
import { db } from "@/config/firebase.config";

const AuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const storeUserData = async () => {
      if (isSignedIn && user) {
        setLoading(true);

        try {
          const userSnap = await getDoc(doc(db, "users", user.id));
          if (!userSnap.exists()) {
            const userData: User = {
              id: user.id,
              name: user.fullName || user.firstName || "Anonymus",
              email: user.primaryEmailAddress?.emailAddress || "N/A",
              imageUrl: user.imageUrl,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            };
            await setDoc(doc(db, "users", user.id), userData);
          }
        } catch (error) {
          console.log("Error on Storing:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    storeUserData();
  }, [isSignedIn, user, pathname, navigate]);
  if (loading) {
    return <LoaderPage />;
  }
  return null;
};

export default AuthHandler;
