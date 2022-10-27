import {css} from 'lit';

export default css`
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
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

  .show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
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
    resize: none;
  }

  .answer:focus{
    outline: none;
  }
  .answer::placeholder{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  // .answer {
  //   margin-bottom: 10px;
  //   // padding: 5px;
  //   border: 2px solid #ccc;
  //   border-radius: 4px;
  //   background-color: #f8f8f8;
  //   resize: none;
  //   box-sizing: border-box;
  // }

  // .answer:focus{
  //   outline: none;
  // }
  // .answer::placeholder{
  //   font-family: 'Roboto';
  //   font-style: normal;
  //   font-weight: 400;
  //   font-size: 14px;
  //   line-height: 16px;
  // }
`;
