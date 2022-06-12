import {Box} from '@mui/material';
import DetailsSection from '../DetailsSection';
import {useState, useEffect} from "react";
import {FileUpload, Panel} from '@uploadcare/react-widget';
import CustomInput from './CustomInput';


const ImageGalleryForm = () => {

    // const [images,setImages] = useState<string[]>([])
    // const HandleChange = async(files : FileUpload[]) => {

    //     if (files) {
    //         const ImagesUrls : string[] = [];

    //         for (let i = 0; i < files.length; i++) {
    //             const promisesResults = await files[i].promise();
    //             if (promisesResults.cdnUrl) 
    //                 ImagesUrls.push(`${promisesResults.cdnUrl}`)
    //         }

    //         onChange([...ImagesUrls])
    //     }
    // }

    return (
        <DetailsSection title='Property Gallery'>

            <Box sx={{
                width: '100%'
            }}>

                <Panel
                    // value={[...images]}
                    // clearable={true}
                    // onChange={(files) => HandleChange(files)}
                    // multiple
                    publicKey={`${process.env.NEXT_PUBLIC_UPLOADCARE_API_KEY}`}/> 


      
            </Box>

        </DetailsSection>
    )
}

export default ImageGalleryForm