import PropTypes from "prop-types";
import StarSurah from "./icon/StarSurah";
import { useStarSurah } from "../../../stores/Surah";
import { useState, useEffect } from "react";

HeaderIcon.propTypes = {
  setDisplayArti: PropTypes.func,
  displayArti: PropTypes.bool,
  surahTitle: PropTypes.string,
  handleStarSurah: PropTypes.func,
};

export default function HeaderIcon(props) {
  const { displayArti, setDisplayArti, surahTitle, handleStarSurah } = props;
  const { dataStarSurah } = useStarSurah();
  const [isStared, setIsStared] = useState(false);

  const handleDisplayArti = () => {
    if (displayArti == true) {
      setDisplayArti(false);
      return;
    }
    setDisplayArti(true);
  };

  useEffect(() => {
    const stared = dataStarSurah.find((d) => d.titleSurah == surahTitle);
    stared ? setIsStared(true) : setIsStared(false);
  }, [dataStarSurah, surahTitle]);

  function handleStar() {
    if (isStared) {
      return false;
    }
    
    handleStarSurah(setIsStared);
  }

  return (
    <div className="flex gap-2">
      <button onClick={handleDisplayArti}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="14.5" stroke="white" />
          <path
            d="M9.35294 18.2632V19.8421C9.35301 20.2403 9.50257 20.6238 9.77164 20.9157C10.0407 21.2076 10.4094 21.3864 10.8039 21.4163L10.9216 21.4211H13.2745V23H10.9216C10.0895 23 9.29154 22.6673 8.70319 22.0751C8.11484 21.4829 7.78431 20.6796 7.78431 19.8421V18.2632H9.35294ZM19.549 14.3158L23 23H21.3098L20.3678 20.6316H17.16L16.2196 23H14.5302L17.9804 14.3158H19.549ZM18.7647 16.5934L17.7867 19.0526H19.7412L18.7647 16.5934ZM11.7059 8V9.57895H14.8431V15.1053H11.7059V17.4737H10.1373V15.1053H7V9.57895H10.1373V8H11.7059ZM18.7647 8.78947C19.5968 8.78947 20.3947 9.12218 20.9831 9.7144C21.5714 10.3066 21.902 11.1098 21.902 11.9474V13.5263H20.3333V11.9474C20.3333 11.5286 20.1681 11.127 19.8739 10.8309C19.5797 10.5348 19.1807 10.3684 18.7647 10.3684H16.4118V8.78947H18.7647ZM10.1373 11.1579H8.56863V13.5263H10.1373V11.1579ZM13.2745 11.1579H11.7059V13.5263H13.2745V11.1579Z"
            fill="white"
          />
        </svg>
      </button>
      <button>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="14.5" stroke="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 7.81818C6 7.36631 6.36631 7 6.81818 7H11.7273C12.8122 7 13.8528 7.431 14.62 8.1982C15.3872 8.96539 15.8182 10.0059 15.8182 11.0909V22.5455C15.8182 22.9973 15.4519 23.3636 15 23.3636C14.5481 23.3636 14.1818 22.9973 14.1818 22.5455C14.1818 22.1115 14.0094 21.6952 13.7025 21.3884C13.3957 21.0815 12.9794 20.9091 12.5455 20.9091H6.81818C6.36631 20.9091 6 20.5428 6 20.0909V7.81818ZM14.1818 19.7112V11.0909C14.1818 10.4399 13.9232 9.8156 13.4629 9.35528C13.0026 8.89497 12.3783 8.63636 11.7273 8.63636H7.63636V19.2727H12.5455C13.1249 19.2727 13.6885 19.4264 14.1818 19.7112Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.38 8.1982C16.1472 7.431 17.1877 7 18.2727 7H23.1818C23.6337 7 24 7.36631 24 7.81818V20.0909C24 20.5428 23.6337 20.9091 23.1818 20.9091H17.4545C17.0206 20.9091 16.6043 21.0815 16.2975 21.3884C15.9906 21.6952 15.8182 22.1115 15.8182 22.5455C15.8182 22.9973 15.4519 23.3636 15 23.3636C14.5481 23.3636 14.1818 22.9973 14.1818 22.5455V11.0909C14.1818 10.0059 14.6128 8.96539 15.38 8.1982ZM15.8182 19.7112C16.3115 19.4264 16.8751 19.2727 17.4545 19.2727H22.3636V8.63636H18.2727C17.6217 8.63636 16.9974 8.89497 16.5371 9.35528C16.0768 9.8156 15.8182 10.4399 15.8182 11.0909V19.7112Z"
            fill="white"
          />
        </svg>
      </button>
      <button onClick={handleStar}>
        <StarSurah isStared={isStared} />
      </button>
    </div>
  );
}
