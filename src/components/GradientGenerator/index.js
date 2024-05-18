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
  state = {leftColorInput: '#014f7b', rightColorInput: '#8ae323'}

  onChangeLeftColorInputValue = event => {
    this.setState({leftColorInput: event.target.value})
  }

  onChangeRightColorInputValue = event => {
    this.setState({rightColorInput: event.target.value})
  }

  render() {
    const {leftColorInput, rightColorInput} = this.state
    return (
      <MainContainer>
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <MiniHeading>Choose Direction</MiniHeading>
        <GradientDirectionsContainer>
          {gradientDirectionsList.map(eachGradient => (
            <GradientDirectionItem
              key={eachGradient.directionId}
              gradientDirectionDetails={eachGradient}
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
            />
          </ColorInputContainer>
          <ColorInputContainer>
            <LabelElement id="rightColorLabel">{rightColorInput}</LabelElement>
            <ColorInput
              htmlFor="rightColorLabel"
              type="color"
              onChange={this.onChangeRightColorInputValue}
            />
          </ColorInputContainer>
        </ColorsContainer>
        <GenerateButton type="button">Generate</GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
