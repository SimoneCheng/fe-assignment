const sponsorsData= [
    {
        image: "./images/mailchimp.png"
    },
    {
        image: "./images/dropbox.png"
    },
    {
        image: "./images/shopify.png"
    },
    {
        image: "./images/heroku.png"
    },
    {
        image: "./images/typecast.png"
    },
    {
        image: "./images/manual.png"
    },
]

function Sponsors() {
    return(
        <section className="text-center pb-14">
            <p className="pt-14 pb-8 text-gray-400">THANKS TO OUR SPONSORS</p>
            <div className="flex flex-wrap justify-center">
                {sponsorsData.map((item) => <img src={require(`${item.image}`)} className="w-40 m-5"></img>)}
            </div>
        </section>
    )
  
}

export default Sponsors;