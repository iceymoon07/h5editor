import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * @description 当前编辑器 store
 */
const editor = {
  namespaced: true,
  state: {
    // 当前在编辑器中显示的图层列表
    layerList: [],
    // 当前选中的图层
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
     * @description 删除某个图层
     */
    deleteLayer(state, layerIns) {
      const index = state.layerList.indexOf(layerIns);
      state.layerList.splice(index, 1);
    },
    /**
     * @description 设置图层列表
     */
    setLayerList(state, layerList) {
      state.layerList = layerList;
    },
    /**
     * @description 设置当前选中的图层
     */
    setCurLayer(state, layerIns) {
      state.curLayer = layerIns;
    }
  },
  actions: {},
  getters: {},
};

/**
 * @description 左侧页面列表 store
 */
const page = {
  namespaced: true,
  state: {
    // 页面列表，默认有一页
    pageList: [
      { // 页面的图层列表
        layerList: [],
      }
    ],
    // 当前选中的页面
    curPage: null,
  },
  mutations: {
    /**
     * @description 设置页面列表
     */
    setPageList(state, pageList) {
      state.pageList = pageList;
    },
    /**
     * @description 设置当前选中的页面
     */
    setCurPage(state, page) {
      state.curPage = page;
    },
    /**
     * @description 添加新的页面
     */
    addPage(state, page) {
      state.pageList.push(page)
    },
    /**
     * @description 删除某个页面
     */
    deletePage(state, page) {
      const index = state.pageList.indexOf(page);
      state.pageList.splice(index, 1);
    }
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
