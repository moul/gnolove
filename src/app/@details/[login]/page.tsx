import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { prefetchContributor } from '@/hooks/use-get-contributor';

import QueryClientWrapper from '@/wrapper/query-client';

import ContributorContent from '@/components/features/contributor/contributor-content';

const ContributorPage = async ({ params }: { params: { login: string } }) => {
  const { login } = params;
  const decodedLogin = decodeURIComponent(login);
  const match = decodedLogin.match(/^([^@]*)@([^@]+)$/);
  if (!match) {
    throw new Error('Invalid login: must contain exactly one "@".');
  }
  const formattedLogin = match[2];

  const queryClient = new QueryClient();

  await prefetchContributor(queryClient, formattedLogin);

  return (
    <QueryClientWrapper>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ContributorContent {...{ login: formattedLogin }} />
      </HydrationBoundary>
    </QueryClientWrapper>
  );
};

export default ContributorPage;