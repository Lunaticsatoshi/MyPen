import { useEffect, useState } from 'react';

const PREFIX = 'myPen';

export default function useLocalStorage(key, initialValue) {
    const ID = PREFIX + key;

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(ID)

        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof initialValue === 'function'){
            return initialValue()
        }else {
            return initialValue
        }
    })

    useEffect(()=> {
        localStorage.setItem(ID, JSON.stringify(value))
    }, [ID, value]);

    return [value, setValue]
}
