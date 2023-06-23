import axios from 'axios';
import Toast from "../../component/toast";
import React from "react";

export const CURRENT_POSITION = 'home';
export const HOME_PAGE_SERIES = 'home_page_series';

export const SetCurrentPosition = (position) => ({
    type:CURRENT_POSITION,
    position
});

export const ajaxHeaders = function () {
    return {headers: {'Content-Type': 'application/json', 'Authorization': 'Token '}, timeout: 3000};
};



