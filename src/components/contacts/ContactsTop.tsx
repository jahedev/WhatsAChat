import React from 'react'

export default function ContactsTopBar() {
  return (
    <div className='contacts-top'>
      <div className='contacts-top__menu-button'>
        <span className='material-symbols-outlined'>menu</span>
      </div>
      <div className='contacts-top__searchbar'>
        <input
          type='search'
          name='contacts-search'
          placeholder='Search'
          id='contacts-searchbar'
        />
      </div>
    </div>
  )
}
