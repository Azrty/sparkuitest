import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './X.module.css';
import { XIcon } from './XIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:2030 */
export const X: FC<Props> = memo(function X(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <XIcon className={classes.icon2} />}</div>
    </div>
  );
});
