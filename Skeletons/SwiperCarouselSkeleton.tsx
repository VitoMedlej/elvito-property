import {Box, Skeleton} from "@mui/material"


const SkeletonCard = ({sx} : any) => {
  return  <Skeleton
    height='400px'
    width= '320px'
    sx={{
    ...sx,
    margin : '-3em 8px !important',
        }}></Skeleton>
}
const SwiperCarouselSkeleton = () => {
    return (
        <Box sx={{
            display: "flex"
        }}>
     
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard sx={{display:{xs:"none",md:'block'}}}/>
        <SkeletonCard sx={{display:{xs:"none",md:'block'}}}/>
        </Box>
    )
}

export default SwiperCarouselSkeleton