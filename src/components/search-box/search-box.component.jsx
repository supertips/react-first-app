import React from 'react'
import './search-box.style.scss'

export const SearchBox = ({ placeholder, onChange }) => {
  return (
    <input
      type="search"
      className="search-box"
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
