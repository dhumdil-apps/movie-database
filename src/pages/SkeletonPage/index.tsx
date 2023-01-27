import { Skeleton } from '@mantine/core';

function SkeletonPage() {
  return (
    <>
      <Skeleton height={50} circle mb='xl' />
      <Skeleton height={8} radius='xl' />
      <Skeleton height={8} mt={6} radius='xl' />
      <Skeleton height={8} mt={6} width='70%' radius='xl' />
    </>
  );
}

export default SkeletonPage;
