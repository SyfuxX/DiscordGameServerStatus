module.exports = {

  dateTimeNow: async function() {
    let date = new Date();
    let day = date.getDate() < 10 ? `0${ date.getDate().toString() }`: date.getDate();
    let fixMonth = date.getMonth() + 1;
    let month = fixMonth < 10 ? `0${ fixMonth.toString() }`: fixMonth;
    let year = date.getFullYear();
    let fixHours = date.getUTCHours()+1;
    let hours = fixHours < 10 ? `0${ fixHours.toString() }`: fixHours;
    let minutes = date.getMinutes() < 10 ? `0${ date.getMinutes().toString() }`: date.getMinutes();
    let seconds = date.getSeconds() < 10 ? `0${ date.getSeconds().toString() }`: date.getSeconds();

    return `[${day}.${month}.${year} ${hours}:${minutes}:${seconds}]`;
  }

}
