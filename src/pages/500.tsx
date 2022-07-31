import { useRouter } from 'next/router';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ErrorLayout } from '~/layouts/ErrorLayout';

const Wrapper = styled.div`
  text-align: center;
`;

const DescriptionWrapper = styled.h1`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 24px;
`;

const DetailWrapper = styled.div`
  margin-top: 1rem;
  font-size: 14px;
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  font-size: 14px;
`;

const ServerErrorPage = (): JSX.Element => {
  const router = useRouter();
  const [errorCode, setErrorCode] = useState<string>('');

  useEffect(() => {
    if (router.asPath === router.route) return;

    setErrorCode(
      router.query.error
        ? Array.isArray(router.query.error)
          ? router.query.error[0]
          : router.query.error
        : '',
    );
  }, [router]);

  const getErrorMessage = () => {
    return "12345";
  };

  const handleToHome = () => {
    router.push('/wallet/txn');
  };

  return (
    <>
      <ErrorLayout>
        <Head>
          <title>予期しないエラーが発生しました</title>
        </Head>
        <Wrapper>
          <DescriptionWrapper>予期しないエラーが発生しました</DescriptionWrapper>
          {getErrorMessage() ? (
            <ErrorMessage>{`エラーコード：${getErrorMessage()}`}</ErrorMessage>
          ) : null}
          <Button onClick={handleToHome}>
            ページを更新
          </Button>
        </Wrapper>
      </ErrorLayout>
    </>
  );
};

export default ServerErrorPage;
