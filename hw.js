//closure bucket

function measureOutFourLiters() {
    let bucket3L = 0
    let bucket5L = 0

    function fill5LBucket() {
        bucket5L += 5
    }

    function pourWaterInBuckets() {
        bucket3L = bucket5L - 3
    }

    function empty3LBucket() {
        bucket3L -= 3
    }

    function pour2Lto3LBucket() {
        bucket3L = bucket5L - 2
    }

    function pour1Lto3LBucket() {
        bucket3L = bucket5L - 4
    }

    function restOftheWaterIn5LBucket() {
        bucket5L = bucket5L - bucket3L
    }

    fill5LBucket()
    pourWaterInBuckets()
    empty3LBucket()
    pour2Lto3LBucket()
    fill5LBucket()
    pour1Lto3LBucket()
    restOftheWaterIn5LBucket()

    return bucket5L
}

const result = measureOutFourLiters()
console.log("Остаток воды в 5 литровом ведре :" + " " + result + " " + "литра")


// 4 zones 2 teams

function getRandomZone() {
    return Math.floor(Math.random() * 4) + 1;
}

function playRound(teamA, teamB, ballPossession) {
    let ballTransfers = 0

    while (teamA.hasZone(getRandomZone()) && teamB.hasZone(getRandomZone())) {
        ballTransfers++;
        ballPossession = 1 - ballPossession; // 1 - команда А, 0 - команда Б
    }

    return { ballPossession, ballTransfers }
}

class Team {
    constructor() {
        this.zones = new Set()
    }

    occupyZone(zone) {
        this.zones.add(zone)
    }

    hasZone(zone) {
        return this.zones.has(zone)
    }

    clearZones() {
        this.zones.clear()
    }
}

function game() {
    const teamA = new Team()
    const teamB = new Team()

    let ballPossession = Math.random() < 0.5 ? 1 : 0; // 1 - команда А, 0 - команда Б
    let rounds = 0
    let teamAScore = 0
    let teamBScore = 0

    while (teamAScore < 3 && teamBScore < 3 && rounds < 5) {
        teamA.clearZones()
        teamB.clearZones()

        for (let i = 0; i < 3; i++) {
            teamA.occupyZone(getRandomZone())
            teamB.occupyZone(getRandomZone())
        }

        const result = playRound(teamA, teamB, ballPossession)

        if (result.ballPossession === 1) {
            teamAScore++
            console.log(`В ${rounds + 1}-м раунде мяч переходил ${result.ballTransfers} раз. Очко засчитано команде A.`)
        } else {
            teamBScore++
            console.log(`В ${rounds + 1}-м раунде мяч переходил ${result.ballTransfers} раз. Очко засчитано команде Б.`)
        }

        rounds++;
        ballPossession = result.ballPossession
    }

    if (teamAScore > teamBScore) {
        console.log('Победила команда А!')
    } else {
        console.log('Победила команда Б!')
    }
}

game()





