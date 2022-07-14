function collapse(e) {
    // get the height of the element's inner content, regardless of its actual size
    let height = e.querySelector('.sheet-contents').scrollHeight + 10;

    // temporarily disable all css transitions
    const elementTransition = e.style.transition;
    e.style.transition = '';

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel width, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
        e.style.height = height + 'px';
        e.style.transition = elementTransition;

        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to width: 0
        requestAnimationFrame(function () {
            e.style.height = '0px';
        });
    });
}

function expand(e) {
    requestAnimationFrame(function () {
        let height = e.querySelector('.sheet-contents').scrollHeight + 10;

        e.style.height = height + 'px';
    });
}

// true: rotate to random. false: unset
function rotate_each(list, toggle) {
    let random;

    for (let item of list) {
        if (!(item.classList.contains('active') || item.id === 'manila-folder')) {
            if (toggle) {
                random = Math.floor((Math.random() * 15) - 10)
            } else {
                random = 0
            }

            item.style.transform = `rotate(${random}deg) translateX(${random * 2}px)`
        }

        if (toggle) {
            expand(item)
        } else {
            collapse(item)
        }
    }
}

function toggleSidebar() {
    const body = document.body
    const doc_list = document.getElementById('documents').children

    if (body.className === 'closed') {
        body.className = 'open'
        rotate_each(doc_list, true)
    } else {
        body.className = 'closed'
        rotate_each(doc_list, false)
    }
}

document.getElementById('arrow-button').addEventListener('click', toggleSidebar);
