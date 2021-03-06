import { ADD_TODO } from "./action";

const todosInitialState = {
  todos: ["Prendre Petit Dejeuner", "Prendre une douche"],
};

/* On retourne un objet dans lequel on décompose "state" pour récupérer l'existant,
 on y rajoute une clé "todos" qui est un tableau dans lequel 
 on décompose les "todos du state" et on y ajoute la "todos" qui se trouve dans l'action
 */

 
 export default function reducer(state = todosInitialState, action) {
   switch (action.type) {
     case ADD_TODO: {
         return { ...state, todos: [...state.todos, action.todos] };
       }
     default:
       return state;
   }
 }