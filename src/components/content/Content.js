import React, {useState} from 'react';
import '../../primaryStyles.css';
import TextBody from './TextBody';
import PhotoBody from './Photo'

    export default function Header() {
       //const [messageOrWork, setWork] = useState(true);
        const [messageOrWork, setShowResults] = React.useState(true)
        const toggleMessage = () => setShowResults(true)
        const toggleWork = () => setShowResults(false)
    return (
        <div id="bodyOuter">
            <div id="contentOptions">
                <a className="contentOptionSelector" onClick={toggleMessage}>Message</a>
                <a className="contentOptionSelector" onClick={toggleWork}>Photos</a>
            </div>
            <div id="placeContent">
                { messageOrWork ? <TextBody /> : <PhotoBody /> }
            </div>
        </div>
    );
}