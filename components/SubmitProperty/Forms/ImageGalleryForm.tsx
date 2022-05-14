import {Box, Typography, Button} from '@mui/material';
import DetailsSection from '../DetailsSection';
import {useEffect, useState} from "react";
import ImageUploading from 'react-images-uploading';
import {Widget, Panel, FileUpload} from '@uploadcare/react-widget';

const styles2 = {
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    height: '100%'
}

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

            {/* <ImageUploading
        multiple
        onChange={(e) => HandleOnChange(e)}
        value={imagesArray}>
        {({imageList, onImageUpload, onImageRemoveAll}) => {
            const arrayLength = imageList.length === 0;
            return <Box sx={{
                width: '100%'
            }}>

                <Box
                    onClick={onImageUpload}
                    sx={{
                    width: '100%',
                    border: '2px dotted black',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    <Box
                        sx={{
                        ...styles2,
                        height: '200px',
                        display: arrayLength
                            ? 'flex'
                            : ' none'
                    }}>

                        <Typography fontWeight='500'>
                            Upload Images Here
                        </Typography>
                    </Box >
                    <Box
                        sx={{
                        ...styles2,
                        flexWrap: 'wrap',
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>

                        {imageList && imageList.map((image, index) => {
                            return <Box
                                sx={{
                                width: {
                                    xs: '33%',
                                    sm: '200px'
                                },
                                height: '150px'
                            }}
                                key={index}>
                                <img className='img' src={image['dataURL']} alt=""/>
                            </Box>
                        })}
                    </Box>

                </Box>
                <Button
                    onClick={onImageRemoveAll}
                    type="submit"
                    variant="contained"
                    sx={{
                    mt: 2,
                    backgroundColor: "#d42c2a",
                    border: "1px solid #d42c2a",
                    ":hover": {
                        background: '#bb0806',
                        border: "1px solid #bb0806"
                    }
                }}>
                    <Typography fontSize='.9em'>
                        Remove All
                    </Typography>
                </Button>
            </Box>
        }}
    </ImageUploading> */}
            <Box sx={{
                width: '100%'
            }}>

                <Panel
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