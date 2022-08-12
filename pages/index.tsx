import type { NextPage } from "next"

import Image from "next/image"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
    //how do we show the recently listed NFTs?
    //we will index the events off-chain and then read from our database
    //setup server to listen for those events to be fired, and we will add them to a database to query
    //Woah, isn't that centralized?
    //TheGraph does this in a decentralized way
    //Moralis does it in a centralized way and comes with a ton of other feature

    //all our logic is still 100% on chain
    //speed and development time
    //its really hard to start a prod blockchain project 100% decentralized
    //they are working on opensourcing their code
    //feature richness
    //we can create more features with a centralized back end to start
    // as more decentralized tools are being created
    //local development
    return <div className={styles.container}>Hi</div>
}

export default Home
