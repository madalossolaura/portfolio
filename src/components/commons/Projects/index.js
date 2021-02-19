import React from "react";
import Card from "../Card";
import SectionTitle from "./styles/SectionTitle";
import WrapperProjects from "./styles/WrapperProjects";

export default function Projects() {
    return (   
        <WrapperProjects>
            <SectionTitle>
                Projetos
            </SectionTitle>
            <Card />
        </WrapperProjects>
    );
}