
  let value = document.getElementById("value");
        let increment = document.getElementById("increment");
        let decrease = document.getElementById("decrease");
        let reset = document.getElementById("reset");

        let count = 0;

        increment.addEventListener("click", function() {
            count++;
            value.textContent = count;
        });

        decrease.addEventListener("click", function() {
            count--;
            value.textContent = count;
        });

        reset.addEventListener("click", function() {
            count = 0;
            value.textContent = count;
        });






