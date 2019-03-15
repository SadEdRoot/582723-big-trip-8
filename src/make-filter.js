/**
 * Шаблон фильтра
 */

export default (obj) => `
<input type="radio" id="filter-${obj.title}" name="filter" value="${obj.title}" ${obj.isChecked ? `checked` : ``}>
<label class="trip-filter__item" for="filter-${obj.title}">${obj.title}</label>`;
