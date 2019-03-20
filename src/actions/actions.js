import * as types from './types'

export const addDatas = (text) => ({
    type: types.ADICIONAR_DADO,
    payload: text,
});