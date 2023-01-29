type IconVercelProps = {
  color?: string;
  size?: string;
  stroke?: string;
};

export function IconVercel({
  color = '#2c3e50',
  size = '40',
  stroke = '1.5',
}: IconVercelProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      strokeWidth={stroke}
      stroke={color}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 19h18l-9 -15z' />
    </svg>
  );
}
