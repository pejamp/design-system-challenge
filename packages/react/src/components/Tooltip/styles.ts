import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
})

export const TooltipContent = styled(Tooltip.Content, {
  boxShadow: '4px 16px 24px 0 rgba(0, 0, 0, 0.25)',
  padding: '$3 $4',
  borderRadius: '$sm',
  backgroundColor: '$gray900',

  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  textAlign: 'center',
  color: '$gray100',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
