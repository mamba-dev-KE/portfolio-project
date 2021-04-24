let changeBackgroundColor = document.getElementById('about-me');

let reset = function() {
    changeBackgroundColor.style.backgroundColor = ''    
  };
  
  resetButton.onclick = reset;

const changeBackground = () => {
    changeBackgroundColor.style.backgroundColor = 'green';
}