/* SeekhoWebDev course data: tracks, chapters, lessons, quizzes */
const TRACKS=[
 {id:"html",name:"HTML",icon:"🧱",desc:"Web di buniyad — structure te content."},
 {id:"css",name:"CSS",icon:"🎨",desc:"Design — rang, style te layout."},
 {id:"js",name:"JavaScript",icon:"⚡",desc:"Dimaag — interactivity te logic."}
];
const CHAPTERS=[
/* ============ HTML TRACK ============ */
{slug:"html-basics",track:"html",title:"HTML Basics",
intro:"HTML (HyperText Markup Language) har website di haddi hai. Ohnu samjho.",
body:`
<h3>HTML ki hai?</h3>
<p>HTML <b>tags</b> naal bani hundi hai. Tag angle brackets vich likhida hai: <code>&lt;p&gt;</code> khulda, <code>&lt;/p&gt;</code> band hunda.</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Meri Pehli Site&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello Duniya!&lt;/h1&gt;
    &lt;p&gt;Eh mera pehla paragraph hai.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<ul>
<li><code>&lt;!DOCTYPE html&gt;</code> — browser nu dasda eh HTML5 hai</li>
<li><code>&lt;head&gt;</code> — title wagira (nazar nahi aunda)</li>
<li><code>&lt;body&gt;</code> — jo nazar aunda, sab ethe</li>
<li><code>&lt;h1&gt;</code> toh <code>&lt;h6&gt;</code> — headings (h1 sab toh wadda)</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> HTML <i>structure</i> dindi hai, <i>design</i> nahi — oh CSS da kam hai!</div>`,
quiz:[
 {q:"HTML da full form ki hai?",opts:["HyperText Markup Language","HighTech Modern Language","HomeTool Markup Language","Hyperlink Text Mode Language"],a:0,exp:"HyperText Markup Language — web da standard."},
 {q:"Kehra tag sab toh waddi heading bananda?",opts:["<h6>","<head>","<h1>","<header>"],a:2,exp:"h1 sab toh wadda, h6 sab toh chhota."},
 {q:"Nazar aun wala content kehre tag vich pauna?",opts:["<head>","<body>","<title>","<meta>"],a:1,exp:"<body> vich jo likho, browser vich disda."},
 {q:"Paragraph layi kehra tag?",opts:["<pg>","<p>","<para>","<text>"],a:1,exp:"<p> = paragraph."},
 {q:"Band karan wala tag kiddan likhida?",opts:["<p/>","</p>","<p->","<end p>"],a:1,exp:"Slash pehlan: </p>."}
]},
{slug:"html-text",track:"html",title:"Text & Formatting",
intro:"Text nu bold, italic, list wagira kiddan banaiye.",
body:`
<h3>Text formatting tags</h3>
<pre><code>&lt;p&gt;Eh &lt;b&gt;bold&lt;/b&gt; te &lt;i&gt;italic&lt;/i&gt; hai.&lt;/p&gt;
&lt;p&gt;Eh &lt;strong&gt;important&lt;/strong&gt; te &lt;em&gt;emphasis&lt;/em&gt; hai.&lt;/p&gt;
&lt;p&gt;Line break ethe&lt;br&gt;ho gaya!&lt;/p&gt;
&lt;hr&gt;
&lt;blockquote&gt;Kisi da quote ethe likho.&lt;/blockquote&gt;</code></pre>
<ul>
<li><code>&lt;b&gt;</code> / <code>&lt;strong&gt;</code> — bold (strong = meaning vich important)</li>
<li><code>&lt;i&gt;</code> / <code>&lt;em&gt;</code> — italic</li>
<li><code>&lt;br&gt;</code> — line break (band karan di lorh nahi)</li>
<li><code>&lt;hr&gt;</code> — horizontal line</li>
</ul>
<h3>Lists</h3>
<pre><code>&lt;ul&gt;
  &lt;li&gt;Roti&lt;/li&gt;
  &lt;li&gt;Kapra&lt;/li&gt;
&lt;/ul&gt;
&lt;ol&gt;
  &lt;li&gt;Pehla kam&lt;/li&gt;
  &lt;li&gt;Dooja kam&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<div class="tip"><b>Yaad rakho:</b> <code>ul</code> = unordered (gole nishan), <code>ol</code> = ordered (number).</div>`,
quiz:[
 {q:"Bold text layi kehra tag?",opts:["<i>","<b>","<u>","<br>"],a:1,exp:"<b> bold karda."},
 {q:"Line break layi?",opts:["<lb>","<break>","<br>","<nl>"],a:2,exp:"<br> self-closing tag hai."},
 {q:"Number wali list kehri?",opts:["<ul>","<list>","<ol>","<nl>"],a:2,exp:"ol = ordered list (1,2,3...)."},
 {q:"List item layi tag?",opts:["<li>","<item>","<l>","<ul>"],a:0,exp:"<li> har item layi."},
 {q:"<strong> te <b> vich farak?",opts:["Koi nahi","strong da meaning 'important' hunda","b wadda hunda","strong italic hunda"],a:1,exp:"Dono bold disde, par strong semantic meaning dinda."}
]},
{slug:"html-links-media",track:"html",title:"Links, Images & Media",
intro:"Doojian sites naal joro, tasveeran te video lao.",
body:`
<h3>Links</h3>
<pre><code>&lt;a href="https://google.com"&gt;Google kholo&lt;/a&gt;
&lt;a href="https://google.com" target="_blank"&gt;Nawi tab vich kholo&lt;/a&gt;</code></pre>
<h3>Images</h3>
<pre><code>&lt;img src="photo.jpg" alt="Meri photo" width="300"&gt;</code></pre>
<ul>
<li><code>src</code> — tasveer da rasta</li>
<li><code>alt</code> — je photo na khule te eh text disda (bohat zaroori!)</li>
</ul>
<h3>Video & Audio</h3>
<pre><code>&lt;video src="video.mp4" controls width="400"&gt;&lt;/video&gt;
&lt;audio src="song.mp3" controls&gt;&lt;/audio&gt;</code></pre>
<div class="tip"><b>Yaad rakho:</b> <code>controls</code> toh baghair video chal nahi sakdi — play button layi controls zaroori!</div>`,
quiz:[
 {q:"Link banan layi tag?",opts:["<link>","<a>","<href>","<url>"],a:1,exp:"<a> = anchor tag."},
 {q:"Link da address kehre attribute vich?",opts:["src","link","href","to"],a:2,exp:"href vich URL pao."},
 {q:"Nawi tab vich kholan layi?",opts:["target=\"new\"","target=\"_blank\"","open=\"new\"","tab=\"yes\""],a:1,exp:"target=\"_blank\" nawi tab kholda."},
 {q:"Image da rasta kehre attribute vich?",opts:["href","src","link","path"],a:1,exp:"img layi src, link layi href."},
 {q:"alt attribute kyon zaroori?",opts:["Photo sohni lagdi","Je photo na khule te text disda","Speed wadhdi","Koi lorh nahi"],a:1,exp:"alt accessibility + backup text layi hai."}
]},
{slug:"html-tables",track:"html",title:"Tables",
intro:"Data nu safai naal table vich dikhao.",
body:`
<pre><code>&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th&gt;Naam&lt;/th&gt;
    &lt;th&gt;Umar&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Usman&lt;/td&gt;
    &lt;td&gt;22&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
<ul>
<li><code>&lt;table&gt;</code> — poori table</li>
<li><code>&lt;tr&gt;</code> — table row (ik line)</li>
<li><code>&lt;th&gt;</code> — heading cell (bold, center)</li>
<li><code>&lt;td&gt;</code> — normal data cell</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Pehlan <code>tr</code> (row) banao, phir ohde vich <code>td</code> cells pao.</div>`,
quiz:[
 {q:"Table layi main tag?",opts:["<tab>","<table>","<tbl>","<grid>"],a:1,exp:"<table>."},
 {q:"tr da matlab?",opts:["table row","table right","text row","top row"],a:0,exp:"tr = table row."},
 {q:"Heading cell kehri?",opts:["<td>","<th>","<h>","<hc>"],a:1,exp:"th = table heading (bold)."},
 {q:"Normal data cell?",opts:["<td>","<th>","<tr>","<d>"],a:0,exp:"td = table data."},
 {q:"2 rows, 3 columns layi kinne <td>?",opts:["5","6","2","3"],a:1,exp:"Har row vich 3 td = kul 6 (plus headings)."}
]},
{slug:"html-forms",track:"html",title:"Forms & Semantic HTML",
intro:"User toh input lo — te code nu meaningful banao.",
body:`
<h3>Forms</h3>
<pre><code>&lt;form&gt;
  &lt;label&gt;Naam: &lt;/label&gt;
  &lt;input type="text" placeholder="Apna naam likho"&gt;&lt;br&gt;&lt;br&gt;
  &lt;label&gt;Password: &lt;/label&gt;
  &lt;input type="password"&gt;&lt;br&gt;&lt;br&gt;
  &lt;input type="checkbox"&gt; Yaad rakho&lt;br&gt;&lt;br&gt;
  &lt;button type="submit"&gt;Bhejo&lt;/button&gt;
&lt;/form&gt;</code></pre>
<ul>
<li><code>type="text"</code> — normal likhan</li>
<li><code>type="password"</code> — lukeya hoya</li>
<li><code>type="checkbox"</code> / <code>type="radio"</code> — chunao</li>
<li><code>&lt;button type="submit"&gt;</code> — form bhejda</li>
</ul>
<h3>Semantic tags</h3>
<p>Div di jagah <b>meaningful</b> tags vartao:</p>
<pre><code>&lt;header&gt;...&lt;/header&gt;
&lt;nav&gt;...&lt;/nav&gt;
&lt;main&gt;...&lt;/main&gt;
&lt;section&gt;...&lt;/section&gt;
&lt;footer&gt;...&lt;/footer&gt;</code></pre>
<div class="tip"><b>Yaad rakho:</b> Semantic tags Google (SEO) te screen readers layi bohat zaroori ne!</div>`,
quiz:[
 {q:"User input layi main tag?",opts:["<form>","<input>","<get>","<field>"],a:1,exp:"<input> alag alag type naal."},
 {q:"Password lukeya hoya layi type?",opts:["text","hidden","password","secret"],a:2,exp:"type=\"password\"."},
 {q:"Form bhejan wala button?",opts:["<button type=\"send\">","<button type=\"submit\">","<input type=\"go\">","<submit>"],a:1,exp:"type=\"submit\"."},
 {q:"Semantic tag kehri hai?",opts:["<div>","<span>","<header>","<b>"],a:2,exp:"<header> da meaning hai; div generic hai."},
 {q:"Semantic tags kyon vartiye?",opts:["Sohne lagde","SEO te accessibility layi","Tez chalde","Koi farak nahi"],a:1,exp:"Google te screen readers samajhde ne."}
]},
/* ============ CSS TRACK ============ */
{slug:"css-basics",track:"css",title:"CSS Basics",
intro:"CSS naal website sohni banandi hai — rang, size, style.",
body:`
<h3>CSS kiddan laiye? (3 tareeke)</h3>
<pre><code>&lt;!-- 1. Inline --&gt;
&lt;p style="color: red;"&gt;Laal text&lt;/p&gt;

&lt;!-- 2. Internal (head vich) --&gt;
&lt;style&gt;
  p { color: blue; }
&lt;/style&gt;

&lt;!-- 3. External (sab toh vadhiya) --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
<h3>Selectors</h3>
<pre><code>/* tag selector */
p { color: green; }

/* class selector (. naal) */
.sohna { font-size: 20px; }

/* id selector (# naal) */
#khaas { background: yellow; }</code></pre>
<pre><code>&lt;p class="sohna"&gt;Main sohna hoon&lt;/p&gt;
&lt;p id="khaas"&gt;Main khaas hoon&lt;/p&gt;</code></pre>
<div class="tip"><b>Yaad rakho:</b> <code>.</code> = class (kai vaari vart sakde), <code>#</code> = id (sirf ik vaari).</div>`,
quiz:[
 {q:"CSS da full form?",opts:["Computer Style Sheets","Cascading Style Sheets","Creative Style System","Colorful Style Sheets"],a:1,exp:"Cascading Style Sheets."},
 {q:"Sab toh vadhiya tareeka CSS laan da?",opts:["Inline","Internal","External file","Koi nahi"],a:2,exp:"External .css file — safai + reuse."},
 {q:"Class selector kiddan?",opts:["#naam",".naam","*naam","@naam"],a:1,exp:". (dot) class layi."},
 {q:"ID selector kiddan?",opts:[".naam","#naam","!naam","$naam"],a:1,exp:"# (hash) id layi."},
 {q:"Class te ID vich farak?",opts:["Koi nahi","Class kai vaari, ID ik vaari","ID kai vaari, class ik vaari","Dono ik vaari"],a:1,exp:"Class repeat ho sakdi, ID unique hundi."}
]},
{slug:"css-colors-fonts",track:"css",title:"Colors, Fonts & Text",
intro:"Rang te likhai naal website di jaan.",
body:`
<h3>Colors (3 tareeke)</h3>
<pre><code>p {
  color: red;              /* naam */
  color: #ff0000;          /* hex code */
  color: rgb(255, 0, 0);   /* rgb */
  background-color: #0b0f14;
}</code></pre>
<h3>Fonts & Text</h3>
<pre><code>h1 {
  font-family: Arial, sans-serif;
  font-size: 32px;
  font-weight: bold;      /* ya 700 */
  text-align: center;
  text-decoration: underline;
}
p {
  line-height: 1.6;       /* linean vich fasla */
  letter-spacing: 1px;
}</code></pre>
<div class="tip"><b>Yaad rakho:</b> Hex code <code>#f5a524</code> varga hunda — # toh baad 6 harf (0-9, a-f). Online "color picker" naal chuno!</div>`,
quiz:[
 {q:"Text da rang kehri property?",opts:["text-color","font-color","color","colour"],a:2,exp:"color property."},
 {q:"Background rang layi?",opts:["bg-color","background-color","back-color","color-bg"],a:1,exp:"background-color."},
 {q:"Hex code kiddan shuru hunda?",opts:["@","$","#","&"],a:2,exp:"# naal, je #f5a524."},
 {q:"Text center karan layi?",opts:["align: center","text-align: center","font-center","middle: true"],a:1,exp:"text-align: center."},
 {q:"Linean vich fasla?",opts:["line-space","line-height","text-gap","para-space"],a:1,exp:"line-height, je 1.6."}
]},
{slug:"css-boxmodel",track:"css",title:"Box Model",
intro:"Har element ik dabba hai — margin, border, padding, content.",
body:`
<h3>Box Model (bahar toh andar)</h3>
<pre><code>┌── margin ──┐
│ ┌─ border ┐ │
│ │┌padding┐│ │
│ ││content││ │
│ │└───────┘│ │
│ └─────────┘ │
└────────────┘</code></pre>
<pre><code>.dabba {
  width: 200px;
  padding: 20px;        /* andar fasla */
  border: 2px solid red; /* kinara */
  margin: 30px;         /* bahar fasla */
}</code></pre>
<ul>
<li><code>padding</code> — content te border vichkar fasla</li>
<li><code>margin</code> — border toh bahar fasla (dooje element toh door)</li>
<li><code>border: 2px solid red</code> — motai, style, rang</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Padding = andar, Margin = bahar. Eh sab toh zaroori concept hai!</div>`,
quiz:[
 {q:"Content te border vichkar fasla?",opts:["margin","padding","border","gap"],a:1,exp:"padding andar da fasla."},
 {q:"Element toh bahar fasla?",opts:["padding","margin","border","space"],a:1,exp:"margin bahar da fasla."},
 {q:"Border likhan da sahi tareeka?",opts:["border: red 2px","border: 2px solid red","border = 2px red","border(2px,red)"],a:1,exp:"motai, style, rang — border: 2px solid red."},
 {q:"Box model vich sab toh andar ki?",opts:["margin","border","content","padding"],a:2,exp:"content sab toh andar."},
 {q:"Do dabbe door karan layi?",opts:["padding","margin","border","width"],a:1,exp:"margin naal doori wadhdi."}
]},
{slug:"css-flexbox",track:"css",title:"Flexbox",
intro:"Cheezan nu aasani naal line vich lao — sab toh kam di layout technique.",
body:`
<h3>Flexbox buniyad</h3>
<pre><code>&lt;div class="container"&gt;
  &lt;div class="item"&gt;1&lt;/div&gt;
  &lt;div class="item"&gt;2&lt;/div&gt;
  &lt;div class="item"&gt;3&lt;/div&gt;
&lt;/div&gt;</code></pre>
<pre><code>.container {
  display: flex;
  justify-content: center;  /* khabi-saji: start, center, space-between */
  align-items: center;      /* utte-thalle: start, center */
  gap: 10px;               /* iteman vich fasla */
}
.item {
  background: #f5a524;
  padding: 20px;
}</code></pre>
<ul>
<li><code>display: flex</code> — parent te lao</li>
<li><code>justify-content</code> — main axis (aam taur te horizontal)</li>
<li><code>align-items</code> — cross axis (vertical)</li>
<li><code>gap</code> — iteman vichkar fasla</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Navbar, button row, card row — sab flexbox naal banande ne!</div>`,
quiz:[
 {q:"Flexbox shuru karan layi?",opts:["display: box","display: flex","flex: on","layout: flex"],a:1,exp:"display: flex parent te."},
 {q:"justify-content ki karda?",opts:["Rang badalda","Main axis te alignment","Font size","Kuch nahi"],a:1,exp:"Main axis (horizontal) te jagah vandda."},
 {q:"Cheezan vichkar brabar fasla?",opts:["justify-content: space-between","align: apart","gap: none","margin: auto"],a:0,exp:"space-between."},
 {q:"Sab nu center vich?",opts:["justify-content: center + align-items: center","margin: center","text-align: center","flex: center"],a:0,exp:"Dono center — poora center!"},
 {q:"Iteman vichkar fasla?",opts:["space","gap","padding","margin"],a:1,exp:"gap property."}
]},
{slug:"css-grid-responsive",track:"css",title:"Grid & Responsive Design",
intro:"Grid naal 2D layout, te media queries naal mobile-friendly site.",
body:`
<h3>CSS Grid</h3>
<pre><code>.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 brabar column */
  gap: 15px;
}</code></pre>
<p><code>1fr</code> = ik hissa (fraction). 3 columns = 1fr 1fr 1fr.</p>
<h3>Responsive (mobile layi)</h3>
<pre><code>/* Desktop: 3 column */
.grid { grid-template-columns: 1fr 1fr 1fr; }

/* Mobile (700px toh chhota): 1 column */
@media (max-width: 700px) {
  .grid { grid-template-columns: 1fr; }
}</code></pre>
<div class="tip"><b>Yaad rakho:</b> Aaj kal 70%+ log mobile te website kholde ne — responsive lazmi hai!</div>`,
quiz:[
 {q:"Grid shuru karan layi?",opts:["display: grid","grid: on","display: table","layout: grid"],a:0,exp:"display: grid."},
 {q:"3 brabar column?",opts:["columns: 3","grid-template-columns: 1fr 1fr 1fr","grid: 3","col: 3"],a:1,exp:"1fr = ik fraction hissa."},
 {q:"Mobile layi alag CSS?",opts:["@media","@mobile","@screen","@responsive"],a:0,exp:"@media (max-width: 700px)."},
 {q:"fr da matlab?",opts:["frame","fraction","free","front"],a:1,exp:"fraction — jagah da hissa."},
 {q:"Responsive kyon zaroori?",opts:["Sohna lagda","70%+ mobile users","Google khush","Sab sahi"],a:3,exp:"Sab wajuhat sahi ne!"}
]},
/* ============ JAVASCRIPT TRACK ============ */
{slug:"js-basics",track:"js",title:"JS Basics & Variables",
intro:"JavaScript website nu zinda kardi hai — button dabao te kuch hove!",
body:`
<h3>Pehla JS code</h3>
<pre><code>console.log("Hello Duniya!");
alert("Main pop-up hoon!");</code></pre>
<p><code>console.log</code> browser console vich likhda (F12 dab ke dekho).</p>
<h3>Variables (dabbe)</h3>
<pre><code>let naam = "Usman";   // badal sakda
const umar = 22;      // fix, nahi badalda
var purana = "na vartao"; // purana tareeka

let ginti = 5;
ginti = 10;  // theek hai (let badal sakda)
// umar = 23; // GALAT! const nahi badalda</code></pre>
<ul>
<li><code>let</code> — badal sakda hai</li>
<li><code>const</code> — fix rehnda (hamesha ehi vartao jad ho sake)</li>
<li><code>var</code> — purana, hun na vartao</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> String <code>"..."</code> vich, number beghair quotes: <code>let n = 22</code>.</div>`,
quiz:[
 {q:"Console vich likhan layi?",opts:["print()","console.log()","echo()","write()"],a:1,exp:"console.log()."},
 {q:"Badalan wala variable?",opts:["const","let","fix","static"],a:1,exp:"let badal sakda."},
 {q:"Fix variable?",opts:["let","var","const","fix"],a:2,exp:"const = constant."},
 {q:"Kehra na vartao?",opts:["let","const","var","sab vartao"],a:2,exp:"var purana tareeka hai."},
 {q:"String kiddan likhida?",opts:["Usman","\"Usman\"","'Usman' naal nahi","Dono \" \" ya ' ' vich"],a:3,exp:"Quotes vich — double ya single."}
]},
{slug:"js-conditions",track:"js",title:"Operators & Conditions",
intro:"Faisle karna sikho — je eh te oh, nahi te kujh hor.",
body:`
<h3>Operators</h3>
<pre><code>let a = 10, b = 3;
a + b;  // 13
a - b;  // 7
a * b;  // 30
a / b;  // 3.33
a % b;  // 1 (baki)</code></pre>
<h3>Comparison</h3>
<pre><code>10 === 10;  // true (value + type)
10 == "10"; // true (sirf value) — na vartao!
10 !== 5;   // true
10 > 5;     // true</code></pre>
<h3>If / Else</h3>
<pre><code>let umar = 18;
if (umar >= 18) {
  console.log("Vote pa sakde ho!");
} else {
  console.log("Thoda wait karo.");
}</code></pre>
<div class="tip"><b>Yaad rakho:</b> Hamesha <code>===</code> vartao, <code>==</code> nahi — == type nu ignore karda (bug da ghar)!</div>`,
quiz:[
 {q:"10 % 3 = ?",opts:["3","1","3.33","0"],a:1,exp:"% = baki (remainder). 10/3 = 3, baki 1."},
 {q:"Sahi comparison kehri?",opts:["==","===","=","!="],a:1,exp:"=== value + type check karda."},
 {q:"=, ==, === vich farak?",opts:["Koi nahi","= assign, ==/=== compare","Sab assign","Sab compare"],a:1,exp:"= value dinda, ==/=== compare karde."},
 {q:"else kab chalda?",opts:["Hamesha","Jad if false hove","Kabhi nahi","Pehla chalda"],a:1,exp:"if di condition false te else."},
 {q:"umar >= 18 da matlab?",opts:["18 toh waddi","18 ya 18 toh waddi","18 toh chhoti","18 brabar nahi"],a:1,exp:">= means greater than or equal."}
]},
{slug:"js-functions",track:"js",title:"Functions",
intro:"Code nu dabbe vich pao, jad lorh paye chalo.",
body:`
<h3>Function banao te chalao</h3>
<pre><code>function salaam(naam) {
  return "Assalam-o-Alaikum, " + naam + "!";
}

let msg = salaam("Usman");
console.log(msg); // Assalam-o-Alaikum, Usman!</code></pre>
<ul>
<li><code>naam</code> = parameter (andar aun wala)</li>
<li><code>"Usman"</code> = argument (bhejeya hoya)</li>
<li><code>return</code> = wapis bhejda</li>
</ul>
<h3>Arrow function (nawan tareeka)</h3>
<pre><code>const jod = (a, b) => a + b;
console.log(jod(5, 3)); // 8</code></pre>
<div class="tip"><b>Yaad rakho:</b> Function ik vaari likho, sau vaari chalao — ehi asli programming hai!</div>`,
quiz:[
 {q:"Function kiddan banaiye?",opts:["func salaam()","function salaam()","def salaam()","make salaam()"],a:1,exp:"function keyword."},
 {q:"Parameter ki hunda?",opts:["Wapis value","Andar aun wala variable","Function da naam","Kuch nahi"],a:1,exp:"Parameter input variable hai."},
 {q:"return ki karda?",opts:["Function rokda","Value wapis bhejda","Print karda","Dono pehle"],a:3,exp:"return value wapis bhej ke function khatam karda."},
 {q:"salaam(\"Usman\") vich \"Usman\" ki hai?",opts:["Parameter","Argument","Return","Variable"],a:1,exp:"Bhejeya hoya = argument."},
 {q:"Arrow function?",opts:["(a,b) => a+b","a+b => func","-> a+b","function> a+b"],a:0,exp:"=> arrow wala tareeka."}
]},
{slug:"js-arrays-objects",track:"js",title:"Arrays & Objects",
intro:"Kai cheezan ikathe rakho — listan te khaake.",
body:`
<h3>Array (list)</h3>
<pre><code>let phal = ["saib", "kela", "angoor"];
console.log(phal[0]); // "saib" (ginti 0 toh!)
phal.push("ammood");   // aakhir te pao
console.log(phal.length); // 4</code></pre>
<h3>Object (key-value)</h3>
<pre><code>let banda = {
  naam: "Usman",
  umar: 22,
  sheher: "Lahore"
};
console.log(banda.naam);   // "Usman"
banda.umar = 23;           // badal sakde</code></pre>
<h3>Loop (har item te kam)</h3>
<pre><code>for (let p of phal) {
  console.log("Mainu pasand: " + p);
}</code></pre>
<div class="tip"><b>Yaad rakho:</b> Array di ginti <b>0</b> toh shuru! Pehla item = [0].</div>`,
quiz:[
 {q:"Array da pehla item?",opts:["phal[1]","phal[0]","phal.first","phal[10]"],a:1,exp:"Ginti 0 toh shuru hundi!"},
 {q:"Aakhir te paan layi?",opts:["phal.add()","phal.push()","phal.end()","phal.put()"],a:1,exp:"push() aakhir te paonda."},
 {q:"Object vich value kiddan access?",opts:["banda[naam]","banda.naam","banda->naam","naam.banda"],a:1,exp:"Dot notation: banda.naam."},
 {q:"phal.length ki dinda?",opts:["Aakhri item","Ginti","Pehla item","Kuch nahi"],a:1,exp:"length = kinne items ne."},
 {q:"for...of ki karda?",opts:["Ginti karda","Har item te loop","Rokda","Sort karda"],a:1,exp:"Har item te ik ik karke chalda."}
]},
{slug:"js-dom",track:"js",title:"DOM Manipulation",
intro:"JS naal HTML badlo — website zinda karo!",
body:`
<h3>Element labho te badlo</h3>
<pre><code>&lt;p id="msg"&gt;Purana text&lt;/p&gt;
&lt;button onclick="badlo()"&gt;Badlo&lt;/button&gt;

&lt;script&gt;
function badlo() {
  let p = document.getElementById("msg");
  p.textContent = "Nawan text! 🎉";
  p.style.color = "orange";
}
&lt;/script&gt;</code></pre>
<ul>
<li><code>document.getElementById("msg")</code> — element labho</li>
<li><code>.textContent</code> — andar da text badlo</li>
<li><code>.style.color</code> — CSS badlo</li>
<li><code>.innerHTML</code> — HTML hi pa deo (khatarnak je user input hove!)</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> DOM = Document Object Model. JS da HTML naal gall karan da tareeka!</div>`,
quiz:[
 {q:"Element ID naal labhan layi?",opts:["document.find()","document.getElementById()","document.get()","find.id()"],a:1,exp:"getElementById(\"id\")."},
 {q:"Text badlan layi?",opts:[".text",".textContent",".inner",".value"],a:1,exp:".textContent."},
 {q:"Rang badlan layi?",opts:["p.color","p.style.color","p.css.color","style(p)"],a:1,exp:".style.color."},
 {q:"DOM da matlab?",opts:["Data Object Mode","Document Object Model","Direct Output Method","Kuch nahi"],a:1,exp:"Document Object Model."},
 {q:"innerHTML khatarnak kyon?",opts:["Slow hai","User input naal hack ho sakda","Kharab disda","Koi waja nahi"],a:1,exp:"XSS attack — user da code chal sakda!"}
]},
{slug:"js-events-project",track:"js",title:"Events & Mini Project",
intro:"Click, type, hover — events te ik poora project!",
body:`
<h3>Events</h3>
<pre><code>&lt;button id="btn"&gt;Dabao&lt;/button&gt;
&lt;script&gt;
document.getElementById("btn")
  .addEventListener("click", function() {
    alert("Button dab gaya!");
  });
&lt;/script&gt;</code></pre>
<p>Aam events: <code>click</code>, <code>mouseover</code>, <code>keydown</code>, <code>submit</code>, <code>input</code></p>
<h3>Mini Project: Counter App 🎯</h3>
<p>Playground vich eh code chala ke dekho:</p>
<pre><code>&lt;h1 id="ginti"&gt;0&lt;/h1&gt;
&lt;button onclick="wadhao()"&gt;+1&lt;/button&gt;
&lt;button onclick="ghatao()"&gt;-1&lt;/button&gt;
&lt;script&gt;
let n = 0;
function wadhao() {
  n++;
  document.getElementById("ginti").textContent = n;
}
function ghatao() {
  n--;
  document.getElementById("ginti").textContent = n;
}
&lt;/script&gt;</code></pre>
<div class="tip"><b>Mubarak!</b> 🎉 Tusi counter app bana layi — eh <b>asli</b> JavaScript project hai. Agge: todo list banao!</div>`,
quiz:[
 {q:"Click event laan layi?",opts:["onclick attr ya addEventListener","sirf HTML","sirf CSS","koi tareeka nahi"],a:0,exp:"Dono tareeke theek ne."},
 {q:"n++ da matlab?",opts:["n+2","n = n + 1","n = 0","n double"],a:1,exp:"++ ik wadhaonda."},
 {q:"Keyboard event kehri?",opts:["click","keydown","hover","submit"],a:1,exp:"keydown keyboard layi."},
 {q:"addEventListener de arguments?",opts:["event naam + function","sirf naam","sirf function","koi nahi"],a:0,exp:"(\"click\", function(){...})."},
 {q:"Counter vich n kithe save?",opts:["HTML vich","JS variable vich","CSS vich","Kaite nahi"],a:1,exp:"let n = 0 variable vich."}
]}
];
