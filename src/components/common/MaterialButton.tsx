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

const buttonSpan = (buttonType: ButtonType) => {
  const icon = (iconName: string) => (
    <span className='material-symbols-outlined'>{iconName}</span>
  )

  switch (buttonType) {
    case ButtonType.MENU:
      return icon('menu')
    case ButtonType.SEARCH:
      return icon('search')
    case ButtonType.CALL:
      return icon('call')
    case ButtonType.INFO:
      return icon('info')
    case ButtonType.MORE:
      return icon('more_vert')
    case ButtonType.ATTACH:
      return icon('attach_file')
    case ButtonType.EMOJI:
      return icon('mood')
    case ButtonType.VOICE:
      return icon('mic')
  }
}

export default ({ buttonType }: { buttonType: ButtonType }) =>
  buttonSpan(buttonType)
