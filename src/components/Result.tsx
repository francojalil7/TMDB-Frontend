import { Heading } from "@chakra-ui/react"
import React from "react"
import { useParams } from "react-router-dom"

const Result = () => {
    const params = useParams()
    console.log("🚀 ~ file: Result.tsx ~ line 5 ~ Result ~ params", params)
  return (
    <Heading>Resultados</Heading>
  )
}

export default Result