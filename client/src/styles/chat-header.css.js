import { css } from 'lit';

export default css`
  .chat-header {
    padding: 10px;
    font-family: 'Roboto';
    line-height: 16px;
  }
  
  .chat-headline {
    color: #000000d9;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .chat-data {
    font-weight: 400;
    font-size: 14px;
    display: flex;
  }

  .online {
    color: #27AE60;
  }

  .answered {
    color: #9CDBFF;
  }

  .clear-chat {
    margin-left: auto;
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  
`;
