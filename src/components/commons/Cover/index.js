import React from "react";
import Text from "../../foundations/Text";
import Masthead from "./styles/Masthead";

export default function Cover() {
  return (
    <Masthead>
      <Text 
        variant="title" 
        tag="h1" 
        textAlign="center"
        color="primary.main"
        marginBottom="0">
        Laura 
        <Text
          variant="titleBold"
          tag="span">
          Madalosso
        </Text>
      </Text>
      <Text
        variant="titleXS" 
        tag="h2" 
        textAlign="center"
        color="primary.main"
        marginTop="0">
        Front-end Developer
      </Text>
    </Masthead>
  );
}
