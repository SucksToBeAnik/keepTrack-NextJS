import Image from "next/image";

interface ImageCardProps {
    imageSource: string,
    extraClassName?: string,
    alt?: string
}

const ImageCard:React.FC<ImageCardProps> = ({imageSource,extraClassName, alt="Card Image"})=> {
    return (
        <div className="card w-64 h-64 md:w-72 md:h-72">
            <figure>
                <Image src={imageSource} className={`${extraClassName} rounded transition-all`} fill alt={alt} />
            </figure>
        </div>
    )
}



export default ImageCard;
