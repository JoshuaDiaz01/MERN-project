
import * as React from 'react';
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
import Paper from '@mui/material/Paper';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import { ListItemButton } from '@mui/material';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import { updateItemById } from '../services/inventoryService';



export const InteractiveList = (props) => {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const navigate = useNavigate();
    const { categories, inventory, updateInventoryItem } = props;

    const handleItemClick = (id) => {
        navigate(`/items/${id}`);
    }

    const toggleFavorite = async (item) => {
        const updatedItem = { ...item, isFavorited: !item.isFavorited }
        await updateItemById (item._id, updatedItem)
            .then((res) => updateInventoryItem(res))
            .catch((error) => console.log(error))

    }

    const formatMostRecentOrder = (obj) => {
        let key = Object.keys(obj);
        let value = obj[key];
        key = key[0].split(" ");
        let newItem = key.slice(0, 4);
        newItem = newItem.join(" ") + ": " + value;
        return newItem;
    }

    return (

        <>
            <Paper elevation={8} sx={{ padding: 1 }}>
                <Box sx={{ flexGrow: 1, maxWidth: "inherit", minWidth: "100%" }}>
                    <FormGroup row sx={{ marginLeft: 3 }}>
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

                    <Grid>
                        <Grid item>
                            <List dense={dense} sx={{ maxWidth: "inherit" }} >
                                <ListItem key={"header"} secondaryAction={
                                    <Typography variant="body1">
                                        Quick <br></br>Update
                                    </Typography>
                                }>
                                    <Typography sx={{ width: "12%" }} variant="body1">
                                        Favorite
                                    </Typography>

                                    <ListItemText sx={{ width: "27%" }} primary="Item" secondary={secondary ?
                                        "Item category"
                                        : null} />
                                    <ListItemText sx={{ width: "15%" }} primary="Quantity" secondary={secondary ?
                                        "Last Order: "
                                        : null} />

                                    <ListItemText sx={{ width: "20%" }} primary="Monthly Inflation" secondary={secondary ?
                                        "Annual inflation"
                                        : null} />

                                </ListItem>

                                {inventory.map((item, i) => {
                                    const categoryName = categories.filter((category) => {
                                        return (item.category === category.groupCode)
                                    }).map(entry => entry.name)

                                    const inflationString = categories.filter((category) => {

                                        return (item.category === category.groupCode)
                                    }).map(entry => {
                                        return entry.inflationIndexes
                                    })


                                    return (

                                        <ListItem key={i} secondaryAction={
                                            <IconButton position="left" onClick={(e) => alert(item.name)}>
                                                <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} color="primary" />
                                            </IconButton>
                                        }>
                                            <ListItemIcon sx={{ width: "10%" }}>
                                                <IconButton onClick={(e) => toggleFavorite(item)}>
                                                    {item.isFavorited ? <StarIcon fontSize={secondary ? 'medium' : 'medium'} color="primary" /> : <StarOutlineOutlinedIcon fontSize={secondary ? 'medium' : 'medium'} color="primary" />}

                                                </IconButton>
                                            </ListItemIcon>

                                            <ListItemButton sx={{ width: "30%" }} >
                                                    <ListItemText onClick={() => handleItemClick(item._id)} sx={{ width: 200 }}
                                                        primary={item.name}
                                                        secondary={secondary ? categoryName : null}
                                                    />
                                            </ListItemButton >

                                            <ListItemText sx={{ width: "15%"}} primary={item.quantity} secondary={secondary ?
                                                item.orderHistory.length === 0 ? "Not Available" :  formatMostRecentOrder(item.orderHistory[item.orderHistory.length - 1])
                                                : null} />

                                            {inflationString.length > 0 ?
                                                <ListItemText sx={{ width: "20%" }} primary={(((inflationString[0][0].value - inflationString[0][1].value) / inflationString[0][1].value) * 100).toFixed(2) + " %"}
                                                    secondary={secondary ?
                                                        "Annual  " + (((inflationString[0][0].value - inflationString[0][11].value) / inflationString[0][11].value) * 100).toFixed(1) + " %"
                                                        : null} />
                                                        : <ListItemText sx={{textAlign: "flex-start"}}>No Data</ListItemText>
                                            }
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
}

export default InteractiveList;