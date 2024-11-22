"use client";
import logo from "@/assets/main/logo-transparent.png";
import Image from "next/image";
import styled from "styled-components";

const LoadingPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Image src={logo} width={130} height={100} alt="logo" className="-mb-6" />

      <StyledWrapper>
        <div className="loader" />
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .loader {
    display: block;
    --height-of-loader: 4px;
    --loader-color: #0079c1;
    width: 200px;
    height: var(--height-of-loader);
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .loader::before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
  }

  @keyframes moving {
    50% {
      width: 100%;
    }

    100% {
      width: 0;
      right: 0;
      left: unset;
    }
  }
`;

export default LoadingPage;
