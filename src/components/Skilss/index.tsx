import "../Skilss/styles.css"

export function Skills() {
    return (
        <>


            <h1 className="TextSkills">Skills</h1>
            <h2 className="Backend">Back-end</h2>
            <div className="ProgressBars">
                <div className="progress-bar progressAnimationStrike one" >
                    <h2 className="first">C#</h2>
                </div> 
                <div className="progress-bar progressAnimationStrike two">
                    <h2 className="second">NodeJs</h2>
                </div> 
                <div className="progress-bar progressAnimationStrike three">
                    <h2 className="threee">Git</h2>
                </div> 
                <div className="progress-bar progressAnimationStrike four">
                    <h2 className="fourP">Python</h2>
                </div> 
                <div className="progress-bar progressAnimationStrike five">
                    <h2 className="fiveJ">Java</h2>
                </div> 
            </div>
            <h2 className="Frontend"> Front-end </h2>
            <div className="ProgressBarsBack">
                
            </div>
        </>
    )
}