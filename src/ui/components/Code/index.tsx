import { h, FunctionComponent } from 'preact'
import { useRef, useState, useEffect } from 'preact/hooks'
import CodeMirror from 'codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css?raw'
import './style.css?raw'

interface CodeProps {
  value: string
  options?: CodeMirror.EditorConfiguration
}
const Code: FunctionComponent<CodeProps> = ({ value, options }) => {
  const textareaRef = useRef(null)
  const [codeMirror, setCodeMirror] = useState(null)

  useEffect(() => {
    setCodeMirror(
      CodeMirror.fromTextArea(textareaRef.current, {
        theme: 'milky',
        ...options
      })
    )

    return () => {
      codeMirror && codeMirror.toTextArea()
    }
  }, [])

  useEffect(
    () => {
      codeMirror && codeMirror.setValue(value)
    },
    [value]
  )

  return <textarea value={value} ref={textareaRef} />
}
export default Code
