/**
 * Created by Den on 20.08.2017.
 */
'use strict';

export default function(message){

    if(NODE_ENV == 'development') {
        alert(`Welcome ${message}`);
    }
};