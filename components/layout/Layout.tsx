import Head from 'next/head'

interface ILayout {
    title : string;
    description : string
    children: React.ReactNode;
}
export default function Layout({ title,description,children }:ILayout) {
  return (
    <>
      <Head>
        <title className='cap'>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <>{children}</>
    </>
  )
}