export function formatDate(date, pattern) {
    if (typeof date == 'string') {
      date = new Date(date);
    }

    let res = pattern.replace('Y', date.getFullYear());

    let month = (date.getMonth() < 9 ? '0' : '') +
        (date.getMonth() + 1);

    let day = (date.getDate() < 10 ? '0' : '') +
        date.getDate();

    let hours = (date.getHours() < 10 ? '0' : '') +
        date.getHours();

    let minutes = (date.getMinutes() < 10 ? '0' : '') +
        date.getMinutes();

    let seconds = (date.getSeconds() < 10 ? '0' : '') +
        date.getSeconds();

    res = res.replace('m', month);
    res = res.replace('d', day);
    res = res.replace('H', hours);
    res = res.replace('M', minutes);
    res = res.replace('S', seconds);

    return res;
}

const checkInput = input => {
    function checkRequired(input) {
        let cond = !input.hasAttribute('datarequired') ||
          input.hasAttribute('datarequired') &&
          input.value.length > 0;
    
        return cond;
      }
    
    function checkEmail(input) {
        if (!input.hasAttribute('datavalidator') ||
          input.getAttribute('datavalidator') != 'email') {
            return true;
          }

      return input.value.length == 0 || !!input.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    function checkMaxLength(input) {
        if (!input.hasAttribute('datamaxlength')) {
          return true;
        }

        return input.value.length <= +input.getAttribute('datamaxlength');
    }

    function checkMinLength(input) {
      if (!input.hasAttribute('dataminlength')) {
        return true;
      }

      return input.value.length >= +input.getAttribute('dataminlength');
  }

    return checkRequired(input) && checkEmail(input) &&
      checkMinLength(input) && checkMaxLength(input);
}

export function validateInput(input, inputErrorClass) {
    if (!checkInput(input)) {
        input.classList.add(inputErrorClass);
    }
}

export function clearInputCheck(input, inputErrorClass) {
    if (input.classList.contains(inputErrorClass)) {
        input.classList.remove(inputErrorClass);
    }
}

export function validateForm(options) {
    let inputs = options.form.querySelectorAll('input, textarea');
    
    if (options.form.classList.contains(options.formInvalidClass)) {
        options.form.classList.remove(options.formInvalidClass);
    }
  
      if (options.form.classList.contains(options.formValidClass)) {
        options.form.classList.remove(options.formValidClass);
      }
  
      for (let i = 0; i < inputs.length; i++) {
        if (!checkInput(inputs[i])) {
            if (!inputs[i].classList.contains(options.inputErrorClass)) {
                inputs[i].classList.add(options.inputErrorClass);
            }


            if (!options.form.classList.contains(options.formInvalidClass)) {
              options.form.classList.add(options.formInvalidClass);
            }
  
        }
      }
  
      if (!options.form.classList.contains(options.formInvalidClass)) {
        options.form.classList.add(options.formValidClass);
      }

    return options.form.classList.contains(options.formValidClass) && 
     !options.form.classList.contains(options.formInvalidClass);
}

export function getQueryFromURL(url) {
    if (url) {
      let qId = url.indexOf('?');
      return qId > -1 ? url.slice(qId) : '?';
    } else {
      return url
    }
}

export function trimText(text, maxLength, placeholder=' . . . ') {
    let upperBound = maxLength - placeholder.length;
    return text.length <= upperBound ? text :
      text.slice(0, upperBound) + placeholder;
}