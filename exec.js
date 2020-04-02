chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
    console.log(response)

    let xhr = new XMLHttpRequest();
    // profile_id=10707684&location=1&feed_blacklist_action=show_followee_on_follow&__user=100033287798493&__a=1&fb_dtsg=AQEsUw-Nz_LC%3AAQH-bhIHVJnn
    // data = "data%5Btumblelog%5D=drunknight&data%5Bsource%5D=FOLLOW_SOURCE_REBLOG";
    // console.log('formData', formData)
    // return formData;

    xhr.addEventListener('load', function (event) {
        console.log('Yeah! You followed one person.');
    });

    // Define what happens in case of error
    xhr.addEventListener('error', function (event) {
        console.warn('Oops! Something went wrong.');
    });

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "https://www.facebook.com/ajax/follow/follow_profile.php");
    xhr.setRequestHeader("cookie", document.cookie);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    console.log('send', xhr.send("profile_id=10707684&location=1&feed_blacklist_action=show_followee_on_follow&__pc=PHASED%3ADEFAULT&__user=100033287798493&__a=1&fb_dtsg=AQEsUw-Nz_LC%3AAQH-bhIHVJnn"));
});
