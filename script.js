let total = 0;

function tambahKeranjang(nama, harga){

    let list = document.getElementById("listKeranjang");

    let item = document.createElement("li");

    item.innerHTML = `${nama} - Rp ${harga.toLocaleString()}`;

    list.appendChild(item);

    total += harga;

    document.getElementById("total").innerText =
        total.toLocaleString();
}

function checkout(){

    if(total === 0){
        alert("Keranjang masih kosong!");
        return;
    }

    alert(
        "Terima kasih telah berbelanja!\nTotal pembayaran: Rp " +
        total.toLocaleString()
    );

    document.getElementById("listKeranjang").innerHTML = "";

    total = 0;

    document.getElementById("total").innerText = "0";
}
