import Link from 'next/link';
import Todos from './TodoPage';
import AddCount from "./IncrementCounter";


const HomePage = (props) => {
    return (
        <div>
            <h1 style={{backgroundColor: "#ddd"}}>{props.title}</h1>
            <Todos />
            <AddCount />
            <br />
            <nav>
                <Link href={props.linkTo}>
                    <a>Naviguer</a>
                </Link>
            </nav>
        </div>
    )
};

export default HomePage;