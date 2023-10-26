function media(){
let nom= window.prompt('qual e o nome do aluno')
let n1 = Number(window.prompt(`qual a primeira nota de ${nom}?`))
let n2 = Number(window.prompt(`qual a segunda nota de ${nom}?`))
med = (n1+n2)/2


let msg 
if (med >=6) {
    msg = "meus parabens"}
    else{
     msg = "estude mais"      
}

let res = document.getElementById('situacao')
res.innerHTML = `<p>  calcular a mnedia final de ${nom} </p>`
res.innerHTML += `<p>  as notas obtidas foram  ${n1}?  ${n2}?</p>`
res.innerHTML += `<p>  a media final sera ${med} </p>`
res.innerHTML += `<p> a msg final que temos é: style'<strong color.red;>'${msg} </strong> </p>`
}

