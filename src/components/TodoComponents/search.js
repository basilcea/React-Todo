import React from 'react';

const Search =({searchStr, submit})=>{
    return(
    // eslint-disable-next-line no-unused-expressions
    <div>
        <input type ='search'  value={searchStr} placeholder ='Search todo' onChange ={(e) => submit(e)}/>
    </div>
    )
}
export default Search