import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social=()=>{
    return(
        <div className="icon-container text-center">                                        
            <a className="ml-1 mr-1" href="https://twitter.com/dubis78"><FontAwesomeIcon icon={['fab', 'twiter']} /></a>
            <a className="ml-1 mr-1" href="https://www.linkedin.com/in/dubenis-andrea-lópez-lópez-a2408312b/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
            <a className="ml-1 mr-1" href="https://github.com/dubis78"><FontAwesomeIcon icon={['fab', 'tgithub-alt']} /></a>
            <a className="ml-1 mr-1" href="dubenis85201@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
        </div>
    );
}
export default Social;