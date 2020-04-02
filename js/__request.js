let dataComposerOcelot = {
    accessToken: '',
    fbDstg: ''
};

function getComposerOcelot(response) {
    let find_access_token = response.indexOf('"accessToken');
    if (find_access_token >= 0) {
        dataComposerOcelot.accessToken = response.match(REGEX_TOKEN)[0];
        dataComposerOcelot.fbDstg = response.match(REGEX_FB_DTSG)[0];
    }
}

async function __getComposerOcelot() {
    await $.get('https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed', getComposerOcelot);
    return dataComposerOcelot;
}


async function requestGet(access_token, url, after = '', data = [], key = -1, i = 0, options = []) {
    if (after) {
        after = after ? '&after=' + after : '';
    }

    i++;

    let response = await $.get(BASE_FB_API + url + after + '&access_token=' + access_token, function (response) {
        return response;
    });

    data = data.concat(response.data);

    if (typeof response.paging.next !== 'undefined') {
        if (key === -1) {
            return get(access_token, url, response.paging.cursors.after, data, key, i, options)
        } else {
            if (key <= i || i <= -1) {
                return data;
            } else {
                return get(access_token, url, response.paging.cursors.after, data, key, i, options);
            }
        }
    }

    return data;
}
