export const ADD_PROFILE_NAME = "PROFILE_NAME::ADD_PROFILE_NAME";

export const addProfileName = (newProfileName) => ({
    type: ADD_PROFILE_NAME,
    payload: newProfileName,
});