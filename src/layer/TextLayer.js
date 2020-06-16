import BaseLayer from './BaseLayer';
import { LAYER_TYPES } from './common';

export default class TextLayer extends BaseLayer {
  constructor(text = '输入文本内容', color = '#000', fontSize = 16, bold = false, italic = false, underline = false, x, y, w, h) {
    super(x, y, w, h, LAYER_TYPES.TEXT);
    this.text = text;
    this.color = color;
    this.fontSize = fontSize;
    this.bold = bold
    this.italic = italic
    this.underline = underline
  }
}
