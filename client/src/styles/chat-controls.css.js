import {css} from 'lit';

export default css`
  .chat-controls {
    display: flex;
    padding: 10px;
  }

  .messages-input {
    padding: 10px;
    flex: auto;
    font-family: 'Roboto';
    background-color: #FAFAFA;
    border-radius: 12px;
    border-color: transparent;
  }
  .messages-input:focus{
    outline: none;
  }
  .messages-input::placeholder{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
  }

  .send-button {
    border-color: transparent;
    background-color: transparent;
    color: #27AE60;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;

    background-position: center;
    transition: background 0.8s;
  }
  .send-button:hover {
    background-color: #47a7f5;
    background-image: radial-gradient(circle,transparent 1%,#9cdbff 1%);
    background-position: center;
    background-size: 15000%;
    color: white;
  }
  .send-button:active {
    transition: background 0s;
    background-color: #6eb9f7;
    background-size: 100%;
  }
`;
