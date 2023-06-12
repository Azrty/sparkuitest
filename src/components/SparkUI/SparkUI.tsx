import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BannersDismiss_Property1Defaul } from './BannersDismiss_Property1Defaul/BannersDismiss_Property1Defaul';
import { Rectangle5Icon } from './Rectangle5Icon.js';
import { SendFill } from './SendFill/SendFill';
import classes from './SparkUI.module.css';
import { VectorIcon } from './VectorIcon.js';
import { XIcon } from './XIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1255:3165 */
export const SparkUI: FC<Props> = memo(function SparkUI(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      <div className={classes.dismiss}>
        <BannersDismiss_Property1Defaul
          className={classes.bannersDismiss}
          swap={{
            icon: <XIcon className={classes.icon} />,
          }}
        />
      </div>
      <div className={classes.spark}>Spark</div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle5}>
        <Rectangle5Icon className={classes.icon3} />
      </div>
      <SendFill
        className={classes.sendFill}
        swap={{
          vector: <VectorIcon className={classes.icon2} />,
        }}
      />
      <div className={classes.cddd08f36cb23aae66c2fd9a7d8a30}></div>
      <div className={classes.rectangle6}></div>
      <div className={classes.askMeEverything}>Ask me everything...</div>
    </div>
  );
});
