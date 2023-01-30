import { RingProgress, Text, Paper, Stack } from '@mantine/core';

type RatingProps = {
  label: string;
  value: number | null;
  valueLabel: string;
};

export function Rating({ label, value, valueLabel }: RatingProps) {
  if (value === null) {
    return <></>;
  }

  return (
    <Paper withBorder radius='md' py='md' my='xl'>
      <Stack align='center'>
        <RingProgress
          sections={[{ value, color: 'blue' }]}
          label={
            <Text color='blue' weight={800} align='center' size='sm'>
              {valueLabel}
            </Text>
          }
        />

        <Text color='dimmed' size='xs' transform='uppercase' weight={800}>
          {label}
        </Text>
      </Stack>
    </Paper>
  );
}
