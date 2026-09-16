import Link from "next/link";

export function generateStaticParams() {
  return [
    { id: "n1" },
    { id: "n2" },
    { id: "n3" },
    { id: "n4" },
    { id: "n5" },
    { id: "n6" },
    { id: "n7" },
    { id: "n8" },
  ];
} const imgs=["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=700&q=80"]; export default function Page(){return <main><header><div className="nav"><Link className="brand" href="/">NEXORA<span>•</span></Link><div className="search">⌕<input placeholder="Search products..."/><button>Search</button></div><Link className="back" href="/">← Home</Link></div></header><div className="detail"><div><div className="mainpic"><img src={imgs[0]} alt="Wireless Noise-Cancelling Headphones"/></div><div className="thumbs">{imgs.slice(1).map((x,i)=><img key={x} src={x} alt={"Product image "+(i+2)}/>)}</div></div><div className="info"><p>AUDIO</p><h1>Wireless Noise-Cancelling Headphones</h1><div className="desc">A clean product-detail layout for concise product discovery. Check the external store for current product information, availability and purchasing options.</div><a className="cta" href="#" rel="nofollow">Check Product ↗</a><small>You will be redirected to the external affiliate store.</small></div></div><div className="disclosure"><b>Affiliate disclosure</b><br/>Nexora may earn a commission when you follow an affiliate link and make a qualifying purchase.</div></main>}