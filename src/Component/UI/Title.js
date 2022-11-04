import React from "react";
import classes from './Title.module.css'

const Title=(props)=>{
    return(
        <div className={classes.title}>
            <h1>{props.title}</h1>
        </div>
    )
}
export default Title