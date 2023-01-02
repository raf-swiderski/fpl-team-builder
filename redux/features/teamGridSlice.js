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
        showTrueValue: false,
        initialBudget: 1000,
        budget: 1000,
        value: 0,
        exceeded: false
    }
  },
  reducers: {
    addOnePlayer: (state, action) => {
      const POSITION_GROUPS = [
          { type: 1, start: 0, end: 1 }, // GKP
          { type: 2, start: 2, end: 6 }, // DEF
          { type: 3, start: 7, end: 11 }, // MID
          { type: 4, start: 12, end: 14 } // FWD
      ]
      const playerToBeAdded = action.payload        
    
      for (const group of POSITION_GROUPS) {
        if (group.type !== playerToBeAdded.element_type) continue
    
        for (let i = group.start; i <= group.end; i++) {
          if (!state[i].filled) {
            state[i].player = playerToBeAdded
            state[i].filled = true
            state[i].prevFilled = true
            break
          }
        }
      }
      let property = state.teamValue.showTrueValue ? 'true_value' : 'now_cost';
      state.teamValue.value = calculateTeamValue(state, property);
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
    },
    toggleTrueValue: (state, action) => {
      const boolean = action.payload
      state.teamValue.showTrueValue = boolean
 
      state.teamValue.showTrueValue ? state.teamValue.budget = 607 : state.teamValue.budget = state.teamValue.initialBudget;

      let property = state.teamValue.showTrueValue ? 'true_value' : 'now_cost';
      state.teamValue.value = calculateTeamValue(state, property);
      return state;
    }
  },
})

function calculateTeamValue (state, property) {
    let totalValue = 0;
    for (let i = 0; i < 15; i++) {
      const pos = state[i];
      if (pos.filled) {
        totalValue += pos.player[property];
      }
    }
    return totalValue;;
};

export const { addOnePlayer, removeOnePlayer, revertCardToPrevPlayer, toggleTrueValue } = teamGridReducer.actions;
export const getTeamStore = (initialState) => initialState.teamGrid
export default teamGridReducer.reducer;
