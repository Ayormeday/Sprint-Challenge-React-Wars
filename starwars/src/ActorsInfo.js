import React from "react";
import styled from "styled-components"


const Div = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    width: 400px
`


function ActorInfo(props) {
    const {name, birth_year, skin_color, hair_color, height} = props;

    return  (
        <Div>
            <h1>{name}</h1>
            <p>{birth_year}</p>
            <p>{skin_color}</p>
            <p>{hair_color}</p>
            <p>{height}</p>
        </Div>
    );


}

export default ActorInfo;