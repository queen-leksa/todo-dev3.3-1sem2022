import React, {useContext, useState} from "react";
import Ctx from "../Ctx";

export default ({text, index}) => {
    const [done, checked] = useState(false);
    const {updTasks} = useContext(Ctx);
    const handler = () => checked(!done);
    const del = (e) => {
        e.stopPropagation();
        updTasks(prev => {
            /*
            * prev - массив задач
            * index - порядковый номер удаляемой задачи
            * надо вернуть новый массив без задачи под номером index
            * */

            // v1
            // const arr = [];
            // for (let i = 0; i < prev.length; i++) {
            //     if (i !== index) {
            //         arr.push(prev[i]);
            //     }
            // }
            // return arr;

            // v2
            // let arr = [...prev];
            // arr.splice(index, 1);
            // return arr;

            // v3
            return prev.reduce((a, e, i) => {
                if (i !== index) {
                    a.push(e);
                }
                return a;
            }, []);
        })
    }
    return <>
        <li onClick={handler} className={done ? "hide" : ""}>
            {text}
            <button onClick={del}>Удалить</button>
        </li>
    </>
}