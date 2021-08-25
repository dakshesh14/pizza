import axios from 'axios';

import { useEffect, useState } from 'react';

function useFetchPizza(query, search) {

    const initialState = {
        count: 0,
        pizzas: [],
    };

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(initialState);
    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "../api/pizza",
            params: {
                search: search,
                query: query,
            }
        }).then(res => {
            setItems({
                count: res.data.length,
                pizzas: res.data,
            })
            setLoading(false);
        })
    }, [search, query])

    return [loading, items]

}

export default useFetchPizza