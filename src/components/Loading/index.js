import React from 'react';

import './styles.css'

import {useLoading} from '../../providers/loading';

function Loading() {

    const {loadingVisible} = useLoading();

    return (
        <>
        {loadingVisible?
            <div className="loadContent">
                <div className="loader"></div>            
            </div>

        : ""}
        </>
    )
}

export default Loading;
