import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import MovieResults from "../components/MovieResults/Results";
import Nav from "../components/Nav/Nav";
import requests from "../utils/requests";
import apiClient from '../server/http-common'

const Home: NextPage = ({results}: any) => {

  return (
    <>
      <Head>
        <title>Mmdb 2.0</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <MovieResults results={results} />
    </>
  );
};

export default Home;

export async function getServerSideProps(context: { query: { genre: string; }; }) {
  const genre = context.query.genre;

  const request = await apiClient.get(`${requests[genre]?.url || requests.fetchTrending.url}`)

  return {
    props: {
      results: await request.data.results,
    }
  }
}