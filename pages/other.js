import HomePage from "../components/HomePage";
import { wrapper } from "../store/store";
import { incrementCounter } from "../store/counter/action";
import { addTodo } from '../store/todos/action';

const Other = () => {
  return <HomePage title="Other Page" linkTo="/" />;
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(incrementCounter());

    
  const response = await fetch(`https://reqres.in/api/users/${Math.floor(Math.random() * (10) + 1)}`);
  const {data} = await response.json();
  store.dispatch(addTodo(`${data.first_name} ${data.last_name}`))
})

export default Other;
