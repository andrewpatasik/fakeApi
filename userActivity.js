const { format } = require("date-fns");

module.exports = (range = 10) => {
  let acitivites = [];

  for (let index = 0; index < range; index++) {
    acitivites.push({
      amount: (Math.random() * 1).toFixed(3),
      status: Math.floor(Math.random() * 2),
      txId: (Math.random() * 1).toLocaleString(),
      timestamp: format(new Date(), "d MMM yy"),
    })
  }

  return acitivites
};