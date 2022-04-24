import React, { useState } from 'react'
import Progress from './Progress';

export const UploadForm = () => {

    const types = ['image/jpeg','image/png']
    const [file,setFile] = useState(null);
    const[error,setError] = useState(null);

    const changeHandler = (e) =>{
        console.log('File picked');
        let selected = e.target.files[0];
        console.log(selected);

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
            
        }
        else{
            setFile(null);
            setError("Please select only image file (png or jpeg)");
        }
    }


  return (
    <form action="">
        <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>        <div className='output'>
            { error && <div className='error'>{ error }</div> }
            { file && <div >{ file.name }</div> }
            { file && <Progress file={file} setFile={setFile} />}
        </div>
    </form>
  )
}
