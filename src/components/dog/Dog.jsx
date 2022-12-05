import "./Dog.scss";
import { useState, useEffect } from "react";
function Dog() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  // {scroll ? "dog-wrapper" : "bg-white"}
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="torso">
          <div className="fur">
            <div className="spot"></div>
          </div>
          <div className="neck">
            <div className="fur"></div>
            <div className="head">
              <div className="fur">
                <div className="snout"></div>
              </div>
              <div className="ears">
                <div className="ear">
                  <div className="fur"></div>
                </div>
                <div className="ear">
                  <div className="fur"></div>
                </div>
              </div>
              <div className="eye"></div>
            </div>
            <div className="collar"></div>
          </div>
          <div className="legs">
            <div className="leg">
              <div className="fur"></div>
              <div className="leg-inner">
                <div className="fur"></div>
              </div>
            </div>
            <div className="leg">
              <div className="fur"></div>
              <div className="leg-inner">
                <div className="fur"></div>
              </div>
            </div>
            <div className="leg">
              <div className="fur"></div>
              <div className="leg-inner">
                <div className="fur"></div>
              </div>
            </div>
            <div className="leg">
              <div className="fur"></div>
              <div className="leg-inner">
                <div className="fur"></div>
              </div>
            </div>
          </div>
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail -end">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail">
                        <div className="tail"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dog;
