import React from 'react';

function getSavedValue(key: string, initialValue: any) {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
        return JSON.parse(savedValue);
    }
    if (initialValue instanceof Function) {
        return initialValue();
    }
    return initialValue;
}

export default function useLocalStorage(key: string, initialValue: string) {
    const [value, setValue] = React.useState<any>(() => {
        return getSavedValue(key, initialValue);
    });

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
