import { createSlice } from '@reduxjs/toolkit'

export const teamGridReducer = createSlice({
  name: 'teamGrid',
  initialState: {
    0: {
        filled: false,
        player: {}, 
        position: 1
    }, 
    1: {
        filled: false,
        player: {},
        position: 1
    }, 
    2: {
        filled: false,
        player: {},
        position: 2
    }, 
    3: {
        filled: false,
        player: {},
        position: 2
    }, 
    4: {
        filled: false,
        player: {},
        position: 2
    }, 
    5: {
        filled: false,
        player: {},
        position: 2
    }, 
    6: {
        filled: false,
        player: {},
        position: 2
    }, 
    7: {
        filled: false,
        player: {},
        position: 3
    }, 
    8: {
        filled: false,
        player: {},
        position: 3
    }, 
    9: {
        filled: false,
        player: {},
        position: 3
    }, 
    10: {
        filled: false,
        player: {},
        position: 3
    }, 
    11: {
        filled: false,
        player: {},
        position: 3
    }, 
    12: {
        filled: false,
        player: {},
        position: 4
    }, 
    13: {
        filled: false,
        player: {},
        position: 4
    }, 
    14: {
        filled: false,
        player: {},
        position: 4
    }
  },
  reducers: {
    addOnePlayer: (state, action) => {
    
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      switch (action.payload.element_type) {

        case 1: // GKP 
            if (!state[0].filled) {
                state[0].player = action.payload
                state[0].filled = true
            } else if (!state[1].filled) {
                state[1].player = action.payload
                state[1].filled = true
            }
            break;
        case 2: // DEF
            if (!state[2].filled) {
                state[2].player = action.payload
                state[2].filled = true
            } else if ((!state[3].filled)) {
                state[3].player = action.payload
                state[3].filled = true
            } else if ((!state[4].filled)) {
                state[4].player = action.payload
                state[4].filled = true
            } else if ((!state[5].filled)) {
                state[5].player = action.payload
                state[5].filled = true
            } else if (!state[6].filled) {
                state[6].player = action.payload
                state[6].filled = true
            }
            break;
        case 3: // MID
            if (!state[7].filled) {
                state[7].player = action.payload
                state[7].filled = true
            } else if ((!state[8].filled)) {
                state[8].player = action.payload
                state[8].filled = true
            } else if ((!state[9].filled)) {
                state[9].player = action.payload
                state[9].filled = true
            } else if ((!state[10].filled)) {
                state[10].player = action.payload
                state[10].filled = true
            } else if ((!state[11].filled)) {
                state[11].player = action.payload
                state[11].filled = true
            }
            break;
        case 4: // FWD
            if (!state[12].filled) {
                state[12].player = action.payload
                state[12].filled = true
            } else if ((!state[13].filled)) {
                state[13].player = action.payload
                state[13].filled = true
            } else if ((!state[14].filled)) {
                state[14].player = action.payload
                state[14].filled = true
            } 
      }

      
    },
    removeOnePlayer: (state, action) => {

      let index = action.payload
      console.log(index)

      state[index].filled = false
      state[index].player = {}

    }
  },
})

export const { addOnePlayer, removeOnePlayer } = teamGridReducer.actions;
export const getTeamStore = (initialState) => initialState.teamGrid
export default teamGridReducer.reducer;
