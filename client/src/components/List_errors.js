import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import { ListItemButton } from '@mui/material';
import { positions } from '@mui/system';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const dummyData = [
    {
        name: "stain",
        quantity: 42,
        categoryCode: "06",
        categoryName: "Chemicals and Allied Products",
        isFavorited: false,
        orderHistory: []
    },
    {
        name: "concrete",
        quantity: 25,
        categoryCode: "06",
        categoryName: "Building Materials",
        isFavorited: true,
        orderHistory: []
    },
    {
        name: "4x4s",
        quantity: 100,
        categoryCode: "08",
        categoryName: "Wood and wood products",
        isFavorited: false,
        orderHistory: []
    },

]

// const Demo = styled('div')(({ theme }) => ({
//     backgroundColor: theme.palette.background.paper,
// }));

export const InteractiveList_errors = (props) => {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const navigate = useNavigate();

    const handleClick = (e, i) => {
        alert("navigate to item")
    }

    const quickUpdate = (e, id) => {
        navigate(`/${id}/update`)
    }

    return (
        // <Paper elevation={24}>
        <>
        <h2>InteractiveList</h2>
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>


            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={dense}
                            onChange={(event) => setDense(event.target.checked)}
                        />
                    }
                    label="Dense Mode"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={secondary}
                            onChange={(event) => setSecondary(event.target.checked)}
                        />
                    }
                    label="Show Details"
                    sx={{ color: "primary" }} />
            </FormGroup>

            <Grid container spacing={8} >

                <Grid item xs={12} md={8}>
                    <Typography sx={{ mt: 4, mb: 2, backgroundColor: "blue" }} variant="h6" component="div">
                    </Typography>
                    <List dense={dense} sx={{ width: 600 }} >

                        {dummyData.map((item) => {
                            return (
                                <ListItem key={item.id} secondaryAction={
                                    <IconButton position="left">
                                        <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} color="primary" onClick={(e) => quickUpdate(item.id)}/>
                                    </IconButton>

                                }>
                                    <ListItemIcon>
                                        <IconButton>
                                            {item.isFavorited? <StarIcon color="primary" fontSize={secondary ? 'large' : 'medium'}/> : <StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} color="primary" /> }
                                            

                                        </IconButton>
                                    </ListItemIcon>

                                    <ListItemButton onClick={handleClick} edge="end">
                                        <ListItemText sx={{ width: 200 }}
                                            primary= {item.name}
                                            secondary={secondary ? item.categoryName : null}
                                        />
                                    </ListItemButton>
                                    <ListItemText primary={item.quantity}/>


                                    <ListItemIcon>
                                        <TrendingFlatOutlinedIcon fontSize='medium' color="success" />
                                    </ListItemIcon>

                                </ListItem>
                            )
                        })}

                        
                    </List>
                </Grid>
            </Grid>
        </Box>

        </>
    );
}

export default InteractiveList_errors;