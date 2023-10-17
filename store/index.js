
import { hamDeQuyKhacThamSo, getTokenFromCookie } from '@/helpers';

// state
export const state = () => {
  // state là một function và phải return về một giá trị
  return {
    appMainMenus: {
      items: []
    }
  }
}


// mutations
export const mutations = {
  setAppMainMenus(state, data) {
    state.appMainMenus = data;
  }
}


// getters
export const getters = {
  mainMenuItems(rootState) {
    const newItems = rootState.appMainMenus.items.map(item => {
      return hamDeQuyKhacThamSo(item);
    });

    return newItems;
  }
  // mainMenuItems(rootState) {
  //   const newItems = rootState.appMainMenus.items.map(item => {
  //     const data = {
  //       id: item.ID,
  //       url: item.url,
  //       title: item.title,
  //     }

  //     let child_items = item.child_items
  //     if(!child_items) {
  //       data.child_items = [];
  //     } else {
  //       data.child_items = child_items.map(_item=> {
  //         const _data = {
  //           id: _item.ID,
  //           url: _item.url,
  //           title: _item.title,
  //         }
  //         let _child_items = _item.child_items;
  //         if(!_child_items) {
  //           _data.child_items = [];
  //         } else {
  //           _data.child_items = _child_items.map(__item => {
  //             const __data = {
  //               id: __item.ID,
  //               url: __item.url,
  //               title: __item.title,
  //             }
  //             return __data;
  //           })
  //         }

  //         return _data;
  //       })
  //     }

  //     return data;

  //   })
  //   return newItems;
  // }
}

// action
export const actions = {
  async nuxtServerInit({ dispatch }, { req } ) {

    // console.log("req.headers.cookie", cookie.parse(req.headers.cookie));
    const token = getTokenFromCookie(req);

    // là nơi dispatch ra những dữ liệu dùng chung
    dispatch('posts/actFetchCategories'),
    await Promise.all([
      dispatch('actFetchMainMenus'),
      dispatch('auth/actFetchCurrentUser', token)
    ])
  },

  async actFetchMainMenus({ commit }) {
    try {
      const response = await this.$wpApi.get('/menus/v1/menus/main-menu');

      if(response.status === 200) {
        commit('setAppMainMenus', response.data);
      }
    } catch(e) {
      console.error("actFetchMainMenus", e.response.data.message);
    }
  }
}
