<template>
  <div class="wrapper">
    <table class='calc-table'>
        <th>
          <td><input 
          v-on:keyup.enter='evaluateInput()'
          class="display-box" 
          type="clear"></td>
        </th>
        <tr class="table-row">
            <td><button id="operator" class="calc-button show-input">(</button></td>
            <td><button id="operator" class="calc-button show-input">)</button></td>
            <td><button id="operator" class="calc-button show-input">%</button></td>
            <td><button 
            id="operator" 
            class="calc-button"
            @click='clearBox()'>C</button></td>
        </tr>
        <tr class="table-row">
          <td><button class="calc-button show-input">7</button></td>
          <td><button class="calc-button show-input">8</button></td>
          <td><button class="calc-button show-input">9</button></td>
          <td><button id="operator" class="calc-button show-input" aria-label="Add">+</button></td>
        </tr>
        <tr class="table-row">
          <td><button class="calc-button show-input">4</button></td>
          <td><button class="calc-button show-input">5</button></td>
          <td><button class="calc-button show-input">6</button></td>
          <td><button id="operator" class="calc-button show-input" aria-label="Subtract">-</button></td>
        </tr>
        <tr class="table-row">
          <td><button class="calc-button show-input">1</button></td>
          <td><button class="calc-button show-input">2</button></td>
          <td><button class="calc-button show-input">3</button></td>
          <td><button id="operator" class="calc-button show-input" aria-label="Multiply">*</button></td>
        </tr>
        <tr class="table-row">
          <td><button class="calc-button show-input">0</button></td>
          <td><button class="calc-button show-input">.</button></td>
          <td><button id="operator equal" 
          class="calc-button" 
          aria-label="Equal"
          @click='evalulateInput()'>=</button></td>
          <td><button id="operator" class="calc-button show-input" aria-label="Divide">/</button></td>
        </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: "Calculator",
  mounted() {
   const displayBox = document.querySelector('.display-box')
   displayBox.focus();
   this.displayStuff(displayBox);
  },

  methods: {
    displayStuff(display) {
        let allNumButtons = document.querySelectorAll('.show-input');  
        for (let individualButton of allNumButtons) {
            individualButton.addEventListener('click', function () {
                    display.value += individualButton.innerText;
                    display.focus();
            })
          }
       },
    evalulateInput(display) {
        let displayBox = document.querySelector('.display-box');  
        displayBox.value = math.evaluate(displayBox.value);
        displayBox.focus();
    },

    clearBox() { 
        let displayBox = document.querySelector('.display-box');  
        displayBox.value = '';
        displayBox.focus();
    },
  }
};

</script>