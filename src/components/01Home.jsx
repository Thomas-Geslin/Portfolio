import React from "react";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";


// Keyframes for smotth appearance on load
const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-70px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const customAnimationSubtitle = keyframes`
  from {
    opacity: 0;
    transform: translateX(70px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;



export default function Home() {
  return(
      <div className="home">
          <div className="home__presentation">
              <Reveal keyframes={customAnimation} duration={1500} triggerOnce>
                <h1 className="home__presentation__title home__presentation__title--main">Thomas Geslin</h1>
                <span className="home__presentation__break"></span>
                <h2 className="home__presentation__title">Fullstack Developer</h2>
              </Reveal>
              <Reveal keyframes={customAnimationSubtitle} duration={1500} delay={500} triggerOnce><p className="home__presentation__subtitle">Hi, I'm Thomas Geslin, a fullstack developer specialized in Javascript tools, and frameworks - working directly with my clients to bring the best in their projects</p></Reveal>
          </div>

          {/* <div className="home__3d">
            <iframe id="frame" src="https://app.vectary.com/p/0tj1kQn4Vljge5SFz81GIf" title="figma" frameBorder="0" className="home__3d--figma"></iframe>            
            <iframe src="https://app.vectary.com/p/6BH0RpuUmiGOwKRn4fTBol" title="react" frameBorder="0" className="home__3d--react"></iframe>
            <iframe src="https://app.vectary.com/p/1bvBKqqAUlTNWy7ftRHkpL" title="vscode" frameBorder="0" className="home__3d--vscode"></iframe>
            <iframe src="https://app.vectary.com/p/5PZjfP8e7NbbVUayYFkO5d" title="illustrator" frameBorder="0" className="home__3d--illustrator"></iframe>
          </div> */}
      </div>
    )
}