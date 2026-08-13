function calculateInterest() {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);

    let interest = (p * r * t) / 100;
    let total = p + interest;

    document.getElementById("result").innerHTML =
        "Simple Interest = ₹" + interest +
        "<br>Total Amount = ₹" + total;
}