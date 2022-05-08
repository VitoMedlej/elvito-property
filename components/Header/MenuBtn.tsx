import { ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import router from "next/router"
import { IMenuBtn } from "../../src/Types"

const MenuBtn = ({href,title ,Icon,handleClick} : IMenuBtn) => {

    return (
        <ListItem
        sx={{my:'.4em',':hover':{background:'#0000001a'}}}
        onClick={()=>{router.push(href);handleClick()}}
        button>
            <ListItemIcon>
                <Icon sx={{color:'black'}}/>
            </ListItemIcon>
            <ListItemText>
                <Typography fontWeight='500' color='black'>
                    {title}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}

export default MenuBtn