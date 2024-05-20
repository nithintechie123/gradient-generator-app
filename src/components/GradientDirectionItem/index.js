import {GradientItemButton, GradientItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, clickedDirectionButton, isActive} = props
  const {displayText, value} = gradientDirectionDetails

  const onClickDirectionButton = () => {
    clickedDirectionButton(value)
  }

  return (
    <GradientItem>
      <GradientItemButton onClick={onClickDirectionButton} isActive={isActive}>
        {displayText}
      </GradientItemButton>
    </GradientItem>
  )
}

export default GradientDirectionItem
