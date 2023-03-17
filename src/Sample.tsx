import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComponenet from './ButtonComponent';

const Sample = () => {

    const navigate = useNavigate();
    const nav = () => {
        navigate("/sampl")
    }
    return (
        <div>
            <ButtonComponenet btnEvent={nav}>hi</ButtonComponenet>
        </div>
    )
}

export default Sample