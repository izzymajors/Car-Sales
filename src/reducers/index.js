import React from 'react';
import {ADD_ITEM, REMOVE_ITEM} from '../actions/index';

const initialState = {
    additionalFeatures: [
        {"id":1,"name":"V-6 engine","price":1500},
        {"id":2,"name":"Racing detail package","price":1500},
        {"id":3,"name":"Premium sound system","price":500},
        {"id":4,"name":"Rear spoiler","price":250}
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
        if(!state.car.features.includes(action.payload)) {
            return ({
                ...state,
                additionalPrice: (state.additionalPrice += action.payload.price),
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                }
            });
        } else{
            return(state);
        }
        case REMOVE_ITEM:
          const{price, id} = action.payload;
    };
};

export reducer;