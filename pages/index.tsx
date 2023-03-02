import List from "@/components/list/list";
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import {useEffect} from "react";

export default function Index() {

  return (
    <div style={{margin: '50px'}}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="utf-8"/>
      </Head>
      <List/>
  
    </div>
  )
}