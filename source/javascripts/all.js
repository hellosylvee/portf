// This is where it all goes :)

var selector, elems, makeActive;

selector = '.nav';

elems = document.querySelectorAll(selector);

makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('is-active is-active:after');

    this.classList.add('is-active is-active:after');
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);
