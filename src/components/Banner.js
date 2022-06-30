import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Slider from '../components/Slider'

const useStyles = makeStyles(()=> ({
    banner:{
        backgroundImage: "url(./banner.jpg)",       
    },

    bannerContent:{
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around"
    },

    tagline:{
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"

    }
}))

function Banner(){

    const classes = useStyles();

    return(
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,

                        }}
                    >
                        Crypto Trading
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "darkgray",
                            textTransform: "capitalize"
                        }}
                    >

Coinbase makes it easy to buy and sell most popular cryptocurrencies

                    </Typography>
                </div>

                <Slider />
            </Container>

        </div>
    )
}

export default Banner