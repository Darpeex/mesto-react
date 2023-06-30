// Попап обновления аватарки профиля
import { PopupWithForm } from "./PopupWithForm"

export const EditAvatarPopup = ({ isOpen, onClose }) => { // Передаётся текущее значение свойств isOpen и onClose
  return( // В строке ниже передаём значения пропсов попапа в общую структуру/компонент попапа PopupWithForm
    <PopupWithForm id="updateAvatar" formId="updateAvatar" title="Обновить аватар" name="updateAvatar" text="Сохранить" isOpen={isOpen} onClose={onClose} > 
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