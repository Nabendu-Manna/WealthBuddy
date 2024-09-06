import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface userStare {
    userSearchKey: string
    userList: any[]
}

const initialState: userStare = {
    userSearchKey: '',
    userList: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserSearchKey: (state) => {
            state.userSearchKey = '';
        },
        setUserSearchKey: (state, action: PayloadAction<string>) => {
            state.userSearchKey = action.payload;
        },
    },
});

export const { resetUserSearchKey, setUserSearchKey } = userSlice.actions;

export const selectUserList = (state: RootState) => state.user.userList;
export const selectUserNameSearchKey = (state: RootState) => state.user.userSearchKey;

export default userSlice.reducer;
