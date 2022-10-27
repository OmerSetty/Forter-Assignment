import { css } from 'lit';

export default css`

  .message-container {
    display: flex;
    // position: relative;
  }
  .change {
    display: none;
    position: relative;
  }
  .message-container:hover .change {
    display: inline-flex;
    align-items: center;
	  color: blue;
	  font-size: 20px;
  }

  .respond-img {
    width: 20px;
    height: 20px;
  }

  .message {
    max-width: 50%;
    padding: 10px;
    margin: 10px;
    font-family: 'Roboto';
    font-style: normal;
  }

  .my-message {
    margin: 10px 10px 10px auto;
    border-radius: 16px 16px 0px 16px;
  }
  .other-message {
    display: inline-grid;
    border-radius: 0px 16px 16px 16px;
  }

  .question-message {
    background-color: #F8EAEE;
  }
  .answer-message {
    background: #F4F4F7;
  }
  .bot-no-answer-message {
    background-color: #FFE8BB;
  }
  .bot-answer-message {
    background-color: #9CDBFF;
  }

  
  .message-question {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: rgba(104, 104, 104, 0.85); 
  }
  .message-content {
    white-space: pre-wrap;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000d9;
  }
  .message-time {
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.45);
  }
`;
