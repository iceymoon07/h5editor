import BaseLayer from './BaseLayer';
import { LAYER_TYPES } from './common';

export default class TextLayer extends BaseLayer {
  constructor(text = '', color = '#000', fontSize = 16, x, y, w, h) {
    super(x, y, w, h, LAYER_TYPES.TEXT);
    this.text = text;
    this.color = color;
    this.fontSize = fontSize;
  }
}
