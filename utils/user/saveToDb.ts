import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../firebase.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const saveUserDetailsInFirestore = async (
  uid: string,
  data: any
): Promise<string> => {
  try {
    const docRef = doc(db, "users", uid);
    await setDoc(docRef, { ...data, createdAt: serverTimestamp() });
    return "User details saved successfully.";
  } catch (error: any) {
    console.error("Error saving user details in Firestore: ", error);
    throw new Error(error.message);
  }
};

const uploadFileAndGetURL = async (file: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // You can handle progress here if required
      },
      (err) => {
        reject(err);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
};

export const signupUser = async (
  email: string,
  password: string,
  additionalData: any
): Promise<string> => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  if (user) {
    if (additionalData.photoId) {
      const fileURL = await uploadFileAndGetURL(additionalData.photoId);
      additionalData.photoId = fileURL;
    }

    const resultMessage = await saveUserDetailsInFirestore(
      user.uid,
      additionalData
    );

    return resultMessage;
  }

  throw new Error("Signup failed. No user object returned.");
};
