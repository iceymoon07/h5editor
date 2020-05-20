import BaseLayer from './BaseLayer';
import { LAYER_TYPES } from './common';

export default class ImageLayer extends BaseLayer {
    constructor(url = 'http://localhost:8081/public/img/demo.jpg', x, y, w, h) {
        super(x, y, w, h, LAYER_TYPES.IMAGE);
        this.url = url;
    }
}