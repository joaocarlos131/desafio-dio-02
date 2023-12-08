let saldoVitorias

function rankeadas(vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas
    return saldoRankeadas
}

saldoVitorias = rankeadas(5, 10)
console.log(saldoVitorias)

if (saldoVitorias <= 10){
    console.log("Ferro")
} else if((saldoVitorias >= 11) && (saldoVitorias <= 20)){
    console.log("Bronze")
} else {
    console.log("Nivel não encontrado")
}