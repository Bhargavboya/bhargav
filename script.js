// helper: random color
function randomColor() {
  const r = Math.floor(Math.random() * 200) + 30;
  const g = Math.floor(Math.random() * 200) + 30;
  const b = Math.floor(Math.random() * 200) + 30;
  return `rgb(${r}, ${g}, ${b})`;
}

// SELECT elements
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const bgBtn = document.getElementById('bgBtn');

const numInput = document.getElementById('numInput');
const showNumsBtn = document.getElementById('showNumsBtn');
const hideNumsBtn = document.getElementById('hideNumsBtn');
const numbersDiv = document.getElementById('numbers');

const toggleMsgBtn = document.getElementById('toggleMsgBtn');
const funMsg = document.getElementById('funMsg');

// GREET action
greetBtn.addEventListener('click', function() {
  const name = nameInput.value.trim() || 'friend';
  document.getElementById('mainTitle').innerText = `Hello, ${name}! 👋`;
  console.log('Greeted ' + name);
});

// CHANGE BACKGROUND action
bgBtn.addEventListener('click', function() {
  document.body.style.backgroundColor = randomColor();
});

// SHOW NUMBERS action
showNumsBtn.addEventListener('click', function() {
  const n = parseInt(numInput.value, 10);
  if (!n || n <= 0) {
    alert('Enter a positive number');
    return;
  }
  // build numbers using a loop
  let out = '';
  for (let i = 1; i <= n; i++) {
    out += i + (i === n ? '' : ', ');
  }
  numbersDiv.textContent = out;
  numbersDiv.classList.remove('hidden');
});

// HIDE NUMBERS action
hideNumsBtn.addEventListener('click', function() {
  numbersDiv.classList.add('hidden');
});

// TOGGLE fun message (switch-like logic example)
toggleMsgBtn.addEventListener('click', function() {
  if (funMsg.classList.contains('hidden')) {
    funMsg.classList.remove('hidden');
    toggleMsgBtn.innerText = 'Hide Fun Message';
  } else {
    funMsg.classList.add('hidden');
    toggleMsgBtn.innerText = 'Show Fun Message';
  }
});
