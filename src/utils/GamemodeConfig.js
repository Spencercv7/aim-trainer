const GamemodeConfig = {
    furry: {
        name: "furry",
        targetSize: () => {return 70},
        targetLifeSpan: () => {return 3},
        newTargetCooldown: .5,
        roundTime: 60,
        endOnMiss: false,
        subtractOnMiss: false
    },
    classic: {
        name: "classic",
        targetSize: () => {
            return (Math.random() * 50) + 70; 
        },
        targetLifeSpan: () => {
            return (Math.random() * 2) + 2;
        },
        newTargetCooldown: 1,
        endOnMiss: true,
        subtractOnMiss: true
    }
    
}

export default GamemodeConfig;