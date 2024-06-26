'use client'

import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
	const [localStorageValue, setLocalStorageValue] = useState(() => {
		try {
			const value = typeof window !== 'undefined' && localStorage.getItem(key)
			if (value) {
				return JSON.parse(value)
			} else {
				typeof window !== 'undefined' && localStorage.setItem(key, JSON.stringify(defaultValue));
				return defaultValue
			}
		} catch (error) {
			typeof window !== 'undefined' && localStorage.setItem(key, JSON.stringify(defaultValue));
			return defaultValue
		}
	})

	const setLocalStorageStateValue = (valueOrFn) => {
		let newValue;
		if (typeof valueOrFn === 'function') {
			const fn = valueOrFn;
			newValue = fn(localStorageValue)
		}
		else {
			newValue = valueOrFn;
		}
		typeof window !== 'undefined' && localStorage.setItem(key, JSON.stringify(newValue));
		setLocalStorageValue(newValue)
	}
	return [localStorageValue, setLocalStorageStateValue]
}

export default useLocalStorage;
