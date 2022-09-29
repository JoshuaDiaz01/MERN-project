import StarIcon from '@mui/icons-material/Star';
import Paper from '@mui/material/Paper';
import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {InflationDisplay} from '../components/InflationDisplay';

export const WatchList = (props) => {
    const { inventory, updateInventoryItem, categories } = props
    const navigate = useNavigate();
    const toggleFavorite = async (item) => {
        const updatedItem = { ...item, isFavorited: !item.isFavorited }

        axios.put('http://localhost:8000/api/items/' + item._id, updatedItem)
            .then((res) => updateInventoryItem(res.data))
            .catch((error) => console.log(error))
    }

    const handleItemClick = (id) => {
        navigate(`/items/${id}`);
    }

    return (
        <>
            <Paper elevation={8} sx={{ padding: 1, paddingRight: 3 }}>
                <Typography variant="h5" align="right">Watch List</Typography>
                {/* <Typography variant="h6" align="center" sx={{ marginRight: 5 }}>In Inventory</Typography> */}

                <List>
                    {
                        inventory.filter((item) => item.isFavorited).map((entry, index) => {

                            return (
                                <ListItem key={index} >
                                    <ListItemIcon sx={{ width: "10%" }} onClick={(e) => toggleFavorite(entry)}>
                                        <IconButton><StarIcon fontSize={'medium'} color="primary" /></IconButton>
                                    </ListItemIcon>
                                    <ListItemButton>

                                        <ListItemText key={index} onClick={() => handleItemClick(entry._id)}>{entry.name}</ListItemText>
                                    </ListItemButton>

                                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>

                                    <InflationDisplay sx={{ width: "10%" }} categories={categories} groupCode={entry.category} secondary={""}/>
                                        
                                    </Box>

                                </ListItem>
                            )
                        })
                    }
                </List>
                {/* <Typography variant="h6" align="center" sx={{ marginRight: 5 }}>Not In Inventory</Typography> */}
            </Paper>
        </>
    )
}
export default WatchList;