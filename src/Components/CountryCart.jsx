import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function CountryCart({
  startOfWeek,
  languages,
  name,
  subregion,
  flags,
  population,
  region,
  capital,
  bor,
  black,
  blue
}) {
  const [more, setMore] = useState(false);
  const [bc] = useState("1px solid" + " " + black)

  return (
    <Box
      borderRadius={"10px"}
      p={"20px"}
      w={"290px"}
      border={bc}
      borderColor={black}
      color={black}
    >
      <Box h={"150px"}>
        <Image w={"100%"} h={"100%"} src={flags.png} />
      </Box>
      <Box>
        <Text mt={"10px"} fontWeight={"bold"} fontSize={"2xl"}>
          {name.common}
        </Text>
        <Text mt={"10px"}> Population : {population}</Text>
        <Text>
          <span>Region : </span> {region}
        </Text>
        <Text>
          <span>Capital :</span> {capital}
        </Text>
      </Box>
      <Button mt={'20px'} mb={'10px'} ml={'50px'} colorScheme={blue} onClick={() => (more ? setMore(false) : setMore(true))}>
        More Option
      </Button>
      {more ? (
        <Box>
          <Text>
            <span>Native name :</span> {name.common}
          </Text>
          <Text>
            <span>Sub Region : </span> {subregion}
          </Text>
          <Text>
            <span>Start Of Week :</span> {startOfWeek}
          </Text>
          <Text>
            <span>Border Countries :</span> {bor}
          </Text>
        </Box>
      ) : null}
    </Box>
  );
}

export default CountryCart;
