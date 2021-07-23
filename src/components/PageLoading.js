import React from 'react';
import Loader from './Loader';
import './styles/PageLoading.css';

function PageLoading () {
    
    return (
        <React.Fragment>  
                <div className="PageLoading" align="center">
                    <Loader />
                </div>
                </React.Fragment> 
    )
}

export default PageLoading;