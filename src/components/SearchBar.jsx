import React, { useRef }  from 'react'

const SearchBar = ({ setSearchParam }) => {
  const searchText = useRef()

  const updateSearch = () => {
    setSearchParam(document.getElementById(searchText).value)
  }

  return (
    <div className="container input-group justify-content-center mt-3 z-0">
      <div className="form-outline">
        <input id={searchText} type="search" className="form-control" placeholder='Search' />
      </div>
      <button className='btn btn-dark' onClick={updateSearch}>Search</button>
    </div>
  )
}

export default SearchBar