import { h, FunctionComponent } from 'preact'
import { Page } from 'db'
import { parse } from 'json-bond'

interface Props {
  page: Page
  selectedVersion: string
}

export const Content: FunctionComponent<Props> = ({ page, selectedVersion }) => {
  switch (page.type) {
    case 'migrated':
      // return <JSDoc doc={doc} selectedVersionTag={selectedVersionTag} />
      return <div>{JSON.stringify(parse(page.doc))}</div>
    case 'markdown':
      // return (
      //   <MarkdownDoc
      //     content={doc.content}
      //     selectedVersionTag={selectedVersionTag}
      //   />
      // )
      return <div>{page.markdown}</div>
  }
}

