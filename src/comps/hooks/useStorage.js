import { useState, useEffect } from 'react';
import { projectStorage,db} from '../../firebase/config';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc,serverTimestamp } from "firebase/firestore"; 


const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = ref(projectStorage,`files/${file.name}`);
    const collectionRef = collection(db,'images');
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot)=> {
      let percentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(percentage);
    }, (err) => {
      setError(err);
    },
    async () => {
      const url = await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{

        setUrl(downloadURL);
        var createdAt = serverTimestamp();
        addDoc(collectionRef,{
            URL:downloadURL,
            CreatedAt:createdAt
        })
        .then(()=>{
            console.log("URL inserted!");
            // window.location.href=window.location.href;
        })
      });

     

      

    });

  
  }, [file]);

  return { progress, url, error };
}
 
export default useStorage;