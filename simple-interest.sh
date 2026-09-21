#!/bin/bash
# Este script calcula el interés simple dado el capital,
# la tasa de interés anual y el período de tiempo en años.

# No usar esto en producción. Solo para fines de muestra.

# Autor: <Tu Nombre>

echo "Ingrese el capital inicial:"
read p
echo "Ingrese la tasa de interés anual (porcentaje):"
read r
echo "Ingrese el período de tiempo en años:"
read t

# Calculando el interés simple: Interés = (capital * tasa * tiempo) / 100
s=`expr $p \* $t \* $r / 100`

echo "El interés simple es: "
echo $s
