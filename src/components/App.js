import React from 'react'; // Библиотеки реакт
import { useState, useEffect } from 'react'; // Хуки реакт
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { ImagePopup } from './ImagePopup';
import { EditAvatarPopup } from './EditAvatarPopup';
import { EditProfilePopup } from './EditProfilePopup';
import { AddPlacePopup } from './AddPlacePopup';
import '../index.css'; // Файлы со стилями

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

// Константа с условием, проверка является ли хотя бы 1 попап открытым
  const isAnyPopupOpened = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard;
// Отвечает за закрытие попапов при нажатии ESC
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
// Проверка, является ли хотя бы один попап открытым
      if (isAnyPopupOpened)
      {
        document.addEventListener('keydown', handleEscClose);
      }
  }, [isAnyPopupOpened]);

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

      </div>
    </div>
  );
}

export default App;