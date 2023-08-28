//closure bucket

function measureOutFourLiters () {
    let bucket3L = 0
    let bucket5L = 0
    
    function fill5LBucket(){
        bucket5L = 5
    }

    function pourWaterInBuckets (){
        bucket5L -= 3
        bucket3L += 3
    }

    function empty3LBucket () {
        bucket3L -= 3
    }

    function pour2Lto3LBucket (){
        bucket5L -= 2
        bucket3L += 2
    }

    function pour1Lto3LBucket () {
        bucket5L -= 1
        bucket3L += 1
    }

    fill5LBucket()
    pourWaterInBuckets()
    empty3LBucket()
    pour2Lto3LBucket()
    fill5LBucket()
    pour1Lto3LBucket()

    return bucket5L
}

const result = measureOutFourLiters()
console.log("Остаток воды в 5 литровом ведре :" + " " + result + " " + "литра")

