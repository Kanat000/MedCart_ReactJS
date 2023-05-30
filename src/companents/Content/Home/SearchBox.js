import searchBoxStyle from './style/searchbox.module.css'

function SearchBox(props) {
    return (
        <div className={searchBoxStyle.container}>
            <div className={searchBoxStyle.search_box_block}>
                <input className={searchBoxStyle.search} placeholder='Search' type='text' value={props.search}
                       onChange={(e) => {
                           props.setSearch(e.currentTarget.value)
                       }}/>
            </div>
            <div className={searchBoxStyle.search_btn_block}>
                <button className={searchBoxStyle.searchBtn} onClick={props.setSearch(props.search)}>Search
                </button>
            </div>

        </div>
    )
}

export default SearchBox;