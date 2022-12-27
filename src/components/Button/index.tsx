const Button = (props: any) => {
    return (
        <button className="flex flex-row mx-auto w-full md:w-auto justify-center items-center bg-primary-pressed py-4 px-8 gap-2.5 rounded-large discover-nft-button-gradient">
            <div className="font-normal text-[16px] leading-[19px] text-white whitespace-pre">
                {props.text}
            </div>
        </button>
    )
}

export default Button
