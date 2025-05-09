import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    nameSurname: string;
    email: string;
}

const initialState: UserState = {
    nameSurname: '',
    email: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserRedux(state, action: PayloadAction<{ nameSurname: string; email: string }>) {
            state.nameSurname = action.payload.nameSurname;
            state.email = action.payload.email;
        },
        resetUserRedux(state) {
            Object.assign(state, initialState);
        },
    },
});

export const { setUserRedux, resetUserRedux } = userSlice.actions;
export default userSlice.reducer;
