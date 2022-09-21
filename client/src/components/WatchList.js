import StarIcon from '@mui/icons-material/Star';
import TrendingFlatOutlined from "@mui/icons-material/TrendingFlatOutlined";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import axios from 'axios'


const WatchList = (props) => {
    const {inventory, updateInventoryItem} = props

    const toggleFavorite = async (item) => {
        const updatedItem = {...item, isFavorited: !item.isFavorited}

        axios.put('http://localhost:8000/api/items/' + item._id, updatedItem)
        .then((res) => updateInventoryItem(res.data))
        .catch((error) => console.log(error))
        
    }

    return (
        <>
            <Typography variant="h4">Watch List</Typography>
            <Typography variant="h6">In Inventory</Typography>

            <List>
            {
                inventory.filter((item) => item.isFavorited).map((entry, index) => {
                    return (
                            <ListItem key={index}>
                                <ListItemIcon onClick={(e) => toggleFavorite(entry)}><StarIcon fontSize={'large'} color="primary"/></ListItemIcon>
                                <ListItemText key={index} >{entry.name}</ListItemText> 
                                <ListItemIcon><TrendingFlatOutlined fontSize='medium' color="success" /></ListItemIcon>
                            </ListItem>
                    )
                })
            }
            </List>
            <Typography variant="h6">Not In Inventory</Typography>
        </>
    )
}
export default WatchList;