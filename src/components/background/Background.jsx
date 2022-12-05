import Dog from "../dog/Dog";
import "./Background.scss";
function Background() {
  return (
    <div className="landing">
      {" "}
      <div className="outer-wrapper">
        <div className="wrapper">
          <div className="slide one">
            <Dog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
