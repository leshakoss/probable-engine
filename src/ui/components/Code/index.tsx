import React, { useRef, useState, useEffect } from 'react'
import CodeMirror from 'codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css?raw'
import './style.css?raw'

interface CodeProps {
  value: string
  options?: CodeMirror.EditorConfiguration
}
const Code: React.FunctionComponent<CodeProps> = ({ value, options }) => {
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

  return <textarea defaultValue={value} ref={textareaRef} />
}
export default Code
