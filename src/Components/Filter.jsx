import { Box, Flex, Select } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { GetData } from "../Redux/AppReducer/Action";

function Filter() {
  const dispatch = useDispatch()
  function Change(e){
    let url = "https://restcountries.com/v3.1/region/"+e.target.value;
    dispatch(GetData(url))
  }

  return (
    <Flex justifyContent={'center'} alignItems={'center'} mt={"20px"} w={"100%"} h={"100px"} border={"1px solid black"}>
      <Select onChange={Change} w={'200px'} placeholder="Select option">
        <option value="africa">Africa</option>
        <option value="antarctica">Antarctica</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="north america">North America</option>
        <option value="australia">Australia</option>
        <option value="south america">South America</option>
      </Select>
    </Flex>
  );
}

export default Filter;
