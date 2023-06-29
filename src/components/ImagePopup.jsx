// Попап открытия карточки

export function ImagePopup({ card, onClose }) {
  return (
    <div id="openCard" className={`popup ${card ? "popup_opened" : ""}`} onClick={onClose}> {/* onClick={props.onClose} - производит закрытие попапа по клику на оверлей */}
      <div className="popup__image-desription" onClick={(e) => e.stopPropagation()} > {/* .stopPropagation() - предотвращает всплытие на внутринние элементы попапа и позволяет избежать закрытия при клике на его содержимое */}
        <img className="popup__image-card"  src={card.link} alt={card.name} />
        <p className="popup__image-subtitle">{card.name}</p>
        <button className="popup__button popup__button_action_close" type="button" onClick={onClose} aria-label="Закрыть"></button>
      </div>
    </div>
  )
}