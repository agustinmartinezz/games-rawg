import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadedGames : [],
  visibleGames : [],
  pageSize : 21,
  currentPage : 1,
}

export const gamesSlice = createSlice({
  name : "games",
  initialState,
  reducers: {
    setGames : (state, action) => {
      for (const game of action.payload) {
        state.loadedGames.push(game)
      }
      console.log('DESDE', state.currentPage * 21 - 21)
      console.log('HASTA', state.currentPage * 21 - 21)
      console.log(state.loadedGames.slice(state.currentPage * 21 - 21, state.currentPage * 21))

      const visible = state.loadedGames.slice(state.currentPage * 21 - 21, state.currentPage * 21);
      state.visibleGames = []
      state.visibleGames.push(...visible)
    },
    updateVisibles : (state) => {
      const visible = state.loadedGames.slice(state.currentPage * 21 - 21, state.currentPage * 21);
      state.visibleGames = []
      state.visibleGames.push(...visible)
    },
    firstPage :(state) => {
      state.currentPage = 1
    },
    nextPage : (state) => {
      state.currentPage++
    },
    previousPage : (state) => {
      if (state.currentPage > 1)
        state.currentPage--
    }
  }
})

export default gamesSlice.reducer

export const { setGames, updateVisibles, firstPage, nextPage, previousPage } = gamesSlice.actions