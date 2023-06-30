// Общий компонент попапов
export function PopupWithForm(props) {
  return ( // Условие попапа | isOpen ? "popup_opened" : "" | значит - если isOpen = true, попапу добавляется класс popup_opened (он открывается), иначе ничего не добавляем
    <div id={props.id} className={`popup ${props.isOpen ? "popup_opened" : ""}`} onClick={props.onClose}> {/* onClick={props.onClose} - производит закрытие попапа по клику на оверлей */}
      <div className="popup__container" onClick={(e) => e.stopPropagation()} > {/* .stopPropagation() - предотвращает всплытие на внутринние элементы попапа и позволяет избежать закрытия при клике на его содержимое */}
        <h2 className="popup__title">{props.title}</h2>
        <button className="popup__button popup__button_action_close" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
        <form id={`popup__${props.formId}`} className={`popup__form popup__${props.name}`} name="form-popup" noValidate>
          {props.children}
          <button className="button popup__button popup__button_action_save popup__button_valid" type="submit">{props.text}</button>
        </form>
      </div>
    </div>
  )
}