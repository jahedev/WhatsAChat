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
  NIGHT,
}

interface MaterialButtonProps {
  buttonType: ButtonType
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  // handleClick: Function
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
    case ButtonType.NIGHT:
      return 'dark_mode'
  }
}

export default ({ buttonType, handleClick }: MaterialButtonProps) => (
  <button className='material-btn' onClick={handleClick}>
    <span className='material-symbols-outlined'>{buttonSpan(buttonType)}</span>
  </button>
)
