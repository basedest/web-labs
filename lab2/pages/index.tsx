import Head from 'next/head'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"
import { FormEventHandler } from "react"

interface CreateProps {
  url: string
}

const Home = (props: CreateProps) => {
  const router = useRouter()
 
  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()
    const data = event.target;
    console.log(data.etc);
    
    router.push("/")
    const res = await fetch(
      props.url,
      {
        body: JSON.stringify({
          firstName: data.firstName?.value,
          middleName: data.middleName?.value,
          lastName: data.lastName?.value,
          startDay: data.startDay?.value,
          endDay: data.endDay?.value,
          email: data.email?.value,
          phoneNumber: data.phoneNumber?.value,
          via: data.via?.value,
          tourType: data.tourType?.value,
          touristCount: data.touristCount?.value,
          maxPrice: data.maxPrice?.value,
          etc: data.etc?.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Туристическая фирма</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Туристическая фирма
        </h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Table></Table>
        </form>
      </main>
    </div>
  )
}

export async function getStaticProps(context: any) {
  return {
    props: {
      url: process.env.API_URL,
    },
  }
}

export default Home