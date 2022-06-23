import {Grid, Tabs, Tab} from '@mui/material'
import {useRouter} from 'next/router';
import {useState} from 'react';

const SideTabs = () => {
    const [value,
        setValue] = useState(0);
    const handleChange = (event : React.SyntheticEvent, newValue : number) => {
        setValue(newValue);
    };
    const router = useRouter()
    const TabDetails = ['main', 'favorites', 'contacts','properties']

    return (
        <Grid
            sx={{
            display: {
                md: 'none'
            }
        }}
            item
            xs={12}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={false}
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example">
                {TabDetails.map(tab => {

                    return <Tab
                        key={tab}
                        onClick={() => router.push(`/dashboard/${router.query.id}/${tab}`)}
                        sx={{
                        fontSize: '.8em'
                    }}
                        label={tab}/>
                })}
             
             

            </Tabs>
        </Grid>
    )
}

export default SideTabs