import React, { useState } from 'react';
import bookheart from '../Assets/bookheart.png'
import IMG from '../Assets/IMG.png';
import KeazoNBOOKS from '../Assets/KeazoNBOOKS.png';
import favicon from '../Assets/favicon.png';
import notify from '../Assets/notify.png';
import premium from '../Assets/premium.png';


function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <header>
        <div className='logo-section'>
            <div className='logo-image'>
                <img src={favicon} alt="" />
            </div>
            <div className='logo-name'>
                <img src={KeazoNBOOKS} alt="" />
            </div>
        </div>

        <div className= 'search-section'>
            <div className= 'input-section'>
                <input 
                type='text'
                placeholder='Search for your book'
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                />
            </div>
            <button className='search-btn' onClick={handleSearch}>Search</button>
        </div>
        
        <div className= 'icon-section'>
            <img src={bookheart} alt="" />
            <img src={notify} alt="" />
            <img src={premium} alt="" />
            <img src={IMG} alt="" />
        </div>

    </header>
  );
}

export default Navbar;