import React from 'react';
import { useState, useEffect } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { ImagePopup } from './ImagePopup';
import { EditAvatarPopup, EditProfilePopup, AddPlacePopup, ConfirmationPopup } from './PopupWithForm';
import '../index.css';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, []);

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
  }

  return (
    <div className="App">
      <div className="page">

{/* Шапка сайта */}
        <Header />

{/* Основное содержимое страницы */}
        <Main
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
				/>
    
{/* Подвал сайта */}
        <Footer />

{/* Попап редактирования аватарки */}
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

{/* Попап редактирования профиля */}
				<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

{/* Попап добавления карточки */}
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

{/* Попап подтверждения удаления */}
        {/* <ConfirmationPopup open={isConfirmationPopupOpen} /> */}

{/* Попап открытия карточки */}
        <ImagePopup />

      </div>
    </div>
  );
}

export default App;