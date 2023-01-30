import { List } from '@mantine/core';

type Item = {
  [key: string]: string;
};

type SimpleListProps = {
  list: Item[];
};

export function SimpleList({ list }: SimpleListProps) {
  return (
    <List mt={30} spacing='sm' size='sm'>
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
