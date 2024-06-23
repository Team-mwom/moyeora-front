import { createSlice } from '@reduxjs/toolkit';

export interface ProfileConfig 
{ nickName: string, owner: boolean }


export const profileConfigSlice = createSlice({
  name: 'profileConfig',
  initialState: {nickName:"",owner:false},
  reducers: {
     setProfileConfig: (state, action) => {//배열중 하나 저장
      const data : ProfileConfig = action.payload;
      state.nickName = data.nickName;
      state.owner = data.owner;
      },
  },
});

export const { setProfileConfig } = profileConfigSlice.actions;
export default profileConfigSlice.reducer;
