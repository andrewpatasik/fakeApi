const express = require("express");
const app = express();
const apiRouter = express.Router();
const cors = require("cors");

const coins = require("./coins");
const stakingRewards = require("./stakingRewards");
const userWallet = require("./userWallet");
const userActivity = require("./userActivity");

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);
apiRouter.get("/coins/list", (req, res) => {
  setTimeout(() => {
    res.send(coins)
  }, [2000])
});
apiRouter.get("/coins/staking/:coinId", (req, res) => {
  const coinId = req.params.coinId;
  setTimeout(() => {
    res.send(stakingRewards(coinId))
  }, [2000])
});
apiRouter.get("/wallet/user/:userId", (req, res) => {
  // const userId = req.params.userId;
  setTimeout(() => {
    // send wallet data
    res.send(userWallet())
  }, [2000])
})
apiRouter.get("/wallet/history/user/:userId", (req, res) => {
  // const userId = req.params.userId;
  setTimeout(() => {
    res.send(userActivity())
  }, [2000]);
})


app.listen(process.env.PORT || 5000, () => {
  console.log("server is running")
});

