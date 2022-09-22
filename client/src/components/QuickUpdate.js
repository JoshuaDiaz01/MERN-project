import { Autocomplete, Button, Typography, TextField, InputLabel, Select, MenuItem, Paper } from '@mui/material';
import { useState } from 'react';
const { updateItem, getItemById } = require('../services/localHostApiService')


const QuickUpdate = (props) => {
    const [id, setId] = useState({});
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [orderHistory, setOrderHistory] = useState([]);
    const { inventory, updateInventoryItem } = props

    const handleUpdateOnSubmit = (e) => {
        e.preventDefault();
        const editedItem = getItemById(id);
        const newItem = {
            name: editedItem.name,
            quantity,
            category: editedItem.category,
            orderHistory: editedItem.orderHistory,
        }
        updateItem(id,newItem)

            .then((item) => updateInventoryItem(item))
            .catch((err) => console.log(err));
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
            </form>
            </Paper>
        </>
    )
}

export default QuickUpdate