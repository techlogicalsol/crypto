import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, Toolbar, Typography, ThemeProvider } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(()=> ({
    title:{
        flex: 1,
        color: "gold",
        fontWeight: "bold",
        cursor: "pointer",

    }
}))

const Header = () =>{

    const classes = useStyles() 

    const history = useHistory()

    const {currency, setCurrency} = CryptoState() 
    console.log(currency)

    const darkTheme = createTheme({
        palette: {
            primary:{
                main: "#fff",
            },
            type: "dark",
        }
    })

    return(
        <div>
            <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography 
                        onClick={() => history.push("/")}
                        className={classes.title}
                        variant="h5"
                        >
                            Crypto Trading
                        </Typography>

                        <Select variant="outlined" 
                        style={{
                            width: 100,
                            height: 30,
                            marginLeft: 15,
                        }}
                        value={currency}
                        onChange={(e)=> setCurrency(e.target.value)}
                        >
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'PKR'}>PKR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>

            </AppBar>
            </ThemeProvider>
        </div>
    )
}

export default Header