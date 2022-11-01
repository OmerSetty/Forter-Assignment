import {css} from 'lit';

export default css`
  :host {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  .instructions {
    font-family: 'Roboto';
    padding-left: 20%;
    padding-right: 20%;
    animation: fadeIn 3s;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  h1 {
    font-size: 90px;
    margin: 0px 0px 10px 0px;
  }

  p {
    font-size: 22px;
    line-height: 24px;
  }
  
  code {
    font-size: 24px;
  }
  
  img {
    vertical-align: middle;  
    line-height: 24px;  
  }
  
  .icons {
    width: 20px;
    height: 20px;
  }
`;
