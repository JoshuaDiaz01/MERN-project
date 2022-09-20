import StarOutlineOutlined from "@mui/icons-material/StarOutlineOutlined";
import TrendingFlatOutlined from "@mui/icons-material/TrendingFlatOutlined";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState, useEffect } from "react";


const WatchList = (props) => {
    const [inventory, setInventory] = useState(props.inventory)
    const [categories, setCategories] = useState(props.categories)

    return (
        <>
            <Typography variant="h3">WatchList</Typography>
            {
                inventory.filter((item) => item.isFavorited).map((entry, index) => {
                    return (
                        <List>
                            <ListItem>
                                <ListItemIcon><StarOutlineOutlined fontSize={'large'} color="primary"/></ListItemIcon>
                                <ListItemText key={index} >{entry.name}</ListItemText> 
                                <ListItemIcon><TrendingFlatOutlined fontSize='medium' color="success" /></ListItemIcon>
                            </ListItem>
                        </List>
                    )
                })
            }
        </>
    )
}
export default WatchList;