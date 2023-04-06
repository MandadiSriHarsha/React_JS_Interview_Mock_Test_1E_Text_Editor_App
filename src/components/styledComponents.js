import styled from 'styled-components'

export const HomePageBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #25262c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const UserInputCard = styled.div`
  background-color: #1b1c22;
  border-radius: 5px;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  height: 80vh;
  max-height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeadingCard = styled.div`
  display: flex;
  width: 45%;
  height: 90%;
  max-width: 450px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 25px 20px 25px;
  font-family: 'Roboto';
  color: #ffffff;
`

export const MainHeading = styled.h1`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  padding: 30px 0px 30px 0px;
`

export const HomeImage = styled.img`
  width: 100%;
  justify-content: center;
`

export const TextAreaCard = styled.div`
  width: 53%;
  max-width: 500px;
  border: 1px solid #f8fafc;
  border-radius: 10px;
  height: 90%;
  border-radius: 10px;
  margin: 0px 20px 0px 10px;
  font-family: 'Roboto';
  align-self: center;
`

export const StyleButtonsCard = styled.ul`
  width: 100%;
  height: 13%;
  max-height: 13%;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  padding: 10px 0px 10px 20px;
  margin: 0px;
`

export const ButtonItem = styled.li`
  padding: 0px;
`

export const IconButtonBold = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  margin: 0px;
  padding: 0px 20px 0px 0px;
  color: ${props => (props.isTextBold === false ? '#f1f5f9' : '#faff00')};
`

export const IconButtonItalic = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  margin: 0px;
  padding: 0px 20px 0px 0px;
  color: ${props => (props.isTextItalic === false ? '#f1f5f9' : '#faff00')};
`

export const IconButtonUnderlined = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  margin: 0px;
  padding: 0px 20px 0px 0px;
  color: ${props => (props.isTextUnderlined === false ? '#f1f5f9' : '#faff00')};
`

export const TextAreaInput = styled.textarea`
  height: 87%;
  max-height: 87%;
  width: 100%;
  max-width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: transparent;
  color: #ffffff;
  font-size: 18px;
  font-weight: ${props => (props.isTextBold ? 'bold' : 'normal')};
  text-decoration: ${props =>
    props.isTextUnderlined ? 'underline' : 'normal'};
  font-style: ${props => (props.isTextItalic ? 'italic' : 'normal')};
  cursor: pointer;
  padding: 10px 0px 0px 13px;
  outline: none;
`
