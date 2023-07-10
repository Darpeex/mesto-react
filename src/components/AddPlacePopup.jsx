// Попап добавления карточки
import React from "react";
import { PopupWithForm } from "./PopupWithForm"

export const AddPlacePopup = ({ onAddPlace, isOpen, onClose }) => { // Передаётся текущее значение свойств isOpen и onClose
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault(); // Запрещаем браузеру переходить по адресу формы
    onAddPlace({ name, link }); // Передаём значения управляемых компонентов во внешний обработчик
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  
  return( // В строке ниже передаём значения пропсов попапа в общую структуру/компонент попапа PopupWithForm
    <PopupWithForm id="addCard" formId="creationForm" title="Новое место" name="creationForm" text="Создать" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        <input 
          name="name"
          id="name-card"
          value={name}
          onChange={handleNameChange}
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
          value={link}
          onChange={handleLinkChange}
          className="popup__form-input popup__form-input_field_srcImg"
          placeholder="Ссылка на картинку"
          type="url"
          required/>
        <span id="link-error" className="popup__form-input-error"></span>
    </PopupWithForm>
  )
}