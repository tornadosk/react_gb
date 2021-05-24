import { ADD_CHAT } from "../chats/actions";
import { ADD_MESSAGE } from "./actions";
import { IS_UPDATE } from "./actions";

const initialState = {
    messagesList: {},
    isUpdate: {}, // newMessgeBot: false,
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesList:
                {
                    ...state.messagesList,
                    [action.payload.chatId]: [
                        ...state.messagesList[action.payload.chatId],
                        action.payload.message,
                    ],
                },
            };
        }
        // case IS_UPDATE:
        //     return {
        //         ...state,
        //         isUpdate:
        //         {
        //             ...state.isUpdate,
        //             [action.payload.chatId]: [
        //                 ...state.isUpdate[action.payload.chatId], action.payload.isUpdate,
        //             ],


        //         },
        //     };
        case ADD_CHAT: {
            return {
                ...state,
                messagesList:
                {
                    ...state.messagesList,
                    [action.payload.id]: [],
                }
            };
        }
        default:
            return state;
    }
}
