import React, {useEffect} from 'react';
import NoFound from "./index";
import axios from 'axios';
import {Host} from "../../index";
import Toast from "../component/toast";

function ErrorFallback({error}) {
    useEffect(()=>{
        try {
            axios.post(Host + 'report', {
                type:error.name,
                message: error.message,
                track:error.stack
            });
        } catch (error) {
            Toast.error('服务器开小差了', 1000);
        }
    },[]);

    return (
        <NoFound title="Something went wrong" message={error.message} />
    )
}

export default ErrorFallback;