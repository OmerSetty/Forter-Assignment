import {css} from 'lit';

export default css`
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    font-family: 'Roboto';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 1.5rem;
    width: 24rem;
    border-radius: 0.5rem;
  }

  .close-button {
    align-self: flex-end;
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: lightgray;
  }

  .close-button:hover {
    background-color: darkgray;
  }

  .question {
    align-self: flex-start;
  }

  .answer {
    padding: 10px;
    flex: auto;
    background-color: #FAFAFA;
    border-radius: 12px;
    border-color: transparent;
    font-family: 'Roboto';
    resize: none;
  }

  .answer:focus{
    outline: none;
  }
  
  .answer::placeholder{
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 16px;
  }

  .send-answer {
    border-color: transparent;
    margin-top: 10px;
    padding: 8px;
    background-color: #9cdbff;
    border-radius: 10px;
    color: #27AE60;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  }
`;
