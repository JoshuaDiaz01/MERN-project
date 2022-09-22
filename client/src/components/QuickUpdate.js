import { Autocomplete, Button, Typography, TextField, InputLabel, Select, MenuItem, Paper, ListItemIcon, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const { updateItem, getItemById, deleteItem} = require('../services/localHostApiService')


const QuickUpdate = (props) => {
    const [id, setId] = useState({});
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [orderHistory, setOrderHistory] = useState([]);
<<<<<<< Updated upstream
    const { inventory, updateInventoryItem } = props
    const [test, setTest] = useState("")
=======
    const { inventory, updateInventoryItem , removeFromDom} = props


>>>>>>> Stashed changes

    const handleUpdateOnSubmit = (e) => {
        e.preventDefault();
        const editedItem = getItemById(id);
        setTest(editedItem.quantity);
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
        <Paper elevation={8} sx={{padding:1}}>


            <Typography variant='h5' align="right">Quick Update</Typography>
            <form onSubmit={handleUpdateOnSubmit}>
                <div>
                    <InputLabel size='medium'>Item</InputLabel>
                    <Select value={id} label="Item" onChange={(e) => setId(e.target.value)}>
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
                    <TextField id="outlined-basic" label="quantity" variant="outlined" onChange={(event) => { setQuantity(event.target.value) }} />
                </div>
                <br />
                <Button variant='outlined' type='Submit'>Submit</Button>
                <ListItemIcon>
                    <IconButton onClick={handleDeleteOnClick}><DeleteOutlineIcon></DeleteOutlineIcon></IconButton>
                </ListItemIcon>
            </form>
            </Paper>
        </>
    )
}

export default QuickUpdate