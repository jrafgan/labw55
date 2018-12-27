import React, { Component } from 'react';
import { INGREDIENTS } from "../Ingredient/Ingredient";
import './Burger.css';

class Burger extends Component {
    render() {
        const total = [];
        let totalCost = 20;

        this.props.data.forEach((item, index) => {

            for (let i = 0; i < item.count; i++) {
                totalCost += INGREDIENTS[index].price;
                total.push({name: item.name});
            }
        });

        return (
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"> </div>
                    <div className="Seeds2"> </div>
                </div>
                {total.map((item, index) => (
                    <div className={item.name} key={index}> </div>
                ))}
                <div className="BreadBottom"> </div>
                <p>Общая стоимость: {totalCost}</p>
            </div>
        );
    }
}

export default Burger;