import Counter from "../Counter";
import BackButtonVersionTwo from "../buttons/BackButtonVersionTwo";
import GreenButton from "../buttons/GreenButton";
import "./form-component.scss";

const FormComponent = ({
                           extrasData,
                           backToStepCalendar,
                           personCount,
                           setPersonCount,
                           updateExtrasValue,
                           activeExtras,
                           submitForm
                       }) => {
    return (
        <div className='form-wrap'>
            <div className="form-block">
                <div className="counter-wrap">
                    <span>
                        Anzahl Personen
                    </span>
                    <Counter
                        personCount={personCount}
                        setPersonCount={setPersonCount}
                    />
                </div>
            </div>
            <div className="form-block">
                <span>
                    Extras
                </span>
                <div className="extras-list">
                    {
                        extrasData.map(itm => {
                            //active-extra
                            return (
                                <div className={`extra-item ${activeExtras.includes(itm) ? 'active-extra' : ''}`} onClick={() => updateExtrasValue(itm)} key={itm.id}>
                                    <span>
                                        +{itm.extra_item_price} €
                                    </span>
                                    <p>
                                        {itm.extra_item_text}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="btn-wrap">
                <BackButtonVersionTwo onClick={backToStepCalendar}/>
                <GreenButton
                    btnText='Weiter'
                    btnType='submit'
                    onClick={submitForm}
                />
            </div>
        </div>
    );
}

export default FormComponent;