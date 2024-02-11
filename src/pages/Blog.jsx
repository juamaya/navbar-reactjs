
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import logo from '../Git-comandos/git.png'
import { markdown } from '../Git-comandos/comandos_git'

const Blog = () => {

  return (

    <div className="blog">
      <img src={logo} alt='git' width={200} />
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>

  )
}

export default Blog