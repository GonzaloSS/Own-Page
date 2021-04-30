import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import github from '../img/github.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));




export function NavBar() {


    const customTheme = createMuiTheme({
        palette: {
            secondary: {
                main: "#333333",
                contrastText: "#c9c9c9"
            }
        }
    });

    const classes = useStyles();
    return (

        <div>
            <ThemeProvider theme={customTheme}>
                <AppBar position="static" color={"secondary"} >
                    <Toolbar>
                     <Typography>Mi perfil</Typography>
                   <img class="imagenToolbar" type="button" src={github} />

                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}







export default NavBar;