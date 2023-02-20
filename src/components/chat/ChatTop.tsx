import React from "react"

interface ChatTopProps {
  recipientName: string
  activityStatus: string
}

export default function ChatTop({
  recipientName,
  activityStatus,
}: ChatTopProps) {
  return (
    <div className="chat-top">
      <div className="chat-top__info">
        <h5 className="chat-top__info__recipient-name">{recipientName}</h5>
        <h6 className="chat-top__info__activity-status">{activityStatus}</h6>
      </div>
      <div className="chat-top__buttons">
        <div className="chat-top__buttons__search"></div>
        <div className="chat-top__buttons__call"></div>
        <div className="chat-top__buttons__info"></div>
        <div className="chat-top__buttons__menu"></div>
      </div>
    </div>
  )
}
