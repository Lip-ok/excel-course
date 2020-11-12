import {DomListener} from '@core/DomListener';


export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }
  // Настраиваем наш компонент до init
  prepare() {}

  // Return pattern component
  toHTML() {
    return ''
  }

  // Инициализируем компонент
  // Добавляем DOM слушателей
  init() {
    this.initDOMListener()
  }

  // Уведомляем слушателя про event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // Удаляем компонент
  // Чистим слушателей
  destroy() {
    this.removeDOMListaners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}