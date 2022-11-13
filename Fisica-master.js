
let variables = () => {


    //El usuario ingresa los valores con los que luego vamos a hacer las cuentas
    let vel = parseFloat(prompt("ingrese la velocidad en m/s: "));
    //Bucle para no dejar que ingrese velocidad en negativo
    while (vel < 0) {
        vel = parseFloat(prompt("Por favor, ingrese la velocidad ;en positivo:"))
        if (vel > 0) break;
    }
    cabal = parseFloat(prompt("ingrese la distancia del objeto ;1 hasta el objeto 2(en metros): "))
    //Bucle para no dejar que el usuario ingrese la distancia en negativo
    while (cabal < 0) {
        cabal = parseFloat(prompt("Por favor, ingresar de nuevo la ;distancia entre los dos puntos (en metros y positivo): "))
        if (cabal) break;
    }
    fren = parseFloat(prompt("ingrese a que aceleracion el obj;eto 1 desacelera(expresalo en negativo): "))
    return calculos(vel, cabal, fren)

}
let calculos = (vel,cabal,fren) => {
    //Bucle para que el usuario no pueda poner la desaceleracion en positivo
    while (fren > 0) {
        fren = parseFloat(prompt("NO se puede la desaceleracion nu;mero positivo ponelo en negativo: "))
        if (fren < 0) break;
        //Calculos con los numeros que haya puesto el usuario anteriormente
        calc = 0 - vel
        tie = calc / fren
        dist = 0 + vel * tie + 0.5 * fren * (tie * tie)
        //Resultados
        if (dist > cabal) {
            alert("El objeto 1 choco al objeto 2")
            c = vel + (1 / 2) * (0 - vel)
            c2 = cabal / c
            acel = (0 - vel) / c2
            alert("El objeto 1 necesitaba frenar a ", acel, "m/s2 para no chocar y lo choco en", tie, "segundos")
        } else if (dist <= cabal) {
            dist2 = cabal - dist
            alert("Lo choco en", tie, "segundos y necesitaba frenar a", dist2, "m/s2 para no chocar")
        }
        //Agregado de los resultados a las listas de los graficos para poder graficar mas abajo
        graf1y.append(tie)
        graf1x.append(dist)
        graf2x.append(vel)
        graf2y.append(tie)
    }
    
}

