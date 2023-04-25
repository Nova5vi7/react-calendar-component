import "./title.scss";

const StepTitle = ({titleText}) => (
    <h3 className="main-title">
        <span>Bitte wahle eine Buchungsoption</span>
        {titleText && <span>{titleText}</span>}
    </h3>
)

export default StepTitle;