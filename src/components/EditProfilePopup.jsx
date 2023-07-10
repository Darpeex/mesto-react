// Попап редактирования профиля
import React from "react";
import { PopupWithForm } from "./PopupWithForm"
import { CurrentUserContext } from "../context/CurrentUserContext"

export const EditProfilePopup = ({ onUpdateUser, isOpen, onClose }) => { // Передаётся текущее значение свойств isOpen и onClose
  const currentUser = React.useContext(CurrentUserContext); // Подписка на контекст
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

// После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name ?? '');
    setDescription(currentUser.about ?? '');
  }, [currentUser]); 

  const handleSubmit = (evt) => {
    evt.preventDefault(); // Запрещаем браузеру переходить по адресу формы
    onUpdateUser({ name, description }); // Передаём значения управляемых компонентов во внешний обработчик
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return( // В строке ниже передаём значения пропсов попапа в общую структуру/компонент попапа PopupWithForm
    <PopupWithForm id="editProfile" formId="editProfileForm" title="Редактировать профиль" name="editForm" text="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input
        name="name"
        value={name}
        onChange={handleNameChange}
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
        value={description}
        onChange={handleDescriptionChange}
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