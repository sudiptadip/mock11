import React, { useEffect, useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Filter from "../Components/Filter";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../Redux/AppReducer/Action";
import CountryCart from "../Components/CountryCart";

function Homepage() {
  // const [data,setData] = useState([])
  const dispatch = useDispatch();
  const data = useSelector((e) => e.AppReducer.data);
  const color = useSelector((e) => e.AppReducer.color);

  const [breakpoints] = useState({
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
    lg: 'repeat(4, 1fr)',
  })

  useEffect(() => {
    dispatch(GetData("https://restcountries.com/v3.1/all"));
  }, []);

  return (
    <Box>
      <Navbar />
      <Filter />
      <Grid mt={'20px'} maxW={'100%'}  templateColumns={breakpoints} gap={'50px'} >
        {data.map((e,i) => (
          <CountryCart black={color[0].color2} blue={color[0].color1} {...e} bor={e.borders} key={i}  />
        ))}
      </Grid>
    </Box>
  );
}

export default Homepage;
