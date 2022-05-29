import {Box} from '@mui/material';
import DetailsSection from '../DetailsSection';
import {useState} from "react";
import {Panel, FileUpload} from '@uploadcare/react-widget';

const ImageGalleryForm = (props : {
    onChange: (imagesArray : string[]) => void
}) => {

    const [imagesArray,
        setImagesArray] = useState < string[] > ([])

    const HandleChange = async(files : FileUpload[]) => {
        if (files) {

            const ImagesUrls : string[] = [];
            for (let i = 0; i < files.length; i++) {
                const promisesResults = await files[i].promise();
                if (promisesResults.cdnUrl) 
                    ImagesUrls.push(promisesResults.cdnUrl)
            }
            setImagesArray(ImagesUrls)
            props.onChange(ImagesUrls)
        }
    }

    return (
        <DetailsSection title='Property Gallery'>

            <Box sx={{
                width: '100%'
            }}>

                <Panel
                    value={imagesArray}
                    publicKey={`${process.env.NEXT_PUBLIC_UPLOADCARE_API_KEY}`}
                    clearable={true}
                    multiple={true}
                    onChange={async(files) => HandleChange(files)}
                    imagesOnly={true}
                    multipleMax={30}/>
            </Box>

        </DetailsSection>
    )
}

export default ImageGalleryForm