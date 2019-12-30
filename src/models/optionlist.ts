import { Effect } from 'dva';
import { Reducer } from 'redux';

import { queryNotices } from '@/services/listData';

export interface CurrentUser {
    optionList?: Array<any>
}

export interface UserModelState {
  currentUser?: CurrentUser;
}

export interface UserModelType {
  namespace: 'option';
  state: UserModelState;
  effects: {
    fetchCurrent: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'option',

  state: {
    currentUser: {},
  },

  effects: {
    *fetchCurrent(_, { call, put }) {
        let data = yield call(queryNotices())
        
        yield put({
          type: 'saveCurrentUser',
          payload: data,
        });
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
  },
};

export default UserModel;
