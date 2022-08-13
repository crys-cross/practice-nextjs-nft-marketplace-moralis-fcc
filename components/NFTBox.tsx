import { useState } from "react"

const NFTBox = ({ price, nftAddress, tokenId, marketplaceAddress, seller }) => {
    //call the token URi and then call the image uri to show the image(2 api request)
    //then save image as a state variable in this component
    const [imageURI, setimageIRI] = useState("")
    const updateUI = async () => {
        // get the tokenURI
        // using the image tag from the tokenURI, get the image
    }
}

export default NFTBox
