const SKEY_NAME = "dingdong"
const setStorage = (name: string, value: any) => { sessionStorage.setItem(`${SKEY_NAME}.${name}`, value) }
/* const getSessionItem = sessionStorage.getItem
const removeSessionItem =sessionStorage.removeItem */
const mutations: any = {//同步
  ADD_BOOK(state: { bookList:any[]; }, book: any) {
    state.bookList.push(book);
    let value = JSON.stringify(state.bookList)
    setStorage('bookList', value)
    return true;
  },
 
  DELETE_BOOK(state: { bookList: any[]; }, id: number) {
    state.bookList.splice(id, 1)
  }
}
export default mutations


