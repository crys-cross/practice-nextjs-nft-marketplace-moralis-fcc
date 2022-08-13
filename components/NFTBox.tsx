import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { useWeb3Contract, useMoralis } from "react-moralis"
import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import nftAbi from "../constants/BasicNft.json"

interface NFTBoxProps {
    price?: number
    nftAddress: string
    tokenId: string
    marketplaceAddress: string
    seller?: string
}

const NFTBox: NextPage<NFTBoxProps> = ({
    price,
    nftAddress,
    tokenId,
    marketplaceAddress,
    seller,
}: NFTBoxProps) => {
    //call the token URi and then call the image uri to show the image(2 api request)
    //then save image as a state variable in this component
    const { isWeb3Enabled } = useMoralis()
    const [imageURI, setimageURI] = useState("")
    const { runContractFunction: getTokenURI } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftAddress,
        functionName: "tokenURI",
        params: {
            tokenId: tokenId,
        },
    })
    const updateUI = async () => {
        // get the tokenURI
        // using the image tag from the tokenURI, get the image
        const tokenURI = await getTokenURI()
        console.log("The tokenURI is ${tokenURI}")
        if (tokenURI) {
            // use IPFS Gateway(since not every browser is IPFS compatible): a server that will return IPFS files from a "normal" URL.
            const requestURL = (tokenURI as string).replace("ipfs://", "https://ipfs.io/ipfs/")
            const tokenURIResponse = await (await fetch(requestURL)).json() //fetch used in JS to fetch or get URL. await to get url then await to convert to json
            const imageURI = tokenURIResponse.image
            const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            setimageURI(imageURIURL)
            //other ways to do this
            //We could render the image on our server, and just call our server(since using moralis)
            //For testnets and Mainnet-> use moralis server hooks(ex. useNFTBalance())
            //have the world adopt ipfs
        }
    }
    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])
}

export default NFTBox
