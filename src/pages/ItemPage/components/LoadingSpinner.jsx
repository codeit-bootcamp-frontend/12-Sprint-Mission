import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PulseLoader } from "react-spinners";

// **설치 여부**: `styled-components`가 프로젝트에 설치되어 있는지 확인하세요. 설치가 되어 있지 않다면, 다음 명령어로 설치할 수 있습니다:
//    npm install styled-components
const MaskedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9998;
`;

const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

//  `react-spinners`라는 라이브러리를 이용해 간단한 로딩 스피너
const LoadingSpinner = ({
    size = 20,
    color = "var(--blue)",
    minLoadTime = 500,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, minLoadTime);

        return () => clearTimeout(timer);
    }, [minLoadTime]);

    return isVisible ? (
        <MaskedBackground>
            <SpinnerOverlay>
                <PulseLoader size={size} color={color} />
            </SpinnerOverlay>
        </MaskedBackground>
    ) : null;
};

export default LoadingSpinner;
