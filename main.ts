loops.everyInterval(2000, function () {
    datalogger.log(
    datalogger.createCV("Beschleunigung", input.acceleration(Dimension.Strength)),
    datalogger.createCV("Lautstärke", input.soundLevel()),
    datalogger.createCV("Lichtstärke", input.lightLevel()),
    datalogger.createCV("Temperatur", input.temperature())
    )
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1000
    )
})
