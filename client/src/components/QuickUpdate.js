import { Autocomplete, Button, Typography, TextField, InputLabel, Select, MenuItem, Paper, ListItemIcon, IconButton, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const { updateItem, getItemById, deleteItem} = require('../services/localHostApiService')


const QuickUpdate = (props) => {
    const [id, setId] = useState({});
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [orderHistory, setOrderHistory] = useState([]);
    const { inventory, updateInventoryItem , removeFromDom} = props



    const handleUpdateOnSubmit = (e) => {
        e.preventDefault();
        const editedItem = getItemById(id);
        const newItem = {
            name: editedItem.name,
            quantity: console.log(editedItem.quantity) ,
            category: editedItem.category,
            orderHistory: editedItem.orderHistory,
        }
        updateItem(id,newItem)

            .then((item) => updateInventoryItem(item))
            .catch((err) => console.log(err));
    }

    const handleDeleteOnClick = (e) => {
        deleteItem(id)
        .then((res) => removeFromDom(id))
        .catch((err) => console.error(err))
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

export default QuickUpdate