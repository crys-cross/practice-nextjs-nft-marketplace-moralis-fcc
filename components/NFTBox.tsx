import type { NextPage } from "next"
import { useState } from "react"
import { useWeb3Contract } from "react-moralis"
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
    const [imageURI, setimageIRI] = useState("")
    const { runContractFunction: getTokenURI } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftAddress,
    })
    const updateUI = async () => {
        // get the tokenURI
        // using the image tag from the tokenURI, get the image
    }
}

export default NFTBox
