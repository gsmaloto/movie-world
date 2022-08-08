import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Container><div class="lds-hourglass"></div></Container>
  )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000096;
    position: fixed;
    z-index: 100;
    font-size: 4rem;
    top: 0;

    .lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: scale(1.5);
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

`

export default Loading