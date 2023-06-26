// Попап открытия карточки

export function ImagePopup() {
  return (
    <div id="openCard" className="popup">
      <div className="popup__image-desription">
        <img className="popup__image-card" src="#" alt="Фотография из карточки"/>
        <p className="popup__image-subtitle"></p>
        <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  )
}