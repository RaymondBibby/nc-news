
const QueryMenu = ({setOrder, order, setSortByCat, sortByCat}) => {

const handleSortBy = (event) => {
    setSortByCat(event.target.value)
}

const handleOrder = (event) => {
    setOrder(event.target.value)
}
    return (
        <>
        <section>
        <label name="query">Sort Articles By: </label>

            <select 
            name="order" 
            id="order" 
            defaultValue={order}
            onChange={(event)=> {
                handleOrder(event)
            }}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
            
            </select>

            <select 
            name="sort_by" 
            id="sort_by"
            defaultValue={sortByCat}
            onChange={(event)=> {
                handleSortBy(event)
            }}>
                <option value="author">Author</option>
                <option value="title">Title</option>
                <option value="topic">Topic</option>
                <option value="created_at">Time-stamp</option>
                <option value="votes">Votes</option>
                <option value="comment_count">Comment Count</option>
            </select>

        </section>
        </>
    )
}

export default QueryMenu

 

