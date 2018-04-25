import React from 'react';
import PropTypes from 'prop-types';
import { join } from 'path';

const numberFormat = (number)=>{
    if(number){
        let characters = number.toString().split('');

        let newArray= [];
        let count =0;
        for(let i = characters.length-1; i >= 0 ; i--){
            newArray.push(characters[i]);
            count++;

            if(count % 3 === 0){
                newArray.push(',');
            }
        }

        return newArray.reverse().join('');
    }

};

numberFormat();

const TotalFooter = ({ total }) => (
    <div>Total: {numberFormat(2345)}</div>
);

export default TotalFooter;