import HomePage from "../components/HomePage";
import { wrapper } from "../store/store";
import { incrementCounter } from "../store/counter/action";
import { addTodo } from '../store/todos/action';

const Other = (props) => {
  return <HomePage title="Other Page" linkTo="/" />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(incrementCounter());
  
  /*const response = await fetch(`https://reqres.in/api/todos/`);
  const {data} = await response.json();
  store.dispatch(addTodo`{todo}`)*/
});

export default Other;
