import './Services.css'
import {BsCheck2} from "react-icons/bs";

const Services = () => {
    return (
        <section id={"services"}>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className={"container services__container"}>
                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>App Development</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Design Driven Development.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>React Native for cross platform development </p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Re-architecture for scale, speed and security</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Rapid prototyping and ongoing enhancements</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>From development, testing to maintenance, full-cycle react native app development services.</p>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Web Development</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Custom Web Application in Staging</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Testing and Debugging Builds</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Backend and REST API Development</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services