
let text = "Our Little World ♡";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
window.addEventListener("DOMContentLoaded", typing); 
// /////////////////////////////////
let text1 = "كل حكاية وليها بداية.. ودي حكايتكم";
let j = 0;
function typing1() {
  if (j < text1.length) {
    document.getElementById("title1").innerHTML += text1.charAt(j);
    j++;
    setTimeout(typing1, 150);
  }
}
window.addEventListener("DOMContentLoaded", typing1); 
// ////////////////////////////////
let text2 = "مكان صغير جمع أجمل لحظاتكم وذكرياتكم";
let k = 0;
function typing2() {
  if (k < text2.length) {
    document.getElementById("title2").innerHTML += text2.charAt(k);
    k++;
    setTimeout(typing2, 200);
  }
}
window.addEventListener("DOMContentLoaded", typing2); 
     
  
window.addEventListener("DOMContentLoaded", typing2); 
// ////////////////////////////////
function checkPassword() {
  let password = document.getElementById("password").value;
  if (password === "192025") {
    window.location.href = "home.html";
    
     
  } else {
    alert("Incorrect password. Please try again.");
  }
}
 window.addEventListener('load', function() {
         if (performance.getEntriesByType("navigation")[0].type === "reload") {
             window.location.href = "index.html";
         }
      });
////////////////////
function updateCounter() {

    const start = new Date(2025, 8, 1, 0, 0);
    const now = new Date();

    let cursor = new Date(start);

    let years = now.getFullYear() - cursor.getFullYear();

    cursor.setFullYear(cursor.getFullYear() + years);

    if (cursor > now) {
        years--;
        cursor.setFullYear(cursor.getFullYear() - 1);
    }

    let months = 0;

    while (true) {
        let next = new Date(cursor);
        next.setMonth(next.getMonth() + 1);

        if (next > now) break;

        cursor = next;
        months++;
    }

    let days = 0;

    while (true) {
        let next = new Date(cursor);
        next.setDate(next.getDate() + 1);

        if (next > now) break;

        cursor = next;
        days++;
    }

    let minutes = Math.floor((now - cursor) / 60000);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("minutes").textContent = minutes;
}

updateCounter();
setInterval(updateCounter, 1000);
 

function startMusic() {
    const music = document.getElementById("audio");

    music.play().then(() => {
        document.getElementById("loveMessage").style.display = "none";
    }).catch(() => {
        alert("حاول تضغط تاني لتشغيل الأغنية");
    });
}