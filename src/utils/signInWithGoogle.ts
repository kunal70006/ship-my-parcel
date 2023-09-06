import { authProvider } from '@/firebase';
import { getAuth, signInWithPopup } from 'firebase/auth';

const signInWithGoogle = async () => {
  const auth = getAuth();
  try {
    const res = await signInWithPopup(auth, authProvider);

    return res.user;
  } catch (error) {
    // @ts-expect-error error obj weird
    const errorCode = error.code;
    // @ts-expect-error error obj weird
    const errorMessage = error.message;
    throw new Error(`${errorCode}: ${errorMessage}`);
  }
};

export default signInWithGoogle;
