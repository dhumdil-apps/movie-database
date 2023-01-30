type IconCircledArrowProps = {
  size?: string;
  color?: string;
};

export function IconCircledArrow({
  size = '40',
  color = '#01010C',
}: IconCircledArrowProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 65.08722 40.86355'
    >
      <path
        d='M9.35119,3.57442c-2.17712,15.02686,6.26963,29.96977,20.61188,35.27136,6.9108,2.55456,14.9028,2.73235,21.86212,.25374,7.39027-2.63209,14.61836-8.93897,13.04429-17.59381-.74554-4.09928-3.92808-7.31127-7.65583-8.91944-4.74034-2.04501-9.94081-1.52932-14.85541-.44434-3.14067,.69335-1.81157,5.51477,1.3292,4.8214,3.51286-.77552,7.24823-1.28829,10.73761-.12671,2.37165,.7895,4.67685,2.55214,5.39878,5.03156,1.8603,6.38911-4.90116,10.9888-10.06261,12.65969-11.51095,3.72637-24.76117-.6536-31.32081-10.92097-3.49719-5.47391-5.20563-12.23031-4.26781-18.70327,.19335-1.33454-.32985-2.68615-1.7461-3.0753-1.17486-.32282-2.88049,.40149-3.0753,1.7461h0Z'
        fill={color}
        origin='undraw'
      />
      <path
        d='M4.66563,17.91243c3.13329-4.72474,6.26658-9.44947,9.39987-14.17421l-3.92644,.50597c4.05423,3.68551,8.10846,7.37101,12.16269,11.05652,.99872,.90789,2.5488,.98674,3.53553,0,.92156-.92156,1.00288-2.62386,0-3.53553-4.05423-3.68551-8.10846-7.37101-12.16269-11.05652-1.23828-1.12566-3.00989-.87611-3.92644,.50597L.34828,15.38883c-.74649,1.12564-.22162,2.76627,.89688,3.42047,1.22346,.7156,2.67221,.23144,3.42047-.89688h0Z'
        fill={color}
      />
    </svg>
  );
}