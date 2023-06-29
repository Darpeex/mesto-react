import React from 'react';
import { useState } from 'react';
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

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
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
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} />

{/* Попап редактирования профиля */}
				<EditProfilePopup isOpen={isEditProfilePopupOpen} />

{/* Попап добавления карточки */}
        <AddPlacePopup isOpen={isAddPlacePopupOpen} />

{/* Попап подтверждения удаления */}
        {/* <ConfirmationPopup open={isConfirmationPopupOpen} /> */}

{/* Попап открытия карточки */}
        <ImagePopup />

      </div>
    </div>
  );
}

export default App;