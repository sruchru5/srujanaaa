function calculateVolume() {
    var radius = document.getElementById("radius").value;
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("result").textContent = "Volume of the Sphere: " + volume.toFixed(2);
}