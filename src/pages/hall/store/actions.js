import axios from 'axios';
import React from "react";

export const CURRENT_POSITION = 'home';

export const SetCurrentPosition = (position) => ({
    type:CURRENT_POSITION,
    position
});

export const ajaxHeaders = function () {
    return {headers: {'Content-Type': 'application/json', 'Authorization': 'Token '}, timeout: 3000};
};



