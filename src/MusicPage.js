import React from 'react';
import './MusicPage.css'; // Ensure this file contains your CSS

const MusicPage = () => {
  return (
    <div className="music-page">
      <h1>My Music</h1>
      <div className="soundcloud-embed">
        {/* First SoundCloud Embed */}
        <div
          className="embed-container"
          dangerouslySetInnerHTML={{
            __html: `
              <iframe width="100%" height="300" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1556148832&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" title="Transient"></iframe>
              <div style="font-size: 10px; color: #cccccc; line-break: anywhere; word-break: normal; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif; font-weight: 100;">
                <a href="https://soundcloud.com/prodbyjohnwells" title="prodbyjohnwells" target="_blank" style="color: #cccccc; text-decoration: none;">prodbyjohnwells</a> · 
                <a href="https://soundcloud.com/prodbyjohnwells/indie-alternative-hiphop-transient-instrumental" title="Transient" target="_blank" style="color: #cccccc; text-decoration: none;">Transient</a>
              </div>
            `,
          }}
        />
        {/* Spotify Embed */}
        <div
          className="embed-container"
          dangerouslySetInnerHTML={{
            __html: `
              <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3MWpbOQKSAASO4wRi6ffk7?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            `,
          }}
        />
        {/* Removed the Second SoundCloud Embed */}
      </div>
    </div>
  );
};

export default MusicPage;