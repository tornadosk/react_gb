import { AUTHORS } from '../../utils/constants';
export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const IS_UPDATE = "MESSAGES::IS_UPDATE";

// export const isUpdateBot = (chatId, isUpdate) => ({
//     type: IS_UPDATE,
//     payload: {
//         chatId,
//         isUpdate,
//     }
// });

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message: newMessage,
        chatId,
    },

});

let timeout;

export const AddMessageWithThunk = (newMessage, chatId) => (
    dispatch,
    //        getState
) => {
    dispatch(addMessage(newMessage, chatId));
    if (newMessage.author !== AUTHORS.BOT) {
        timeout = setTimeout(() => {
            dispatch(addMessage({ text: "I am bot", author: AUTHORS.BOT }, chatId));
        }, 3000);
    }
};
// export const AddIsUpdateWithThunk = (chatId, status) => (
//     dispatch,
// ) => {
//     dispatch(isUpdateBot(chatId, status));
// };

