
import React from "react";
import useFirestore from "./hooks/UseFirestore";


const ImageGrid = () =>{
    const { docs } = useFirestore('images');
    console.log(docs);

    return(

        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.URL} alt="Uploaded Pic" title="Just embrace it"/>
                </div>
            ))}    
        </div>
    
        
    )
}
export default ImageGrid;