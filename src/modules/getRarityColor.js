const rarities = {commor: '#5b5b5b',
    uncommon: '#13CE0F',
    rare: '#3d85c6',
    epic: '#9e3171',
    legendary: '#f1c232',
    mythic: '#ff0096',
    special: '#cc0000'
}

export function getColor(name) {
    name = name.toLocaleLowerCase()
    return rarities[name]
}