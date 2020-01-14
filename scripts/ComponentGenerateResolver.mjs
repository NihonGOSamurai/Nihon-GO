import appRoot from 'app-root-path'
import { ask } from './ask.mjs'
import * as path from 'path'
import * as fs from 'fs'

export class ComponentGenerateResolver {
  async resolve () {
    const name = await ask('name of component: ')

    const componentPath = path.resolve(appRoot.path, 'src', 'Components', name)
    if (!fs.existsSync(componentPath)) {
      fs.mkdirSync(componentPath)
    }

    const indexFileContent =
`export { default } from './${name}'
export * from './${name}'
`
    fs.writeFileSync(path.resolve(componentPath, 'index.tsx'), indexFileContent)

    const componentFileContent =
`import React from 'react'

const ${name} = () =>
  <>
  </>

export default ${name}
`
    fs.writeFileSync(path.resolve(componentPath, `${name}.tsx`), componentFileContent)
  }
}
