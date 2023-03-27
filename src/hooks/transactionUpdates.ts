export const getTransactionUpdates = (transaction: any) => {
  const fetchTransactionUpdate = async () => {
    try {
      const ws = new WebSocket(
        "wss://socket.blockcypher.com/v1/btc/main?token=04906790b7ae493993f6bb919d5ac01b"
      );
      let count = 0;
      ws.onmessage = function (event) {
        console.log("The Event on message:", event);
        const shortHash = transaction.block_hash.substring(0, 6) + "...";
        const total = transaction.total / 100000000;
        const addrs = transaction.addresses.join(", ");
        $("#browser-websocket").before(
          "<div>Confirmed transaction " +
            shortHash +
            " totalling " +
            total +
            "BTC involving addresses " +
            addrs +
            "</div>"
        );
        count++;
        // Limit the count so I do not go over the api limit threshold for the demo
        if (count > 5) ws.close();
      };
      ws.onopen = function (event) {
        //Will listen to all confirmed transactions withing the given block hash
        console.log("The Event On Open:", event);
        ws.send(JSON.stringify({ event: "confirmed-tx" }));
      };
    } catch (e) {
      return new Error("Error fetching data");
    }
  };
  fetchTransactionUpdate();
};
