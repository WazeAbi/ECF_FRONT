import React from "react";
function SearchBar({ filterText }){
    return(
        <form className={"search-bar"}>
            <input type={"text"}
            value={filterText}
            placeholder={"Search"}
            className={"search-input"}/>
        </form>
    );
 } export default SearchBar;

