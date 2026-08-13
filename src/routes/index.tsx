import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Clock, Instagram, MapPin, Menu as MenuIcon, Phone, ShoppingBag, X } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import { Reveal } from "@/components/Reveal";
import { MenuItemCard } from "@/components/MenuItemCard";
import { categories, formatPrice, highlights, WHATSAPP_NUMBER } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rolih Pasteis | Cardápio Digital de Pastéis e Molhos" },
      {
        name: "description",
        content:
          "Cardápio digital da Rolih Pasteis: pastéis tradicionais e especiais com molhos da casa. Peça pelo WhatsApp, das 16h à meia-noite.",
      },
      { property: "og:title", content: "Rolih Pasteis | Cardápio Digital" },
      {
        property: "og:description",
        content:
          "Pastéis crocantes, recheios generosos e molhos artesanais. Monte seu pedido e finalize pelo WhatsApp.",
      },
      { property: "og:type", content: "restaurant.menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { id: "destaques", label: "Destaques" },
  ...categories.map((c) => ({ id: c.id, label: c.name })),
  { id: "sobre", label: "Sobre" },
  { id: "visite", label: "Visite" },
];

const allItems = categories.flatMap((c) => c.items);

function Index() {
  const [order, setOrder] = useState<Record<string, number>>({});
  const [navOpen, setNavOpen] = useState(false);

  const add = (id: string) => setOrder((o) => ({ ...o, [id]: (o[id] ?? 0) + 1 }));
  const remove = (id: string) =>
    setOrder((o) => {
      const next = { ...o };
      const q = (next[id] ?? 0) - 1;
      if (q <= 0) delete next[id];
      else next[id] = q;
      return next;
    });

  const { count, total, lines } = useMemo(() => {
    const entries = Object.entries(order);
    const lines = entries.map(([id, qty]) => {
      const item = allItems.find((i) => i.id === id)!;
      return { item, qty };
    });
    return {
      lines,
      count: entries.reduce((s, [, q]) => s + q, 0),
      total: lines.reduce((s, l) => s + l.item.price * l.qty, 0),
    };
  }, [order]);

  const whatsappHref = useMemo(() => {
    const body =
      lines.length === 0
        ? "Olá! Gostaria de fazer um pedido no Rolih Pasteis."
        : [
            "Olá, Rolih Pasteis! Gostaria de pedir:",
            "",
            ...lines.map(
              (l) => `• ${l.qty}x ${l.item.name} — ${formatPrice(l.item.price * l.qty)}`,
            ),
            "",
            `Total: ${formatPrice(total)}`,
          ].join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
  }, [lines, total]);

  return (
    <div className="min-h-screen pb-28">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <a href="#topo" className="flex min-w-0 items-center gap-2">
            <img src={logo} alt="Logo Rolih Pasteis" width={816} height={816} className="h-9 w-9 shrink-0" />
            <span className="truncate font-display text-lg font-bold tracking-tight">
              Rolih <span className="text-primary">Pasteis</span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Abrir menu de navegação"
            onClick={() => setNavOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {navOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {navOpen && (
          <nav className="border-t border-border/60 px-4 pb-4 lg:hidden">
            <div className="grid grid-cols-2 gap-2 pt-3">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setNavOpen(false)}
                  className="rounded-xl bg-secondary px-3 py-2 text-sm font-medium"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="topo" className="relative flex min-h-[88svh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Pastéis dourados servidos com molhos da casa"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-14">
          <Reveal>
            <img src={logo} alt="" width={816} height={816} className="mb-5 h-20 w-20" />
            <p className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">
              Pastelaria artesanal · Molhos da casa
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] font-bold sm:text-6xl">
              Rolih <span className="text-gradient-flame">Pasteis</span>
            </h1>
            <p className="mt-3 max-w-md text-base text-muted-foreground sm:text-lg">
              Um menino feliz comendo pastéis. Massa crocante, recheio generoso e aquele molho que
              faz voltar sempre.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#destaques"
                className="rounded-full bg-gradient-flame px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow"
              >
                Ver cardápio
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary/60 px-6 py-3 text-sm font-bold text-primary"
              >
                Pedir no WhatsApp
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" /> Aberto de terça a domingo, das 16h às 00h
            </p>
          </Reveal>
        </div>
      </section>

      {/* Destaques */}
      <section id="destaques" className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Favoritos da casa</h2>
          <p className="mt-2 text-muted-foreground">Os mais pedidos na chapa todo dia.</p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal key={item.id} delay={i * 90}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-40 w-full object-cover"
                  />
                ) : (
                  <div className="grid h-40 w-full place-items-center bg-gradient-flame font-display text-4xl text-primary-foreground">
                    R
                  </div>
                )}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-primary">{formatPrice(item.price)}</span>
                    <button
                      type="button"
                      onClick={() => add(item.id)}
                      className="rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categorias */}
      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="mx-auto max-w-6xl px-4 py-10">
          <Reveal>
            <div className="flex items-end gap-4">
              <div className="min-w-0">
                <h2 className="font-display text-3xl font-bold sm:text-4xl">{cat.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{cat.subtitle}</p>
              </div>
            </div>
            <div className="mt-5 h-px w-full bg-gradient-flame opacity-60" />
          </Reveal>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {cat.items.map((item, i) => (
              <Reveal key={item.id} delay={(i % 2) * 80}>
                <MenuItemCard
                  item={item}
                  quantity={order[item.id] ?? 0}
                  onAdd={() => add(item.id)}
                  onRemove={() => remove(item.id)}
                />
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-16">
        <Reveal className="rounded-3xl border border-border/70 bg-card p-6 shadow-card sm:p-10">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Sobre nós</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            A Rolih Pasteis nasceu numa cozinha de família, com uma massa aberta à mão e um menino
            feliz comendo pastel na porta da casa. O que era receita de fim de semana virou ponto de
            encontro do bairro: fritura na hora, recheio no capricho e uma linha de molhos
            artesanais criada pela própria casa. Aqui ninguém come pastel sozinho — sempre tem um
            potinho de molho de alho para dividir.
          </p>
        </Reveal>
      </section>

      {/* Horário e localização */}
      <section id="visite" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border/70 bg-card p-6 shadow-card">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-xl font-semibold">Horário</h3>
              <p className="mt-2 text-muted-foreground">Terça a domingo, das 16h às 00h.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Últimos pedidos até 23h40. Retirada e delivery na região.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-border/70 bg-card p-6 shadow-card">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-xl font-semibold">Onde estamos</h3>
              <p className="mt-2 text-muted-foreground">
                Rua Doutor Carlos Ubaldino Bueno de Abreu, 175
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Doutor+Carlos+Ubaldino+Bueno+de+Abreu,+175"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-primary underline underline-offset-4"
              >
                Abrir no mapa
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-6xl px-4 pb-20">
        <Reveal className="rounded-3xl bg-gradient-flame p-6 text-primary-foreground shadow-glow sm:p-10">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Bateu a fome?</h2>
          <p className="mt-2 max-w-xl opacity-90">
            Monte seu pedido no cardápio e finalize com a gente no WhatsApp — a gente confirma tudo
            por lá.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-background px-6 py-3 text-sm font-bold text-foreground"
            >
              Finalizar no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/rolih_pasteis/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Rolih Pasteis"
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/40"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              aria-label="Ligar para a Rolih Pasteis"
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/40"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border/60 px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" width={816} height={816} loading="lazy" className="h-8 w-8" />
            <span className="font-display text-base font-bold text-foreground">Rolih Pasteis</span>
          </div>
          <p>Rua Doutor Carlos Ubaldino Bueno de Abreu, 175 · De terça a domingo, 16h às 00h</p>
          <p>
            WhatsApp +{WHATSAPP_NUMBER.slice(0, 2)} ({WHATSAPP_NUMBER.slice(2, 4)}){" "}
            {WHATSAPP_NUMBER.slice(4, 9)}-{WHATSAPP_NUMBER.slice(9)} · 
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} Rolih Pasteis. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Barra do pedido */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/95 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <ShoppingBag className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                {count === 0 ? "Seu pedido está vazio" : `${count} item(ns) no pedido`}
              </p>
              <p className="text-xs text-muted-foreground">Total {formatPrice(total)}</p>
            </div>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-gradient-flame px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow"
          >
            {count === 0 ? "Falar no WhatsApp" : "Finalizar pedido"}
          </a>
        </div>
      </div>
    </div>
  );
}
