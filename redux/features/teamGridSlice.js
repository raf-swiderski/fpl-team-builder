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
    },
    teamValue: {
        value: 0,
        exceeded: false
    }
  },
  reducers: {
    addOnePlayer: (state, action) => {

      const playerToBeAdded = action.payload
      const value = parseFloat(playerToBeAdded.now_cost)

      switch (playerToBeAdded.element_type) {

        case 1: // GKP 
            if (!state[0].filled) {
                state.teamValue.value += value
                state[0].player = playerToBeAdded
                state[0].filled = true
                state[0].prevFilled = true
            } else if (!state[1].filled) {
                state.teamValue.value += value
                state[1].player = playerToBeAdded
                state[1].filled = true
                state[1].prevFilled = true
            }
            break;
        case 2: // DEF
            if (!state[2].filled) {
                state.teamValue.value += value
                state[2].player = playerToBeAdded
                state[2].filled = true
                state[2].prevFilled = true
            } else if ((!state[3].filled)) {
                state.teamValue.value += value
                state[3].player = playerToBeAdded
                state[3].filled = true
                state[3].prevFilled = true
            } else if ((!state[4].filled)) {
                state.teamValue.value += value
                state[4].player = playerToBeAdded
                state[4].filled = true
                state[4].prevFilled = true
            } else if ((!state[5].filled)) {
                state.teamValue.value += value
                state[5].player = playerToBeAdded
                state[5].filled = true
                state[5].prevFilled = true
            } else if (!state[6].filled) {
                state.teamValue.value += value
                state[6].player = playerToBeAdded
                state[6].filled = true
                state[6].prevFilled = true
            }
            break;
        case 3: // MID
            if (!state[7].filled) {
                state.teamValue.value += value
                state[7].player = playerToBeAdded
                state[7].filled = true
                state[7].prevFilled = true
            } else if ((!state[8].filled)) {
                state.teamValue.value += value
                state[8].player = playerToBeAdded
                state[8].filled = true
                state[8].prevFilled = true
            } else if ((!state[9].filled)) {
                state.teamValue.value += value
                state[9].player = playerToBeAdded
                state[9].filled = true
                state[9].prevFilled = true
            } else if ((!state[10].filled)) {
                state.teamValue.value += value
                state[10].player = playerToBeAdded
                state[10].filled = true
                state[10].prevFilled = true
            } else if ((!state[11].filled)) {
                state.teamValue.value += value
                state[11].player = playerToBeAdded
                state[11].filled = true
                state[11].prevFilled = true
            }
            break;
        case 4: // FWD
            if (!state[12].filled) {
                state.teamValue.value += value
                state[12].player = playerToBeAdded
                state[12].filled = true
                state[12].prevFilled = true
            } else if ((!state[13].filled)) {
                state.teamValue.value += value
                state[13].player = playerToBeAdded
                state[13].filled = true
                state[13].prevFilled = true
            } else if ((!state[14].filled)) {
                state.teamValue.value += value
                state[14].player = playerToBeAdded
                state[14].filled = true
                state[14].prevFilled = true
            } 
        }
      
    },
    removeOnePlayer: (state, action) => {

      let index = action.payload.index
      let value = action.payload.player.now_cost

      state[index].filled = false
      state[index].prevPlayer = state[index].player
      state[index].player = {}
      state.teamValue.value -= value

    },
    revertCardToPrevPlayer: (state, action) => {
      let index = action.payload
      state[index].player = state[index].prevPlayer
      state[index].filled = true
      state.teamValue.value += state[index].prevPlayer.now_cost
    }
  },
})

export const { addOnePlayer, removeOnePlayer, revertCardToPrevPlayer } = teamGridReducer.actions;
export const getTeamStore = (initialState) => initialState.teamGrid
export default teamGridReducer.reducer;
