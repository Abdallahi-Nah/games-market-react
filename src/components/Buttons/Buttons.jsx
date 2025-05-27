import "./Buttons.css";

const PrimaryButton = (props) => {
  return (
    <>
      <button className="button primary-btn">
        {props.children}
      </button>
    </>
  );
};

const SecondaryButton = (props) => {
  return (
    <>
      <button className="button secondary-btn">
        {props.children}
      </button>
    </>
  );
};

export default PrimaryButton;
export { SecondaryButton };
