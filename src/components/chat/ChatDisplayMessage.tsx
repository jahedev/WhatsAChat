import React from "react"

interface ChatDisplayMessageProps {
  isUser?: boolean
  message: string
}

export default function ChatDisplayMessage({
  isUser,
  message,
}: ChatDisplayMessageProps) {
  return (
    <div className={`chat-display__message ${isUser ? "user-message" : ""}`}>
      {message}
    </div>
  )
}
