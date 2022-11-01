import { useLocation } from "react-router-dom"

export default function Grid() {
    const params = useLocation()
    console.log("🚀 ~ file: Grid.tsx ~ line 5 ~ Grid ~ params", params.pathname)
    return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi sit exercitationem omnis dolore non nesciunt expedita perspiciatis eligendi, harum illum laborum maxime, cumque, ullam corrupti distinctio fugit ipsa ratione?</p>
    )
}