function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
  setInterval(printTime, 1000); 
  // Execute printTime every 1000 milliseconds (every second)
