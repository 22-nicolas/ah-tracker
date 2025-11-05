export async function getUUIDfromName(name) {
    const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
    if (!response.ok) throw new Error("Failed to fetch auctions")
    const json = await response.json()
    const UUID = json.id
    return UUID
}

export async function getNameFromUUID(UUID) {
    const response = await fetch(`https://api.minecraftservices.com/minecraft/profile/lookup/${UUID}`)
    if (!response.ok) throw new Error("Failed to fetch auctions")
    const json = await response.json()
    const name = json.name
    return name
}