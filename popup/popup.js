let render = $('#render');

// chrome['tabs']['query']({'active': true, 'currentWindow': true}, function (value) {
//     // console.log('value[0]', value[0])
//     // _0x361bd4 = value[0][_0x1745('0xb')];
//     // chrome.tabs.getSelected(null, function (tab) {
//     //     console.log(tab)
//     // })
//     return true;
// })

document.addEventListener('DOMContentLoaded', function () {

    $('#click').on('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function (response) {
                console.log(response);
            });
        });
    });

    $('#test').on('click', function () {
        // Cookies.set('foo', 'bar', { expires: 1/86400 })
        accessToken().then(access_token => {
            $.get(BASE_FB_API + 'me?access_token=' + access_token + '&fields=name,id,picture', me);

            function me(response) {
                render.empty();
                render.append(renderProfile(response.id, response.name, response.picture.data.url));
            }
        });
    });
    $('#delete').on('click', function () {
        accessToken().then(access_token => {
            requestGet(access_token, 'me/friends?fields=name,id,picture').then(response => {
                console.log(response)
            });
        })
    })
});
