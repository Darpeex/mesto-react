import React from 'react'; // Библиотеки реакт
import { api } from '../utils/Api'; // Запросы на сервер
import { useState, useEffect } from 'react'; // Хуки реакт
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { ImagePopup } from './ImagePopup';
import { EditAvatarPopup } from './EditAvatarPopup';
import { EditProfilePopup } from './EditProfilePopup';
import { AddPlacePopup } from './AddPlacePopup';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { CardsContext } from '../context/CardsContext';
import '../index.css'; // Файлы со стилями

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);

// Константа с условием, проверка является ли хотя бы 1 попап открытым | нагуглил, что так можно, и судя по консоли - работает
  const isAnyPopupOpened = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || (Object.keys(selectedCard).length !== 0);
// Отвечает за закрытие попапов при нажатии ESC
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
// Проверка, является ли хотя бы один попап открытым
      if (isAnyPopupOpened) {
        document.addEventListener('keydown', handleEscClose);
      }
      return () => {
        document.removeEventListener('keydown', handleEscClose);
      };
  }, [isAnyPopupOpened]);

// Получение данных пользователя с сервера
  useEffect(() => {
    api.getUserInfo()
    .then((userInfo) => {
      setCurrentUser(userInfo);
    })
    .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);
// Обновление данных пользователя на сервере
  function handleUpdateUser({ name, description }) {
    api.setUserInfo({ name, description }).then((userInfo) => { // важно передавать userInfo, потому что если в функцию передавать объект { name, description }...
      setCurrentUser(userInfo); // ...где нет остальных полей, поля будут потеряны при обновлении состояния currentUser
      closeAllPopups();
    })
  }
// Обновление аватарки профиля
  function handleUpdateAvatar({ avatar }) {
    api.editAvatar({ avatar }).then((userInfo) => {
      setCurrentUser(userInfo);
      closeAllPopups();
    })
  }

// Получение данных карточек с сервера
  useEffect(() => {
    api.getInitialCards()
    .then((userInfo) => {
      setCards(userInfo);
    })
    .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  // Функции, меняющие состояния попапов (true - открыт, false - закрыт)
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }
	const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  // Открытие отдельной карточки
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }
  // Поддержка лайков и дизлайков
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  } 
  // Удаление карточки
  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id ));
    });
  }
  // Добавление карточки
  function handleAddPlaceSubmit({ name, link }) {
    const data = { name, link }
    api.addNewCard(data).then((newCard) => {
      setCards([newCard, ...cards]); 
      closeAllPopups();
    })
  }

// Происходит отрисовка компонентов?
  return (
    <div className="App">
      <div className="page">
        {/* Оборачиваем в провайдер всё содержимое */}
        <CurrentUserContext.Provider value={currentUser}>
        <CardsContext.Provider value={cards}>
{/* Шапка сайта */}
          <Header />

{/* Основное содержимое страницы */}
          <Main
            onEditProfile={handleEditProfileClick} // Передаём в Main функцию открытия попапа редактирования профиля
            onAddPlace={handleAddPlaceClick} // Передаём в Main функцию открытия попапа добавления карточки
            onEditAvatar={handleEditAvatarClick} // Передаём в Main функцию открытия попапа редактирования аватарки
            onCardClick={handleCardClick} // Прокидываем в Card обработчик handleCardClick, через компонент Main
            onCardLike={handleCardLike} // Прокидываем в Card обработчик handleCardLike, через компонент Main
            onCardDelete={handleCardDelete} // Прокидываем в Card обработчик handleCardDelete, через компонент Main
          />
    
{/* Подвал сайта */}
          <Footer />

{/* Попап редактирования аватарки. isOpen и onClose - пропсы компонента попапа (булево значение: true или false) */}
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

{/* Попап редактирования профиля */}
			    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

{/* Попап добавления карточки */}
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

{/* Попап подтверждения удаления */}
          {/* <ConfirmationPopup open={isConfirmationPopupOpen} /> */}

{/* Попап открытия карточки */}
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </CardsContext.Provider>
        </CurrentUserContext.Provider>

      </div>
    </div>
  );
}

export default App;