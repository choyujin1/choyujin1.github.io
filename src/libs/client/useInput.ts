import React, { useState } from 'react';

export function handleInput<T> (
	state: T,
	setState: React.Dispatch<React.SetStateAction<T>>,
) {

	// input
	const setInput = (e: React.ChangeEvent) => {
		const { name, value, type } = e.target as HTMLInputElement;

		setState({ ...state, [name]: value });

		console.log(state)
	}

	// checkbox
	const setCheckbox = (e: React.ChangeEvent) => {
		const { name, checked } = e.target as HTMLInputElement;

		setState({ ...state, [name]: checked });

		console.log(state)

	}

	// radio
    const setRadio = (e: React.ChangeEvent) => {
        const { name, value, checked } = e.target as HTMLInputElement;

        setState({ ...state, [name]: value });

        console.log(state)
    }

	// init
	const initInput = (name:string) => {
		setState({ ...state, [name]: '' })
	}

	return {
		setInput,
		setCheckbox,
		setRadio,
		initInput
	}

}
