const {process01, process02} = require('./processes')

async function main() {
  try {
    console.time('Total Running Time')

    const data = await Promise.all([process01(), process02()])

    console.log('Process 01 Returned', data[0])
    console.log('Process 02 Returned', data[1])

    console.log
    console.timeEnd('Total Running Time')
  } catch (error) {
    console.error('error', error)
  }
}

main()
