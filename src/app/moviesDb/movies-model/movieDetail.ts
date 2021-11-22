import GenerRes from "./generRes";

interface MovieDetail {
    id: number,
    image_url: string,
    title: string,
    release_date: string,
    genres: GenerRes[],
    homepage: string

}

export default MovieDetail;