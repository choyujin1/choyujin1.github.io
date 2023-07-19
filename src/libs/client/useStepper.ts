import React, { useState } from 'react';

export function handleStepper<T> (
	state: T,
	setState: React.Dispatch<React.SetStateAction<T>>,
){

	const setPrev = () => {
        setState(state - 1)
    }

    const setNext = () => {
        setState(state + 1)
    }

    const initStep = () => {
        setState(0);
    }

    return {
        setPrev,
        setNext,
        initStep
    }

}