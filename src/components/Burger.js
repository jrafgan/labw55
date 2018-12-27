import React from 'react';

const Burger = (props) => {
            return (
                <div className="Burger">
                    <div className="BreadTop">
                        <div className="Seeds1"/>
                        <div className="Seeds2"/>
                    </div>
                    {props.children}
                    <div className="BreadBottom"/>
                </div>
            );
    };


export default Burger;
