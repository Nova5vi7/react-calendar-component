import Counter from "../Counter";
import "./form-component.scss";
import BackButton from "../buttons/BackButton";
import React from "react";
import GreenButton from "../buttons/GreenButton";

const FormComponent = ({backToStepCalendar}) => {
    return (
        <div className='form-wrap'>
            <div className="form-block">
                <div className="counter-wrap">
                    <span>
                        Anzahl Personen
                    </span>
                    <Counter/>
                </div>
            </div>
            <div className="form-block">
                <span>
                    Extras
                </span>
                <div className="extras-list">
                    <div className="extra-item">
                        <span>
                            +10 €
                        </span>
                        <p>
                            Gastronomie
                        </p>
                    </div>
                    <div className="extra-item active-extra">
                        <span>
                            +5 €
                        </span>
                        <p>
                            Getränke
                        </p>
                    </div>
                    <div className="extra-item">
                        <span>
                            +2 €
                        </span>
                        <p>
                            Drucker
                        </p>
                    </div>
                    <div className="extra-item">
                        <span>
                            +2 €
                        </span>
                        <p>
                            Drucker
                        </p>
                    </div>
                    <div className="extra-item">
                        <span>
                            +10 €
                        </span>
                        <p>
                            Gastronomie
                        </p>
                    </div>
                </div>
            </div>
            <div className="btn-wrap">
                <BackButton onClick={backToStepCalendar}/>
                <GreenButton
                    btnText='Weiter'
                />
            </div>
        </div>
    );
}

export default FormComponent;