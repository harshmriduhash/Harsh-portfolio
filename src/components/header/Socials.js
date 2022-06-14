import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from "react-icons/fi";

const Socials = () => {
    return (
        <div className={"header__socials"}>
            <a href={"https://www.linkedin.com/in/harsh-s-2ab5a0158/"} target={"_blank"} rel={"noreferrer"}><BsLinkedin /></a>
            <a href={"https://github.com/harshmriduhash"} target={"_blank"} rel={"noreferrer"}><FaGithub /></a>
        </div>
    )
}

export default Socials