import searchBoxStyle from './style/searchbox.module.css'
import {useState} from "react";
import {useHistory} from "react-router-dom";

function SearchBox() {
    let [search, setSearch] = useState()
    const history = useHistory()
    const params = new URLSearchParams()
    let changePath = (query) => {
        if (query) {
            params.append("search", query)
        }
        history.push({search: params.toString()})
        // window.location.href = window.location.href + '?search=' + search
    }
    return (
        <div className={searchBoxStyle.container}>
            <div className={searchBoxStyle.search_box_block}>
                <input className={searchBoxStyle.search} placeholder='Search' type='text' value={search}
                       onChange={(e) => {
                           setSearch(e.currentTarget.value)
                       }}/>
            </div>
            <div className={searchBoxStyle.search_btn_block}>
                <button className={searchBoxStyle.searchBtn} onClick={changePath(search)}>Search
                </button>
            </div>

        </div>
    )
}

export default SearchBox;