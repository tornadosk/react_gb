import { ADD_PROFILE_NAME } from "./actions";

const initialState = {
    profileName: [],
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE_NAME: {
            return {
                // ...state,
                profileName: [
                    state.profileName, action.payload //no need in ...state, needs replace not add(!)
                ],
            };
        }
        default:
            return state;
    }
};