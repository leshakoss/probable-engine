import React from 'react'
import Markdown from 'app/ui/_lib/markdown'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { EitherPropType } from 'app/types/either'

export default class JSDocProperties extends React.Component {
  static propTypes = {
    properties: ImmutablePropTypes.list,
    selectedVersionTag: EitherPropType(
      React.PropTypes.object,
      React.PropTypes.string
    ).isRequired
  }

  render () {
    if (!this.props.properties || this.props.properties.length === 0) { return null }

    return (
      <section>
        <h2 id='properties'>
          Properties
          <a href='#properties' className='doc-header_link'>
            #
          </a>
        </h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {this._renderArguments(
              this.props.properties,
              false,
              this.props.selectedVersionTag
            )}
          </tbody>
        </table>
      </section>
    )
  }

  _renderArguments (args, isProps, selectedVersionTag) {
    return args.map((arg, index) => {
      return (
        <tr key={index}>
          <td>
            {arg.get('name')}
            {this._renderArgumentOptionalLabel(
              arg.get('optional'),
              arg.get('defaultvalue')
            )}
          </td>
          <td>
            {this._renderArgumentType(arg.get('type'), arg.get('variable'))}
          </td>
          <td>
            <Markdown
              value={arg.get('description')}
              selectedVersionTag={selectedVersionTag}
            />
            {this._renderArgumentPropsTable(
              arg.get('props'),
              selectedVersionTag
            )}
          </td>
        </tr>
      )
    })
  }

  _renderArgumentOptionalLabel (optional, defaultValue) {
    if (!optional) {
      return null
    }

    return (
      <div className='jsdoc_properties-optional'>
        {defaultValue !== undefined
          ? `(optional, default=${defaultValue})`
          : '(optional)'}
      </div>
    )
  }

  _renderArgumentType (type, variable) {
    const names = type.get('names')
    const types = names.join(' | ')
    if (variable) {
      return names.size > 1 ? `...(${types})` : `...${types}`
    } else {
      return types
    }
  }

  _renderArgumentPropsTable (props, selectedVersionTag) {
    if (!props) {
      return null
    }

    return (
      <div>
        <div className='jsdoc_properties-props_label'>Properties:</div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {this._renderArguments(props, true, selectedVersionTag)}
          </tbody>
        </table>
      </div>
    )
  }
}
