import { Autocomplete, Button, Typography , TextField} from '@mui/material';
import {useState} from 'react';
const { createItem } = require('../services/localHostApiService')

const AddNew = (props) => {
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
            <br/>
            <Autocomplete disablePortal id= 'combo-box-demo' options={{categories}} sx= {{ width: 300 }} renderInput= {(params) => <TextField {...params } label="Category"/> }/>
            <br/>
            <Button variant='outlined'>Submit</Button>
        </form>
        </>
    )
}

export default AddNew;