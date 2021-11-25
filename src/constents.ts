import styled from "styled-components";

const InputH = "1.5em";
const InputBorder = "12px";
const InputW = "70%";
const BorderColor = "#5dd5c8";
export const SETUSERNAME = "setUsername";
export const SETPASSWORD = "setPassword";

const StartFormTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const FormWraper = styled.div`
  width: 300px;
  height: 250px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:auto;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border-radius: 16px;
  opacity: 0.8;
  gap:12px;
`;

const BackG = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${require(`./img/loginBackG.png`).default}) no-repeat center center;  /* styled-component 不能直接使用 url 引入图片，要先用 require 或 import 将变量提升到头部之后再引入才有效果 */
    background-size: cover; /* 让背景图基于容器大小伸缩 */
    background-attachment: fixed; /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    //此属性必须设置否则可能无效/
    background-color: #CCCCCC;
`;


export {InputH, InputBorder, InputW, BorderColor, StartFormTitle, FormWraper,BackG};