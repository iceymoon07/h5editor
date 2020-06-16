import BaseLayer from './BaseLayer';
import { LAYER_TYPES } from './common';

export const SVG_SHAPES = {
    RECT: 'RECT',
    ELLIPSE: 'ELLIPSE'
}

export default class SvgLayer extends BaseLayer {
    constructor(shape, bgColor = '#fff', bdColor = '#000', x, y, w, h) {
        super(x, y, w, h, LAYER_TYPES.SVG)
        this.shape = shape
        this.bgColor = bgColor
        this.bdColor = bdColor
    }
}