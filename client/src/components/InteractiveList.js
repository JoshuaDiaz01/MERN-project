import { styled } from '@mui/material/styles';
import * as React from 'react';
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
import axios from 'axios';


export const InteractiveList = (props) => {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [inventory, setInventory] = React.useState(props.inventory)
    const [categories, setCategories] = React.useState(props.categories)



    const handleClick = (e) => {
        alert("navigate to item")
    }

    return (

<>

        <Box sx={{ flexGrow: 1, maxWidth: "inherit", minWidth: "100%"}}>


            <FormGroup row sx={{marginLeft: 3}}>
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

            <Grid>

                <Grid item>



                    <List dense={dense} sx={{maxWidth: "inherit"}}>

                    {inventory.map((item, i) => {

                        const categoryName = categories.filter((category) => {
                            return (item.category === category.groupCode)
                        }).map(entry => entry.name)

            return (
                <ListItem key={i} secondaryAction={
                    <IconButton position="left">
                        <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} color="primary" onClick={(e) => alert(item.name)}/>
                    </IconButton>

                }>
                    <ListItemIcon>
                        <IconButton>
                            {item.isFavorited? "Filled in Star" : <StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} color="primary" />}
                            
                        </IconButton>
                    </ListItemIcon>

                    <ListItemButton onClick={handleClick} edge="end">
                        <ListItemText sx={{ width: 200 }}
                            primary={item.name}
                            secondary={secondary ? categoryName : null}
                        />
                    </ListItemButton>
                    <ListItemText primary={item.quantity }secondary={secondary? null : null} />
                    
                        
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

export default InteractiveList;