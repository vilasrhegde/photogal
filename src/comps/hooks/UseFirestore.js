// import { collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

   
const useFirestore = (collections) =>{
    const [ docs,setDocs]  = useState([]);

    useEffect(() =>{
     onSnapshot(collection(db,collections),(snapshot) =>{
      // console.log(snapshot.docs.map(doc => doc.data() ));
      setDocs(snapshot.docs.map(doc => doc.data() ));
    });
  },[]);
    return { docs };
    
    
}

export default useFirestore;

