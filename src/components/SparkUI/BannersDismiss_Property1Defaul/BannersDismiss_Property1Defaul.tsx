import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { X } from '../X/X';
import classes from './BannersDismiss_Property1Defaul.module.css';
import { XIcon } from './XIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 275:14301 */
export const BannersDismiss_Property1Defaul: FC<Props> = memo(function BannersDismiss_Property1Defaul(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <X
        swap={{
          icon: props.swap?.icon || <XIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
