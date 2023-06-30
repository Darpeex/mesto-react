// Попап добавления карточки
import { PopupWithForm } from "./PopupWithForm"

export const AddPlacePopup = ({ isOpen, onClose }) => { // Передаётся текущее значение свойств isOpen и onClose
  return( // В строке ниже передаём значения пропсов попапа в общую структуру/компонент попапа PopupWithForm
    <PopupWithForm id="addCard" formId="creationForm" title="Новое место" name="creationForm" text="Создать" isOpen={isOpen} onClose={onClose} >
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