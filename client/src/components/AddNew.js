import { Autocomplete, Button, Typography , TextField, Paper, Box} from '@mui/material';
import {useState} from 'react';
import { updateOrderHistoryById } from "../services/inventoryService"

const { createItem } = require('../services/localHostApiService')

const AddNew = (props) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [orderHistory, setOrderHistory] = useState([]);
    const [inflationHistory, setInflationHistory] = useState([]);
    const [isFavorited, setIsFavorited] = useState(false);
    const {addInventoryItem} = props

    const categoryOptions = [
        {
            id: 1,
            label: "Farm products",

        },
        {
            id:2,
            label: "Processed foods and feeds",

        },
        {
            id:3,
            label: "Textile products and apparel",

        },
        {
            id: 4,
            label: "Hides, skins, leather, and realted products",
        },
        {
            id: 5,
            label: "Fuels and related products and power",
        },
        {
            id: 6,
            label: "Chemicals and allies products",
        },
        {
            id: 7,
            label: "Rubber and plastic products",
        },
        {
            id: 8,
            label: "Lumber and wood products",
        },
        {
            id: 9,
            label: "Pulp, paper, and allied products",
        },
        {
            id: 10,
            label: "Metals and metal products",
        },
        {
            id: 11,
            label: "Machinery and equipment",
        },
        {
            id: 12,
            label: "Furniture and househol durables",
        },
        
        {
            id: 13,
            label: "Nonmetallic mineral products",
        },
        {
            id: 14,
            label: "Transportation equipment",
        },
        {
            id: 15,
            label: "Miscellaneous products",
        },
        {
            id: 30,
            label: "Transportation services",
        },
        {
            id: 33,
            label: "Publishing sales, excluding software",
        },
        {
            id: 34,
            label: "Software publishing",
        },
        {
            id: 36,
            label: "Advertising space and time sales",
        },
        {
            id: 37,
            label: "Telecommunication, cable, and internet user services",
        },
        {
            id: 44,
            label: "Rental and leasing of goods (partial)",
        },
        {
            id: 51,
            label: "Health care services",
        },
        {
            id: 52,
            label: "Educational services (partial)",
        },
        {
            id: 56,
            label: "Entertainment services (partial)",
        },
        {
            id: 57,
            label: "Wholesale trade services",
        },
        {
            id: 58,
            label: "Retail trade services",
        },
        {
            id: 61,
            label: "Contract work on textile products, apparel, and leather",
        }
    ];

    const handleCreateOnSubmit = (e) => {

        e.preventDefault();
        const newItem = {
            name,
            quantity,
            category,
            orderHistory: getTime(),
            inflationHistory,
            isFavorited
        }


        createItem(newItem)
        .then((item) => {
            addInventoryItem(item)

        })
        .catch((err) => console.log(err));
    }

    const getTime = () => {
        let test = {"orderHistory": []}
        let orderEntry = {};
        let date = Date(Date.now());
        let dateToString = date.toString();
        orderEntry[dateToString] = parseInt(quantity);
        // test.orderHistory.push(orderEntry); 

        return orderEntry;
    }

    return (
        <>
        <Paper elevation={8} sx={{padding:1, paddingLeft: 3, paddingRight: 3}}>
        <Typography variant='h5' align="right">Add new</Typography>
        <form onSubmit={handleCreateOnSubmit}>
            <Box>
                <TextField id= "outlined-basic"  label="Name" variant="outlined" fullWidth="true" size="small" onChange={(e) => setName(e.target.value)}/>
            </Box>
            <br/>
            <div>
            <TextField id= "outlined-basic" label="quantity" variant="outlined" fullWidth="true" size="small" onChange={(e) => setQuantity(e.target.value)}/>
            </div>
            <br/>
            <Autocomplete disablePortal id= 'combo-box-demo' options={categoryOptions} fullWidth="true" size="small" onChange={(a, b) => setCategory(b.id)} renderInput= {(params) => <TextField {...params} label="Category" />}/>
            <br/>

            <Button variant='outlined' type='submit'>Add New Item</Button>


        </form>
        </Paper>
        </>
    )
}

export default AddNew;