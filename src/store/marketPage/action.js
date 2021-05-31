import { API_URL } from "../../utils/constants";

export const MARKETPRICES_REQUEST = 'MARKETPRICES::REQUEST';
export const MARKETPRICES_SUCCESS = 'MARKETPRICES::SUCCESS';
export const MARKETPRICES_FAILURE = 'MARKETPRICES::FAILURE';

export const marketPricesRequest = () => ({
    type: MARKETPRICES_REQUEST,
});

export const marketPricesSuccess = (marketPrices) => ({
    type: MARKETPRICES_SUCCESS,
    marketPrices,
});

export const marketPricesFailure = (error) => ({
    type: MARKETPRICES_FAILURE,
    error,
});

// export const getMarketPrices = () => (dispatch) => {
//     dispatch(marketPricesRequest());

//     fetch(API_URL)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("request failed with status " + response.status);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             dispatch(marketPricesSuccess(data));
//         })
//         .catch((err) => {
//             dispatch(marketPricesFailure(err.message));
//         });
// };
export const getMarketPrices = () => async (dispatch) => {
    dispatch(marketPricesRequest());
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("request failed with status " + response.status);
        }
        const data = await response.json();
        dispatch(marketPricesSuccess(data));
    } catch (err) {
        dispatch(marketPricesFailure(err.message));
    }
};