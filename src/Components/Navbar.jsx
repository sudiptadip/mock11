import { Box, Flex, Select } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'

function Navbar() {
  const dispatch = useDispatch()
function Change(e){
  if(e.target.value === 'lite'){
    console.log(e.target.value)
    dispatch({type: "CHENGE_TO_LITE"})
  }else{
    dispatch({type: "CHENGE_TO_DARK"})
  }
}
  return (
    <Flex p={'55px'} alignItems={'center'} justifyContent={'end'} h={'80px'} bg={'orange.500'} boxShadow={'2xl'} >
  <Select onChange={Change} w={'200px'} >
  <option value='lite'>Lite</option>
  <option value='dark'>Dark</option>
</Select>
    </Flex>
  )
}

export default Navbar