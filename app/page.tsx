'use client';
import {useMemo,useState} from "react";
import Link from "next/link";
import {products,categories} from "./data";

export default function Home(){
 const [q,setQ]=useState(""); const [open,setOpen]=useState(false); const [expanded,setExpanded]=useState<string|null>(null);
 const filtered=useMemo(()=>products.filter(p=>(p.name+" "+p.category+" "+p.subcategory).toLowerCase().includes(q.toLowerCase())),[q]);
 return <div className="site">
  <header className="header"><div className="nav">
   <Link href="/" className="brand">Nex<span>ora</span></Link>
   <div className="search"><input aria-label="Search products" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products..." /><button onClick={()=>{}}>Search</button></div>
   <button className="catbtn" onClick={()=>setOpen(true)}>Categories</button>
  </div></header>
  <main className="main">
   <section className="intro"><div className="eyebrow">Discover • Explore • Compare</div><h1>Products worth discovering</h1><p>Curated product ideas from across the world.</p></section>
   <div className="sectionhead"><h2>{q ? "Search results" : "Latest Products"}</h2><span className="count">{filtered.length} products</span></div>
   {filtered.length?<div className="grid">{filtered.map(p=><Link className="card" href={`/product/${p.id}/`} key={p.id}><div className="pic"><img src={p.image} alt={p.name}/></div><div className="cardbody"><div className="tag">{p.category}</div><h3>{p.name}</h3></div></Link>)}</div>:<div className="empty">No products found.</div>}
  </main>
  <footer className="footer">Nexora is an affiliate product discovery platform. Product links may lead to external stores. We do not process orders or payments.</footer>
  {open&&<div className="drawer" onClick={()=>setOpen(false)}><aside className="drawerpanel" onClick={e=>e.stopPropagation()}><div className="drawerhead"><h2>Categories</h2><button className="close" onClick={()=>setOpen(false)}>Close</button></div>{categories.map(c=><div className="category" key={c[0]}><button onClick={()=>setExpanded(expanded===c[0]?null:c[0])}>{c[0]}<span>{expanded===c[0]?"−":"+"}</span></button>{expanded===c[0]&&<div className="subs">{c.slice(1).map(s=><Link key={s} href={`/?q=${encodeURIComponent(s)}`} onClick={()=>setOpen(false)}>{s}</Link>)}</div>}</div>)}</aside></div>}
 </div>
}
