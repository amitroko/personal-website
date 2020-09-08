import React, {Component} from 'react';
import Resume2020 from './images/resume.png';

const resumeStyle = {
    width: "850px",
    height: "1100px"
}

class Resume extends Component {
    render() {
        return(
            <div className="resume-wrapper">
                <img src={Resume2020} style={resumeStyle}/>
            </div>
        );
    }
}

export default Resume;