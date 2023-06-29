// Попап обновления аватарки профиля
export const EditAvatarPopup = ({ isOpen, onClose }) => {
  return(
    <PopupWithForm id="#updateAvatar" formId="#updateAvatar" title="Обновить аватар" name="updateAvatar" text="Сохранить" isOpen={isOpen} onClose={onClose} >
      <input
      name="avatar"
      id="linkAvatar" 
      className="popup__form-input popup__form-input_field_avatar"
      placeholder="Ссылка на картинку"
      type="url"
      minLength="2"
      maxLength="200"
      required/>
      <span id="linkAvatar-error" className="popup__form-input-error"></span>
    </PopupWithForm>
  )
}
  // Попап редактирования профиля
export const EditProfilePopup = ({ isOpen, onClose }) => {
  return(
    <PopupWithForm id="#editProfile" formId="#editProfileForm" title="Редактировать профиль" name="editForm" text="Сохранить" isOpen={isOpen} onClose={onClose} >
      <input
        name="name"
        id="user-name"
        className="popup__form-input popup__form-input_field_name"
        type="text"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required/>
      <span id="user-name-error" className="popup__form-input-error"></span>
      <input
        name="about"
        id = "about"
        className="popup__form-input popup__form-input_field_activity"
        type="text"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required/>
      <span id="about-error" className="popup__form-input-error"></span>
    </PopupWithForm>
  )
}
// Попап добавления карточки
export const AddPlacePopup = ({ isOpen, onClose }) => {
  return(
    <PopupWithForm id="#addCard" formId="#creationForm" title="Новое место" name="creationForm" text="Создать" isOpen={isOpen} onClose={onClose} >
        <input 
          name="name"
          id="name-card"
          className="popup__form-input popup__form-input_field_nameCard"
          type="text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required/>
        <span id="name-card-error" className="popup__form-input-error"></span>
        <input
          name="link"
          id="link"
          className="popup__form-input popup__form-input_field_srcImg"
          placeholder="Ссылка на картинку"
          type="url"
          required/>
        <span id="link-error" className="popup__form-input-error"></span>
    </PopupWithForm>
  )
}

export const ConfirmationPopup = ({ isOpen, onClose }) => {
  return(
    <PopupWithForm id="#confirmationPopup" formId="confirmationPopup" title="Вы уверены?" name="confirmationPopup" text="Да" isOpen={isOpen} onClose={onClose} >
    </PopupWithForm>
  )
}

// Общий компонент попапов
export function PopupWithForm(props) {
  return (
    <div id={props.id} className={`popup ${props.isOpen ? "popup_opened" : ""}`} onClick={props.onClose}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()} >
        <h2 className="popup__title">{props.title}</h2>
        <button className="popup__button popup__button_action_close" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
        <form id={`popup__${props.formId}`} className={`popup__form popup__${props.name}`} name="form-popup" noValidate>
          {props.children}
          <button className="button popup__button popup__button_action_save popup__button_valid" type="submit">{props.text}</button>
        </form>
      </div>
    </div>
  )
}