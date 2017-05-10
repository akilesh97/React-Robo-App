import React from 'react';

function Card({id,name,email}) {
    return (
        <div className="sticker">
            <img role="Presentation" src={`//robohash.org/${id}?size=200x200`} />
            <h2>{name} </h2>
            <div>{email}</div>
        </div>
    );
}

Card.propTypes = {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired

};

export default Card;