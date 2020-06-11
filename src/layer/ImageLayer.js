import BaseLayer from './BaseLayer';
import { LAYER_TYPES } from './common';
import path from 'path'

export default class ImageLayer extends BaseLayer {
    constructor(url = path.resolve(__dirname, 'public/img/demo.jpg'), x, y, w, h) {
        super(x, y, w, h, LAYER_TYPES.IMAGE);
        this.url = url;
    }
}