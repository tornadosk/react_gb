import { REQUEST_STATUS } from "../../utils/constants";
import { MARKETPRICES_FAILURE, MARKETPRICES_REQUEST, MARKETPRICES_SUCCESS } from "./action";

const initialState = {
    marketPrices: [],
    request: {
        status: REQUEST_STATUS.IDLE,
        errror: "",
    },
};
export const marketPricesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARKETPRICES_REQUEST: {
            return {
                ...state,
                request: {
                    status: REQUEST_STATUS.PENDING,
                    error: "",
                },
            };
        }
        case MARKETPRICES_FAILURE: {
            return {
                ...state,
                request: {
                    status: REQUEST_STATUS.FAILURE,
                    error: action.error,
                },
            };
        }
        case MARKETPRICES_SUCCESS: {
            return {
                ...state,
                marketPrices: action.marketPrices,
                request: {
                    status: REQUEST_STATUS.SUCCESS,
                    error: "",
                },
            };
        }
        default:
            return state;
    }
};