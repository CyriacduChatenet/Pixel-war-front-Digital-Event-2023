import { createContext, useCallback, useContext, useState } from "react";

const timerContext = createContext({
    newPixelIsCreated: false,
    setNewPixelIsCreated: () => {}
});

export const TimerContextProvider = ({children}) => {
    const [newPixelIsCreated, setNewPixelIsCreated] = useState(false);

    useCallback(() => {
        let timeout = setTimeout(() => {
            setNewPixelIsCreated(false);
        }, 10000)
        clearTimeout(timeout);
    }, [newPixelIsCreated === true])
    return (
        <timerContext.Provider value={{newPixelIsCreated, setNewPixelIsCreated}}>
            {children}
        </timerContext.Provider>
    );
};

const useTimer = () => useContext(timerContext);

export default useTimer;