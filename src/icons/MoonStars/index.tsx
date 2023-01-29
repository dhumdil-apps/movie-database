type IconMoonStarsProps = {
  color?: string;
  size?: string;
  stroke?: string;
};

export function IconMoonStars({
  color = '#2c3e50',
  size = '40',
  stroke = '1.5',
}: IconMoonStarsProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-moon-stars'
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
      <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />
      <path d='M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2' />
      <path d='M19 11h2m-1 -1v2' />
    </svg>
  );
}
