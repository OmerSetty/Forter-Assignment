import {css} from 'lit';

export default css`
  .chat-header {
    padding: 10px;
    // padding: 10px 10px 0px 10px;
    font-family: 'Roboto';
  }
  
  .chat-headline {
    color: rgba(0, 0, 0, 0.85);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 10px;
  }
  
  .chat-data {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  .online {
    color: #27AE60;
  }

  .answered {
    color: #9CDBFF;
  }
`;
