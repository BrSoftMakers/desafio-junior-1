import React, {useState} from 'react';

export const LoadingContext = React.createContext({});

export const LoadingProvider = props => {

    const [loadingVisible, setLoadingVisible] = useState(true);

    return (
        <LoadingContext.Provider value={{loadingVisible, setLoadingVisible}}>
            {props.children}
        </LoadingContext.Provider> 
    )
}

export const useLoading = () => React.useContext(LoadingContext);
