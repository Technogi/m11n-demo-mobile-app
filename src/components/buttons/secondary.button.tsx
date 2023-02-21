import React from 'react'

import { theme } from 'src/styles'

import Button from './button'
import { ButtonProps } from './types'

/**
 * Returns a custom button used as a secondary button.
 *
 * @param {ButtonProps} buttonProps
 * @return {JSX.Element}  {JSX.Element}
 */
const SecondaryButton = (buttonProps: ButtonProps): JSX.Element => {
  const { containerStyle, textStyle, ...newButtonProps } = buttonProps

  return (
    <Button
      containerStyle={{ backgroundColor: theme.SECONDARY_TEXT_COLOR, ...containerStyle }}
      textStyle={{ color: theme.PRIMARY_COLOR, ...textStyle }}
      {...newButtonProps}
    />
  )
}

export default SecondaryButton
