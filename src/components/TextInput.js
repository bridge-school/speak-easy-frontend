import React from 'react';

const TextInput = props => {
    return (
        <div>
            <label for={props.name}>
                {props.title}
            </label>
            <input 
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.value}
                onChange={props.handleInput}
            />
        </div>
    );
}

export default TextInput;