import "./Background.scss";

function Background() {
  window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
  });
  return (
    <div className="landing">
      <div className="outer-wrapper">
        <div className="wrapper">
          <div className="slide one"></div>
        </div>
      </div>
    </div>
  );
}

export default Background;
