import * as path from 'path'
import * as fs from 'fs'

export class GenerateResolver {
  async getName () {
    throw Error('GenerateResolver must be extented in subclass.')
  }

  async getItemPath () {
    throw Error('GenerateResolver must be extented in subclass.')
  }

  getIndexFileContent () {
    throw Error('GenerateResolver must be extented in subclass.')
  }

  getItemFileContent () {
    throw Error('GenerateResolver must be extented in subclass.')
  }

  async resolve () {
    const name = await this.getName()

    const componentPath = this.getItemPath(name)
    if (!fs.existsSync(componentPath)) {
      fs.mkdirSync(componentPath)
    }

    const indexFileContent = this.getIndexFileContent({ name })
    fs.writeFileSync(path.resolve(componentPath, 'index.tsx'), indexFileContent)

    const componentFileContent = this.getItemFileContent({ name })
    fs.writeFileSync(path.resolve(componentPath, `${name}.tsx`), componentFileContent)
  }
}
