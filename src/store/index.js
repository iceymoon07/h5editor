import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * @description 当前编辑器store
 */
const editor = {
  namespaced: true,
  state: {
    // 图层列表
    layerList: [],
    // 当前图层
    curLayer: null,
  },
  mutations: {
    /**
     * @description 添加新的图层
     */
    addLayer(state, layerIns) {
      state.layerList.push(layerIns);
    },
    /**
     * @description 设置图层列表
     */
    setLayerList(state, layerList) {
      state.layerList = layerList;
    },
  },
  actions: {},
  getters: {},
};

/**
 * @description 左侧页面列表store
 */
const page = {
  namespaced: true,
  state: {
    // 页面列表
    pageList: [
      {
        layerList: [],
        previewUrl: '',
      },
    ],
    // 当前页面
    curPage: null,
  },
  mutations: {
    /**
     * @description 设置当前page
     */
    setCurPage(state, page) {
      state.curPage = page;
    },
  },
  actions: {},
  getters: {},
};

export default new Vuex.Store({
  modules: {
    editor,
    page,
  },
});
