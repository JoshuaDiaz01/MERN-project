import InteractiveList from "../components/InteractiveList";
import Grid from '@mui/material/Grid'; // Grid version 1




export const Main = (props) => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={12} md={8}>
                    <InteractiveList />

                </Grid>
                <Grid xs={0} md={4}>

                </Grid>

            </Grid>
        </>
    )
}

export default Main;