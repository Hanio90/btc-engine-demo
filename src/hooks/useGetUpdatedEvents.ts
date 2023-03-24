export const getUpdates = (waletAddress: any, hash: any) => {

    const apiToken = 'f8a129f432d04fa5aa02165843124647';
    const ws = new WebSocket(`wss://socket.blockcypher.com/v1/btc/main?token=${apiToken}`);
    let count = 0;
    ws.onmessage = (event) => {
        console.log('the event', event)
        const tx = JSON.parse(event.data);
        const shortHash = hash.substring(0, 6) + "...";
        const total = tx.total / 100000000;
        const addrs = waletAddress;
        $('#browser-websocket').before("<div>Unconfirmed transaction " + shortHash + " totalling " + total + "BTC involving addresses " + addrs + "</div>");
        count++;
        if (count > 10) ws.close();

        return 'Waiting for notification around subscribed address';
    }
    ws.onopen = (event) => {
        ws.send(JSON.stringify({ event: "confirmed-tx" }));
    }
}