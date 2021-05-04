import './DropOff.css'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'


export function DropOff() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p className="uploadCSV">Upload CVS File
                        <br/>
                    drag and drop CSV file or click here to upload
                    </p>
            }
        </div>
    )
}

export default DropOff