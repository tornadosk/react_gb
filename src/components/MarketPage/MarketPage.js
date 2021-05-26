import { CircularProgress, Divider, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMarketPrices } from '../../store/marketPage/action';
import { REQUEST_STATUS } from '../../utils/constants';

export const MarketPage = () => {
    // const [marketPrices, setMarketPrices] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('');

    // const getMarketPrices = async () => {
    // try {
    //       const response = await fetch(API_URL);
    //         const data = await response.json();
    //         setMarketPrices(data);
    // } catch (err) {

    // } finally {

    // }

    // }
    const marketPrices = useSelector(state => state.marketPage.marketPrices);
    const marketPricesStatus = useSelector(state => state.marketPage.request.status);
    const marketPricesError = useSelector(state => state.marketPage.request.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMarketPrices());
        // getMarketPrices();
    }, []);
    if (marketPricesStatus === REQUEST_STATUS.PENDING) {
        return <CircularProgress />;
    }
    if (marketPricesError) {
        return <Typography variant="h1" color="inherit">ERROR: {marketPricesError}</Typography>;
    }
    return (
        <>
            <div>Market Price Page</div>
            {marketPrices.map((marketPrice) => (
                <div key={marketPrice.id}>
                    <Typography variant="h4" color="inherit">{marketPrice.name}</Typography>
                    <Typography variant="h5" color="inherit">Current Price: {marketPrice.current_price}</Typography>
                    <Typography variant="h6" color="inherit">24h Price Change: {marketPrice.price_change_percentage_24h}%</Typography>
                    <Divider></Divider>
                </div>
            ))}
        </>
    )
}