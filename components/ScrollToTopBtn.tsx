import gsap from 'gsap';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import {IconButton} from '@mui/material';
import {useEffect, useState} from 'react';

const styles = {
    color: 'red',
    position: 'fixed',
    fontSize: '2em',
    bottom: '5%',
    right: '2%',
    zIndex: '55555',
    height: '50px'
}

const ScrollToTopBtn = () => {
    const [isVisible,
        setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, []);

    return (

        <IconButton
            data-cy='STT'
            onClick={() => gsap.to(window, {
            duration: 1,
            scrollTo: "#appbar"
        })}
            sx={{
            ...styles,
            display: isVisible
                ? 'block'
                : 'none'
        }}>
            <ArrowCircleUpOutlinedIcon fontSize='large'/>
        </IconButton>

    )
}

export default ScrollToTopBtn