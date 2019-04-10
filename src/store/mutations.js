import {MUTYPE} from './types/mutations_types';

export const mutations = {
  [MUTYPE.SET_ALL_CONTENT](state , payload){
    state.allContent = payload;
  },
  [MUTYPE.IS_LOADING](state , payload){
    state.isLoading = payload;
  },
  [MUTYPE.SET_VIDEO_CONTENT](state , payload){
    state.videoContent = payload;
  }
};