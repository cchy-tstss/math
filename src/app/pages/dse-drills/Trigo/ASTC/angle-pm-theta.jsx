import React, {useEffect, useState} from 'react';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export default function AnglePmTheta() {
    
	const [texQ, setTexQ] =useState('');
    const [texA_chi, setTexA_chi] =useState('');
    const [texA_eng, setTexA_eng] =useState('');
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[texQ]);
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[texA_eng]);
    useEffect(()=>{
		if( typeof window?.MathJax !== "undefined"){
			window.MathJax.typesetClear()
			window.MathJax.typeset()
		}
	},[texA_chi])
    let eq1 = "\\(";
    let eq2 = 90*getRndInteger(1,5);
    let eq3 = "^{\\circ}";
    let eq4 = "-";
    let eq5 = "\\theta";
    let eq6 = "\\)";
    let i = 0;
    let pm = 0;

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
		<main className="px-4 py-3 vh-100 vw-100 d-flex align-content-between flex-wrap">
			<div className="h1 vh-25 w-100">
                Let {"\\( \\ \\theta \\ \\)"} be an acute angle. Determine which quadrant does the following angle lies on.
                <br/><br/>
                設 {"\\( \\ \\theta \\ \\)"} 為銳角，判斷下列角度所屬的象限。
            </div>
            <div className="display-1 vh-50 vw-100 d-flex justify-content-center align-items-center">
                {texQ}
            </div>
            <div className="vh-25 vw-100 mb-5 align-items-center">
                <div className="row mb-5">
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={() => {
                            eq2 = 90*getRndInteger(1,5);
                            i = getRndInteger(1,3);
                            if(i === 2){
                                eq4 = "+";
                                pm = 1;
                            }else{
                                eq4 = "-";
                                pm = -1;
                            }
                            setTexQ(eq1+eq2+eq3+eq4+eq5+eq6);
                            let ans = Math.floor((Number(eq2) + Number(pm)) / 90) + 1;
                            if(ans === 1 || ans === 5){
                                setTexA_eng("\\( \\text{Quadrant I} \\)");
                                setTexA_chi("\\( \\text{象限 I} \\)");
                            };
                            if(ans === 2){
                                setTexA_eng("\\( \\text{Quadrant II} \\)");
                                setTexA_chi("\\( \\text{象限 II} \\)");
                            };
                            if(ans === 3){
                                setTexA_eng("\\( \\text{Quadrant III} \\)");
                                setTexA_chi("\\( \\text{象限 III} \\)");
                            };
                            if(ans === 4){
                                setTexA_eng("\\( \\text{Quadrant IV} \\)");
                                setTexA_chi("\\( \\text{象限 IV} \\)");
                            };
                            setIsVisible(false);
                        }}>
                            Next
                        </button>
                    </div>
                    <div className="col-2 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <button className="button-rainbow h4 w-75" onClick={toggleVisibility}>
                            Answer
                        </button>
                    </div>
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                </div>
                <div className="row mb-5 display-5">
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <div className={isVisible ? 'visible' : 'invisible'}>
                            {texA_eng}
                        </div>
                    </div>
                    <div className="col-2 col-sm-2 d-flex justify-content-center">
                        <div className="invisible">
                            {"\\( \\displaystyle \\frac{1}{2} \\)"}
                        </div>
                    </div>
                    <div className="col-4 col-sm-3 d-flex justify-content-center">
                        <div className={isVisible ? 'visible' : 'invisible'}>
                            {texA_chi}
                        </div>
                    </div>
                    <div className="col-1 col-sm-2 d-flex justify-content-center"></div>
                </div>
            </div>
		</main>
	);
}