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




