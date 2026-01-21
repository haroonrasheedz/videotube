import {videoData} from './data.js';

function loadVideoGrid() {

  let videoGrid='';

  videoData.forEach( (video) => {
  videoGrid += `
    <div class="video-preview">
          <div class="thumbnail-row">
            <a href="${video.videoLink}" target="_blank">
            <img class="thumbnail" src="${video.thumbnail}">
            </a>
            <div class="video-time">${video.videoDuration}</div>
          </div>
      
          <div class="video-info-grid">
            <div class="channel-picture">
              <img class="profile-picture" src="${video.profilePic}">
            </div>

            <div class="video-info">
              <p class="video-title">
                ${video.videoTitle}
              </p>
      
              <p class="video-author">
                ${video.videoAuthor}
              </p>
      
              <p class="video-stats">
                ${video.videoStats}
              </p>
      
            </div>
          </div>  
        </div>`
  });
  document.querySelector('.video-grid').innerHTML = videoGrid;
}

loadVideoGrid();