import React, {useEffect, useState} from 'react';
import '../../components/button/button.css'
import '../../components/button/button.js'
import '../../components/clock/clock.css'
import '../../components/clock/clock.js'
import { DSEsubjectData } from "./DSE-subject-data.js";
import { S12subjectData } from "./S12-subject-data.js";
import { S3subjectData } from "./S3-subject-data.js";
export default function Timer() {
    const [form, setForm] = useState('');
    let subjectData;
    if(form === '1' || form === '2') {
        subjectData = S12subjectData;
    }
    else if(form === '3'){
        subjectData = S3subjectData; 
    }
    else {
        subjectData = DSEsubjectData; 
    };
    return (
        <main className="container">
            <div className="HeaderHeight"></div>
            <section className="p-3">
                <div className="row p-3">
                    <div className="col-1 p-3">
                        <label for="secondary form" class="form-label h4">Form</label>
                        <select class="form-select bg-dark text-light" id="secondary form" required="" value={form} onChange={e => setForm(e.target.value)}>
                            <option value="1">S1</option>
                            <option value="2">S2</option>
                            <option value="3">S3</option>
                            <option value="4">S4</option>
                            <option value="5">S5</option>
                            <option value="6">S6</option>
                        </select>
                    </div>
                    <div className="col-4 p-3">
                        <label for="subject" class="form-label h4">Subject</label>
                        <select class="form-select bg-dark text-light" id="subject" required="">
                            {subjectData && subjectData.map((data, key) => {
                                return (
                                    <option value={data.subject}>
                                        {data.chi_name+" "+data.eng_name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="col-4 p-3">
                        <label for="paper" class="form-label h4">Paper</label>
                        <select class="form-select bg-dark text-light" id="paper" required="">
                            <option value="1">-</option>
                        </select>
                    </div>
                    <div className="col-2 p-3">
                        <label for="starting-time" class="form-label h4">Starting Time</label>
                        <select class="form-select bg-dark text-light" id="starting-time" required="">
                            <option value="0830">08:30</option>
                        </select>
                    </div>
                    <div className="col-1 p-3">
                        <label for="time" class="form-label h4">Time</label>
                        <select class="form-select bg-dark text-light" id="time" required="">
                            <option value="1">-</option>
                        </select>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </main>
    );
}