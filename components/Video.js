import BrowserBox from './BrowserBox/BrowserBox'

export default function Video({ id, video }) {
  const videoId = id || 'COAVmST41Q0'

  return (
    <BrowserBox>
      <video
        controls
        width="560"
        height="315"
        autoPlay={false}
        preload="metadata"
        playsInline
      >
        <source
          src={`/video/letters/${video}.mp4`} type="video/mp4" />
        Sorry, your browser doesn’t support embedded videos.
      </video>
      {/* <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
    </BrowserBox>
  )
}
