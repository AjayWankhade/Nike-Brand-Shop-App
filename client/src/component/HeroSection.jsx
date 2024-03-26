const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE FEET</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <a href="https://www.nike.com/in/">
            <button>Shop Now</button>
          </a>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available on</p>
          <div className="brands-item">
            <a href="https://www.flipkart.com/search?q=nike+shoes&sid=osp%2Ccil&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_na&as-pos=2&as-type=RECENT&suggestionId=nike+shoes%7CMen%27s+Footwear&requestId=8cb0396b-9263-4172-bc16-0bb864b9763d&as-searchtext=nikes%20">
              <img src="/images/flipkart.png" alt="flipkart"></img>
            </a>

            <a href="https://www.amazon.in/Nike-shoes/s?k=Nike+shoes">
              <img src="/images/amazon.png" alt="amazon"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="hero-image"></img>
      </div>
    </main>
  );
};
export default HeroSection;
