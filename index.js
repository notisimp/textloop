function demCuu(time, content,s) {
    var time = document.getElementById('time')
        .value
    var content = document.getElementById('content')
        .value
    var s = document.getElementById('timeText')
        .value

    if (time === '') {
        document.getElementById('demo')
            .innerHTML = `chưa điền cl`
    } else if (content === '') {
        document.getElementById('demo')
            .innerHTML = `chưa điền cl 2`
    } else if (content && time === '') {
        document.getElementById('demo')
            .innerHTML = `chưa điền cl 3`
    } else {
        let counter = 0;
        let i = setInterval((t, c) => {
            var t = parseInt(time);
            var c = content;
            var date = new Date();
            if (counter === t) {
                clearInterval(i)
            } else {
                counter++;
                var chooSeen = document.getElementsByName("Chossen");

                function textView(textView) {
                    const textNode = [
                    `${content} ${counter}`,
                    `${content}`,
                    `${date.toLocaleTimeString()} ${content}`,
                    `${counter} ${content}`
                ]
                    var node = document.createElement("p");
                    const textnode = document.createTextNode(`${textNode[textView]}`);
                    node.appendChild(textnode);
                    document.getElementById("demo")
                        .appendChild(node);
                }
                for (let i = 0; i < chooSeen.length; i++) {
                    if (chooSeen[i].checked) {
                        if (chooSeen[i].value.toString() === 'ttc') {
                            textView(2)
                        } else if (chooSeen[i].value.toString() === 'ht') {
                            textView(1)
                        } else if (chooSeen[i].value.toString() === 'ctt') {
                            textView(0)
                        } else if (chooSeen[i].value.toString() === 'tstc') {
                            textView(3)
                        }
                    }
                }
            }
        }, s)
    }

}

function clearBox() {

    var clearBoxRay = ['demo', 'time', 'content', 'timeText']
    for(let i=0; i < clearBoxRay.length; i++) {
        document.getElementById(`${clearBoxRay[i]}`)
    .innerHTML = "";
        document.getElementById(`${clearBoxRay[i]}`)
    .value = "";
    }
}
