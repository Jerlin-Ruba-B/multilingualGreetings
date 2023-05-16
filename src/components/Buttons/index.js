import {ButtonList, LanguageButtons, ActiveButtons} from './styledComponents'

const Buttons = props => {
  const {button, activeLanguage, changeActiveButton} = props

  const updateActiveBtn = () => {
    changeActiveButton(button.id)
  }

  const isActive = activeLanguage === button.id

  return (
    <ButtonList>
      {isActive ? (
        <ActiveButtons>{button.buttonText}</ActiveButtons>
      ) : (
        <LanguageButtons onClick={updateActiveBtn}>
          {button.buttonText}
        </LanguageButtons>
      )}
    </ButtonList>
  )
}
export default Buttons
