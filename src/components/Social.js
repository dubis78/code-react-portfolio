import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithubAlt} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Social=()=>{
    return(
        <div className="icon-container text-center">                                        
            <a className="ml-1 mr-1 text-info" href="https://twitter.com/dubis78"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="ml-1 mr-1 text-info" href="https://www.linkedin.com/in/dubenis-andrea-lópez-lópez-a2408312b/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a className="ml-1 mr-1 text-info" href="dubenis85201@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a className="ml-1 mr-1 text-info" href="https://github.com/dubis78"><FontAwesomeIcon icon={faGithubAlt} /></a>
        </div>
    );
}
export default Social;