import { ask } from './ask.mjs'
import { ComponentGenerateResolver } from './ComponentGenerateResolver.mjs'
import { PageGenerateResolver } from './PageGenerateResolver.mjs'

const typeOfItems = [
  {
    name: 'Component',
    resolver: new ComponentGenerateResolver()
  },
  {
    name: 'Page',
    resolver: new PageGenerateResolver()
  }
]

const descriptionOfTypeOfItems = () => {
  let desciption = ''
  for (const [index, item] of typeOfItems.entries()) {
    desciption += `${index}. ${item.name}\n`
  }
  return desciption
}

const main = async () => {
  const line = await ask(`
Type of item to be generated.

${descriptionOfTypeOfItems()}

: `)

  const selectedIndex = parseInt(line)
  if (selectedIndex < 0 || selectedIndex >= typeOfItems.length) {
    throw Error('Wrong index.')
  }

  const targetResolver = typeOfItems[selectedIndex].resolver
  await targetResolver.resolve()
  console.log('Complete!')
}

main().finally(process.exit)
