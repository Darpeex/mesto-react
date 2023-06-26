// Основное содержимое страницы

import logo from '../images/avatarBlack.jpg';

export function Main() {
  const handleEditAvatarClick = () => {
    const popup = document.querySelector('#updateAvatar');
    popup.classList.add('popup_opened');
  }
  const handleEditProfileClick = () => {
    const popup = document.querySelector('#editProfile');
    popup.classList.add('popup_opened');
  }
  const handleAddPlaceClick = () => {
    const popup = document.querySelector('#addCard');
    popup.classList.add('popup_opened');
  }

  return (
    <main className="content">

{/* Секция, блок profile */}
      <section className="profile page__profile-position section">
        <div className="profile__info">
          <div className="profile__avatar">
            <img className="profile__avatar-image" src={logo} alt='Аватарка'/>
            <button className="profile__avatar-button" type="button" onClick={handleEditAvatarClick} aria-label="Обновить аватарку"></button>
          </div>
          <div className="profile__content">
            <h1 className="profile__name">Человек</h1>
            <p className="profile__activity">Исследователь мира</p>
            <button className="profile__button profile__button_action_edit" type="button" onClick={handleEditProfileClick} aria-label="Редактировать"></button>
          </div>
        </div>
        <button className="profile__button profile__button_action_add" type="button" onClick={handleAddPlaceClick} aria-label="Добавить"></button>
      </section>

{/* Секция, блок elements */}
      <section id="elements" className="elements page__elements-position section">
        <template id="template">
          <article className="elements-block">
            <img src="#" alt="Карточка" className="elements-block__image"/>
            <button className="elements-block__delete-button"></button>
            <div className="elements-block__text">
              <h2 className="elements-block__name">#</h2>
              <div className="elements-block__like-container">
                <button className="elements-block__like-button" type="button" aria-label="Лайк"></button>
                <span className="elements-block__like-count"></span>
              </div>
            </div>
          </article>
        </template>
      </section>
    </main>
  )
}