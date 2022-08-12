import { createSlice } from '@reduxjs/toolkit'

export const playerListReducer = createSlice({
  name: 'playerList',
  initialState: {
    button: {
        teamGridIndex: {}
    }
  },
  reducers: {
    reableButton: (state, action) => {
        
    }
    

  },
})

export const { addOnePlayer } = playerListReducer.actions;
export const getTeamStore = (initialState) => initialState.playerList
export default playerListReducer.reducer;
