import { css } from 'lit';

// Some flexbox manipulations in order to position the scrollbar to the bottom
// whenever new message comes
export default css`
  .wrapper {
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
    height: 70vh;
  }
  .scroll-start-at-top {
    flex: 1 1 0%;
    height: 0.1px;
  }
`;
