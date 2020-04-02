function renderProfile(id, name, url_avatar = '') {
    return '<div class="render-profile">\n' +
        '   <div class="render-profile-avatar">\n' +
        '       <img class="avatar" src="' + (url_avatar) + '">\n' +
        '   </div>\n' +
        '<div class="render-profile-id"><b>ID: </b><a href="#">' + id + '</a></div>\n' +
        '   <div class="render-profile-name">' + name + '</div>\n' +
        '</div>';
}
