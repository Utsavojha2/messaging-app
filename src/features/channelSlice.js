import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentChannelId : null
}; 

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    selectChannel : (state,action) => {
      state.currentChannelId = action.payload.channelId
    }
  }
});

export const { selectChannel } = channelSlice.actions;

export const getChannel = (state) => state.channel.currentChannelId;

export default channelSlice.reducer;


