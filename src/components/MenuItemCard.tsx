import { Minus, Plus } from "lucide-react";
import { formatPrice, type MenuItem } from "@/lib/menu-data";

export function MenuItemCard({
  item,
  quantity,
  onAdd,
  onRemove,
}: {
  item: MenuItem;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  return (
    <article className="group flex gap-4 rounded-2xl border border-border/70 bg-card p-4 shadow-card transition-colors hover:border-primary/50">
      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
        />
      ) : (
        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-xl bg-secondary text-3xl sm:h-28 sm:w-28">
          <span className="font-display text-primary">R</span>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex min-w-0 items-start justify-between gap-3">
          <h3 className="min-w-0 text-lg leading-tight font-semibold">{item.name}</h3>
          <span className="shrink-0 text-base font-bold text-primary">
            {formatPrice(item.price)}
          </span>
        </div>
        {item.tag && (
          <span className="mt-1 w-fit rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-primary uppercase">
            {item.tag}
          </span>
        )}
        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>

        <div className="mt-3 flex items-center gap-2">
          {quantity > 0 ? (
            <div className="flex items-center gap-3 rounded-full border border-primary/50 px-2 py-1">
              <button
                type="button"
                aria-label={`Remover um ${item.name}`}
                onClick={onRemove}
                className="grid h-7 w-7 place-items-center rounded-full text-primary transition-colors hover:bg-primary/15"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-4 text-center text-sm font-bold">{quantity}</span>
              <button
                type="button"
                aria-label={`Adicionar um ${item.name}`}
                onClick={onAdd}
                className="grid h-7 w-7 place-items-center rounded-full text-primary transition-colors hover:bg-primary/15"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onAdd}
              className="rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Adicionar
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
