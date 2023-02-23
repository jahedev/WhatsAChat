import React from 'react'
import MaterialButton, { ButtonType as BT } from '../common/MaterialButton'

interface ChatTopProps {
  recipientName: string
  activityStatus: string
  tmpNightMode: React.MouseEventHandler<HTMLButtonElement>
}

export default function ChatTop({
  recipientName,
  activityStatus,
  tmpNightMode,
}: ChatTopProps) {
  return (
    <div className='chat-top'>
      <div className='chat-top__info'>
        <h5 className='chat-top__info__recipient-name'>{recipientName}</h5>
        <h6 className='chat-top__info__activity-status'>{activityStatus}</h6>
      </div>
      <div className='chat-top__buttons'>
        <div className='chat-top__buttons__search'>
          <MaterialButton buttonType={BT.SEARCH} />
        </div>
        <div className='chat-top__buttons__call'>
          <MaterialButton buttonType={BT.CALL} />
        </div>
        <div className='chat-top__buttons__night'>
          <MaterialButton buttonType={BT.NIGHT} handleClick={tmpNightMode} />
        </div>
        <div className='chat-top__buttons__info'>
          <MaterialButton buttonType={BT.INFO} />
        </div>
        <div className='chat-top__buttons__more'>
          <MaterialButton buttonType={BT.MORE} />
        </div>
      </div>
    </div>
  )
}
