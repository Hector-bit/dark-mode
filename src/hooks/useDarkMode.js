import useLocalStorage from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    // const [someValue, setSomeValue] = useLocalStorage(true)

    const handleChanges = updatedValue => {
        setValue(updatedValue);
    };

    useEffect(() => {
        console.log(value);
        if(value == true){
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    }, [value])

    return[value, setValue, handleChanges]
}

export default useDarkMode;