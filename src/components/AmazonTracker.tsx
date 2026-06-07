type ListingStatus = "Live" | "Deactivated" | "OOS";
type Status = "In Stock" | "Low Inventory" | "OOS" | "HP" | "Check Inventory";

type Item = {
  asin: string;
  price: string;
  inStock: number;
  delivery: string;
  listed: [boolean, boolean];
  category: string;
  name: string;
  source: "Amazon" | "Walmart" | "eBay";
  sourceLink: string;
  listingStatus: ListingStatus;
  sourcePrice: string;
  sellingPrice: string;
  variation: string;
  upc: string;
  sku: string;
  sold: number;
  scrapPrice: string;
  status: Status;
  remarks: string;
};

const ITEMS: Item[] = [
  {
    asin: "B0CXJ4K9PL", price: "$24.99", inStock: 42, delivery: "Jun 11 – Jun 14", listed: [true, true],
    category: "Home & Kitchen", name: "Stainless Steel French Press 34oz", source: "Amazon", sourceLink: "amazon.com/dp/B0CXJ4K9PL",
    listingStatus: "Live", sourcePrice: "$14.20", sellingPrice: "$24.99", variation: "Silver", upc: "843210099112",
    sku: "FP-34-SLV", sold: 187, scrapPrice: "$22.00", status: "In Stock", remarks: "BSR rising — hold price",
  },
  {
    asin: "B09QZ7N3MR", price: "$18.49", inStock: 6, delivery: "Jun 13 – Jun 17", listed: [true, true],
    category: "Sports & Outdoors", name: "Resistance Bands Set (5-Pack)", source: "Walmart", sourceLink: "walmart.com/ip/123456789",
    listingStatus: "Live", sourcePrice: "$8.75", sellingPrice: "$18.49", variation: "Multi", upc: "712345009987",
    sku: "RB-5PK-MLT", sold: 94, scrapPrice: "$16.00", status: "Low Inventory", remarks: "Reorder this week",
  },
  {
    asin: "B08L5KQ2ZD", price: "—", inStock: 0, delivery: "Unavailable", listed: [true, false],
    category: "Toys & Games", name: "Wooden Puzzle Animal Set", source: "eBay", sourceLink: "ebay.com/itm/334455667788",
    listingStatus: "OOS", sourcePrice: "$6.40", sellingPrice: "$15.99", variation: "Standard", upc: "651234887700",
    sku: "WPA-STD", sold: 320, scrapPrice: "$13.00", status: "OOS", remarks: "Awaiting restock from supplier",
  },
  {
    asin: "B0BR4M71YT", price: "$39.95", inStock: 128, delivery: "Jun 10 – Jun 12", listed: [true, true],
    category: "Electronics", name: "Wireless Earbuds w/ Charging Case", source: "Amazon", sourceLink: "amazon.com/dp/B0BR4M71YT",
    listingStatus: "Live", sourcePrice: "$19.30", sellingPrice: "$39.95", variation: "Black", upc: "881234556677",
    sku: "WEB-BLK", sold: 612, scrapPrice: "$34.00", status: "HP", remarks: "Hero product — prioritize PPC",
  },
  {
    asin: "B07HG9TXJM", price: "$12.30", inStock: 18, delivery: "Jun 12 – Jun 15", listed: [true, true],
    category: "Pet Supplies", name: "Silicone Pet Food Mat (Large)", source: "Walmart", sourceLink: "walmart.com/ip/998877665",
    listingStatus: "Deactivated", sourcePrice: "$4.10", sellingPrice: "$12.30", variation: "Gray", upc: "771122334455",
    sku: "PFM-LG-GRY", sold: 41, scrapPrice: "$10.00", status: "Check Inventory", remarks: "Suppressed — fix images",
  },
  {
    asin: "B0DDF2YQNL", price: "$8.75", inStock: 73, delivery: "Jun 11 – Jun 13", listed: [true, true],
    category: "Office Products", name: "Gel Pens Fine Point (24-Pack)", source: "Amazon", sourceLink: "amazon.com/dp/B0DDF2YQNL",
    listingStatus: "Live", sourcePrice: "$3.20", sellingPrice: "$8.75", variation: "Assorted", upc: "660099887744",
    sku: "GP-24-AST", sold: 268, scrapPrice: "$7.00", status: "In Stock", remarks: "Stable seller",
  },
];

const COLUMNS = [
  "ASIN", "Price", "In Stock", "Est. Delivery", "Listed", "Category", "Product Name",
  "Source", "Source Link", "Listing Status", "Source Price", "Selling Price",
  "Variation", "UPC", "SKU", "Sold", "Scrap Price", "Status", "Optimizer Remarks",
];

export function AmazonTracker() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1700px] text-left text-xs">
            <thead className="bg-muted/40 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                {COLUMNS.map((c) => (
                  <th key={c} className="whitespace-nowrap px-3 py-3 font-medium">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ITEMS.map((it) => (
                <tr key={it.asin} className="border-t border-border/60 hover:bg-muted/20">
                  <td className="whitespace-nowrap px-3 py-3 font-mono">{it.asin}</td>
                  <td className="whitespace-nowrap px-3 py-3">{it.price}</td>
                  <td className="px-3 py-3">{it.inStock}</td>
                  <td className="whitespace-nowrap px-3 py-3 text-muted-foreground">{it.delivery}</td>
                  <td className="px-3 py-3">
                    <span className={it.listed[0] ? "text-emerald-400" : "text-muted-foreground"}>✓</span>{" "}
                    <span className={it.listed[1] ? "text-emerald-400" : "text-muted-foreground"}>✓</span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{it.category}</td>
                  <td className="whitespace-nowrap px-3 py-3">{it.name}</td>
                  <td className="px-3 py-3">
                    <select
                      defaultValue={it.source}
                      className="rounded-md border border-input bg-background px-2 py-1 text-xs text-foreground focus:border-primary focus:outline-none"
                    >
                      <option>Amazon</option>
                      <option>Walmart</option>
                      <option>eBay</option>
                    </select>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-primary underline-offset-2 hover:underline">{it.sourceLink}</td>
                  <td className="px-3 py-3"><ListingBadge status={it.listingStatus} /></td>
                  <td className="whitespace-nowrap px-3 py-3">{it.sourcePrice}</td>
                  <td className="whitespace-nowrap px-3 py-3">{it.sellingPrice}</td>
                  <td className="whitespace-nowrap px-3 py-3">{it.variation}</td>
                  <td className="whitespace-nowrap px-3 py-3 font-mono">{it.upc}</td>
                  <td className="whitespace-nowrap px-3 py-3 font-mono">{it.sku}</td>
                  <td className="px-3 py-3">{it.sold}</td>
                  <td className="whitespace-nowrap px-3 py-3">{it.scrapPrice}</td>
                  <td className="px-3 py-3"><StatusBadge status={it.status} /></td>
                  <td className="whitespace-nowrap px-3 py-3 text-muted-foreground">{it.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Note:</span> Currently building hands-on
        experience with Amazon Seller Central catalog operations, SKU creation, pricing, and
        inventory tracking at ASC Team Careers.
      </p>
    </div>
  );
}

function ListingBadge({ status }: { status: ListingStatus }) {
  const map: Record<ListingStatus, string> = {
    Live: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30",
    Deactivated: "bg-destructive/15 text-destructive ring-destructive/30",
    OOS: "bg-orange-500/15 text-orange-400 ring-orange-500/30",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ${map[status]}`}>
      {status}
    </span>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const map: Record<Status, string> = {
    "In Stock": "bg-emerald-500/15 text-emerald-400",
    "Low Inventory": "bg-yellow-500/15 text-yellow-400",
    OOS: "bg-destructive/15 text-destructive",
    HP: "bg-blue-500/15 text-blue-400",
    "Check Inventory": "bg-muted text-muted-foreground",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${map[status]}`}>
      {status}
    </span>
  );
}