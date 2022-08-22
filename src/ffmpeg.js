import { createFFmpeg } from '@ffmpeg/ffmpeg'

const ffmpeg = createFFmpeg({
    log: true,
    corePath: 'http://localhost:8000/ffmpeg-core.js',
})

console.log(ffmpeg)