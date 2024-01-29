//story photo slides function
// It gives you the container
const container = document.querySelector(".story-1");

// this will give you the prev button
const prevBtn = document.querySelector(".slide_prev_button"); 

// This will give you the next button
const nextBtn = document.querySelector(".slide_next_button");


// And you are adding some events to your components
(function addEvent(){
  // What is Event? for eg. click, double click, hover, keypress, longpress
  // What is EventListener? Functions that get executed whenever the event is triggered. 

  // We are adding an Event listener of prevBtn
  // The event that we have added is click event
  // So, whnever someone 'click' on prevBtn, TranslateContainer(1) will be called. 
  prevBtn.addEventListener('click', translateContainer.bind(this, 1));

  // So, whenever a click happens on prevBtn, translateContainer(1) gets called

  // We are adding an Event listener of nextBtn
  // The event that we have added is click event
  // So, whnever someone 'click' on nextBtn, TranslateContainer(-1) will be called. 
  nextBtn.addEventListener('click', translateContainer.bind(this, -1));
  // So, whenever a click happens on nextBtn, translateContainer(-1) gets called

  //component.bind(this, [args..])
})();

function translateContainer(direction){
  const selectedBtn = (direction === 1) ? 'slide_prev_button' : 'slide_next_button';
  container.style.transitionDuration = '90ms';
  container.style.transform = `translateX(${direction * (100 / 10)}%)`;
  container.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
  // removing one child, and adding it on the back
  container.removeAttribute('style');
  (selectedBtn === 'slide_prev_button') ? container.insertBefore(container.lastElementChild, container.firstElementChild): container.appendChild(container.firstElementChild);
}