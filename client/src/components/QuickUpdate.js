import { Autocomplete, Button, Typography , TextField} from '@mui/material';
import {useState} from 'react';
const { createItem } = require('../services/localHostApiService')

const QuickUpdate = (props) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [orderHistory, setOrderHistory] = useState([]);
    const {categories} = props

    const handleCreateOnSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name,
            quantity,
            category,
            orderHistory,
        }
        createItem(newItem)
        .then((item) => console.log(item))
        .catch((err) => console.log(err));
    }

    return (
        <>
        <Typography variant='h3'>Quick Update</Typography>
        <form onSubmit={handleCreateOnSubmit}>
            <div>
                <TextField id= "outlined-basic" label="Name" variant="outlined"/>
            </div>
            <br/>
            <div>
            <TextField id= "outlined-basic" label="quantity" variant="outlined"/>
            </div>

            <Button variant='outlined'>Submit</Button>
        </form>
        </>
    )
}

export default QuickUpdate;
