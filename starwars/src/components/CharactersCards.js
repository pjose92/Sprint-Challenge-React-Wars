import React from 'react';
import '../App';
import {ContainerDiv, Styleh2} from './styles';

function TheCharactersCards(props) {
    console.log('I am A Character PROPS', props);

    return (
        <ContainerDiv>
            <h1>Name: { props.name }</h1>
            <Styleh2>Birth Year: { props.name }</Styleh2>
            <Styleh2>Gender: { props.name }</Styleh2>
            <Styleh2>Height: { props.name }</Styleh2>
        </ContainerDiv>
    )
}

export default TheCharactersCards;