import {MUTYPE} from './types/mutations_types';
import {BASE_URL , ALL_CONTENT , VIDEO_CONTENT} from './API_URL/';
import axios from 'axios';

const T = axios.create({baseURL: String(BASE_URL)});
const pagin = require('./pagination/paginator');
const {paginator} = pagin;

export const actions = {
  getAllContent({commit}){
    T.get(ALL_CONTENT).then((res) =>{ 
      console.log("\n⚠️ ALL_CONTENT (res): " , res.data);
      commit(MUTYPE.SET_ALL_CONTENT , res.data);
      commit(MUTYPE.IS_LOADING , false);
    }).catch((err) =>{
      console.log(err);
    });
  }
};