import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{  height: '80vh', overflowY: 'scroll', border: '1px solid' }}>
            {props.children}
        </div>
    );
};

export default Scroll;