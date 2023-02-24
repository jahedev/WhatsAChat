import React from 'react'
import MaterialButton, { ButtonType as BT } from './common/MaterialButton'

export default function SideMenu({
  enabled,
  setVisibility,
}: {
  enabled: boolean
  setVisibility: Function
}) {
  return (
    <div className={`sidemenu ${enabled ? 'sidemenu__show' : ''}`}>
      <div className={`sidemenu__bar ${enabled ? 'sidemenu__bar__show' : ''}`}>
        <div className='sidemenu__bar__content'>
          <div className='sidemenu__bar__content__top'>
            <div className='menubtn'>
              <MaterialButton
                buttonType={BT.MENU}
                handleClick={() => setVisibility(false)}
              />
            </div>
            <div className='appbanner'>
              <h1>WhatsAChat</h1>
            </div>
          </div>
          <div className='sidemenu__bar__content__main'>
            <ul>
              <li className='sidemenu-list-item'>Contacts</li>
              <li className='sidemenu-list-item'>Groups</li>
              <li className='sidemenu-list-item'>Logout</li>
              <li className='sidemenu-list-item'>Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
