import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {

    const { isLoading, todos, error } = useSelector(state => state)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    return (
        <div>
            <h4>My Todos </h4>
            {isLoading && <h3>Loading...</h3>}
            {error && error.message}
            <section>
                {todos && todos.map((todo) => {
                    const { id, title } = todo;
                    return <article key={id}>
                        <h4>{id}</h4>
                        <h4>{title}</h4>
                    </article>
                })}
            </section>
        </div>
    );
};

export default Todos;