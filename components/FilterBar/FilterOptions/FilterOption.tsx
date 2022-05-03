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

const FilterOption = ({children, isOpen, title, setOpen, buttonText} : IFilterOption) => {

    const [anchorEl,
        setAnchorEl] = useState < null | HTMLElement > (null);

    const handleClick = (event : React.MouseEvent < HTMLElement >) => {
        setAnchorEl(event.currentTarget);
        setOpen(!isOpen)

    };

    return (
        <Box sx={{
            mx: '5px',
            background: 'white'
        }}>
            <Button
                startIcon={< KeyboardArrowDownIcon />}
                onClick={(e) => handleClick(e)}
                sx={{
                py: '4px',
                color: '#d42c2a',
                border: '1px solid #d42c2a',
                ':hover': {
                    background: '#c10d0b',
                    border: '1px solid #d42c2a',
                    color: 'white'
                }
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
                            <Typography
                                fontWeight='500'
                                sx={{
                                py: '1.1em'
                            }}>
                                Filter by price
                            </Typography>
                            <> {children} </>
                        </Box>
                    </Fade>
                )}
            </Popper>

        </Box>
    )
}

export default FilterOption