import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <div>
      <VStack maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' background='white' >
        <img src={imageSrc}/>
        <VStack p='20px' color="black">
          <h2 key={title}>{title}</h2>
          <p>{description}</p>
        </VStack>
      </VStack>
      
    </div>
  )
};

export default Card;
