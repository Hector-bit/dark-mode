import React from 'react';
import { useState } from 'react';
import useDarkMode from './useDarkMode';

const useLocalStorage = (key, initialValue) => {
    // if(typeof key !== 'string'){
    //     throw new Error('invalid param')
    // }

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};


export default useLocalStorage;