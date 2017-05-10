import React from 'react';
import Card from './Card';



const CardList = (props) => {
    console.log(props.robots);
    return (
        <div>
            {
                props.robots.map((robot) => (
                    <Card key={robot.id}
                        id={robot.id}
                        name={robot.name}
                        email={robot.email} />
                ))
            }
        </div>
    );
}

CardList.propType = {
    robots: React.PropTypes.array.isRequired
}

export default CardList;