function findPairOfNumbersThatSum(array, value) {
    //almacenar los valores ya recorridos con valores únicos.
    const usedNumbers = new Set();
  
    for (let i = 0; i < array.length; i++) {
      const subtractionOfValue = value - array[i];
      if (usedNumbers.has(subtractionOfValue)) {
        return [subtractionOfValue, array[i]];  // Devolvemos el complemento de pares
      }
      // Si restante no figura en la nueva lista creada, lo agregamos
      usedNumbers.add(array[i]);
    }
    // Si no encontramos ninguna pareja
    return null;
  }
  
  console.log(findPairOfNumbersThatSum([2, 5, 0, 14, 8], 10));
  