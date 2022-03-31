module.exports = {

  createDate: async function(date) {
    const statusDate = new Date(date);
    const dateYear = statusDate.getFullYear();
    const dateMonth = (statusDate.getMonth() + 1) < 10
      ? `0${statusDate.getMonth() + 1}`
      : statusDate.getMonth() + 1;
    const dateDay = statusDate.getDate() < 10
      ? `0${statusDate.getDate()}`
      : statusDate.getDate();
    const timeHour = statusDate.getUTCHours() < 10
      ? `0${statusDate.getUTCHours()}`
      : statusDate.getUTCHours();
    const timeMinute = statusDate.getMinutes() < 10
      ? `0${statusDate.getMinutes()}`
      : statusDate.getMinutes();

    return `${timeHour}:${timeMinute} - ${dateDay}.${dateMonth}.${dateYear}`;
  }

};
