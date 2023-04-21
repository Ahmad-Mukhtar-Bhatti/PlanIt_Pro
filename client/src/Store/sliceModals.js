import { createSlice } from '@reduxjs/toolkit'
import { edit } from './sliceLists'


const initialState= {
  newItemModal: false,
  editModal: false,
  configModal: false
}
const slice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    newItemModal: (state) => {
      return { ...state, newItemModal: !state.newItemModal }
    },
    editModal: (state, { payload }) => {
      edit.listIndex = payload.listIndex
      edit.itemIndex = payload.index
      edit.value = payload.value
      return {
        ...state,
        editModal: !state.editModal
      }
    },
    configModal: (state) => {
      return { ...state, configModal: !state.configModal }
    }
  }
})

export const { newItemModal, editModal, configModal } = slice.actions

export const modals = ({ modals }) => modals

export default slice.reducer