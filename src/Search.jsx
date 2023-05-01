import React from 'react'
import { useState } from 'react'
import searchBar from './assets/search.jpg'
import Microphone from './assets/mic.png'
import Lens from './assets/lens.png'
const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e)=>{
  if(e.key === 'Enter') {
    setSearchQuery(e.target.value)
  }
    };
  return (
    <div>
      <div className="search">
        <input type="text" onKeyDown={handleSearch}/>
        <img src={searchBar} className='search-bar' />
        <div className="search-icons">
         <img src={Microphone} />
         <img src={Lens} />
        </div>
    </div>
    {searchQuery && <p>You searched for: "{searchQuery}"</p> }
    </div>
  )
}

export default Search
