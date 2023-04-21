import { createSlice } from "@reduxjs/toolkit";



const localStorageConfig = localStorage.getItem('@config')

export const initialState =
  localStorageConfig
    ?
    JSON.parse(localStorageConfig)
    :
    {
      background1: '#00c8ff',
      background2: '#b300ff',
      glassColor: '#000000',
      opacity: '40',
      color: '#ffffff'
    }

const slice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    save: (state, { payload }) => {
      state.background1 = payload.background1
      state.background2 = payload.background2
      state.glassColor = payload.glassColor
      state.opacity = payload.opacity
      state.color = payload.color

      localStorage.setItem('@config', JSON.stringify(state))
    }

  }
})

export const { save } = slice.actions

export const config = ({ config }) => config

export default slice.reducer