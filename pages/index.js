import HomePage from "../components/HomePage";
import { wrapper } from '../store/store';
import { incrementCounter} from '../store/counter/action';

const Index = () => {
    return <HomePage title="Index Page" linkTo="/other" />;
};

export const getStaticProps = wrapper.getStaticProps((store) => {
    store.dispatch(incrementCounter())
  })

export default Index;