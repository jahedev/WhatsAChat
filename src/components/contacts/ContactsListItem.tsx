import React from 'react'

interface ContactsListItemProp {
  isSelected?: boolean
  contactName: string
  lastMessage: string
  profileImageURL?: string
}

function getProfileImage(imageURL: string, initials = '') {
  if (imageURL)
    return (
      <span>
        <img src={imageURL} alt='profile photo' />
      </span>
    )
  else
    return (
      <span className='profile-image no-picture'>
        {/* <img src='http://via.placeholder.com/128x128' alt='no profile photo' /> */}
        {initials}
      </span>
    )
}

function getInitials(name: string) {
  return (
    name
      .match(/(\b\S)?/g)
      .join('')
      .match(/(^\S|\S$)?/g)
      .join('')
      .toUpperCase() || ''
  )
}

export default function ContactsListItem({
  isSelected,
  contactName,
  lastMessage,
  profileImageURL,
}: ContactsListItemProp) {
  return (
    <div
      className={`contacts-list__item ${isSelected ? 'contact-selected' : ''}`}
    >
      <div className='contacts-list__item__photo'>
        {getProfileImage(profileImageURL || '', getInitials(contactName))}
      </div>
      <div className='contacts-list__item__info'>
        <h4 className='contacts-list__item__info__name'>{contactName}</h4>
        <h4 className='contacts-list__item__info__message'>{lastMessage}</h4>
      </div>
    </div>
  )
}
