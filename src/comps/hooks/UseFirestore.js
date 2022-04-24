// import { collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { collection,getDocs, onSnapshot,doc } from 'firebase/firestore';

   
const useFirestore = (collections) =>{
    const [ docs,setDocs]  = useState([]);

    useEffect(() =>{

    var collectionRef = collection(db,'images');
          const unsub = getDocs(collectionRef)
        //   .orderBy('createdAt','desc')
          .then((snapshot) =>{
              let img = []
            //   setDocs(snapshot.docs);
            snapshot.docs.forEach((doc) =>{
                img.push({...doc.data(), id:doc.id});
            });
            setDocs(img);
            // console.log(img);
            // console.log(docs)
            
          })
          .catch(err =>{
              console.log(err.message);
          });
          return () => unsub();
    },[collections])

    return { docs };
}

export default useFirestore;

