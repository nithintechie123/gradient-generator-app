import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  MainHeading,
  MiniHeading,
  GradientDirectionsContainer,
  ColorsContainer,
  ColorInputContainer,
  ColorInput,
  LabelElement,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    leftColorInput: '#014f7b',
    rightColorInput: '#8ae323',
    activeDirection: gradientDirectionsList[0].value,
    gradientDirection: gradientDirectionsList[0].value,
    updatedFromColor: '',
    updatedToColor: '',
  }

  onChangeLeftColorInputValue = event => {
    this.setState({leftColorInput: event.target.value})
  }

  onChangeRightColorInputValue = event => {
    this.setState({rightColorInput: event.target.value})
  }

  clickedDirectionButton = value => {
    this.setState({activeDirection: value})
  }

  onClickGenerateButton = () => {
    const {leftColorInput, rightColorInput, activeDirection} = this.state
    this.setState({
      updatedFromColor: leftColorInput,
      updatedToColor: rightColorInput,
      gradientDirection: activeDirection,
    })
  }

  render() {
    const {
      leftColorInput,
      rightColorInput,
      updatedFromColor,
      updatedToColor,
      activeDirection,
      gradientDirection,
    } = this.state

    return (
      <MainContainer
        data-testid="gradientGenerator"
        gradientDirection={gradientDirection}
        updatedFromColor={updatedFromColor}
        updatedToColor={updatedToColor}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <MiniHeading>Choose Direction</MiniHeading>
        <GradientDirectionsContainer>
          {gradientDirectionsList.map(eachGradient => (
            <GradientDirectionItem
              key={eachGradient.directionId}
              gradientDirectionDetails={eachGradient}
              clickedDirectionButton={this.clickedDirectionButton}
              isActive={activeDirection === eachGradient.value}
            />
          ))}
        </GradientDirectionsContainer>
        <MiniHeading>Pick the Colors</MiniHeading>
        <ColorsContainer>
          <ColorInputContainer>
            <LabelElement id="leftColorLabel">{leftColorInput}</LabelElement>
            <ColorInput
              htmlFor="leftColorLabel"
              type="color"
              onChange={this.onChangeLeftColorInputValue}
              value={leftColorInput}
            />
          </ColorInputContainer>
          <ColorInputContainer>
            <LabelElement id="rightColorLabel">{rightColorInput}</LabelElement>
            <ColorInput
              htmlFor="rightColorLabel"
              type="color"
              onChange={this.onChangeRightColorInputValue}
              value={rightColorInput}
            />
          </ColorInputContainer>
        </ColorsContainer>
        <GenerateButton type="button" onClick={this.onClickGenerateButton}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
