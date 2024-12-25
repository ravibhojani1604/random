import React, { useEffect, useState } from 'react'

function CustomHook() {

    const [list, setList]  = useState([])


    const getListData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!res) {
            throw new Error("not getting data")
        }
        const result = await res.json();
        setList(result);
        return
    }


    useEffect(() => {
        getListData()
    }, []);


    return (
        <ul>
            {
                list.map((data) => {
                    return <li key={data.id}>{data.title}</li>
                })
            }
        </ul>
    )
}

export default CustomHook
