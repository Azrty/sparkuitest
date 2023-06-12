import { memo, SVGProps } from 'react';

const Rectangle5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 15.5C0 6.93959 6.93959 0 15.5 0V0C24.0604 0 31 6.93959 31 15.5V15.5C31 24.0604 24.0604 31 15.5 31V31C6.93959 31 0 24.0604 0 15.5V15.5Z'
      fill='#7069E3'
    />
  </svg>
);
const Memo = memo(Rectangle5Icon);
export { Memo as Rectangle5Icon };
