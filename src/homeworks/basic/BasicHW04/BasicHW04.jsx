import "./styles.css";
import Header from "./components/Header/Header";
import ClientCard from "./components/ClientCard/ClientCard";
import {clients} from "./data"

function BasicHW04() {
    return (
        <div className="basicHW04-wrapper">
            <Header />
            <main>
                <div className="cards-container">
                    <div className="relative-parent">
                        <h2>Relative</h2>
                        <div className="absolute-child">
                            <h2>Absolute Child</h2>
                        </div>
                        <div className="static-square">
                                <h2>Static Square</h2>
                            </div>
                    </div>
                    {clients.map((client, index) => (<ClientCard
                    key={index}
                    name={client.name}
                    photo={client.photo}
                    age={client.age}
                    gender={client.gender}
                    borderStyle={client.borderStyle}
                    color={client.color}
                    />))}
                </div>
                <aside>
                    <h2>ASIDE</h2>
                    <div className="sticky"><h2>Sticky element in aside</h2></div>
                </aside>
            </main>
        </div>
    )
}

export default BasicHW04;