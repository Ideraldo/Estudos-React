(this["webpackJsonpfundamentos-react"]=this["webpackJsonpfundamentos-react"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=(n(12),n(5)),o=n.n(c),i=n(1);n(16);var s=function(e){var t;return t.fill((0)[60]),Object(r.jsx)("div",{children:Object(r.jsxs)("span",{children:["Os n\xfameros apostados s\xe3o: ",t]})})},j=n(6),a=n(7),d=n(9),l=n(8),u=(n(17),function(e){return Object(r.jsx)("h3",{children:e.numero})}),b=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:e.setIncrementar,children:"+"}),Object(r.jsx)("button",{onClick:e.setDecrementar,children:"-"})]})},O=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"passoInput",children:"Passo: "}),Object(r.jsx)("input",{id:"passoInput",type:"number",value:e.passo,onChange:function(t){return e.setPasso(+t.target.value)}})]})},h=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={numero:e.props.numeroInicial||0,passo:e.props.passoInicial||5},e.incremento=function(){e.setState({numero:e.state.numero+e.state.passo})},e.decremento=function(){e.setState({numero:e.state.numero-e.state.passo})},e.setPasso=function(t){e.setState({passo:t})},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"Contador",children:[Object(r.jsx)("h2",{children:"Contador"}),Object(r.jsx)(u,{numero:this.state.numero}),Object(r.jsx)(O,{passo:this.state.passo,setPasso:this.setPasso}),Object(r.jsx)(b,{setIncrementar:this.incremento,setDecrementar:this.decremento})]})}}]),n}(i.Component),x=n(2),m=(n(18),function(e){var t=Object(i.useState)("Inicial"),n=Object(x.a)(t,2),c=n[0],o=n[1];return Object(r.jsxs)("div",{className:"Input",children:[Object(r.jsx)("h2",{children:c}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"15px"},children:[Object(r.jsx)("input",{value:c,onChange:function(e){o(e.target.value)}}),Object(r.jsx)("input",{value:c,readOnly:!0}),Object(r.jsx)("input",{value:void 0})]})]})}),p=[{id:1,nome:"Ana",nota:9.2},{id:2,nome:"Daniel",nota:5.2},{id:3,nome:"Guilherme",nota:4.4},{id:4,nome:"Leonardo",nota:3.2},{id:5,nome:"Anderson",nota:1.2},{id:6,nome:"Gabriela",nota:6},{id:7,nome:"Ideraldo",nota:5.5},{id:8,nome:"Joaquim",nota:2.4},{id:9,nome:"Larissa",nota:3.2}],v=function(e){var t=e.quandoClicar,n=function(){return Math.random()>.5},c=p.map((function(e){return e.nome}));return Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(e){return t(function(e){var t=parseInt(9*Math.random())+0;return console.log(t),e[t]}(c),parseInt(20*Math.random())+50,n)},children:"Fornecer informa\xe7\xf5es"})})},f=function(e){var t=Object(i.useState)("?"),n=Object(x.a)(t,2),c=n[0],o=n[1],s=Object(i.useState)(0),j=Object(x.a)(s,2),a=j[0],d=j[1],l=Object(i.useState)(!1),u=Object(x.a)(l,2),b=u[0],O=u[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:["Nome: ",c]}),Object(r.jsxs)("div",{children:["Idade: ",a]}),Object(r.jsxs)("div",{children:["\xc9 nerd?: ",b?"Sim":"N\xe3o"]})]}),Object(r.jsx)(v,{quandoClicar:function(e,t,n){o(e),d(t),O(n)}})]})},C=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:e.nome}),Object(r.jsx)("div",{children:e.idade}),Object(r.jsxs)("div",{children:[e.bool?"Verdadeiro":"Falso"," !"]})]})},g=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(C,{nome:"Filho 1",idade:20,bool:!0})})},P=function(e){var t=e.children.filter((function(e){return e.type&&"Else"===e.type.name}))[0],n=e.children.filter((function(e){return e!==t}));return e.test?n:t||!1},F=function(e){return e.children},N=function(e){var t=e.usuario||{};return Object(r.jsx)("div",{children:Object(r.jsxs)(P,{test:t&&t.nome,children:["Seja bem vindo ",Object(r.jsx)("strong",{children:t.nome}),Object(r.jsxs)(F,{children:["Seja bem vindo ",Object(r.jsx)("strong",{children:"Amig\xe3o"})]})]})})},I=function(e){var t=e.numero%2===0;return Object(r.jsx)("div",{children:t?Object(r.jsx)("span",{children:"Par"}):Object(r.jsx)("span",{children:"Impar"})})},y=(n(19),[{id:1e3,NomeProduto:"Frigideira",preco:17.99},{id:1001,NomeProduto:"PanelaDePress\xe3o",preco:50},{id:1002,NomeProduto:"PanejaDeFeij\xe3o",preco:27.52},{id:1004,NomeProduto:"FritaOvo",preco:10},{id:1005,NomeProduto:"PanelaDeArroz",preco:52.5},{id:1006,NomeProduto:"CortaLegumes",preco:109.99},{id:1007,NomeProduto:"TabuaDeCarne",preco:10},{id:1008,NomeProduto:"Forma01",preco:13.99},{id:1009,NomeProduto:"Forma02",preco:15}]),S=function(e){var t=y.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("tr",{children:e.NomeProduto},e.id)})})),n=y.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("tr",{children:e.id},e.id)})})),c=y.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("tr",{children:["R$ ",e.preco]},e.id)})}));return Object(r.jsx)("div",{className:"tabelaProdutos",children:Object(r.jsxs)("table",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:" ID:"}),Object(r.jsx)("td",{children:" Produto:"}),Object(r.jsx)("td",{children:" Preco:"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:n}),Object(r.jsx)("td",{children:t}),Object(r.jsx)("td",{children:c})]})]})})},D=function(e){var t=p.map((function(e){return Object(r.jsxs)("li",{style:{marginBottom:3,marginTop:4},children:[e.id," - ",e.nome," tem nota ",e.nota]},e.id)}));return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{style:{listStyle:"none",padding:0},children:t})})},A=n(4),k=function(e){return Object(r.jsx)("div",{children:e.children.map((function(t,n){return Object(i.cloneElement)(t,Object(A.a)(Object(A.a)({},e),{},{key:n}))}))})},M=function(e){return Object(r.jsxs)("div",{style:{marginBottom:15},children:[e.nome," ",Object(r.jsx)("strong",{children:e.sobrenome})]})},E=(n(20),function(e){var t={backgroundColor:e.color||"#F00",borderColor:e.color||"#F00"};return Object(r.jsxs)("div",{className:"Card",style:t,children:[Object(r.jsx)("div",{className:"Title",children:e.titulo}),Object(r.jsx)("div",{className:"Content",children:e.children})]})}),R=function(e){var t=e.nota>=7?"Aprovado":"Recupera\xe7\xe3o",n=Math.ceil(e.nota);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:[" ",e.titulo," "]}),Object(r.jsxs)("p",{children:[Object(r.jsxs)("strong",{children:[e.aluno," "]}),"tem nota",Object(r.jsxs)("strong",{children:[" ",n," "]}),"e est\xe1",Object(r.jsxs)("strong",{children:[" ",t," ! "]})]})]})},V=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Fragmento"}),Object(r.jsx)("p",{children:"Cuidado com esse erro"})]})},B=function(e){var t=e.min,n=e.max,c=parseInt(Math.random()*(n-t))+t;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Valor alear\xf3rio"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Valor M\xednimo: "})," ",t]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Valor M\xednimo: "})," ",n]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Valor Escolhido: "})," ",c]})]})};function L(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Primeiro Componente"}),Object(r.jsxs)("p",{children:[" ","Seja bem vindo(a)!"," "]})]})}var T=function(e){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Fundamentos React2"}),Object(r.jsxs)("div",{className:"Exercicios",children:[Object(r.jsx)(E,{titulo:"#13 - Mega Sena",color:"#424242",children:Object(r.jsx)(s,{})}),Object(r.jsx)(E,{titulo:"#12 - Contador",color:"#424242",children:Object(r.jsx)(h,{numeroInicial:10})}),Object(r.jsx)(E,{titulo:"#11 - Componente Controlado",color:"#ffbf00",children:Object(r.jsx)(m,{})}),Object(r.jsx)(E,{titulo:"#10 - Comunica\xe7\xe3o Indireta",color:"#32CD32",children:Object(r.jsx)(f,{})}),Object(r.jsx)(E,{titulo:"#09 - Comunica\xe7\xe3o Direta",color:"#59323C",children:Object(r.jsx)(g,{})}),Object(r.jsxs)(E,{titulo:"#08 - Condicional ParOuImpar",color:"#981395",children:[Object(r.jsx)(I,{numero:57}),Object(r.jsx)(N,{usuario:{nome:"Fernando"}})]}),Object(r.jsx)(E,{titulo:"#07 - Desafio de Repeti\xe7\xe3o",color:"#3A9AD9",children:Object(r.jsx)(S,{})}),Object(r.jsx)(E,{titulo:"#06 - Repeti\xe7\xe3o",color:"#FF4C65",children:Object(r.jsx)(D,{})}),Object(r.jsx)(E,{titulo:"#05 - Componente com Filhos",color:"#00C8F8",children:Object(r.jsxs)(k,{sobrenome:"Ferreira",children:[Object(r.jsx)(M,{nome:"Pedro"}),Object(r.jsx)(M,{nome:"Ana"}),Object(r.jsx)(M,{nome:"Gustavo"}),Object(r.jsx)(M,{nome:"Lucas"})]})}),Object(r.jsx)(E,{titulo:"#04 - Desafio Aleat\xf3rio",color:"#090",children:Object(r.jsx)(B,{min:1,max:60})}),Object(r.jsx)(E,{titulo:"#03 - Fragmentos",color:"",children:Object(r.jsx)(V,{})}),Object(r.jsx)(E,{titulo:"#02 - Com parametro",color:"#FF5733",children:Object(r.jsx)(R,{titulo:"Situa\xe7\xe3o do aluno",aluno:"Pedro Silva",nota:9.3})}),Object(r.jsx)(E,{titulo:"#01 - Primeiro Componente",color:"#2689B0",children:Object(r.jsx)(L,{})})]})]})};o.a.render(Object(r.jsx)(T,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.e9a14db3.chunk.js.map