const painel = document.getElementById("painel");
      const result = document.getElementById("btnResult");
      const minNumber = document.getElementById("minNumber");
      const maxNumber = document.getElementById("maxNumber");

      function getResult() {
        const array = [];
        const min = parseInt(minNumber.value, 10);
        const max = parseInt(maxNumber.value, 10);

        if (isNaN(min) || isNaN(max) || min < 2 || min > max) {
          painel.textContent = "Por favor, insira valores válidos (mín ≥ 2 e mín ≤ máx).";
          return;
        }

        for (let i = min; i <= max; i++) {
          let isPrime = true;
          for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
              isPrime = false;
              break;
            }
          }
          if (isPrime) {
            array.push(i);
          }
        }

        painel.textContent = array.length
          ? `Números primos encontrados: ${array.join(", ")}`
          : "Nenhum número primo encontrado.";
      }

      result.addEventListener("click", getResult);
