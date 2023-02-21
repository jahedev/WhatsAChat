import React from 'react'

export default function ChatDisplay({ children }: any) {
  return (
    <div className='chat-display'>
      <div className='chat-display-container'>{children}</div>
    </div>
  )
}
