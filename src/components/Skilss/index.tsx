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
                <div className="progress-bar progressAnimationStrike three"></div> 
                <div className="progress-bar progressAnimationStrike four"></div> 
                <div className="progress-bar progressAnimationStrike five"></div> 
            </div>
        </>
    )
}