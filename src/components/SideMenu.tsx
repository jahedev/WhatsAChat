import React from 'react'
import MaterialButton, { ButtonType as BT } from './common/MaterialButton'

export default function SideMenu({ enabled }: { enabled: boolean }) {
  return (
    <div className={`sidemenu ${enabled ? 'sidemenu__show' : ''}`}>
      <div className={`sidemenu__bar ${enabled ? 'sidemenu__bar__show' : ''}`}>
        <div className='sidemenu__bar__content'>
          <div className='sidemenu__bar__content__top'>
            {/* <MaterialButton buttonType={BT.MENU} /> */}
          </div>
          <div className='sidemenu__bar__content__mid'>Hello</div>
        </div>
      </div>
    </div>
  )
}
