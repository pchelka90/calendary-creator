import React from 'react';

const Spinner = () => {
    return (
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
            <img src='assets/images/spinner.gif' style={{filter:'hue-rotate(145deg) brightness(1.2)'}} alt='spinner' />
        </div>
    );
};

export default Spinner;
