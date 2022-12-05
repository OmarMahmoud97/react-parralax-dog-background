import Dog from "../dog/Dog";
import "./Background.scss";
function Background() {
  return (
    <div className="landing">
      {" "}
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one">
            <Dog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
