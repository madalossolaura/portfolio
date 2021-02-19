import React from "react";
import Card from "../Card";
import SectionTitle from "./styles/SectionTitle";
import WrapperProjects from "./styles/WrapperProjects";
import Grid from "../../foundations/layout/Grid"

export default function Projects() {
    return (   
        <WrapperProjects 
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
            paddingTop="45px"
            paddingBottom="45px"
        >
            <SectionTitle>
                Projeto
            </SectionTitle>
            <Grid.Container>
                <Grid.Row>
                    <Grid.Col value={{ xs: 12, md: 6, lg: 4}}>
                        <Card />
                    </Grid.Col>
                    <Grid.Col value={{ xs: 12, md: 6, lg: 4}}>
                        <Card />
                    </Grid.Col>
                    <Grid.Col value={{ xs: 12, md: 6, lg: 4}}>
                        <Card />
                    </Grid.Col>
                    <Grid.Col value={{ xs: 12, md: 6, lg: 4}}>
                        <Card />
                    </Grid.Col>
                    <Grid.Col value={{ xs: 12, md: 6, lg: 4}}>
                        <Card />
                    </Grid.Col>
                    <Grid.Col value={{ xs: 12, md: 6, lg: 4}}>
                        <Card />
                    </Grid.Col>
                </Grid.Row>
            </Grid.Container>    
        </WrapperProjects>
    );
}