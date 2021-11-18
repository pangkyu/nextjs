import React from 'react';
import Head from 'next/head';
import AppLayout from "../components/AppLayout";

const profile = () => {
    return (
        <>
            <Head>
                <title>내 프로필 | nodebird</title>
            </Head>
            <AppLayout>프로필</AppLayout>
        </>
    );
}

export default profile;