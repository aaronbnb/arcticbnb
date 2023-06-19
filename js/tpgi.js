console.log('heelo');
let cookie = document.getElementById('cookie');

cookie.addEventListener("click", removeCookieDialog);

function removeCookieDialog() {
    cookie.remove();
}

let content = `
  <style>
    body { /* for fallback iframe */
      margin: 0;
    }
    p { 
      border: 1px solid #ccc;
      padding: 1rem;
      color: red;
      font-family: sans-serif;
    }
  </style>
  <div id="shadowDom">
  <a href="" style="height:100px;width:100px;border:2px solid red;"></a>
  <p tabindex="0">Element with Shadow DOM</p>
  </div>
`;

let myElements = document.querySelectorAll('.my-element');

if (document.body.attachShadow) {
  
  myElements.forEach((el) => {
    var shadow = el.attachShadow({
      mode: 'open'
    });
    shadow.innerHTML = content;
  });
  
} else {
  
  let newiframe = document.createElement("iframe");
  newiframe.srcdoc = content;
  
  myElements.forEach((el) => {
    let parent = el.parentNode;
    parent.replaceChild(newiframe, el);
  });

}

