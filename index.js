// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]]
}
const returnLastTwoDrivers = function (lastDrivers) {
    return [lastDrivers[2], lastDrivers[3]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a) {
    return function (fare) {
        return fare * a
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, callback) {
    return callback(drivers)
}