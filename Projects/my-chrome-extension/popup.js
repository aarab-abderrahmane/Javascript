document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('changeColor');
  
  btn.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },

          //inside tab (page)
          func: () => {
            function applyRedColor() {
              const text = document.querySelectorAll('h1, h2, h3, span','body');
              text.forEach(function(txt) {
                txt.style.color = 'red';
              });
            }

            function applyGreenColor() {
              const text = document.querySelectorAll('h4, h5, h6, p, pre, li');
              text.forEach(function(txt) {
                txt.style.color = 'green';
              });
            }

            function changeImage() {
              const images = document.querySelectorAll('img');
              images.forEach(img => {
                img.src = chrome.runtime.getURL('images/Flag_of_Morocco.png');
              });
            }

            // تنفيذ التغييرات أول مرة
            applyRedColor();
            applyGreenColor();
            changeImage();


            document.querySelectorAll("body")[0].style.backgorundColor = "red";


            // مراقبة التغييرات المستقبلية
            const observer = new MutationObserver(() => {
              applyRedColor();
              applyGreenColor();
              changeImage();
            });

            observer.observe(document.body, {
              childList: true,
              subtree: true,
            });
          }
        }).then(() => {
          console.log('✅ تم تنفيذ السكربت بنجاح.');
        }).catch((error) => {
          console.error('❌ حدث خطأ أثناء تنفيذ السكربت:', error);
        });
      } else {
        console.error('❌ لا يوجد تبويب نشط');
      }
    });
  });
});
