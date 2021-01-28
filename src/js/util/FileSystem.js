const FileSystem = {

   download: {

        txt(value, filename) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(value));
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        },

        json(object, filename) {
            FileSystem.download.txt(JSON.stringify(object), filename);
        }

   }

}