import React, {useContext, useState} from "react";
import Task from "./Task";
import Ctx from "../Ctx";

export default () => {
    const {tasks} = useContext(Ctx);
    return <>
        <ul>
            {tasks.map((t, i) => <Task key={i} text={t} index={i}/>)}
        </ul>
    </>
}