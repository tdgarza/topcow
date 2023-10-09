let data = {
            "response": {
                "docs": [{
                    "content_type": "article",
                        "date": "2013-12-04T14:30:43Z",
                        "description": "<p></p>",
                        "image_url": [
                        "https:\/\/raw.githubusercontent.com\/mlimapch\/images\/master\/nyc01.jpg"],
                        "title": "NYC image No. 1",
                        "url": [""]
                }, {
                    "content_type": "article",
                        "date": "2013-12-04T12:30:55Z",
                        "description": "<p></p>",
                        "image_url": [
                        "https:\/\/raw.githubusercontent.com\/mlimapch\/images\/master\/nyc02.jpg"],
                        "title": "NYC image No. 2",
                        "url": [""]
                }, {
                    "content_type": "article",
                        "date": "2013-12-02T05:24:37Z",
                        "description": "<p></p>",
                        "image_url": [
                 "https:\/\/raw.githubusercontent.com\/mlimapch\/images\/master\/nyc03.jpg"],
                        "native_id": "",
                        "title": "NYC image No. 3",
                        "url": [""]
                }]
            }
        };

let target = document.querySelector('#target');

data = data.response.docs;

data.forEach((val, key) => {  
    target.innerHTML += `<div class="image-list"><img src ="${val.image_url}" class="image-styles" /><p class="image-title">${val.title}</p></div>`;
});