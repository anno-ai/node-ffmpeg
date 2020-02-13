const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffprobePath = require('@ffprobe-installer/ffprobe').path
ffmpeg.setFfprobePath(ffprobePath)
ffmpeg.setFfmpegPath(ffmpegPath)

const ffprobeAsync = new Promise((resolve, reject) => {
  ffprobe(stream, (err, metadata) => {
    if (err) {
      return reject(err)
    }
    return resolve(metadata)
  })
})

module.exports = {
  ffmpeg,
  ffprobe: ffmpeg.ffprobe,
  ffprobeAsync,
  ffmpegPath,
  ffprobePath
}

