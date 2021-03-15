import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerPagClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currPage = this._data.page;

    //page 1 and there are other pages
    if (currPage === 1 && numPages > 1)
      return this._generateMarkupBtnNext(currPage);

    //last page
    if (currPage === numPages && numPages > 1)
      return this._generateMarkupBtnPrev(currPage);

    //other  page
    if (currPage < numPages)
      return `        
        ${this._generateMarkupBtnPrev(currPage)} 
        ${this._generateMarkupBtnNext(currPage)}
        `;

    //only page 1 - there is no other pages
    return '';
  }

  _generateMarkupBtnPrev(currPage) {
    return `
            <button data-goto="${
              currPage - 1
            }" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${currPage - 1}</span>
            </button>
           `;
  }

  _generateMarkupBtnNext(currPage) {
    return `
            <button data-goto="${
              currPage + 1
            }" class="btn--inline pagination__btn--next">
              <span>Page ${currPage + 1}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </button>
          `;
  }
}

export default new PaginationView();
