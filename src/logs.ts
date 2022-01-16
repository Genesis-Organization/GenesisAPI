import config from '@/config/server'

export const log_start = () => {
  if (config.mode == 'DEV')
    console.log(
      '\x1b[4m\n___________________________________________________\x1b[0m\n\n' +
        '\x1b[36m' +
        'Genesis API v1.4.1 \x1b[0m\n' +
        '\x1b[32m' +
        `Node: ${process.version} \x1b[0m\n` +
        'by: Mateusz Słotwiński\n'
    )
}

export const log_end = (port: string) => {
  if (config.mode == 'DEV')
    console.log(
      `App running at: \x1b[36mhttp://localhost:${port}/\x1b[0m`,
      '\n\x1b[4m\n___________________________________________________\x1b[0m\n'
    )
}
