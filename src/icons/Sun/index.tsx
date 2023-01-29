type IconSunProps = {
  color?: string;
  size?: string;
  stroke?: string;
};

export function IconSun({
  color = '#2c3e50',
  size = '40',
  stroke = '1.5',
}: IconSunProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-sun'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      strokeWidth={stroke}
      stroke={color}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <circle cx='12' cy='12' r='4' />
      <path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />
    </svg>
  );
}
