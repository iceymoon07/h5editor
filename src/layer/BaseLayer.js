/**
 * @description 基础layer类
 */
export default class BaseLayer {
  constructor(x = 0, y = 0, w = 100, h = 100, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
  }
}
