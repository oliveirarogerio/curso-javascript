const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in num) {
  if (i == 5) {
    break
  }

  console.log(`${i} = ${num[i]}`)
}

for (x in num) {
  if (x == 5) {
    continue
  }

  console.log(`${x} = ${num[x]}`)
}

externo: for (a in num) {
  for (b in num) {
    if (a == 2 && b == 3) {
      break externo
    }
    console.log(`Par = ${a}, ${b}`)
  }
}
