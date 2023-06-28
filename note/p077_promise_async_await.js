const aa = async function () {
  await console.log(3)
  console.log(2)
  console.log(1)
}
aa()

const main = async () => {
  await a()
  await b()
  await c()
}

main()
