import MaskElement from './mask-element.js';
import IMask from '../core/holder.js';

/** Bridge between HTMLElement and {@link Masked} */
class HTMLMaskElement extends MaskElement {
  /** HTMLElement to use mask on */

  constructor(input) {
    super();
    this.input = input;
    this._handlers = {};
  }
  get rootElement() {
    var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
    return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) == null ? void 0 : _this$input$getRootNo2.call(_this$input)) != null ? _this$input$getRootNo : document;
  }

  /**
    Is element in focus
  */
  get isActive() {
    return this.input === this.rootElement.activeElement;
  }

  /**
    Binds HTMLElement events to mask internal events
  */
  bindEvents(handlers) {
    Object.keys(handlers).forEach(event => this._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]));
  }

  /**
    Unbinds HTMLElement events to mask internal events
  */
  unbindEvents() {
    Object.keys(this._handlers).forEach(event => this._toggleEventHandler(event));
  }
  _toggleEventHandler(event, handler) {
    if (this._handlers[event]) {
      this.input.removeEventListener(event, this._handlers[event]);
      delete this._handlers[event];
    }
    if (handler) {
      this.input.addEventListener(event, handler);
      this._handlers[event] = handler;
    }
  }
}
/** Mapping between HTMLElement events and mask internal events */
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
IMask.HTMLMaskElement = HTMLMaskElement;

export { HTMLMaskElement as default };
