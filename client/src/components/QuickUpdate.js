import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

export const QuickUpdate = (props) => {
    const [inventory, setInventory] = useState(props.inventory)
    const [categories, setCategories] = useState(props.categories)

    return (
        <Typography variant="h3">QuickUpdate</Typography>
    )
}
export default QuickUpdate;