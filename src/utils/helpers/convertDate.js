export const convertDate = (type, time) => {
  let date = time
    ? new Date(time === undefined ? time.toString() : time.replace(/\s/, 'T'))
    : new Date();

  let options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
  };

  switch (type) {
    case 'ymd':
      return `${date.getFullYear()}-${
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      }-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;

    case 'ymden':
      return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      }/${date.getFullYear()}`;

    case 'now':
      return date.toLocaleDateString('id-ID', options);

    case 'yesterday':
      date.setDate(date.getDate() - 1);
      return date.toLocaleString('id-ID', options);

    default:
      break;
  }
};
