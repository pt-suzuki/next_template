import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import ErrorLayout from '~/layouts/ErrorLayout';

const Wrapper = styled.div`
  text-align: center;
`;

const DescriptionWrapper = styled.h1`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 24px;
`;

const Button = styled.button`
  margin-top: 1rem;
  font-size: 14px;
`;

const NotFoundPage = (): JSX.Element => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <>
      <ErrorLayout>
        <Head>
          <title>ページが見つかりませんでした</title>
        </Head>
        <Wrapper>
          <DescriptionWrapper>ページが見つかりませんでした</DescriptionWrapper>
          <Button onClick={handleBackToHome}>
            ホームへ戻る
          </Button>
        </Wrapper>
      </ErrorLayout>
    </>
  );
};

export default NotFoundPage;
