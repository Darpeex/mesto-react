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
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

// По сути происходит отрисовка компонентов?
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
          />
    
{/* Подвал сайта */}
          <Footer />

{/* Попап редактирования аватарки. isOpen и onClose - пропсы компонента попапа (булево значение: true или false) */}
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

{/* Попап редактирования профиля */}
			    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

{/* Попап добавления карточки */}
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

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