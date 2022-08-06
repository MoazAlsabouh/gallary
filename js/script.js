let getList = document.querySelector("#list"),
  contunar = document.querySelector(".contunar"),
  next = document.querySelector(".next");
  let startedRror = false,
    started = false,
    startedArt = false,
    startedLine = false;


  next.onclick = function() {
    return nextList();
  }

  function nextList() {
    if (getList.value === "op") {
      if (!startedRror) {
          let returnNoList = document.createElement("p"),
          returnNoListText = document.createTextNode("للمتابعة يرجى اختيار ماتريد عرضه");
          returnNoList.appendChild(returnNoListText);
          returnNoList.style.cssText = "color: white; margin: 0 auto; font-size: 20px; font-weight: bold; background: red; width: 230px; padding: 5px;"
          contunar.appendChild(returnNoList);
          startedRror = true;
      } else {
        returnNoList.remove()
        return false;
      }
    } else {
      if (!started) {
        if (document.querySelector("p") != null) {
          document.querySelector("p").remove();
        }
          let addnumber = document.createElement("p"),
            addnumberText = document.createTextNode("ادخل عدد الاعمال التي تريد رؤيتها");
            addnumber.appendChild(addnumberText);
            addnumber.setAttribute("class", "disc");
          addnumber.style.cssText = "color: #000; margin: 10px auto; font-size: 20px; font-weight: bold; width: 230px; padding: 5px;"
          contunar.appendChild(addnumber);
          let input = document.createElement("input");
          input.setAttribute("type", "number");
          input.setAttribute("id", "search");
          input.style.cssText = "position: relative; left: 50%; transform: translateX(-50%); width: 230px; padding: 5px; border: none; background: aqua "
          contunar.appendChild(input);
          next.setAttribute("class", "nextn");
          let nextn = document.querySelector(".nextn");
          nextn.setAttribute("onclick", "gallary()");
          started = true;
      } else {
        return false;
      }
    }
  }

  function gallary() {
    if (getList.value === "art") {
      let search = document.querySelector("#search").value;
      if (search < 14 ) {
        if (!startedArt) {
          if (document.querySelector(".delet") != null) {
            document.querySelector(".delet").remove();
          }
          let lineGallary = document.createElement("div");
          lineGallary.classList.add("linegallary");
          for (let i = 0; i < search ; i++) {
          let lineGallaryImageLink = document.createElement("a");
          let lineGallaryImage = document.createElement("img");
          lineGallaryImageLink.setAttribute("href", `image/gallary${i + 1}.jpg`);
          lineGallaryImageLink.setAttribute("data-lightbox", `line`);
          lineGallaryImageLink.setAttribute("data-title", `لوحات فنية`);
          lineGallaryImage.setAttribute("src", `image/gallary${i + 1}.jpg`);
          lineGallaryImageLink.appendChild(lineGallaryImage);
          lineGallary.appendChild(lineGallaryImageLink);
          contunar.appendChild(lineGallary);
        }
        
        // complate code 
        let complate = document.createElement("p");
        let complateText = document.createTextNode("عرض كل الاعمال");
        complate.style.cssText = "width: 100px; padding: 5px; border: none; background: aqua; margin: 20px auto; cursor: pointer;"
        complate.appendChild(complateText);
        contunar.appendChild(complate);
        complate.onclick = function () {
          if (lineGallary.children.length < 13) {
            for (let b = lineGallary.children.length; b < 14 ; b++) {
              let lineGallaryImageLink = document.createElement("a");
              let lineGallaryImage = document.createElement("img");
              lineGallaryImageLink.setAttribute("href", `image/gallary${b + 1}.jpg`);
              lineGallaryImageLink.setAttribute("data-lightbox", `line`);
              lineGallaryImageLink.setAttribute("data-title", `لوحات فنية`);
              lineGallaryImage.setAttribute("src", `image/gallary${b + 1}.jpg`);
              lineGallaryImageLink.appendChild(lineGallaryImage);
              lineGallary.appendChild(lineGallaryImageLink);
            }
            complate.remove();
          } else {
            window.alert("تم عرض جميع الاعمال بالفعل");
          }
        }
        // reload
        let reload = document.createElement("p");
        let reloadText = document.createTextNode("اعادة تحميل الصفحة لاختيار نوع اخر");
        reload.style.cssText = "width: 200px; padding: 5px; border: none; background: rgb(255 8 255 / 80%); margin: 20px auto; cursor: pointer;"
        reload.appendChild(reloadText);
        contunar.appendChild(reload);
        reload.onclick = () => {
          window.location.reload();
        }
        document.querySelector(".nextn").remove();
        document.querySelector("#search").remove();
        document.querySelector(".disc").remove();
        // art
        let art = document.createElement("p");
        let artText = document.createTextNode("about art");
        art.style.cssText = "width: 100px; padding: 5px; border: none; background: aqua; margin: 20px auto; cursor: pointer; text-align: center;"
        art.appendChild(artText);
        contunar.appendChild(art);
        art.onclick = () => {
        window.location.href = "html/hbd.html";
        }
        // 
        startedArt = true;

      }
      } else {
        let returnNoList = document.createElement("p"),
        returnNoListText = document.createTextNode("في الوقت الحالي لايتوفر الى عمل واحد للاسف");
        returnNoList.appendChild(returnNoListText);
        returnNoList.setAttribute("class", `delet`);
        returnNoList.style.cssText = "color: white; margin: 10px auto; font-size: 20px; font-weight: bold; background: red; width: 230px; padding: 5px;"
        contunar.appendChild(returnNoList);
      }
    } else {
      if (document.querySelector("#search").value < 2 ) {
        if (!startedLine) {
          if (document.querySelector(".delet") != null) {
            document.querySelector(".delet").remove();
          }
          let lineGallary = document.createElement("div");
          lineGallary.classList.add("linegallary");
          let lineGallaryImageLink = document.createElement("a");
          let lineGallaryImage = document.createElement("img");
          lineGallaryImageLink.setAttribute("href", `image/gallary0.jpg`);
          lineGallaryImageLink.setAttribute("data-lightbox", `line`);
          lineGallaryImageLink.setAttribute("data-title", `صور للخطوط`);
          lineGallaryImage.setAttribute("src", `image/gallary0.jpg`);
          lineGallaryImageLink.appendChild(lineGallaryImage);
          lineGallary.appendChild(lineGallaryImageLink);
          contunar.appendChild(lineGallary);
          // reload
          let reload = document.createElement("p");
          let reloadText = document.createTextNode("اعادة تحميل الصفحة لاختيار نوع اخر");
          reload.style.cssText = "width: 200px; padding: 5px; border: none; background: rgb(255 8 255 / 80%); margin: 20px auto; cursor: pointer;"
          reload.appendChild(reloadText);
          contunar.appendChild(reload);
          reload.onclick = () => {
          window.location.reload();
          }
          document.querySelector(".nextn").remove();
          document.querySelector("#search").remove();
          document.querySelector(".disc").remove();
          // 
          startedLine = true;
        }
      } else {
        let returnNoList = document.createElement("p"),
        returnNoListText = document.createTextNode("في الوقت الحالي لايتوفر الى عمل واحد للاسف");
        returnNoList.appendChild(returnNoListText);
        returnNoList.setAttribute("class", `delet`);
        returnNoList.style.cssText = "color: white; margin: 10px auto; font-size: 20px; font-weight: bold; background: red; width: 230px; padding: 5px;"
        contunar.appendChild(returnNoList);
      }
    }
  }

