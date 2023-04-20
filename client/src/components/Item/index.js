import { Container, Buttons } from './styles'

import { useDispatch } from 'react-redux'
import { deleteItem } from '../../Store/sliceLists'
import { editModal } from '../../Store/sliceModals'

import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'

import { Draggable } from 'react-beautiful-dnd'
import React from 'react'



export const Item = ({ index, listIndex, listItem }) => {
  const dispatch = useDispatch()

  const handleDeleteItem = (listIndex, index) => {
    dispatch(deleteItem({ listIndex, index }))
  }

  const openEditModal = () => {
    dispatch(editModal({ listIndex, index, value: listItem.content }))
  }

  return (
    <Draggable key={listItem.id} draggableId={listItem.id} index={index} >
      {(provided) => (
        <Container
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          style={{ ...provided.draggableProps.style }}
        >
          <BsList size={24} />
          <p>
            {listItem.content+" "+ "        Priority:" + Number(index+1)}
          </p>
          <Buttons>
            <button onClick={openEditModal}>
              <FaRegEdit size={22} />
            </button>
            <button onClick={() => handleDeleteItem(listIndex, index)}>
              <FaRegTrashAlt size={20} />
            </button>
          </Buttons>
        </Container >
      )}
    </Draggable >
  )
}