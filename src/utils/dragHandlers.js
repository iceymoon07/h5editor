/** 
 *@description 拖拽图层事件处理
*/
export const handleDragLayer = (layer, e) => {
    let x0 = e.clientX;
    let y0 = e.clientY;
    // 鼠标移动事件处理
    const handleMove = ({ clientX, clientY }) => {
        // 用移动后的鼠标位置相对于初始鼠标位置的变化量，更新图层的 x、y 位置数据
        layer.x = layer.x + clientX - x0;
        layer.y = layer.y + clientY - y0;
        // 更新初始鼠标位置
        x0 = clientX;
        y0 = clientY;
    };
    // 鼠标点击图层时添加鼠标移动事件绑定
    document.addEventListener("mousemove", handleMove);
    // 鼠标松开时移除鼠标移动事件绑定
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", handleMove);
    });
}

/** 
 *@description 拖拽控件左上角方块事件处理
*/
export const handleDragTL = (layer, e) => {
    let x0 = e.clientX;
    let y0 = e.clientY;
    const handleMove = ({ clientX, clientY }) => {
        // 获取鼠标指针坐标变化量 deltaX、deltaY
        const deltaX = clientX - x0;
        const deltaY = clientY - y0;
        if (deltaX > 0) {
            if (layer.w - Math.abs(deltaX) >= 10 && layer.h - Math.abs(deltaY) >= 10) {
                // 更新图层的 x、y 位置数据
                layer.x = layer.x + Math.abs(deltaX);
                layer.y = layer.y + Math.abs(deltaY);
                // 更新图层宽高
                layer.w = layer.w - Math.abs(deltaX);
                layer.h = layer.h - Math.abs(deltaY);
            }
        } else {
            // 更新图层的 x、y 位置数据
            layer.x = layer.x - Math.abs(deltaX);
            layer.y = layer.y - Math.abs(deltaY);
            // 更新图层宽高
            layer.w = layer.w + Math.abs(deltaX);
            layer.h = layer.h + Math.abs(deltaY);
        }
        // 更新初始鼠标位置
        x0 = clientX;
        y0 = clientY;
    };
    document.addEventListener("mousemove", handleMove);
    // 鼠标松开时移除鼠标移动事件绑定
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", handleMove);
    });
}

/**
 * @description 拖拽控件右上角方块事件处理
 */
export const handleDragTR = (layer, e) => {
    let x0 = e.clientX;
    let y0 = e.clientY;
    const handleMove = ({ clientX, clientY }) => {
        // 获取鼠标指针坐标变化量 deltaX、deltaY
        const deltaX = clientX - x0;
        const deltaY = clientY - y0;
        if (deltaX > 0) {
            // 更新图层的 x、y 位置数据
            layer.y = layer.y - Math.abs(deltaY);
            // 更新图层宽高
            layer.w = layer.w + Math.abs(deltaX);
            layer.h = layer.h + Math.abs(deltaY);
        } else {
            if (layer.w - Math.abs(deltaX) >= 10 && layer.h - Math.abs(deltaY) >= 10) {
                // 更新图层的 x、y 位置数据
                layer.y = layer.y + Math.abs(deltaY);
                // 更新图层宽高
                layer.w = layer.w - Math.abs(deltaX);
                layer.h = layer.h - Math.abs(deltaY);
            }
        }
        // 更新初始鼠标位置
        x0 = clientX;
        y0 = clientY;
    }
    document.addEventListener("mousemove", handleMove);
    // 鼠标松开时移除鼠标移动事件绑定
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", handleMove);
    });
}

/**
 * @description 拖拽控件左下角方块事件处理
 */
export const handleDragBL = (layer, e) => {
    let x0 = e.clientX;
    let y0 = e.clientY;
    const handleMove = ({ clientX, clientY }) => {
        // 获取鼠标指针坐标变化量 deltaX、deltaY
        const deltaX = clientX - x0;
        const deltaY = clientY - y0;
        if (deltaX > 0) {
            if (layer.w - Math.abs(deltaX) >= 10 && layer.h - Math.abs(deltaY) >= 10) {
                // 更新图层的 x、y 位置数据
                layer.x = layer.x + Math.abs(deltaX);
                // 更新图层宽高
                layer.w = layer.w - Math.abs(deltaX);
                layer.h = layer.h - Math.abs(deltaY);
            }
        } else {
            // 更新图层的 x、y 位置数据
            layer.x = layer.x - Math.abs(deltaX);
            // 更新图层宽高
            layer.w = layer.w + Math.abs(deltaX);
            layer.h = layer.h + Math.abs(deltaY);
        }
        // 更新初始鼠标位置
        x0 = clientX;
        y0 = clientY;
    }
    document.addEventListener("mousemove", handleMove);
    // 鼠标松开时移除鼠标移动事件绑定
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", handleMove);
    });
}

/**
 * @description 拖拽控件右下角方块事件处理
 */
export const handleDragBR = (layer, e) => {
    let x0 = e.clientX;
    let y0 = e.clientY;
    const handleMove = ({ clientX, clientY }) => {
        // 获取鼠标指针坐标变化量 deltaX、delytaY
        const deltaX = clientX - x0;
        const deltaY = clientY - y0;
        if (deltaX > 0) {
            // 更新图层宽高
            layer.w = layer.w + Math.abs(deltaX);
            layer.h = layer.h + Math.abs(deltaY);
        } else {
            if (layer.w - Math.abs(deltaX) >= 10 && layer.h - Math.abs(deltaY) >= 10) {
                // 更新图层宽高
                layer.w = layer.w - Math.abs(deltaX);
                layer.h = layer.h - Math.abs(deltaY);
            }
        }
        // 更新初始鼠标位置
        x0 = clientX;
        y0 = clientY;
    }
    document.addEventListener("mousemove", handleMove);
    // 鼠标松开时移除鼠标移动事件绑定
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", handleMove);
    });
}