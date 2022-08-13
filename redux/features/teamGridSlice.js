import { createSlice } from '@reduxjs/toolkit'

export const teamGridReducer = createSlice({
  name: 'teamGrid',
  initialState: {
    0: {
        filled: false,
        player: {}, 
        position: 1,
        prevPlayer: {},
        prevFilled: false,
        prevFilled: false
    }, 
    1: {
        filled: false,
        player: {},
        position: 1,
        prevPlayer: {},
        prevFilled: false
    }, 
    2: {
        filled: false,
        player: {},
        position: 2,
        prevPlayer: {},
        prevFilled: false
    }, 
    3: {
        filled: false,
        player: {},
        position: 2,
        prevPlayer: {},
        prevFilled: false
    }, 
    4: {
        filled: false,
        player: {},
        position: 2,
        prevPlayer: {},
        prevFilled: false
    }, 
    5: {
        filled: false,
        player: {},
        position: 2,
        prevPlayer: {},
        prevFilled: false
    }, 
    6: {
        filled: false,
        player: {},
        position: 2,
        prevPlayer: {},
        prevFilled: false
    }, 
    7: {
        filled: false,
        player: {},
        position: 3,
        prevPlayer: {},
        prevFilled: false
    }, 
    8: {
        filled: false,
        player: {},
        position: 3,
        prevPlayer: {},
        prevFilled: false
    }, 
    9: {
        filled: false,
        player: {},
        position: 3,
        prevPlayer: {},
        prevFilled: false
    }, 
    10: {
        filled: false,
        player: {},
        position: 3,
        prevPlayer: {},
        prevFilled: false
    }, 
    11: {
        filled: false,
        player: {},
        position: 3,
        prevPlayer: {},
        prevFilled: false
    }, 
    12: {
        filled: false,
        player: {},
        position: 4,
        prevPlayer: {},
        prevFilled: false
    }, 
    13: {
        filled: false,
        player: {},
        position: 4,
        prevPlayer: {},
        prevFilled: false
    }, 
    14: {
        filled: false,
        player: {},
        position: 4,
        prevPlayer: {},
        prevFilled: false
    }
  },
  reducers: {
    addOnePlayer: (state, action) => {

      const playerToBeAdded = action.payload
    
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      // if player exists in teamgrid, dont add him. 

      switch (playerToBeAdded.element_type) {

        case 1: // GKP 
            if (!state[0].filled) {
                state[0].player = playerToBeAdded
                state[0].filled = true
                state[0].prevFilled = true
            } else if (!state[1].filled) {
                state[1].player = playerToBeAdded
                state[1].filled = true
                state[1].prevFilled = true
            }
            break;
        case 2: // DEF
            if (!state[2].filled) {
                state[2].player = playerToBeAdded
                state[2].filled = true
                state[2].prevFilled = true
            } else if ((!state[3].filled)) {
                state[3].player = playerToBeAdded
                state[3].filled = true
                state[3].prevFilled = true
            } else if ((!state[4].filled)) {
                state[4].player = playerToBeAdded
                state[4].filled = true
                state[4].prevFilled = true
            } else if ((!state[5].filled)) {
                state[5].player = playerToBeAdded
                state[5].filled = true
                state[5].prevFilled = true
            } else if (!state[6].filled) {
                state[6].player = playerToBeAdded
                state[6].filled = true
                state[6].prevFilled = true
            }
            break;
        case 3: // MID
            if (!state[7].filled) {
                state[7].player = playerToBeAdded
                state[7].filled = true
                state[7].prevFilled = true
            } else if ((!state[8].filled)) {
                state[8].player = playerToBeAdded
                state[8].filled = true
                state[8].prevFilled = true
            } else if ((!state[9].filled)) {
                state[9].player = playerToBeAdded
                state[9].filled = true
                state[9].prevFilled = true
            } else if ((!state[10].filled)) {
                state[10].player = playerToBeAdded
                state[10].filled = true
                state[10].prevFilled = true
            } else if ((!state[11].filled)) {
                state[11].player = playerToBeAdded
                state[11].filled = true
                state[11].prevFilled = true
            }
            break;
        case 4: // FWD
            if (!state[12].filled) {
                state[12].player = playerToBeAdded
                state[12].filled = true
                state[12].prevFilled = true
            } else if ((!state[13].filled)) {
                state[13].player = playerToBeAdded
                state[13].filled = true
                state[13].prevFilled = true
            } else if ((!state[14].filled)) {
                state[14].player = playerToBeAdded
                state[14].filled = true
                state[14].prevFilled = true
            } 
      }
      
    },
    removeOnePlayer: (state, action) => {

      let index = action.payload

      state[index].filled = false
      state[index].prevPlayer = state[index].player
      console.log(state[index].prevPlayer)
      state[index].player = {}

    },
    revertCardToPrevPlayer: (state, action) => {
      let index = action.payload
      state[index].player = state[index].prevPlayer
      state[index].filled = true
    }
  },
})

export const { addOnePlayer, removeOnePlayer, revertCardToPrevPlayer } = teamGridReducer.actions;
export const getTeamStore = (initialState) => initialState.teamGrid
export default teamGridReducer.reducer;
