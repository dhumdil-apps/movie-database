type IconSearchProps = {
  color?: string;
  size?: string;
  stroke?: string;
};

export function IconSearch({
  color = '#2c3e50',
  size = '40',
  stroke = '1.5',
}: IconSearchProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-search'
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
      <circle cx='10' cy='10' r='7' />
      <line x1='21' y1='21' x2='15' y2='15' />
    </svg>
  );
}
