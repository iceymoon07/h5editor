import BaseLayer from './BaseLayer';
import { LAYER_TYPES } from './common';

export default class ImageLayer extends BaseLayer {
    constructor(url = 'http://img.aiimg.com/uploads/allimg/140317/263915-14031G40117.jpg', x, y, w, h) {
        super(x, y, w, h, LAYER_TYPES.IMAGE);
        this.url = url;
    }
}