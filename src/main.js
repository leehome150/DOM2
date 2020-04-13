// window.jQuery = function (selectorOrArray) {
  window.jQuery = function (selectorOrArray) {
    if (typeof selectorOrArray === "string") {//判断接受的是字符串还是数组
      elements = document.querySelectorAll(selectorOrArray);
    } else if (selectorOrArray instanceof Array) {
      elements = selectorOrArray;
    }
    return {
      addClass(className) {//添加class
        for (let i = 0; i < elements.length; i++) {
          element = elements[i];
          element.classList.add(className);
        }
        return this;
      },
      find(selector) {//通过选择器查找
        let array = [];
        for (let i = 0; i < elements.length; i++) {
          const elements2 = Array.from(elements[i].querySelectorAll(selector));
          array = array.concat(elements2);
        }
        return jQuery(array);
      },
    };
  };
  
  window.$ = window.jQuery;
  
  $("#test").find(".child").addClass("red");  