import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Minus, c as Instagram, i as Phone, l as Clock, n as ShoppingBag, o as Menu, r as Plus, s as MapPin, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CrS-b5zq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-DOwFBvc6.jpg";
var logo_default = "/assets/logo-BH-r8YaW.png";
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return {
		ref,
		visible
	};
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, className, delay = 0 }) {
	const { ref, visible } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", className),
		children
	});
}
var pastel_carne_default = "/assets/pastel-carne-DVKd1gdQ.jpeg";
var fanta_uva_default = "/assets/fanta-uva-CnvGITng.webp";
var coca_cola_default = "/assets/coca-cola-DYA8FnAl.webp";
var sprite_default = "/assets/sprite-DkHB6cyJ.webp";
var pastel_carne_queijo_default = "/assets/pastel-carne-queijo-CUTLtq4w.png";
var molho_rolih_default = "/assets/molho-rolih-1mzwj39Z.png";
var pastel_especial_rolih_default = "/assets/pastel-especial-rolih-TBcMvCaL.png";
var pastel_carne_ovo_default = "/assets/pastel-carne-ovo-CfdGsYQi.png";
var pastel_bauru_default = "/assets/pastel-bauru-DcZjgiqm.png";
var pastel_frango_queijo_default = "/assets/pastel-frango-queijo-CPceRlTF.png";
var pastel_pizza_default = "/assets/pastel-pizza-D3c3GBir.png";
var pastel_queijo_default = "/assets/pastel-queijo-B9Yiwey8.png";
var pastel_frango_default = "/assets/pastel-frango-RBNcT2om.png";
var frango_requeijao_default = "/assets/frango-requeijao--__k9R0E.png";
var WHATSAPP_NUMBER = "5511949423560";
var categories = [
	{
		id: "tradicionais",
		name: "Tradicionais",
		subtitle: "Os clássicos que fizeram a casa — massa fininha e crocante",
		items: [
			{
				id: "t-frango",
				name: "Pastel de Frango",
				description: "Frango desfiado temperado e soltinho na hora.",
				price: 13,
				image: pastel_frango_default
			},
			{
				id: "t-bauru",
				name: "Pastel Bauru",
				description: "Presunto, queijo mussarela e rodela de tomate com orégano.",
				price: 13,
				image: pastel_bauru_default
			},
			{
				id: "t-carne",
				name: "Pastel de Carne",
				description: "Carne moída suculenta refogada com temperos da casa.",
				price: 15,
				image: pastel_carne_default,
				tag: "Mais pedido"
			},
			{
				id: "t-queijo",
				name: "Pastel de Queijo",
				description: "Mussarela derretida de ponta a ponta, do jeitinho que puxa.",
				price: 15,
				image: pastel_queijo_default
			},
			{
				id: "t-pizza",
				name: "Pastel de Pizza",
				description: "Mussarela, tomate e orégano — a pizza em formato de pastel.",
				price: 15,
				image: pastel_pizza_default
			}
		]
	},
	{
		id: "especiais",
		name: "Especiais",
		subtitle: "Recheios generosos, feitos para dividir (ou não)",
		items: [
			{
				id: "e-frango-requeijao",
				name: "Frango com Requeijão",
				description: "Frango desfiado com requeijão cremoso derretendo a cada mordida.",
				price: 18,
				image: frango_requeijao_default,
				tag: "Favorito da casa"
			},
			{
				id: "e-frango-queijo",
				name: "Frango com Queijo",
				description: "Frango temperado e mussarela em camadas bem servidas.",
				price: 18,
				image: pastel_frango_queijo_default
			},
			{
				id: "e-carne-queijo",
				name: "Carne com Queijo",
				description: "Carne moída da casa bem temperada com mussarela cremosa.",
				price: 18,
				image: pastel_carne_queijo_default
			},
			{
				id: "e-carne-ovo",
				name: "Carne com Ovo",
				description: "Carne moída bem temperada e soltinha com ovo cozido no dia — receita de família.",
				price: 18,
				image: pastel_carne_ovo_default
			},
			{
				id: "e-especial-rolih",
				name: "Especial Rolih",
				description: "Recheio especial com ingredientes premium, feito com carne moída soltinha e bem temperada,ovo cozido no dia e mussarela.",
				price: 20,
				image: pastel_especial_rolih_default
			}
		]
	},
	{
		id: "molhos",
		name: "Molhos da Casa",
		subtitle: "Nossa assinatura: cada pastel merece o molho certo",
		items: [{
			id: "m-verde",
			name: "Molho Verde Rolih",
			description: "Cremoso, encorpado e levemente tostado. O queridinho da galera.",
			price: 3,
			image: molho_rolih_default
		}]
	},
	{
		id: "bebidas",
		name: "Bebidas",
		subtitle: "Geladas para acompanhar",
		items: [
			{
				id: "b-fantaUva-220ml",
				name: "Fanta Uva 220ml",
				description: "Refrigerante Fanta Uva, 220ml.",
				price: 5,
				image: fanta_uva_default
			},
			{
				id: "b-Sprite-220ml",
				name: "Sprite 220ml",
				description: "Refrigerante Sprite, 220ml.",
				price: 5,
				image: sprite_default
			},
			{
				id: "b-Coca-220ml",
				name: "Coca-Cola 220ml",
				description: "Refrigerante Coca-Cola, 220ml.",
				price: 5,
				image: coca_cola_default
			}
		]
	}
];
var highlights = [
	"e-frango-requeijao",
	"t-carne",
	"m-alho",
	"b-caldo"
].map((id) => categories.flatMap((c) => c.items).find((item) => item.id === id)).filter((item) => Boolean(item));
var formatPrice = (value) => value.toLocaleString("pt-BR", {
	style: "currency",
	currency: "BRL"
});
function MenuItemCard({ item, quantity, onAdd, onRemove }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex gap-4 rounded-2xl border border-border/70 bg-card p-4 shadow-card transition-colors hover:border-primary/50",
		children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: item.image,
			alt: item.name,
			loading: "lazy",
			width: 800,
			height: 600,
			className: "h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-24 w-24 shrink-0 place-items-center rounded-xl bg-secondary text-3xl sm:h-28 sm:w-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-primary",
				children: "R"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "min-w-0 text-lg leading-tight font-semibold",
						children: item.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 text-base font-bold text-primary",
						children: formatPrice(item.price)
					})]
				}),
				item.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 w-fit rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-primary uppercase",
					children: item.tag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: item.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex items-center gap-2",
					children: quantity > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-full border border-primary/50 px-2 py-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `Remover um ${item.name}`,
								onClick: onRemove,
								className: "grid h-7 w-7 place-items-center rounded-full text-primary transition-colors hover:bg-primary/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-4 text-center text-sm font-bold",
								children: quantity
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `Adicionar um ${item.name}`,
								onClick: onAdd,
								className: "grid h-7 w-7 place-items-center rounded-full text-primary transition-colors hover:bg-primary/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onAdd,
						className: "rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground",
						children: "Adicionar"
					})
				})
			]
		})]
	});
}
var navLinks = [
	{
		id: "destaques",
		label: "Destaques"
	},
	...categories.map((c) => ({
		id: c.id,
		label: c.name
	})),
	{
		id: "sobre",
		label: "Sobre"
	},
	{
		id: "visite",
		label: "Visite"
	}
];
var allItems = categories.flatMap((c) => c.items);
function Index() {
	const [order, setOrder] = (0, import_react.useState)({});
	const [navOpen, setNavOpen] = (0, import_react.useState)(false);
	const add = (id) => setOrder((o) => ({
		...o,
		[id]: (o[id] ?? 0) + 1
	}));
	const remove = (id) => setOrder((o) => {
		const next = { ...o };
		const q = (next[id] ?? 0) - 1;
		if (q <= 0) delete next[id];
		else next[id] = q;
		return next;
	});
	const { count, total, lines } = (0, import_react.useMemo)(() => {
		const entries = Object.entries(order);
		const lines = entries.map(([id, qty]) => {
			return {
				item: allItems.find((i) => i.id === id),
				qty
			};
		});
		return {
			lines,
			count: entries.reduce((s, [, q]) => s + q, 0),
			total: lines.reduce((s, l) => s + l.item.price * l.qty, 0)
		};
	}, [order]);
	const whatsappHref = (0, import_react.useMemo)(() => {
		const body = lines.length === 0 ? "Olá! Gostaria de fazer um pedido no Rolih Pasteis." : [
			"Olá, Rolih Pasteis! Gostaria de pedir:",
			"",
			...lines.map((l) => `• ${l.qty}x ${l.item.name} — ${formatPrice(l.item.price * l.qty)}`),
			"",
			`Total: ${formatPrice(total)}`
		].join("\n");
		return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
	}, [lines, total]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#topo",
							className: "flex min-w-0 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Logo Rolih Pasteis",
								width: 816,
								height: 816,
								className: "h-9 w-9 shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "truncate font-display text-lg font-bold tracking-tight",
								children: ["Rolih ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Pasteis"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-5 lg:flex",
							children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${l.id}`,
								className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
								children: l.label
							}, l.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Abrir menu de navegação",
							onClick: () => setNavOpen((v) => !v),
							className: "grid h-9 w-9 place-items-center rounded-full border border-border text-foreground lg:hidden",
							children: navOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				}), navOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-border/60 px-4 pb-4 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 pt-3",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${l.id}`,
							onClick: () => setNavOpen(false),
							className: "rounded-xl bg-secondary px-3 py-2 text-sm font-medium",
							children: l.label
						}, l.id))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "topo",
				className: "relative flex min-h-[88svh] items-end overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "Pastéis dourados servidos com molhos da casa",
						width: 1600,
						height: 1008,
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto w-full max-w-6xl px-4 pt-28 pb-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "",
								width: 816,
								height: 816,
								className: "mb-5 h-20 w-20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-[0.28em] text-primary uppercase",
								children: "Pastelaria artesanal · Molhos da casa"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-3 font-display text-4xl leading-[1.05] font-bold sm:text-6xl",
								children: ["Rolih ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-flame",
									children: "Pasteis"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md text-base text-muted-foreground sm:text-lg",
								children: "Um menino feliz comendo pastéis. Massa crocante, recheio generoso e aquele molho que faz voltar sempre."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#destaques",
									className: "rounded-full bg-gradient-flame px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow",
									children: "Ver cardápio"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: whatsappHref,
									target: "_blank",
									rel: "noreferrer",
									className: "rounded-full border border-primary/60 px-6 py-3 text-sm font-bold text-primary",
									children: "Pedir no WhatsApp"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 flex items-center gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-primary" }), " Aberto de terça a domingo, das 16h às 00h"]
							})
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "destaques",
				className: "mx-auto max-w-6xl px-4 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold sm:text-4xl",
					children: "Favoritos da casa"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Os mais pedidos na chapa todo dia."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: highlights.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card",
							children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.name,
								loading: "lazy",
								width: 800,
								height: 600,
								className: "h-40 w-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-40 w-full place-items-center bg-gradient-flame font-display text-4xl text-primary-foreground",
								children: "R"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold",
										children: item.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 flex-1 text-sm text-muted-foreground",
										children: item.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-primary",
											children: formatPrice(item.price)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => add(item.id),
											className: "rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground",
											children: "Adicionar"
										})]
									})
								]
							})]
						})
					}, item.id))
				})]
			}),
			categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: cat.id,
				className: "mx-auto max-w-6xl px-4 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-end gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold sm:text-4xl",
							children: cat.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: cat.subtitle
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-px w-full bg-gradient-flame opacity-60" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 lg:grid-cols-2",
					children: cat.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 2 * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItemCard, {
							item,
							quantity: order[item.id] ?? 0,
							onAdd: () => add(item.id),
							onRemove: () => remove(item.id)
						})
					}, item.id))
				})]
			}, cat.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "sobre",
				className: "mx-auto max-w-6xl px-4 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "rounded-3xl border border-border/70 bg-card p-6 shadow-card sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold sm:text-4xl",
						children: "Sobre nós"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-muted-foreground",
						children: "A Rolih Pasteis nasceu numa cozinha de família, com uma massa aberta à mão e um menino feliz comendo pastel na porta da casa. O que era receita de fim de semana virou ponto de encontro do bairro: fritura na hora, recheio no capricho e uma linha de molhos artesanais criada pela própria casa. Aqui ninguém come pastel sozinho — sempre tem um potinho de molho de alho para dividir."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "visite",
				className: "mx-auto max-w-6xl px-4 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-2xl border border-border/70 bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-6 w-6 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-xl font-semibold",
								children: "Horário"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: "Terça a domingo, das 16h às 00h."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Últimos pedidos até 23h40. Retirada e delivery na região."
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-2xl border border-border/70 bg-card p-6 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-xl font-semibold",
									children: "Onde estamos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted-foreground",
									children: "Rua Doutor Carlos Ubaldino Bueno de Abreu, 175"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.google.com/maps/search/?api=1&query=Rua+Doutor+Carlos+Ubaldino+Bueno+de+Abreu,+175",
									target: "_blank",
									rel: "noreferrer",
									className: "mt-3 inline-block text-sm font-semibold text-primary underline underline-offset-4",
									children: "Abrir no mapa"
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contato",
				className: "mx-auto max-w-6xl px-4 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "rounded-3xl bg-gradient-flame p-6 text-primary-foreground shadow-glow sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold sm:text-4xl",
							children: "Bateu a fome?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl opacity-90",
							children: "Monte seu pedido no cardápio e finalize com a gente no WhatsApp — a gente confirma tudo por lá."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: whatsappHref,
									target: "_blank",
									rel: "noreferrer",
									className: "rounded-full bg-background px-6 py-3 text-sm font-bold text-foreground",
									children: "Finalizar no WhatsApp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.instagram.com/rolih_pasteis/",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Instagram da Rolih Pasteis",
									className: "grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:+${WHATSAPP_NUMBER}`,
									"aria-label": "Ligar para a Rolih Pasteis",
									className: "grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/60 px-4 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "",
								width: 816,
								height: 816,
								loading: "lazy",
								className: "h-8 w-8"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base font-bold text-foreground",
								children: "Rolih Pasteis"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rua Doutor Carlos Ubaldino Bueno de Abreu, 175 · De terça a domingo, 16h às 00h" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"WhatsApp +",
							WHATSAPP_NUMBER.slice(0, 2),
							" (",
							WHATSAPP_NUMBER.slice(2, 4),
							")",
							" ",
							WHATSAPP_NUMBER.slice(4, 9),
							"-",
							WHATSAPP_NUMBER.slice(9),
							" ·"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Rolih Pasteis. Todos os direitos reservados."
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/95 px-4 py-3 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-1 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: count === 0 ? "Seu pedido está vazio" : `${count} item(ns) no pedido`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: ["Total ", formatPrice(total)]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappHref,
						target: "_blank",
						rel: "noreferrer",
						className: "shrink-0 rounded-full bg-gradient-flame px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow",
						children: count === 0 ? "Falar no WhatsApp" : "Finalizar pedido"
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
