// Попап редактирования профиля
import { PopupWithForm } from "./PopupWithForm"

export const EditProfilePopup = ({ isOpen, onClose }) => { // Передаётся текущее значение свойств isOpen и onClose
  return( // В строке ниже передаём значения пропсов попапа в общую структуру/компонент попапа PopupWithForm
    <PopupWithForm id="editProfile" formId="editProfileForm" title="Редактировать профиль" name="editForm" text="Сохранить" isOpen={isOpen} onClose={onClose} >
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