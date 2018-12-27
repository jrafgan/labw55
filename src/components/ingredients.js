import React from 'react';

const Ingredients = props => {
    return (
        <div className="item">
                <h4 className={props.name}>{(props.name).toUpperCase()}</h4>
                <div className="counter">
                    <span className="count">X {props.count}</span>
                    <button type="button" onClick={props.clickAdd} className="btn-add" />
                    <button type="button" onClick={props.clickRemove} className="btn-remove"/>
                </div>
            </div>
                )
};

export default Ingredients;
