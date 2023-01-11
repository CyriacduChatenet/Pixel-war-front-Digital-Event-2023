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
        }, process.env.REACT_APP_TIMER_BETWEEN_TWO_PIXELS_CREATION)
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