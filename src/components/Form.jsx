import React, {useContext, useState} from "react";
import Ctx from "../Ctx";

export default () => {
    const {updTasks} = useContext(Ctx);
    const [val, newVal] = useState("");
    const handler = e => {
        switch (e.type) {
            case "submit":
                e.preventDefault();
                updTasks(prev => [...prev, val]);
                newVal("");
                break;
            case "change":
                newVal(e.target.value);
                break;
        }
    }
    return <>
        <form onSubmit={handler}>
            <input type="text" placeholder="Что надо сделать?" value={val} onChange={handler}/>
            <button type="submit">Добавить</button>
        </form>
    </>
}