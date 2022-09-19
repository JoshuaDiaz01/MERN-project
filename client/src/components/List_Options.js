import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import { ListItemButton } from '@mui/material';
import { positions } from '@mui/system';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';


// function generate(element) {
//     return [0, 1, 2].map((value) =>
//         React.cloneElement(element, {
//             key: value,
//         }),
//     );
// }

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export const InteractiveList = (props) => {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const handleClick = (e) => {
        alert("navigate to item")
    }

    return (
        // <Paper elevation={24}>
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>


            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={dense}
                            onChange={(event) => setDense(event.target.checked)}
                        />
                    }
                    label="Enable dense"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={secondary}
                            onChange={(event) => setSecondary(event.target.checked)}
                        />
                    }
                    label="Show Categories"
                />
            </FormGroup>

            <Grid container spacing={8} >

                <Grid item xs={12} md={8}>
                    <Typography sx={{ mt: 4, mb: 2, backgroundColor: "blue" }} variant="h6" component="div">
                    </Typography>
                    <List dense={dense} sx={{ width: 600 }} >
                        {/* {generate( */}
                        <h2>-------------------------Option 1-------------------------------</h2>
                        <ListItem>

                            <ListItemIcon>
                                <VisibilityOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />

                            </ListItemIcon>




                            <ListItemIcon>
                                <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick}>

                                <ListItemText sx={{ width: 200 }}
                                    primary="Plywood"
                                    secondary={secondary ? 'Lumber and Wood Products' : null}
                                />
                            </ListItemButton>
                            <ListItemText>2 weeks left</ListItemText>
                            <ListItemIcon>
                                <TrendingUpOutlinedIcon fontSize='small' />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem>
                            <ListItemIcon >
                                <VisibilityOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />
                            </ListItemIcon>
                            <ListItemIcon>
                                <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick}>

                                <ListItemText sx={{ width: 200 }}
                                    primary="4x4s"
                                    secondary={secondary ? 'Lumber and Wood Products' : null}
                                />
                            </ListItemButton>

                            <ListItemText>1 month left</ListItemText>
                            <ListItemIcon>
                                <TrendingUpOutlinedIcon fontSize='large' />
                            </ListItemIcon>
                        </ListItem>
                        <h2>-------------------------Option 2-------------------------------</h2>
                        <ListItem>
                            <ListItemIcon >
                                <StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />
                            </ListItemIcon>
                            <ListItemIcon>
                                <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                            </ListItemIcon>
                            <ListItemButton onClick={handleClick}>
                                <ListItemText sx={{ width: 200 }}
                                    primary="Deck screws"
                                    secondary={secondary ? 'Metals and Metal Products' : null}
                                />
                            </ListItemButton>
                            <ListItemText>2 months left</ListItemText>
                            <ListItemIcon>
                                <TrendingFlatOutlinedIcon fontSize='medium' />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem>
                            <ListItemIcon >
                                <StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />
                            </ListItemIcon>
                            <ListItemIcon>
                                <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                            </ListItemIcon>
                            <ListItemButton onClick={handleClick}>
                                <ListItemText sx={{ width: 200 }}
                                    primary="4x4s"
                                    secondary={secondary ? 'Wood and Wood Products' : null}
                                />
                            </ListItemButton>
                            <ListItemText>1 month left</ListItemText>
                            <ListItemIcon>
                                <TrendingUpOutlinedIcon fontSize='large' />
                            </ListItemIcon>
                        </ListItem>
                        <h2>-------------------------Option 3-------------------------------</h2>
                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <VisibilityOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />
                            </IconButton>

                        }>
                            <ListItemIcon>
                                <IconButton>

                                    <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick} edge="end">
                                <ListItemText sx={{ width: 200 }}
                                    primary="Stain"
                                    secondary={secondary ? 'Chemicals and Allied Products' : null}
                                />
                            </ListItemButton>
                            <ListItemText>2 months left</ListItemText>
                            <ListItemIcon>
                                <TrendingFlatOutlinedIcon fontSize='medium' />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <VisibilityOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />
                            </IconButton>

                        }>
                            <ListItemIcon>
                                <IconButton>

                                    <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick} edge="end">
                                <ListItemText sx={{ width: 200 }}
                                    primary="Concrete"
                                    secondary={secondary ? 'Building Materials' : null}
                                />
                            </ListItemButton>
                            <ListItemText>2 months left</ListItemText>
                            <ListItemIcon>
                                <TrendingUpOutlinedIcon fontSize='medium' />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <VisibilityOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />
                            </IconButton>

                        }>

                            <ListItemIcon>
                                <IconButton>

                                    <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick}>

                                <ListItemText sx={{ width: 200 }}
                                    primary="4x4s"
                                    secondary={secondary ? 'Lumber and Wood Products' : null}
                                />
                            </ListItemButton>

                            <ListItemText>1 month left</ListItemText>
                            <ListItemIcon>
                                <TrendingUpOutlinedIcon fontSize='large' />
                            </ListItemIcon>
                        </ListItem>

                        <h2>-------------------------Option 4-------------------------------</h2>

                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />
                            </IconButton>

                        }>
                            <ListItemIcon>
                                <IconButton>

                                    <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick} edge="end">
                                <ListItemText sx={{ width: 200 }}
                                    primary="Stain"
                                    secondary={secondary ? 'Chemicals and Allied Products' : null}
                                />
                            </ListItemButton>
                            <ListItemText>2 months left</ListItemText>
                            <ListItemIcon>
                                <TrendingFlatOutlinedIcon fontSize='medium' />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />
                            </IconButton>

                        }>
                            <ListItemIcon>
                                <IconButton>

                                    <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick} edge="end">
                                <ListItemText sx={{ width: 200 }}
                                    primary="Concrete"
                                    secondary={secondary ? 'Building Materials' : null}
                                />
                            </ListItemButton>
                            <ListItemText>2 months left</ListItemText>
                            <ListItemIcon>
                                <TrendingUpOutlinedIcon fontSize='medium' />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />
                            </IconButton>

                        }>

                            <ListItemIcon>
                                <IconButton>

                                    <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick}>

                                <ListItemText sx={{ width: 200 }}
                                    primary="4x4s"
                                    secondary={secondary ? 'Lumber and Wood Products' : null}
                                />
                            </ListItemButton>

                            <ListItemText>1 month left</ListItemText>
                            <ListItemIcon>
                                <TrendingUpOutlinedIcon fontSize='large' />
                            </ListItemIcon>
                        </ListItem>

                        <h2>-------------------------Option 5-------------------------------</h2>

                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                            </IconButton>

                        }>
                            <ListItemIcon>
                                <IconButton>
                                    <StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />

                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick} edge="end">
                                <ListItemText sx={{ width: 200 }}
                                    primary="Stain"
                                    secondary={secondary ? 'Chemicals and Allied Products' : null}
                                />
                            </ListItemButton>
                            <ListItemText>2 months left</ListItemText>
                            <ListItemIcon>
                                <TrendingFlatOutlinedIcon fontSize='medium' />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                            </IconButton>

                        }>
                            <ListItemIcon>
                                <IconButton>
<StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />

                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick} edge="end">
                                <ListItemText sx={{ width: 200 }}
                                    primary="Concrete"
                                    secondary={secondary ? 'Building Materials' : null}
                                />
                            </ListItemButton>
                            <ListItemText>2 months left</ListItemText>
                            <ListItemIcon>
                                <TrendingUpOutlinedIcon fontSize='medium' />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem secondaryAction={
                            <IconButton position="left">
                                <LibraryAddOutlinedIcon fontSize={dense ? 'small' : 'medium'} />
                            </IconButton>

                        }>

                            <ListItemIcon>
                                <IconButton>
<StarOutlineOutlinedIcon fontSize={secondary ? 'large' : 'medium'} />

                                </IconButton>
                            </ListItemIcon>

                            <ListItemButton onClick={handleClick}>

                                <ListItemText sx={{ width: 200 }}
                                    primary="4x4s"
                                    secondary={secondary ? 'Lumber and Wood Products' : null}
                                />
                            </ListItemButton>

                            <ListItemText>1 month left</ListItemText>
                            <ListItemIcon>
                                <TrendingUpOutlinedIcon fontSize='large' />
                            </ListItemIcon>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
        // </Paper>
    );
}

export default InteractiveList;