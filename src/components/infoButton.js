import { ReactComponent as InfoSVG } from './miscimages/info.svg';

function InfoButton() {
  const toggleInfo = () => {
    document.querySelector('#infoPopout').classList.toggle('infoHide');
  };

  return (
    <div className="infoButtonContainer" onClick={toggleInfo}>
      <div className="infoHide" id="infoPopout">
        Thank you for visiting! On this web app you can: make a post, like,
        comment, and change your username on the profile page!
      </div>
      <InfoSVG />
    </div>
  );
}

export default InfoButton;
