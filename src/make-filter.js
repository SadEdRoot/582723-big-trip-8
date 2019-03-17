export default (filterObject) => `
<input type="radio" id="filter-${filterObject.title}" name="filter" value="${filterObject.title}" ${filterObject.isChecked ? `checked` : ``}>
<label class="trip-filter__item" for="filter-${filterObject.title}">${filterObject.title}</label>`;
