import { App, Rect, Frame, Leaf, Leafer } from 'leafer-ui'

class Editor {
  public canvas: App | null
  private id: string
  constructor(id: string) {
    this.id = id
    this.canvas = null
    this.init()
  }

  init() {
    if (!this.id) return
    const editor: HTMLElement | null = document.getElementById(this.id)
    if (!editor) return
    const width = editor.offsetWidth - 40
    const height = editor.offsetHeight - 52 - 100 // 52是操作栏  100是上下间距
    this.canvas = new App({
      view: editor,
      width: editor.offsetWidth,
      height: editor.offsetHeight
    })

    this.canvas.ground = this.canvas.addLeafer()
    this.canvas.tree = this.canvas.addLeafer({
      type: 'draw',
      usePartRender: false
    })
    this.canvas.sky = this.canvas.addLeafer({
      type: 'draw',
      usePartRender: false
    })

    this.canvas.ground.add(
      new Rect({ width, height, x: 20, y: 30, fill: '#fff' })
    )
    this.canvas.tree.add(
      new Frame({
        width: editor.offsetWidth - 40,
        height: editor.offsetHeight - 52 - 100,
        x: 20,
        y: 30
      })
    )
  }

  addGround(child: Leafer) {
    this.canvas?.tree.add(child)
  }

  addTree(child: Leaf) {
    this.canvas?.tree.children[0].add(child)
  }

  addSky(child: Leafer) {
    this.canvas?.sky.add(child)
  }
}

export default Editor
