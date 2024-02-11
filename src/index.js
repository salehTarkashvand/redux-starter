
import { Map } from 'immutable';

let person = Map({
  name: 'hamed',
});

const addPro = (object) => {
  return object.set('age' , 30)
}

person = addPro(person)
console.log(person.toJS());