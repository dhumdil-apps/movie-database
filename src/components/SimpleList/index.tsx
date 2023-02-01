import { List } from '@mantine/core';

export const testId = {
  root: 'SimpleList',
};

type SimpleListProps = {
  list: {
    label: string;
    value: string;
  }[];
};

export function SimpleList({ list }: SimpleListProps) {
  if (!list?.length) {
    return null;
  }

  return (
    <List data-testid={testId.root} mt={30} spacing='sm' size='sm'>
      {list.map(
        (item) =>
          item.value &&
          item.value !== 'N/A' && (
            <List.Item key={item.label}>
              <b>{item.label}</b> - {item.value}
            </List.Item>
          ),
      )}
    </List>
  );
}
