import { runInThisContext } from 'vm';

class SearchView {
  _parentElem = document.querySelector('.search');

  getQuery() {
    const query = this._parentElem.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElem.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElem.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
