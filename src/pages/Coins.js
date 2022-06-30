import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import {SingleCoin} from "../config/api"
import { makeStyles, Typography } from "@material-ui/core";
import CoinInfo from "./CoinInfo";
import ReactHtmlParser from 'react-html-parser'

function Coins(){
    const { id } = useParams()
    const [coin, setCoin] = useState()

    const {currency, symbol} = CryptoState();

    const fetchCoin = async() =>{
        const { data } = await axios.get(SingleCoin(id))
    
        setCoin(data)
    }

    console.log(coin)

    useEffect(()=>{
        fetchCoin()
    },[])


    const useStyles = makeStyles((theme)=> ({
        container:{
            
            [theme.breakpoints.down("md")]:{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }
        },

        sidebar:{
            width: "40%",
            [theme.breakpoints.down("md")]:{
                width: "100%"
            },

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 25,
            borderRight: "2px solid grey"
        }
    }))

    const classes = useStyles()

    return(
        <div className={classes.container}>
            <div className={classes.sidebar}>
                <img 
                    src={coin?.image.large}
                    alt={coin?.name}
                    height="200"
                    style={{marginBottom: 20}}
                />

                <Typography variant="h3">
                    {coin?.name}
                </Typography>

                <Typography variant="subtitle1">
                    {ReactHtmlParser(coin?.description.en.split(".")[0])}.
                </Typography>

                <div>
                    <span style={{display: "flex"}}>
                        <Typography variant="h5">
                            Rank: {coin?.market_cap_rank}
                        </Typography>
                    </span>

                    <span style={{display: "flex"}}>
                        <Typography variant="h5">
                            Market Cap:
                            
                        </Typography>
                    </span>

                    <span style={{display: "flex"}}>
                        <Typography variant="h5">
                        {symbol} {" "}
                        {coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)}M
                        </Typography>
                    </span>


                    <span style={{display: "flex"}}>
                        <Typography variant="h5">
                            Current Price:
                            
                        </Typography>
                    </span>

                    <span style={{display: "flex"}}>
                        <Typography variant="h5">
                        {symbol} {" "}
                        {coin?.market_data.current_price[currency.toLowerCase()]}
                        </Typography>
                    </span>
                </div>
            </div>

        
          
        </div>
    )
}

export default Coins