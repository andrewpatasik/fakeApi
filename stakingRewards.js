const subDays = require("date-fns/subDays");

module.exports = (coinId) => {
  console.log(coinId)
  const generateData = (range = 6) => {
    const data = [];

    for (let index = range; index >= 0; index--) {
      data.push({
        id: coinId,
        symbol: "btc",
        reward_amount: 1 * Math.random().toFixed(2),
        date: subDays(new Date(), index).toISOString().substring(0, 10),
      });
    }

    return data;
  };

  return generateData();
}