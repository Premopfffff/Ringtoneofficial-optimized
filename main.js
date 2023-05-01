const opClassVideos = document.getElementsByClassName('bbb');


    for (let i = 0; i < opClassVideos.length; i++) {
      opClassVideos[i].addEventListener('loadedmetadata', function() {
        this.currentTime = 0;
        const canvas = document.createElement('canvas');
        canvas.width = this.videoWidth;
        canvas.height = this.videoHeight;
        canvas.getContext('2d').drawImage(this, 0, 0, canvas.width, canvas.height);
        this.poster = canvas.toDataURL('image/png');
      });
    }
    