window.onload = () => {
    let Answer = words();
    console.log(Answer);
  };
  function words() {
    let text =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  
    const allwordsText = text.split(" ");
    const countWord = {};
    allwordsText.forEach((item) => {
      if (countWord[item] == null) countWord[item] = 1;
      else {
        countWord[item] += 1;
      }
    });
  
    let myArray = Object.entries(countWord);
  
    let TheArray = myArray.sort(function (p, q) {
      return q[2] - p[2];
    });
    TheArray = TheArray.slice(0, 3);
  
    // Adding TheArray to the html div element and it's id is container
    let html = "";
  
    if (TheArray) {
      html += '<li class="post">' + "<h2>" + TheArray[0] + "</h2>" + '<li class="post">' + "<h2>" + TheArray[1] + "</h2>" + '<li class="post">' + "<h2>" + TheArray[2] + "</h2>";
    } else {
      console.log("The HTML didin't get the content");
    }
  
    document.getElementById("container");
    container.innerHTML = '<ul id = "data">' + html + "</ul>";
  
    return TheArray;
  }