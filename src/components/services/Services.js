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
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Digital Marketing</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Market Research/Copywriting.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>SEO.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Social Media Marketing.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Social Media ADS.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Google Ads and Analytics.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services