import React from 'react'

export enum ButtonType {
  MENU,
  SEARCH,
  CALL,
  INFO,
  MORE,
  ATTACH,
  EMOJI,
  VOICE,
}

interface MaterialButtonProps {
  buttonType: ButtonType
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const buttonSpan = (buttonType: ButtonType) => {
  //   const icon = (iconName: string) => (
  //     <span className='material-symbols-outlined'>{iconName}</span>
  //   )

  switch (buttonType) {
    case ButtonType.MENU:
      return 'menu'
    case ButtonType.SEARCH:
      return 'search'
    case ButtonType.CALL:
      return 'call'
    case ButtonType.INFO:
      return 'info'
    case ButtonType.MORE:
      return 'more_vert'
    case ButtonType.ATTACH:
      return 'attach_file'
    case ButtonType.EMOJI:
      return 'mood'
    case ButtonType.VOICE:
      return 'mic'
  }
}

export default ({ buttonType, handleClick }: MaterialButtonProps) => (
  <button className='material-btn' onClick={handleClick}>
    <span className='material-symbols-outlined'>{buttonSpan(buttonType)}</span>
  </button>
)
