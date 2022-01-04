import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Zobacz nasze jachty!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='/images/Carter30.jpg'
                                  text="Jachty Morskie"
                                  label='Morskie'
                                  path='/przeglad-jachtow/morskie'/>
                        <CardItem src='/images/TES32Dreamer.jpg'
                                  text='Jachty Śródlądowe'
                                  label='Śródlądowe'
                                  path='/przeglad-jachtow/srodladowe'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards