import StarIcon from '@mui/icons-material/Star';
import Paper from '@mui/material/Paper';
import { IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import axios from 'axios'


const WatchList = (props) => {
    const { inventory, updateInventoryItem, categories } = props

    const toggleFavorite = async (item) => {
        const updatedItem = { ...item, isFavorited: !item.isFavorited }

        axios.put('http://localhost:8000/api/items/' + item._id, updatedItem)
            .then((res) => updateInventoryItem(res.data))
            .catch((error) => console.log(error))

    }

    return (
        <>
            <Paper elevation={8} sx={{ padding: 1 }}>
                <Typography variant="h5" align="right">Watch List</Typography>
                <Typography variant="h6" align="center" sx={{ marginRight: 5 }}>In Inventory</Typography>

                <List>
                    {
                        inventory.filter((item) => item.isFavorited).map((entry, index) => {

                            // Code to get inflation data for the item based on its category
                            const inflationString = categories.filter((category) => {
                                return (entry.category === category.groupCode)
                            }).map(entry => entry.inflationIndexes)
                            // const inflationArray = inflationString.toString().split(",")

                            return (
                                <ListItem key={index}>
                                    <ListItemIcon onClick={(e) => toggleFavorite(entry)}>
                                        <IconButton><StarIcon fontSize={'medium'} color="primary" /></IconButton>
                                    </ListItemIcon>
                                    <ListItemText key={index} >{entry.name}</ListItemText>

                                    {/* IF YOU DON'T HAVE INFLATION DATA FOR EVER CATEGORY, IT WILL CRASH. ONLY UNCOMMENT IF YOU DO. */}
                                    <ListItemText primary={(((inflationString[0][0].value - inflationString[0][1].value) / inflationString[0][1].value) * 100).toFixed(2) + " %"} />

                                </ListItem>
                )
                        })
                    }
            </List>
            <Typography variant="h6" align="center" sx={{ marginRight: 5 }}>Not In Inventory</Typography>
        </Paper>
        </>
    )
}
export default WatchList;