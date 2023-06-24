import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import '../index.css';

function App() {
  return (
    <div className="App">
      <div className="page">

{/* <!-- Шапка сайта --> */}
        <Header />

{/* <!-- Основное содержимое страницы --> */}
        <Main />
    
{/* <!--Подвал сайта, блок footer --> */}
        <Footer />
  </div>

{/* <!-- Попап редактирования профиля --> */}
    <div id="editProfile" className="popup">
      <div className="popup__container">
        <h2 className="popup__title">Редактировать профиль</h2>
        <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть"></button>
        <form className="popup__form popup__editForm" name="form-popup" noValidate>
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
          <button className="button popup__button popup__button_action_save popup__button_valid" type="submit">Сохранить</button>
        </form>
      </div>
    </div>

  {/* <!-- Попап добавления карточки --> */}
  <div id="addCard" className="popup">
    <div className="popup__container">
      <h2 className="popup__title">Новое место</h2>
      <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть"></button>
      <form id="popup__creationForm" className="popup__form popup__creationForm" name="form-popup" noValidate>
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
        <button className="button popup__button popup__button_action_create" type="submit">Создать</button>
      </form>
    </div>
  </div>

  {/* <!-- Попап открытия карточки --> */}
  <div id="openCard" className="popup">
    <div className="popup__image-desription">
      <img className="popup__image-card" src="#" alt="Фотография из карточки"/>
      <p className="popup__image-subtitle"></p>
      <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть"></button>
    </div>
  </div>
  
  {/* <!-- Попап подтверждения удаления --> */}
  <div id="confirationPopup" className="popup">
    <div className="popup__container">
      <h2 className="popup__title popup__title_padding-less">Вы уверены?</h2>
      <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть"></button>
      <form id="popup__confirationPopup" className="popup__form popup__confirationPopup" name="form-popup" noValidate>
        <button className="button popup__button popup__button_action_delete popup__button_valid" type="submit">Да</button>
      </form>
    </div>
  </div>

  {/* <!-- Попап обновления аватарки профиля--> */}
  <div id="updateAvatar" className="popup">
    <div className="popup__container">
      <h2 className="popup__title">Обновить аватар</h2>
      <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть"></button>
      <form id="popup__updateAvatar" className="popup__form popup__updateAvatar" name="form-popup" noValidate>
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
          <button className="button popup__button popup__button_action_save popup__button_valid" type="submit">Сохранить</button>
      </form>
    </div>
  </div>
    </div>
  );
}

export default App;