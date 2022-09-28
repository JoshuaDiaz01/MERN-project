import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import { ListItemButton } from '@mui/material';
import { positions } from '@mui/system';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

const dummyData = [
    { name: "stain",
    quantity: 42,
    categoryCode: "06",
    categoryName: "Chemicals and Allied Products",
    isFavorited: false,
    orderHistory: []
},


]

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export const InteractiveList = (props) => {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const handleClick = (e) => {
        alert("navigate to item")
    }

    return (
        // <Paper elevation={24}>
        <Box sx={{ flexGrow: 1, maxWidth: 752}}>


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
                    sx= {{color: "primary"}} />
            </FormGroup>

            <Grid container spacing={8} >

                <Grid item xs={12} md={8}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    </Typography>
                    <List dense={dense} sx={{ width: 600 }} >
                        {/* {generate( */}

                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} color="primary"/>
                            </IconButton>

                        }>
                            <ListItemIcon>
                                <IconButton>
                                    <StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} color="primary" />

                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick} edge="end">
                                <ListItemText sx={{ width: 200 }}
                                    primary="Stain"
                                    secondary={secondary ? 'Chemicals and Allied Products' : null}
                                />
                            </ListItemButton>
                            <ListItemText primary="1 week left" secondary={secondary? '48': null} />
                            
                                
                            <ListItemIcon>
                                <TrendingFlatOutlinedIcon fontSize='medium' color="success" />
                            </ListItemIcon>
                            
                        </ListItem>

                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} color="primary" />
                            </IconButton>

                        }>
                            <ListItemIcon>
                                <IconButton>
                                    <StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'}  color="primary"/>

                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick} edge="end">
                                <ListItemText sx={{ width: 200 }}
                                    primary="Concrete"
                                    secondary={secondary ? 'Building Materials' : null}
                                />
                            </ListItemButton>
                            <ListItemText primary="2 months left" secondary={secondary? '48': null} />
                            <ListItemIcon>
                                <TrendingUpOutlinedIcon fontSize='medium' color="primary"/>
                            </ListItemIcon>
                        </ListItem>

                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} color="primary" />
                            </IconButton>

                        }>

                            <ListItemIcon>
                                <IconButton>
                                    <StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} color="primary"/>

                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick}>

                                <ListItemText sx={{ width: 200 }}
                                    primary="4x4s"
                                    secondary={secondary ? 'Lumber and Wood Products' : null}
                                />
                            </ListItemButton>

                            <ListItemText primary="2 months left" secondary={secondary? '48': null} />
                            <ListItemIcon>
                                <TrendingUpOutlinedIcon fontSize='large' color="warning"/>
                            </ListItemIcon>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
        // </Paper>
    );
}

export default InteractiveList;