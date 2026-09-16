import Link from "next/link";
import {products} from "../../data";
export function generateStaticParams(){return products.map(p=>({id:p.id}));}
export default async function ProductPage({params}:{params:Promise<{id:string}>}){
 const {id}=await params; const p=products.find(x=>x.id===id);
 if(!p) return <main className="detail"><Link className="back" href="/">← Back to Nexora</Link><h1>Product not found</h1></main>;
 return <div className="site"><main className="detail">
  <Link className="back" href="/">← Back to Nexora</Link>
  <div className="detailgrid"><div><div className="heroimg"><img src={p.image} alt={p.name}/></div><div className="thumbs">{p.images.slice(0,6).map((im,i)=><img key={i} src={im} alt={`${p.name} image ${i+1}`}/>)}</div></div>
  <div><div className="tag">{p.category} · {p.subcategory}</div><h1>{p.name}</h1><p className="desc">{p.description}</p><a className="cta" href={p.affiliate} target="_blank" rel="nofollow sponsored noopener">View Product</a><div className="note">Nexora is an affiliate platform. You will continue to the external store to view the product. Nexora does not handle checkout, payment, shipping or orders.</div></div></div>
 </main><footer className="footer">Product information and availability are provided by the external store and may change.</footer></div>;
}
