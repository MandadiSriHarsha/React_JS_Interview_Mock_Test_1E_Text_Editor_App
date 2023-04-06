import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  HomePageBgContainer,
  UserInputCard,
  HeadingCard,
  MainHeading,
  HomeImage,
  TextAreaCard,
  StyleButtonsCard,
  IconButtonBold,
  IconButtonItalic,
  IconButtonUnderlined,
  TextAreaInput,
} from './components/styledComponents'

import './App.css'

class App extends Component {
  state = {
    isTextBold: false,
    isTextItalic: false,
    isTextUnderlined: false,
    userInput: '',
  }

  onChangeTextToBold = () => {
    this.setState(prevState => ({isTextBold: !prevState.isTextBold}))
  }

  onChangeTextToItalic = () => {
    this.setState(prevState => ({isTextItalic: !prevState.isTextItalic}))
  }

  onChangeTextToUnderline = () => {
    this.setState(prevState => ({
      isTextUnderlined: !prevState.isTextUnderlined,
    }))
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {isTextBold, isTextItalic, isTextUnderlined, userInput} = this.state
    return (
      <HomePageBgContainer>
        <UserInputCard>
          <HeadingCard>
            <MainHeading>Text Editor</MainHeading>
            <HomeImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingCard>
          <TextAreaCard>
            <StyleButtonsCard>
              <li>
                <IconButtonBold
                  type="button"
                  onClick={this.onChangeTextToBold}
                  data-testid="bold"
                  isTextBold={isTextBold}
                >
                  <VscBold />
                </IconButtonBold>
              </li>
              <li>
                <IconButtonItalic
                  type="button"
                  onClick={this.onChangeTextToItalic}
                  data-testid="italic"
                  isTextItalic={isTextItalic}
                >
                  <GoItalic />
                </IconButtonItalic>
              </li>
              <li>
                <IconButtonUnderlined
                  type="button"
                  onClick={this.onChangeTextToUnderline}
                  isTextUnderlined={isTextUnderlined}
                  data-testid="underline"
                >
                  <AiOutlineUnderline />
                </IconButtonUnderlined>
              </li>
            </StyleButtonsCard>
            <TextAreaInput
              onChange={this.onChangeUserInput}
              value={userInput}
              isTextBold={isTextBold}
              isTextItalic={isTextItalic}
              isTextUnderlined={isTextUnderlined}
            />
          </TextAreaCard>
        </UserInputCard>
      </HomePageBgContainer>
    )
  }
}

export default App
