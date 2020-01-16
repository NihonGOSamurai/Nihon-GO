import appRoot from 'app-root-path'
import { ask } from './ask.mjs'
import * as path from 'path'
import { GenerateResolver } from './GenerateResolver.mjs'

export class ComponentGenerateResolver extends GenerateResolver {
  async getName () {
    const name = await ask('name of component: ')
    return name
  }

  getItemPath (name) {
    return path.resolve(appRoot.path, 'src', 'Components', name)
  }

  getIndexFileContent ({ name }) {
    const content =
`export { default } from './${name}'
export * from './${name}'
`
    return content
  }

  getItemFileContent ({ name }) {
    const content =
`import React from 'react'

const ${name} = () =>
  <>
  </>

export default ${name}
`
    return content
  }
}
