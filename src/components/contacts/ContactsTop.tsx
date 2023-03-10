import React from 'react'
import MaterialButton, { ButtonType as BT } from '../common/MaterialButton'

export default function ContactsTopBar({
  menuBtn,
}: {
  menuBtn: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <div className='contacts-top'>
      <div className='contacts-top__menu-button'>
        <MaterialButton buttonType={BT.MENU} handleClick={menuBtn} />
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
