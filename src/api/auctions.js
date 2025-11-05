export async function getAuctions() {
    const response = await fetch("https://api.hypixel.net/v2/skyblock/auctions")
    if (!response.ok) throw new Error("Failed to fetch auctions")
    const json = await response.json()
    const auctions = json.auctions
    for (let i = 0; i < auctions.length; i++) {
        auctions[i].id = i
    }
    console.log(auctions)
    return auctions
}