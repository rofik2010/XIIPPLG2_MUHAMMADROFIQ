function bilangan(value) {
    document.getElementById("display").value += value;
    console.log("bilangan : " + value);
}

function Hapus() {
    document.getElementById("display") .value = "";
    console.log("clear display");
}

function Hasil() {
    const display = document.getElementById("display")

try {
    display.value = eval(display.value);
    console.log("hasil : " + display.value);
} catch {
    display.value ="ERROR";
    console.log("ERROR");
}
}

function back() {
    display.value = display.value.slice(0, -1);
}

function Persen() {
    const value = document.getElementById("display");
    
    try {
        const bilangan = parseFloat(value.value);
        
       
        if (bilangan) {
            console.error("Input bukan angka yang valid.");
            value.value = ""; 
            return;
        }
        
        
        const persen = bilangan / 100;
        value.value = persen;
        console.log("Persen: " + persen + " %");
    } catch (error) {
        console.error("Terjadi kesalahan: ", error);
    }
}