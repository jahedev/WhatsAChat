import React from 'react'

export default function SideMenu({ enabled }: { enabled: boolean }) {
  return (
    <div className={`side-menu ${enabled ? 'side-menu__show' : ''}`}>
      <div
        className={`side-menu__side-bar ${
          enabled ? 'side-menu__side-bar__show' : ''
        }`}
      >
        Sidebar
      </div>
    </div>
  )
}
