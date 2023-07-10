// Попап обновления аватарки профиля
import React from "react";
import { PopupWithForm } from "./PopupWithForm"
// import { CurrentUserContext } from "../context/CurrentUserContext" - кажется, удобнее как в проекте "mesto" - без записи ссылки в попап (Разумеется, если можно - удалю комменты, иначе верну)

export const EditAvatarPopup = ({ onUpdateAvatar, isOpen, onClose }) => { // Передаётся текущее значение свойств isOpen и onClose const currentUser = React.useContext(CurrentUserContext); // Подписка на контекст
  const [avatar, setAvatar] = React.useState('');
  // const currentUser = React.useContext(CurrentUserContext); // Подписка на контекст 

// После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
  // React.useEffect(() => {
  //   setAvatar(currentUser.avatar ?? '');
  // }, [currentUser]); 

  const handleSubmit = (evt) => {
    evt.preventDefault(); // Запрещаем браузеру переходить по адресу формы
    onUpdateAvatar({ avatar }); // Передаём значения управляемых компонентов во внешний обработчик
  }

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  return( // В строке ниже передаём значения пропсов попапа в общую структуру/компонент попапа PopupWithForm
    <PopupWithForm id="updateAvatar" formId="updateAvatar" title="Обновить аватар" name="updateAvatar" text="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}> 
      <input
      name="avatar"
      value={avatar}
      onChange={handleAvatarChange}
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