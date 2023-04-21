import "../Skilss/styles.css"

export function Skills() {
    return (
        <>


            <h1 className="TextSkills">Skills</h1>
            <h2 className="Frontend">Front-end</h2>
            <h2 className="Backend">Back-end</h2>
            
            <div className="teste"></div>


            <div className="wrap-circlesback">
                <div className="circle per-0">
                    <div className="inner">CSharp</div>
                </div>
                <div className="circle per-25">
                    <div className="test">NodeJS</div>
                </div>
                <div className="circle per-50">
                    <div className="inner">Java</div>
                </div>
                <div className="circle per-75">
                    <div className="inner">Git</div>
                </div>
            </div>


            <div className="wrap-circlesfront">
                <div className="circle per-0f">
                    <div className="inner">React</div>
                </div>
                <div className="circle per-25f">
                    <div className="test">JavaScript</div>
                </div>
                <div className="circle per-50f">
                    <div className="inner">Java</div>
                </div>
                <div className="circle per-75f">
                    <div className="inner">Git</div>
                </div>
            </div>

        </>
    )
}