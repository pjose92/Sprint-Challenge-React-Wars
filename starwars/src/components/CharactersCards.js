import React from 'react';
import '../App';
import {ContainerDiv, Styleh2} from './styles';

function TheCharactersCards(props) {
    console.log('I am A Character PROPS', props);

    return (
        <ContainerDiv>
            <h1>Name: { props.name }</h1>
            <Styleh2>Birth Year: { props.birthDate }</Styleh2>
            <Styleh2>Gender: { props.gender }</Styleh2>
            <Styleh2>Height: { props.height }</Styleh2>
        </ContainerDiv>
    )
}

export default TheCharactersCards;