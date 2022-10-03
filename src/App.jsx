import React, {useContext, useState} from "react";
import Form from "./components/Form";
import List from "./components/List";
import Ctx from "./Ctx";

export default () => {
    const [arr, upd] = useState(["Сделать блог", "Поплакать"]);

    return <Ctx.Provider value={{
        tasks: arr,
        updTasks: upd
    }}>
        <div>
            <Form/>
            <List/>
        </div>
    </Ctx.Provider>
}
