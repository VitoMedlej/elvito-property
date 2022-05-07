import {
    Box,
    Button,
    Popper,
    Fade,
    Typography,
    TextField,
    MenuItem
} from "@mui/material"
import {useState} from "react";
import {IFilterOption} from "../../../src/Types";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {defaultState} from "./DesktopFilterSection";

const FilterOption = ({
    children,
    isOpen,
    title,
    name,
    BackDropHandler,
    setOpen,
    buttonText
} : IFilterOption) => {

    const [anchorEl,
        setAnchorEl] = useState < null | HTMLElement > (null);

    const handleClick = (event : React.MouseEvent < HTMLElement >) => {
        setAnchorEl(event.currentTarget);
        let targetName = event.target as React.ButtonHTMLAttributes < HTMLButtonElement >;
        if (targetName.name) 
            setOpen({
                ...defaultState,
                [targetName.name]: !isOpen
            })
            BackDropHandler && BackDropHandler()
    };

    return (
        <Box sx={{
            mx: '5px',
            
            background: 'white'
        }}>
            <Button
            className='iconBtn'
                name={`${name}`}
                startIcon={< KeyboardArrowDownIcon   />}
                onClick={(e) => handleClick(e)}
                sx={{
                py: '4px',
                color: '#494949',
                border: '1px solid #494949',
                ':hover': {
                    background: '#e9e9e9',
                    border: '1px solid #494949',
                  
                },
            
            }}
                size='small'
                variant='outlined'>
                {buttonText}

            </Button>

            <Popper
                sx={{
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}
                id={'id'}
                open={isOpen}
                anchorEl={anchorEl}
                transition>
                {({TransitionProps}) => (
                    <Fade {...TransitionProps}>
                        <Box
                            sx={{
                            background: 'white',
                            px: '1em',
                            pb: '2em',
                            mt: '1em',
                            boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                        }}>
                            {title && <Typography
                                fontWeight='500'
                                sx={{
                                py: '1.1em'
                            }}>
                                {title}
                            </Typography>}
                            <> {children} </>

                        </Box>
                    </Fade>
                )}
            </Popper>

        </Box>
    )
}

export default FilterOption