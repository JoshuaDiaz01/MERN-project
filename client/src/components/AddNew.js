import { Autocomplete, Button, Typography , TextField} from '@mui/material';
import {useState} from 'react';
const { createItem } = require('../services/localHostApiService')

const AddNew = (props) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [orderHistory, setOrderHistory] = useState([]);
    const [inflationHistory, setInflationHostory] = useState([]);
    const [isFavorited, setIsFavorited] = useState(false);
    const {categories} = props

    const handleCreateOnSubmit = (e) => {
        console.log(quantity)
        console.log(name)
        e.preventDefault();
        const newItem = {
            name,
            quantity,
            category,
            orderHistory,
            inflationHistory,
            isFavorited
        }
        createItem(newItem)
        .then((item) => console.log(item))
        .catch((err) => console.log(err));
    }

    return (
        <>
        <Typography variant='h3'>Add new</Typography>
        <form onSubmit={handleCreateOnSubmit}>
            <div>
                <TextField id= "outlined-basic"  label="Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
            </div>
            <br/>
            <div>
            <TextField id= "outlined-basic" label="quantity" variant="outlined" onChange={(e) => setQuantity(e.target.value)}/>
            </div>
            <br/>
            <Autocomplete disablePortal id= 'combo-box-demo' options={categories} getOptionLabel= {(option) => option.groupCode} sx= {{ width: 300 }} renderInput= {(params) => <TextField {...params} label="Category" onChange={(e) => setCategory(e.target.value)}/>}/>
            <br/>
            <Button variant='outlined' type='submit'>Submit</Button>
        </form>
        </>
    )
}

export default AddNew;