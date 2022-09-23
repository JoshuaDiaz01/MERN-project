import { Autocomplete, Button, Typography, TextField, InputLabel, Select, MenuItem, Paper, ListItemIcon, IconButton, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { updateOrderHistoryById } from "../services/inventoryService"
const { updateItem, getItemById, deleteItem} = require('../services/localHostApiService')



const QuickUpdate = (props) => {
    const [id, setId] = useState({});
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [orderHistory, setOrderHistory] = useState([]);
    const { inventory, updateInventoryItem , removeFromDom} = props


    const handleDeleteOnClick = (e) => {
        deleteItem(id)
        .then((res) => removeFromDom(id))
        .catch((err) => console.error(err))
    }


    const [newQuantity, setNewQuantity] = useState("");


    const handleUpdateOnSubmit = (e) => {
        e.preventDefault();
        console.log(id);
        getItemById(id)
            .then((data) => {
                console.log(getTime());
                console.log(data.orderHistory);
                const newItem = {
                    name: data.name,
                    quantity: data.quantity += parseInt(quantity),
                    category: data.category,
                    isFavorited: data.isFavorited,
                }
                console.log(data.orderHistory);
                console.log(newItem);
                updateItem(id,newItem)
                    .then((item) => updateInventoryItem(item))
                    .catch((err) => console.log(err));

                updateOrderHistoryById(id, getTime())
                    .then((item) => {
                        console.log(item);
                        updateInventoryItem(item)
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => {
                console.log(error);
            })
            
        }

        const getTime = () => {
            let test = {"orderHistory": []}
            let orderEntry = {};
            let date = Date(Date.now());
            let dateToString = date.toString();
            orderEntry[dateToString] = parseInt(quantity);
            test.orderHistory.push(orderEntry); 
            return test;
        }

    return (
        <>
        <Paper elevation={8} sx={{padding:1, paddingLeft: 3, paddingRight: 3}}>


            <Typography variant='h5' align="right">Quick Update</Typography>
            <form onSubmit={handleUpdateOnSubmit}>
                <div>
                    <InputLabel size='medium'>Item</InputLabel>
                    <Select fullWidth="true" size="small" value={id} label="Item" onChange={(e) => setId(e.target.value)}>
                        {
                            inventory.map((item, i) => {
                                return ( <MenuItem value={item._id} key={i}>{item.name}</MenuItem>
                            )})
                        }
                    </Select>


                    {/* <TextField id= "outlined-basic" label="Name" variant="outlined" onChange = {(event) => {setName(event.target.value)}}/> */}
                </div>
                <br />
                <div>
                    <TextField id="outlined-basic" label="quantity added" fullWidth="true" size="small" variant="outlined" onChange={(event) => { setQuantity(event.target.value) }} />
                </div>
                <br />
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Button variant='outlined' type='Submit'>Update Quantity</Button>
                <Button variant='outlined' sx={{color:  "#F24F5B", borderColor: "#F24F5B"}}onClick={handleDeleteOnClick}><DeleteOutlineIcon/> Delete Item </Button>
                {/* <ListItemIcon>
                    <IconButton onClick={handleDeleteOnClick}><DeleteOutlineIcon></DeleteOutlineIcon></IconButton>
                </ListItemIcon> */}
                </Box>
            </form>
            </Paper>
        </>
    )
}

export default QuickUpdate;