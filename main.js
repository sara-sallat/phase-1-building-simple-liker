// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

// Your JavaScript code goes here!
if (event.target.innerHTML === EMPTY_HEART) {
  mimicServerCall().catch(() => displayError()).then(() => {
    event.target.innerHTML = FULL_HEART;
    event.target.setAttribute('class', 'like-glyph activated-heart');
  });
} else { function displayError() {
  return new Promise((resolve,reject) => {
    modal.removeAttribute('class');
    setTimeout(() => {
      modal.setAttribute('class','hidden');
      resolve();
    }, 3000);
  });
};

function displayError(callback) {
  modal.removeAttribute('class');
  setTimeout(function(){
      modal.setAttribute('class','hidden');
      callback();
  }, 3000);
};

function likifyMe(button) {
  button.addEventListener('click', (event) => {
    if (event.target.innerHTML === EMPTY_HEART) {
      mimicServerCall().then(() => {
          event.target.innerHTML = FULL_HEART;
          event.target.setAttribute('class', 'like-glyph activated-heart');
      }).catch(() => {
          displayError(function(){
              event.target.innerHTML = FULL_HEART;
              event.target.setAttribute('class', 'like-glyph activated-heart');
          });
      });
    } else {
      event.target.innerHTML = EMPTY_HEART
      event.target.setAttribute('class', 'like-glyph')
    }
  });
};

likeButtons.forEach(button => {
  likifyMe(button)
});
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
