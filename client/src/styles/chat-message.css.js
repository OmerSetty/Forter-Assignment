import { css } from 'lit';

export default css`
  .message-container {
    display: flex;
    font-weight: 400;
    line-height: 16px;
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

  .img {
    width: 20px;
    height: 20px;
  }

  .message {
    max-width: 50%;
    padding: 10px;
    margin: 10px;
    font-family: 'Roboto';
  }

  .my-message {
    margin: 10px 10px 10px auto;
    border-radius: 16px 16px 0px 16px;
  }
  .other-message {
    display: inline-grid;
    border-radius: 0px 16px 16px 16px;
  }

  
  .message-question {
    font-size: 14px;
    color: #686868d9;
    margin-bottom: 4px;
  }
  .message-content {
    font-size: 14px;
    color: #000000d9;
  }
  .suggestion {
    cursor: pointer;
  }
  .message-time {
    font-size: 12px;
    color: #00000073;
  }
`;
