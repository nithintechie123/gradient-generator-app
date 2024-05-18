import {GradientItemButton, GradientItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails} = props
  const {displayText} = gradientDirectionDetails

  return (
    <GradientItem>
      <GradientItemButton>{displayText}</GradientItemButton>
    </GradientItem>
  )
}

export default GradientDirectionItem
