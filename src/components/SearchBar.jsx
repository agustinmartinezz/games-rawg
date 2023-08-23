import React from 'react'

const SearchBar = ({ setSearchParam }) => {
  const updateSearch = (searchParam) => {
    console.log(searchParam)
    setSearchParam(searchParam)
  }

  return (
    <div className="container input-group justify-content-center mt-3 z-0">
      <div className="form-outline">
        <input type="search" className="form-control" placeholder='Search' onChange={(e) => {updateSearch(e.target.value)}}/>
      </div>
    </div>
  )
}

export default SearchBar