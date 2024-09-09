/* MusicPage.js */
import React from 'react';
import './MusicPage.css'; // Ensure this file contains your CSS

// Import logo images
import logoSoundCloud from './logo_soundcloud.png';
import logoSpotify from './logo_spotify.png';
import logoApple from './logo_apple.png';
import logoYouTube from './logo_youtube.png';
import logoTwitch from './logo_twitch.png';

const MusicPage = () => {
  return (
    <div className="music-page">
      <div className="music-page-content">
        <div className="soundcloud-embed">
          {/* First SoundCloud Embed */}
          <div
            className="embed-container"
            dangerouslySetInnerHTML={{
              __html: `
                <iframe
                  width="100%"
                  height="300"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1556148832&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  title="Transient"
                ></iframe>
                <div
                  style="
                    font-size: 10px;
                    color: #cccccc;
                    line-break: anywhere;
                    word-break: normal;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif;
                    font-weight: 100;
                  "
                >
                  <a
                    href="https://soundcloud.com/prodbyjohnwells"
                    title="prodbyjohnwells"
                    target="_blank"
                    style="color: #cccccc; text-decoration: none;"
                  >
                    prodbyjohnwells
                  </a> ·
                  <a
                    href="https://soundcloud.com/prodbyjohnwells/indie-alternative-hiphop-transient-instrumental"
                    title="Transient"
                    target="_blank"
                    style="color: #cccccc; text-decoration: none;"
                  >
                    Transient
                  </a>
                </div>
              `,
            }}
          />
          {/* Spotify Embed */}
          <div
            className="embed-container"
            dangerouslySetInnerHTML={{
              __html: `
                <iframe
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/artist/3MWpbOQKSAASO4wRi6ffk7?utm_source=generator"
                  width="100%"
                  height="352"
                  frameborder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              `,
            }}
          />
        </div>
        <div className="artist-biography">
          <h1>About the Artist</h1>
          <p>
            Immerse yourself in a world where <em>thoughts, emotions, and raw energy</em> converge into a <strong>symphony of sound</strong>. My music is a canvas painted with vibrant hues of <strong>Hip-hop, Rap, Jazz, R&B, Soul, Rock, Alternative, Electronic, Latin, JRPGs, World,</strong> and <strong>Classical</strong> influences.
          </p>
          <p>
            Each track is a journey through the <em>diverse landscapes</em> of these genres, meticulously crafted to resonate with your <strong>soul</strong>.
          </p>
          <p>
            Inspired by a myriad of musical styles and cultural touchstones, my work transcends traditional boundaries, offering a unique auditory experience that speaks to <strong>fans, artists, musicians,</strong> and beyond.
          </p>
          <p>
            Whether you're a <strong>discerning critic, passionate influencer,</strong> or seeking the perfect soundtrack for TV, film, or commercials, my music is designed to <strong>captivate</strong> and <strong>inspire</strong>.
          </p>
          <p>
            Join me on this <strong>sonic adventure</strong>, where every beat and melody tells a story, and let the music transport you to new realms of <strong>emotion</strong> and <strong>imagination</strong>.
          </p>
        </div>
      </div>
      <div className="streaming-buttons">
        <h2>Listen on</h2>
        <a href="https://soundcloud.com/prodbyjohnwells" target="_blank" rel="noopener noreferrer">
          <img src={logoSoundCloud} alt="SoundCloud" />
        </a>
        <a href="https://open.spotify.com/artist/3MWpbOQKSAASO4wRi6ffk7" target="_blank" rel="noopener noreferrer">
          <img src={logoSpotify} alt="Spotify" />
        </a>
        <a href="https://music.apple.com/us/artist/prodbyjohnwells/1704223107" target="_blank" rel="noopener noreferrer">
          <img src={logoApple} alt="Apple Music" />
        </a>
        <a href="https://www.youtube.com/@prodbyjohnwells1054" target="_blank" rel="noopener noreferrer">
          <img src={logoYouTube} alt="YouTube" />
        </a>
        <a href="https://www.twitch.tv/prodbyjohnwells" target="_blank" rel="noopener noreferrer">
          <img src={logoTwitch} alt="Twitch" />
        </a>
      </div>
    </div>
  );
};

export default MusicPage;
