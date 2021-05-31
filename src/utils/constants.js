export const AUTHORS = {
    HUMAN: 'human',
    BOT: 'bot',
}

export const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

export const REQUEST_STATUS = {
    IDLE: 0,
    PENDING: 1,
    SUCCESS: 2,
    FAILURE: 3.
};