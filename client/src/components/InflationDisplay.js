import ListItemText from '@mui/material/ListItemText';

export const InflationDisplay = (props) => {
	const { categories, groupCode, secondary } = props;

	const inflationString = categories.filter((category) => {
		return (groupCode === category.groupCode)
	}).map(entry => {
		return entry.inflationIndexes
	})


	if (inflationString.length > 0) {
		return (
			<ListItemText  primary={(((inflationString[0][0].value - inflationString[0][1].value) / inflationString[0][1].value) * 100).toFixed(2) + " %"}
				secondary={secondary ?
					"Annual  " + (((inflationString[0][0].value - inflationString[0][11].value) / inflationString[0][11].value) * 100).toFixed(1) + " %"
					: null} />
		)
	} else {
		return (
			<ListItemText sx={{ textAlign: "flex-start" }}>No Data</ListItemText>
		)
	}
}

export default InflationDisplay;