import Link from 'next/link';
import Todos from './TodoPage';
import AddCount from "./IncrementCounter";


const HomePage = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Todos />
            <AddCount />
            <br />
            <nav>
                <Link href={props.linkTo}>
                    <a>Changer de Page</a>
                </Link>
            </nav>
        </div>
    )
};

export default HomePage;