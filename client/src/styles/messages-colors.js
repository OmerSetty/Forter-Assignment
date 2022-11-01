export function getColorByType(type) {
  switch (type) {
    case 'question':
      return '#F8EAEE';
    case 'answer':
      return '#F4F4F7';
    case 'answer-from-bot':
      return '#9CDBFF';
    case 'answered-question':
      return '#6de59f';
    default:
      return '#FFE8BB';
  }
}