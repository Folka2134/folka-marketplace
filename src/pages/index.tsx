import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Listing } from "@prisma/client";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

function Card({ listing }: { listing: Listing }) {
  return (
    <div className=" rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      {/* <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a> */}
      <div className="flex h-60 min-h-max flex-col justify-between p-5 ">
        <div className="overflow-hidden text-ellipsis">
          <Link href={`/listings/${listing.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {listing.name}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            {listing.description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {listing.price}
          </p>
        </div>
        <Link
          href={`/listings/${listing.id}`}
          className="mt-6 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View
          <svg
            aria-hidden="true"
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const listings = api.listings.list.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-6 flex min-h-screen flex-col items-center justify-center pt-16 md:pt-0 lg:mx-12">
        <h1 className="my-6 text-2xl">Products</h1>
        <div className="container grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {listings?.data?.map((listing) => (
            <Card key={listing.id} listing={listing} />
          ))}
        </div>
        {/* <nav className="flex text-white"></nav> */}
      </main>
    </>
  );
}
