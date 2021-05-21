import React, {useState} from 'react';

export const AlertContext = React.createContext({});

export const AlertProvider = props => {

    const [alertVisible, setAlertVisible] = useState(false);
    const [messageTitle, setMessageTitle] = useState('');
    const [messageText, setMessageText] = useState('');
    const [buttons, setButtons] = useState(<></>);

    const showAlert = (messageTitle, messageText, buttons) => {
        setMessageTitle(messageTitle);
        setMessageText(messageText);
        setButtons(buttons);
        setAlertVisible(true);
    }

    return (
        <AlertContext.Provider value={{setAlertVisible, showAlert, alertVisible, messageTitle, messageText, buttons}}>
            {props.children}
        </AlertContext.Provider>
    ) 
}

export const useAlert = () => React.useContext(AlertContext);