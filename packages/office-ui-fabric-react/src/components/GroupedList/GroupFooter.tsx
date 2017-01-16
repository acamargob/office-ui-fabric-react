import * as React from 'react';
import {
  BaseComponent,
  autobind
} from '../../Utilities';
import { Link } from '../../Link';
import { IGroupDividerProps } from './GroupedList.Props';
import { GroupSpacer } from './GroupSpacer';
import './GroupFooter.scss';

export class GroupFooter extends BaseComponent<IGroupDividerProps, {}> {
  public render() {
    let { group, groupLevel, showAllLinkText } = this.props;

    return group && (
      <div className='ms-groupFooter'>
        { GroupSpacer({ count: groupLevel }) }
        <Link onClick={ this._onSummarizeClick }>{ showAllLinkText }</Link>
      </div>
    );
  }

  @autobind
  private _onSummarizeClick(ev: React.MouseEvent<HTMLElement>) {
    this.props.onToggleSummarize(this.props.group);

    ev.stopPropagation();
    ev.preventDefault();
  }
}
