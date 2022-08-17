import { InfoState } from "./types";

export const INFO_INITIAL_STATE = {
  info: {
    name: '',
    title: '',
    avatar: '',
  },
}

export const Info = {
  initialState: INFO_INITIAL_STATE,
  reducers: {
    updateInfo(state: InfoState, payload: Partial<InfoState['info']>) {
      const draft = { ...state };
      draft.info = { ...draft.info, ...payload };
      return draft;
    },
  },
}
