const { faker } = require("@faker-js/faker");

module.exports = [
  {
    id: "bontecoin",
    symbol: "bonte",
    name: "Bontecoin",
    balance: 102,
    target_currency: faker.commerce.price(100, 200, 0),
    image: {
      thumb:
        "https://assets.coingecko.com/coins/images/24277/thumb/logo_%281%29.png?1647180941",
      small:
        "https://assets.coingecko.com/coins/images/24277/small/logo_%281%29.png?1647180941",
      large:
        "https://assets.coingecko.com/coins/images/24277/large/logo_%281%29.png?1647180941",
    },
  },
  {
    id: "delion",
    symbol: "dln",
    name: "Delion",
    balance: 331,
    target_currency: faker.commerce.price(100, 200, 0),
    image: {
      thumb:
        "https://assets.coingecko.com/coins/images/7982/thumb/logo250.png?1552727709",
      small:
        "https://assets.coingecko.com/coins/images/7982/small/logo250.png?1552727709",
      large:
        "https://assets.coingecko.com/coins/images/7982/large/logo250.png?1552727709",
    },
  },
  {
    id: "mnpostree",
    symbol: "mptc",
    name: "MNPoSTree",
    balance: 217,
    target_currency: faker.commerce.price(100, 200, 0),
    image: {
      thumb:
        "https://assets.coingecko.com/coins/images/14290/thumb/mptc200.png?1615281277",
      small:
        "https://assets.coingecko.com/coins/images/14290/small/mptc200.png?1615281277",
      large:
        "https://assets.coingecko.com/coins/images/14290/large/mptc200.png?1615281277",
    },
  },
];
