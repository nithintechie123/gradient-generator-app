import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom, #014f7b, #8ae323);
  height: 100vh;
`
export const MainHeading = styled.h1`
  color: #ededed;
  font-family: 'Roboto';
`

export const MiniHeading = styled.h3`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 400;
`
export const GradientDirectionsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0px;
`
export const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 80px;
`

export const ColorInputContainer = styled.div`
  width: 70px;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  color: #ededed;
  font-size: 15px;
  font-weight: 500;
`

export const ColorInput = styled.input`
  background-color: transparent;
  border-width: 0px;
  height: 40px;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  margin-top: 20px;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 6px;
  width: 100px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  outline: none;
`
