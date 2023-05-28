const pomCount = document.querySelector('#pom-count');
const casesWrapper = document.querySelector('.content__list');
const form = document.querySelector('.content__form');
const input = document.querySelector('.content__form-input');
const range = document.querySelector('.content__form-range');


range.addEventListener('input', (e) => {
  pomCount.textContent = e.target.value;
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.length > 0) {
    createCase(casesWrapper, input.value, range.value);
  } else {
    createCase(casesWrapper, 'безымянное дело', range.value);
  }
  input.value = '';
})

class Case {
  constructor(wrapper, name='безымянное дело', pomsCount=0) {
    this.item = document.createElement('div');
    this.item.classList.add('content__list-item', 'df', 'jcsb', 'aic');
    this.itemText = document.createElement('p');
    this.itemText.textContent = name;
    this.itemText.classList.add('content__item-text');
    this.pomsDiv = document.createElement('div');
    this.pomsDiv.classList.add('content__item-poms');
    this.pomsArr = new Poms(pomsCount).pomsArr;
    this.pomsArr.forEach(elem => {
      this.pomsDiv.append(elem);
    });

    wrapper.append(this.item);
    this.item.append(this.itemText);
    this.item.append(this.pomsDiv);
  }
}

class Poms {
  constructor(amount = 0) {
    this.pomsArr = [];
    for (let i = 0; i<amount; i++) {
      this.pom = document.createElement('img');
      this.pom.src = 'assets/images/tomato-icon.png';
      this.pom.classList.add('tomato');
      this.pomsArr.push(this.pom);
    }
  }
}


function createCase(wrapper, name, pomsCount) {
  new Case(wrapper, name, pomsCount);
}