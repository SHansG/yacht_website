import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function HorizontalCards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='/images/test_img.jpg'
                                  text="Jachty Morskie"
                                  label='Morskie'
                                  path='/przeglad-jachtow/morskie'/>
                        <CardItem src='/images/test_img.jpg'
                                  text='Jachty Śródlądowe'
                                  label='Śródlądowe'
                                  path='/przeglad-jachtow/srodladowe'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HorizontalCards