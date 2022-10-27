import {css} from 'lit';

export default css`
  .chat-controls {
    display: flex;
    padding: 10px;
  }

  .messages-input {
    padding: 10px;
    flex: auto;
    background-color: #FAFAFA;
    border-radius: 12px;
    border-color: transparent;
  }
  .messages-input:focus{
    outline: none;
  }
  .messages-input::placeholder{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  .send-button {
    border-color: transparent;
    background-color: transparent;
    color: #27AE60;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  .question-to-answer {
    
  }
`;
