import React, {
    useEffect,
    useState,
} from 'react';

// importing action
import useFetchPizza from '../actions/useFetchPizza';

// importing components
import Spinner from './Spinner';
import ListPizza from './ListPizza';

function Menu() {
    // search: search,
    // query: query,

    const [inputSearch, setInputSearch] = useState('');
    const [finalSearch, setFinalSearch] = useState('');
    const [filterQuery, setFilterQuery] = useState('all')

    const [loading, items] = useFetchPizza(filterQuery, finalSearch);

    const handleSearchChange = e => {
        setInputSearch(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setFinalSearch(inputSearch);
    };

    const handleRadioChange = e => {
        setFilterQuery(e.target.value);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }

    return (
        <section className="products mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form method="GET" className="d-flex" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Search pizza here..."
                                id="search"
                                value={inputSearch}
                                onChange={handleSearchChange}
                                className="form-control"
                            />
                            <button className="button button-primary">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                        <h3 className="mt-3">Filter:</h3>
                        <form>
                            <div className="form-check">
                                <input
                                    checked={filterQuery === 'all'}
                                    onChange={handleRadioChange}
                                    className="form-check-input"
                                    type="radio"
                                    name="all"
                                    value="all"
                                />
                                <label className="form-check-label" htmlFor="all">
                                    All
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    checked={filterQuery === 'veg'}
                                    onChange={handleRadioChange}
                                    className="form-check-input"
                                    type="radio"
                                    name="veg"
                                    value="veg"
                                />
                                <label className="form-check-label" htmlFor="veg">
                                    Veg
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    checked={filterQuery === 'non-veg'}
                                    onChange={handleRadioChange}
                                    className="form-check-input"
                                    type="radio"
                                    name="non-veg"
                                    value="non-veg"
                                />
                                <label className="form-check-label" htmlFor="non-veg">
                                    Non Veg
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 mt-5">
                        <h2>Pizzas</h2>
                        {
                            loading
                                ?
                                <Spinner />
                                :
                                <>
                                    <p className="text-muted">
                                        {items.count} pizzas found
                                    </p>
                                    <ListPizza items={items} />
                                </>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu