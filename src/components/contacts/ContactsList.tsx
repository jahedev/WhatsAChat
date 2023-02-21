import React, { useState, useEffect } from 'react'
import ContactsListItem from './ContactsListItem'

export default function ContactsList() {
  const [selectedContact, setSelectedContact] = useState(-1)
  useEffect(() => {
    document.addEventListener('click', handleClick)
  }, [])

  const contacts_list = document.querySelector('contacts-list')

  const handleClick = (e: any) => {
    /* prettier-ignore */
    if (!('classList' in e.target) ||
        !e.target.classList.contains('contacts-list__item')) { return }

    if (e.target.classList.contains('contacts-list__item')) {
      const idx = Array.from(e.target.parentNode.children).indexOf(e.target)
      // const _children = e.target.parentNode.childNodes

      if (selectedContact < 0) {
        // no contacts selected
        // e.target.parentNode.children
      }
    }
  }

  return (
    <div className='contacts-list'>
      <ContactsListItem
        contactName='Arthur Morgan'
        lastMessage='Hey, whattchu up to?'
      />
      <ContactsListItem
        contactName='Charles Smith'
        lastMessage='np'
        isSelected={true}
      />
      <ContactsListItem
        contactName='Arnold Barney'
        lastMessage="sorry, I can't"
      />
    </div>
  )
}
