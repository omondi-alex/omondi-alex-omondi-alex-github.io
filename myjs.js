// JavaScript source code
const currentlocation = location.href;
const menueItem = document.querySeletorAll('a');
const menuLength = menuLength.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentlocation) {
        menuItem[i].className = "active"
    }
}
//Get in Touch
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
});
//GSAP JS code below

TweenMax.staggerFrom("#letters", 4, { x: 300, scale: 0.5, repeat: 1 });

TweenMax.from(".comingsoon", 4, { scale: 0, ease: Bounce.easeOut, repeat: 1 });

TweenMax.to("#robot", 4, { xPercent: 50, repeat: 1 });

//Vivus JS Code below
new Vivus('letters', { duration: 200 }, function () {
});

$(document).ready(function () {
    var skillset = {
        "languages": [
            {
                "name": "JavaScript",
                "skill": 3
            },
            {
                "name": "HTML",
                "skill": 4
            },
            {
                "name": "CSS",
                "skill": 3
            },
            {
                "name": "C#",
                "skill": 1
            }
        ],
        "frameworks": [
            {
                "name": "jQuery",
                "skill": 4
            },
            {
                "name": "Handlebars",
                "skill": 1
            },
            {
                "name": "Bootstrap",
                "skill": 4
            },
            {
                "name": "Sass",
                "skill": 3
            },
            {
                "name": "NodeJS",
                "skill": 2
            },
            {
                "name": "Express",
                "skill": 1
            },
        ],
        "databases": [
            {
                "name": "MongoDB",
                "skill": 1
            },
        ],

        "os": [
            {
                "name": "Windows",
                "skill": 5
            },
            {
                "name": "Android",
                "skill": 4
            },
            {
                "name": "macOS",
                "skill": 2
            },
            {
                "name": "iOS",
                "skill": 4
            }],
        "tools": [
            {
                "name": "ChromeDevTools",
                "skill": 4
            },
            {
                "name": "Atom",
                "skill": 4
            },
            {
                "name": "Photoshop",
                "skill": 4
            },
            {
                "name": "Git",
                "skill": 2
            }
        ]
    }



    for (var i in skillset.languages) {
        var percent = (skillset.languages[i].skill * 100) / 5
        var str = '<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="' + percent + '%"><li>' + skillset.languages[i].name + '</div></div></li>';
        $(str).appendTo($('.languages'));
    }

    for (var i in skillset.frameworks) {
        var percent = (skillset.frameworks[i].skill * 100) / 5
        var str = '<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="' + percent + '%"><li>' + skillset.frameworks[i].name + '</div></div></li>';
        $(str).appendTo($('.frameworks'));
    }
    for (var i in skillset.databases) {
        var percent = (skillset.databases[i].skill * 100) / 5
        var str = '<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="' + percent + '%"><li>' + skillset.databases[i].name + '</div></div></li>';
        $(str).appendTo($('.databases'));
    }
    for (var i in skillset.os) {
        var percent = (skillset.os[i].skill * 100) / 5
        var str = '<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="' + percent + '%"><li>' + skillset.os[i].name + '</div></div></li>';
        $(str).appendTo($('.os'));
    }

    for (var i in skillset.tools) {
        var percent = (skillset.tools[i].skill * 100) / 5
        var str = '<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="' + percent + '%"><li>' + skillset.tools[i].name + '</div></div></li>';
        $(str).appendTo($('.tools'));
    }
    $('.skillbar').each(function () {
        $(this).animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });
})
