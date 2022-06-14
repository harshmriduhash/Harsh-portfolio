import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id={"experience"}>
            <h5>What Skills I Have</h5>
            <h2>My Skillset</h2>
            <div className={"container experience__container"}>
                <div className={"experience__frontend"}>

                    <h3>Frontend Development</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>HTML</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>CSS & Bootstrap</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>JavaScript & TypeScript</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>React with Redux and Hooks </h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className={"experience__backend"}>
                    <h3>Backend Development</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Node JS</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Express.js</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Performance Optimization</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className={"experience__cloud"}>
                    <h3>Mobile Application</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>React Native</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Android</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>iOS</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Animations</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>         

                <div className={"experience__cloud"}>
                    <h3>DevOps with Security & Testing</h3>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>CI/CD</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>S3/EC2/IAM</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Jest</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Lambda</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>DOCKER/JENKINS</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience