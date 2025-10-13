(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview Defines the Card component and its parts.
 * A card is a flexible and extensible content container. It includes options for
 * headers, footers, titles, descriptions, and content.
 */ __turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
/**
 * The main container for the card component.
 */ const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 14,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
/**
 * The header section of the card. Typically contains the title and description.
 */ const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 29,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
/**
 * The title of the card. Should be placed inside a CardHeader.
 */ const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 41,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
/**
 * A description for the card. Should be placed inside a CardHeader.
 */ const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
/**
 * The main content area of the card.
 */ const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 68,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
/**
_The footer section of the card.
*/ const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 76,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/table.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview Defines the Table component and its parts.
 * This provides a set of styled components for creating tables.
 */ __turbopack_context__.s({
    "Table": (()=>Table),
    "TableBody": (()=>TableBody),
    "TableCaption": (()=>TableCaption),
    "TableCell": (()=>TableCell),
    "TableFooter": (()=>TableFooter),
    "TableHead": (()=>TableHead),
    "TableHeader": (()=>TableHeader),
    "TableRow": (()=>TableRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
/** The root `<table>` element. */ const Table = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.jsx",
            lineNumber: 12,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 11,
        columnNumber: 3
    }, this));
_c1 = Table;
Table.displayName = "Table";
/** The `<thead>` element. */ const TableHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 23,
        columnNumber: 3
    }, this));
_c3 = TableHeader;
TableHeader.displayName = "TableHeader";
/** The `<tbody>` element. */ const TableBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 29,
        columnNumber: 3
    }, this));
_c5 = TableBody;
TableBody.displayName = "TableBody";
/** The `<tfoot>` element. */ const TableFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c7 = TableFooter;
TableFooter.displayName = "TableFooter";
/** The `<tr>` element. */ const TableRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 52,
        columnNumber: 3
    }, this));
_c9 = TableRow;
TableRow.displayName = "TableRow";
/** The `<th>` element. */ const TableHead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 65,
        columnNumber: 3
    }, this));
_c11 = TableHead;
TableHead.displayName = "TableHead";
/** The `<td>` element. */ const TableCell = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 78,
        columnNumber: 3
    }, this));
_c13 = TableCell;
TableCell.displayName = "TableCell";
/** The `<caption>` element. */ const TableCaption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
_c15 = TableCaption;
TableCaption.displayName = "TableCaption";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "Table$React.forwardRef");
__turbopack_context__.k.register(_c1, "Table");
__turbopack_context__.k.register(_c2, "TableHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "TableHeader");
__turbopack_context__.k.register(_c4, "TableBody$React.forwardRef");
__turbopack_context__.k.register(_c5, "TableBody");
__turbopack_context__.k.register(_c6, "TableFooter$React.forwardRef");
__turbopack_context__.k.register(_c7, "TableFooter");
__turbopack_context__.k.register(_c8, "TableRow$React.forwardRef");
__turbopack_context__.k.register(_c9, "TableRow");
__turbopack_context__.k.register(_c10, "TableHead$React.forwardRef");
__turbopack_context__.k.register(_c11, "TableHead");
__turbopack_context__.k.register(_c12, "TableCell$React.forwardRef");
__turbopack_context__.k.register(_c13, "TableCell");
__turbopack_context__.k.register(_c14, "TableCaption$React.forwardRef");
__turbopack_context__.k.register(_c15, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview This file defines the Badge component.
 * Badges are used to highlight small pieces of information, such as a status or a category.
 * They come in different visual styles (variants).
 */ __turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Defines the visual styles for the badge component.
 * Includes variants for different states like 'default', 'secondary', 'destructive', and 'outline'.
 */ const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
/**
 * The Badge component itself.
 * @param {BadgeProps} props - The properties for the badge.
 * @returns {JSX.Element} The rendered badge component.
 */ function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview Defines the Dialog component and its parts.
 * A dialog is a window overlaid on either the primary window or another dialog window.
 * It is built on top of the Radix UI Dialog primitive.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog
 */ __turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * The root component for a dialog.
 */ const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
/**
 * The trigger that opens the dialog.
 */ const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
/**
 * A portal that renders its children into a new stacking context.
 */ const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
/**
 * A button that closes the dialog.
 */ const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
/**
 * A semi-transparent overlay that is rendered behind the dialog.
 */ const DialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
/**
 * The main content of the dialog.
 */ const DialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.jsx",
                lineNumber: 55,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.jsx",
                                lineNumber: 66,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.jsx",
                                lineNumber: 67,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.jsx",
                        lineNumber: 65,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.jsx",
                lineNumber: 56,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 54,
        columnNumber: 3
    }, this));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
/**
 * The header of the dialog, containing the title and description.
 */ const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 81,
        columnNumber: 3
    }, this);
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
/**
 * The footer of the dialog, typically containing action buttons.
 */ const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 98,
        columnNumber: 3
    }, this);
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
/**
 * The title of the dialog.
 */ const DialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 112,
        columnNumber: 3
    }, this));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
/**
 * The description of the dialog.
 */ const DialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 127,
        columnNumber: 3
    }, this));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/checkbox.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview Defines the Checkbox component.
 * A checkbox allows the user to select one or more options from a set.
 * It is built on top of the Radix UI Checkbox primitive.
 * @see https://www.radix-ui.com/primitives/docs/components/checkbox
 */ __turbopack_context__.s({
    "Checkbox": (()=>Checkbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * The Checkbox component.
 */ const Checkbox = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/checkbox.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/checkbox.jsx",
            lineNumber: 27,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/checkbox.jsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
_c1 = Checkbox;
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Checkbox$React.forwardRef");
__turbopack_context__.k.register(_c1, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/label.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview Defines the Label component.
 * It is a styled text label, typically used for form fields.
 * It is built on top of the Radix UI Label primitive.
 * @see https://www.radix-ui.com/primitives/docs/components/label
 */ __turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * Defines the base styles for the label.
 */ const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
/**
 * The Label component.
 */ const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.jsx",
        lineNumber: 26,
        columnNumber: 3
    }, this));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:53ead2 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"006f92dd1eaec6e537e91dc9dec624243ee6afc955":"getHrPersonnel"},"src/lib/data.js",""] */ __turbopack_context__.s({
    "getHrPersonnel": (()=>getHrPersonnel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getHrPersonnel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("006f92dd1eaec6e537e91dc9dec624243ee6afc955", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getHrPersonnel"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIGZvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGZvcm1hdCwgZm9ybWF0RGlzdGFuY2VUb05vdywgYWRkRGF5cywgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcblxuLy8gLS0tIE1PQ0sgREFUQSAtLS1cblxubGV0IE1PQ0tfQUNDT1VOVFMgPSBbXG4gICAgeyBpZDogJ0VNUC0wMDEyMycsIGZpcnN0X25hbWU6ICdNYXJpYScsIGxhc3RfbmFtZTogJ1JvZHJpZ3VleicsIGVtYWlsOiAnbWFyaWEucm9kcmlndWV6QGV4YW1wbGUuY29tJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcsIHJvbGU6ICdFbXBsb3llZScsIHBvc2l0aW9uOiAnU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyJywgZGVwYXJ0bWVudDogJ1RlY2hub2xvZ3knLCBicmFuY2g6ICdIZWFkcXVhcnRlcnMnLCBzdGF0dXM6ICdBY3RpdmUnLCBkYXRlX2hpcmVkOiAnMjAyMi0wMS0xNScsIGF2YWlsYWJsZV9sZWF2ZXM6IDEyLCBnZW5kZXI6ICdGZW1hbGUnLCBkYXRlX29mX2JpcnRoOiAnMTk5MC0wNS0yMCcsIHNzc19udW1iZXI6ICcwMC0wMDAwMDAwLTAnLCBwaGlsaGVhbHRoX251bWJlcjogJzAwLTAwMDAwMDAwMC0wJywgcGFnaWJpZ19udW1iZXI6ICcwMDAwLTAwMDAtMDAwMCcsIHRpbjogJzAwMC0wMDAtMDAwLTAwMCcgfSxcbiAgICB7IGlkOiAnRU1QLTAwMTI0JywgZmlyc3RfbmFtZTogJ0RhdmlkJywgbGFzdF9uYW1lOiAnTGVlJywgZW1haWw6ICdkYXZpZC5sZWVAZXhhbXBsZS5jb20nLCBwYXNzd29yZDogJ3Bhc3N3b3JkJywgcm9sZTogJ0VtcGxveWVlJywgcG9zaXRpb246ICdQcm9qZWN0IE1hbmFnZXInLCBkZXBhcnRtZW50OiAnTWFuYWdlbWVudCcsIGJyYW5jaDogJ0hlYWRxdWFydGVycycsIHN0YXR1czogJ0FjdGl2ZScsIGRhdGVfaGlyZWQ6ICcyMDIxLTAzLTIwJywgYXZhaWxhYmxlX2xlYXZlczogMTUsIGdlbmRlcjogJ01hbGUnLCBkYXRlX29mX2JpcnRoOiAnMTk4OC0xMS0xMicgfSxcbiAgICB7IGlkOiAnRU1QLTAwMTI1JywgZmlyc3RfbmFtZTogJ1NhcmFoJywgbGFzdF9uYW1lOiAnQ2hlbicsIGVtYWlsOiAnc2FyYWguY2hlbkBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnRW1wbG95ZWUnLCBwb3NpdGlvbjogJ1VYIERlc2lnbmVyJywgZGVwYXJ0bWVudDogJ0Rlc2lnbicsIGJyYW5jaDogJ0Rvd250b3duIE9mZmljZScsIHN0YXR1czogJ0FjdGl2ZScsIGRhdGVfaGlyZWQ6ICcyMDIzLTA1LTEwJywgYXZhaWxhYmxlX2xlYXZlczogMTAsIGdlbmRlcjogJ0ZlbWFsZScsIGRhdGVfb2ZfYmlydGg6ICcxOTk1LTAyLTI1JyB9LFxuICAgIHsgaWQ6ICdFTVAtMDAxMjYnLCBmaXJzdF9uYW1lOiAnSm9obicsIGxhc3RfbmFtZTogJ0RvZScsIGVtYWlsOiAnam9obi5kb2VAZXhhbXBsZS5jb20nLCBwYXNzd29yZDogJ3Bhc3N3b3JkJywgcm9sZTogJ0VtcGxveWVlJywgcG9zaXRpb246ICdRQSBUZXN0ZXInLCBkZXBhcnRtZW50OiAnVGVjaG5vbG9neScsIGJyYW5jaDogJ1JlbW90ZScsIHN0YXR1czogJ09uIExlYXZlJywgZGF0ZV9oaXJlZDogJzIwMjItMDgtMDEnLCBhdmFpbGFibGVfbGVhdmVzOiA1LCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5OTItMDctMzAnIH0sXG4gICAgeyBpZDogJ0hSLTAwMScsIGZpcnN0X25hbWU6ICdPbGl2aWEnLCBsYXN0X25hbWU6ICdDaGVuJywgZW1haWw6ICdvbGl2aWEuY2hlbi5ockBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnSFInLCBwb3NpdGlvbjogJ0hSIE1hbmFnZXInLCBkZXBhcnRtZW50OiAnSHVtYW4gUmVzb3VyY2VzJywgYnJhbmNoOiAnSGVhZHF1YXJ0ZXJzJywgc3RhdHVzOiAnQWN0aXZlJywgZGF0ZV9oaXJlZDogJzIwMjAtMDEtMDEnLCBhdmFpbGFibGVfbGVhdmVzOiAxNSwgZ2VuZGVyOiAnRmVtYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5ODUtMDktMDUnLCBtYW5hZ2VkX2JyYW5jaGVzOiBbJ0hlYWRxdWFydGVycycsICdEb3dudG93biBPZmZpY2UnXSB9LFxuICAgIHsgaWQ6ICdBRE0tMDAxJywgZmlyc3RfbmFtZTogJ1N1cGVyJywgbGFzdF9uYW1lOiAnQWRtaW4nLCBlbWFpbDogJ3N1cGVyQGV4YW1wbGUuY29tJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcsIHJvbGU6ICdBZG1pbicsIHBvc2l0aW9uOiAnU3lzdGVtIEFkbWluaXN0cmF0b3InLCBkZXBhcnRtZW50OiAnSVQnLCBicmFuY2g6ICdIZWFkcXVhcnRlcnMnLCBzdGF0dXM6ICdBY3RpdmUnLCBkYXRlX2hpcmVkOiAnMjAxOS0wMS0wMScsIGF2YWlsYWJsZV9sZWF2ZXM6IDIwLCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5ODAtMDEtMDEnIH0sXG4gICAgeyBpZDogJ0VNUC1QRU5ESU5HLTAxJywgZmlyc3RfbmFtZTogJ01pY2hhZWwnLCBsYXN0X25hbWU6ICdCcm93bicsIGVtYWlsOiAnbWljaGFlbC5icm93bkBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnRW1wbG95ZWUnLCBwb3NpdGlvbjogJ0p1bmlvciBEZXZlbG9wZXInLCBkZXBhcnRtZW50OiAnVGVjaG5vbG9neScsIGJyYW5jaDogJ0hlYWRxdWFydGVycycsIHN0YXR1czogJ1BlbmRpbmcgQXBwcm92YWwnLCBkYXRlX2hpcmVkOiAnMjAyNC0wMS0wMScsIGF2YWlsYWJsZV9sZWF2ZXM6IDE1LCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5OTgtMDYtMTUnIH0sXG5dO1xubGV0IE1PQ0tfQlJBTkNIRVMgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogJ0hlYWRxdWFydGVycycsIGNvb3JkaW5hdGVzOiAnMTQuNTU0NywgMTIxLjAyNDQnIH0sXG4gICAgeyBpZDogMiwgbmFtZTogJ0Rvd250b3duIE9mZmljZScsIGNvb3JkaW5hdGVzOiAnMTQuNTk5NSwgMTIwLjk4NDInIH0sXG4gICAgeyBpZDogMywgbmFtZTogJ1JlbW90ZScsIGNvb3JkaW5hdGVzOiAnTi9BJyB9LFxuXTtcbmxldCBNT0NLX1BPU0lUSU9OUyA9IFtcbiAgICB7IGlkOiAxLCB0aXRsZTogJ1NlbmlvciBTb2Z0d2FyZSBFbmdpbmVlcicsIHJhdGU6IDUwLjAwIH0sXG4gICAgeyBpZDogMiwgdGl0bGU6ICdQcm9qZWN0IE1hbmFnZXInLCByYXRlOiA1NS4wMCB9LFxuICAgIHsgaWQ6IDMsIHRpdGxlOiAnVVggRGVzaWduZXInLCByYXRlOiA0NS4wMCB9LFxuICAgIHsgaWQ6IDQsIHRpdGxlOiAnUUEgVGVzdGVyJywgcmF0ZTogMzUuMDAgfSxcbiAgICB7IGlkOiA1LCB0aXRsZTogJ0p1bmlvciBEZXZlbG9wZXInLCByYXRlOiAzMC4wMCB9LFxuICAgIHsgaWQ6IDYsIHRpdGxlOiAnSFIgTWFuYWdlcicsIHJhdGU6IDQ4LjAwIH0sXG4gICAgeyBpZDogNywgdGl0bGU6ICdTeXN0ZW0gQWRtaW5pc3RyYXRvcicsIHJhdGU6IDUyLjAwIH0sXG5dO1xubGV0IE1PQ0tfQU5OT1VOQ0VNRU5UUyA9IFtdO1xubGV0IE1PQ0tfTEVBVkVfUkVRVUVTVFMgPSBbXTtcbmxldCBNT0NLX1NDSEVEVUxFUyA9IFtdO1xubGV0IE1PQ0tfQVRURU5EQU5DRSA9IFtdO1xubGV0IE1PQ0tfUEFZU0xJUFMgPSBbXTtcblxuLy8gLS0tIEVORCBNT0NLIERBVEEgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIUkRhc2hib2FyZERhdGEoKSB7XG4gIGNvbnN0IHRvdGFsRW1wbG95ZWVzID0gTU9DS19BQ0NPVU5UUy5maWx0ZXIoYSA9PiBhLnJvbGUgPT09ICdFbXBsb3llZScpLmxlbmd0aDtcbiAgY29uc3QgcGVuZGluZ0xlYXZlUmVxdWVzdHMgPSBNT0NLX0xFQVZFX1JFUVVFU1RTLmZpbHRlcihsciA9PiBsci5zdGF0dXMgPT09ICdQZW5kaW5nJykubGVuZ3RoO1xuXG4gIGNvbnN0IHN0YXRzID0gW1xuICAgICAgeyB0aXRsZTogJ1RvdGFsIEVtcGxveWVlcycsIHZhbHVlOiBTdHJpbmcodG90YWxFbXBsb3llZXMpLCBjaGFuZ2U6ICcnIH0sXG4gICAgICB7IHRpdGxlOiAnT24gVGltZSBQZXJjZW50YWdlJywgdmFsdWU6IGAwJWAsIGNoYW5nZTogJycgfSxcbiAgICAgIHsgdGl0bGU6ICdBY3RpdmUgSm9iIFBvc3RpbmdzJywgdmFsdWU6ICc0JywgY2hhbmdlOiAnRXh0ZXJuYWwgQVBJJyB9LFxuICAgICAgeyB0aXRsZTogJ1BlbmRpbmcgTGVhdmUgUmVxdWVzdHMnLCB2YWx1ZTogU3RyaW5nKHBlbmRpbmdMZWF2ZVJlcXVlc3RzKSwgY2hhbmdlOiAnJyB9LFxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgc3RhdHMsXG4gICAgcmVjZW50QWN0aXZpdGllczogW11cbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhc3RBbm5vdW5jZW1lbnRzKCkge1xuICAgIHJldHVybiBNT0NLX0FOTk9VTkNFTUVOVFMubWFwKGEgPT4ge1xuICAgICAgICBjb25zdCBwb3N0ZWRCeSA9IE1PQ0tfQUNDT1VOVFMuZmluZChhY2MgPT4gYWNjLmlkID09PSBhLnBvc3RlZF9ieV9pZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5hLFxuICAgICAgICAgICAgcG9zdGVkQnk6IHBvc3RlZEJ5ID8gYCR7Jyd9JHtwb3N0ZWRCeS5maXJzdF9uYW1lfSAke3Bvc3RlZEJ5Lmxhc3RfbmFtZX1gIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEucG9zdGVkX2F0KSwgJ3l5eXktTU0tZGQnKVxuICAgICAgICB9O1xuICAgIH0pLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIucG9zdGVkX2F0KSAtIG5ldyBEYXRlKGEucG9zdGVkX2F0KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBbm5vdW5jZW1lbnQodGl0bGUsIGNvbnRlbnQsIHN0YXR1cykge1xuICAgIGNvbnN0IGhyVXNlcklkID0gJ0hSLTAwMSc7XG4gICAgY29uc3QgbmV3QW5ub3VuY2VtZW50ID0ge1xuICAgICAgICBpZDogTU9DS19BTk5PVU5DRU1FTlRTLmxlbmd0aCArIDEsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBwb3N0ZWRfYnlfaWQ6IGhyVXNlcklkLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHBvc3RlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgfTtcbiAgICBNT0NLX0FOTk9VTkNFTUVOVFMucHVzaChuZXdBbm5vdW5jZW1lbnQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQW5ub3VuY2VtZW50KGlkKSB7XG4gICAgTU9DS19BTk5PVU5DRU1FTlRTID0gTU9DS19BTk5PVU5DRU1FTlRTLmZpbHRlcihhID0+IGEuaWQgIT09IGlkKTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFpbHlBdHRlbmRhbmNlRGF0YShkYXRlKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXMoKSB7XG4gICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFMuZmlsdGVyKGEgPT4gYS5yb2xlID09PSAnRW1wbG95ZWUnICYmIGEuc3RhdHVzICE9PSAnUGVuZGluZyBBcHByb3ZhbCcpLm1hcChhID0+ICh7XG4gICAgICAgIGlkOiBhLmlkLFxuICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgIGJyYW5jaDogYS5icmFuY2gsXG4gICAgICAgIHN0YXR1czogYS5zdGF0dXNcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZUJ5SWQoaWQpIHtcbiAgICBjb25zdCBlbXBsb3llZSA9IE1PQ0tfQUNDT1VOVFMuZmluZChhID0+IGEuaWQgPT09IGlkKTtcbiAgICBpZiAoIWVtcGxveWVlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmVtcGxveWVlLFxuICAgICAgICBuYW1lOiBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gLFxuICAgICAgICBkYXRlX2hpcmVkOiBmb3JtYXQobmV3IERhdGUoZW1wbG95ZWUuZGF0ZV9oaXJlZCksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIGRhdGVfb2ZfYmlydGg6IGZvcm1hdChuZXcgRGF0ZShlbXBsb3llZS5kYXRlX29mX2JpcnRoKSwgJ3l5eXktTU0tZGQnKSxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZCkge1xuICAgIGNvbnN0IGluaXRpYWxMZW5ndGggPSBNT0NLX0FDQ09VTlRTLmxlbmd0aDtcbiAgICBNT0NLX0FDQ09VTlRTID0gTU9DS19BQ0NPVU5UUy5maWx0ZXIoYSA9PiBhLmlkICE9PSBpZCk7XG4gICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFMubGVuZ3RoIDwgaW5pdGlhbExlbmd0aDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XG4gICAgcmV0dXJuIE1PQ0tfTEVBVkVfUkVRVUVTVFMubWFwKGxyID0+IHtcbiAgICAgICAgY29uc3QgZW1wbG95ZWUgPSBNT0NLX0FDQ09VTlRTLmZpbmQoYSA9PiBhLmlkID09PSBsci5hY2NvdW50X2lkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBsci5pZCxcbiAgICAgICAgICAgIGVtcGxveWVlSWQ6IGVtcGxveWVlLmlkLFxuICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgbGVhdmVfdHlwZTogbHIubGVhdmVfdHlwZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLnN0YXJ0X2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLmVuZF9kYXRlKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgICAgICAgIHJlYXNvbjogbHIucmVhc29uLFxuICAgICAgICAgICAgc3RhdHVzOiBsci5zdGF0dXNcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTGVhdmVSZXF1ZXN0U3RhdHVzKHJlcXVlc3RJZCwgc3RhdHVzKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IE1PQ0tfTEVBVkVfUkVRVUVTVFMuZmluZChsciA9PiBsci5pZCA9PT0gcmVxdWVzdElkKTtcbiAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICByZXF1ZXN0LnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXNXaXRoUGF5c2xpcFN0YXR1cygpIHtcbiAgICByZXR1cm4gTU9DS19BQ0NPVU5UU1xuICAgICAgICAuZmlsdGVyKGEgPT4gYS5yb2xlID09PSAnRW1wbG95ZWUnKVxuICAgICAgICAubWFwKGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzQmVuZWZpdHMgPSBhLnNzc19udW1iZXIgJiYgYS5waGlsaGVhbHRoX251bWJlciAmJiBhLnBhZ2liaWdfbnVtYmVyICYmIGEudGluO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50OiBhLmRlcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgcGF5c2xpcFN0YXR1czogJ1BlbmRpbmcnLFxuICAgICAgICAgICAgICAgIGJlbmVmaXRzU3RhdHVzOiBoYXNCZW5lZml0cyA/ICdDb21wbGV0ZScgOiAnSW5jb21wbGV0ZScsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlc0ZvclNjaGVkdWxpbmcoKSB7XG4gICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFNcbiAgICAgICAgLmZpbHRlcihhID0+IGEucm9sZSA9PT0gJ0VtcGxveWVlJyAmJiBhLnN0YXR1cyA9PT0gJ0FjdGl2ZScpXG4gICAgICAgIC5tYXAoYSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgIHNoaWZ0OiAnOTowMCAtIDE3OjAwJ1xuICAgICAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZURhc2hib2FyZERhdGEoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IGVtcGxveWVlID0gTU9DS19BQ0NPVU5UUy5maW5kKGEgPT4gYS5pZCA9PT0gZW1wbG95ZWVJZCk7XG4gICAgaWYgKCFlbXBsb3llZSkge1xuICAgICAgICByZXR1cm4geyBlbXBsb3llZTogeyBuYW1lOiAnRW1wbG95ZWUgTm90IEZvdW5kJyB9LCBhbm5vdW5jZW1lbnRzOiBbXSB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlbXBsb3llZToge1xuICAgICAgICAgICAgZW1wbG95ZWVJZDogZW1wbG95ZWUuaWQsXG4gICAgICAgICAgICBuYW1lOiBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgcG9zaXRpb246IGVtcGxveWVlLnBvc2l0aW9uLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogZW1wbG95ZWUuZGVwYXJ0bWVudCxcbiAgICAgICAgICAgIGVtYWlsOiBlbXBsb3llZS5lbWFpbCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5ub3VuY2VtZW50czogW11cbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZURhdGEoZW1wbG95ZWVJZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1bW1hcnk6IHsgZGF5c0F0dGVuZGVkOiAwLCBsYXRlczogMCwgYWJzZW5jZXM6IDAsIHRvdGFsSG91cnM6IDAsIGF2YWlsYWJsZUxlYXZlczogMCB9LFxuICAgICAgICByZWNvcmRzOiBbXVxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXN0TGVhdmVSZXF1ZXN0cyhlbXBsb3llZUlkKSB7XG4gICAgcmV0dXJuIE1PQ0tfTEVBVkVfUkVRVUVTVFNcbiAgICAgICAgLmZpbHRlcihsciA9PiBsci5hY2NvdW50X2lkID09PSBlbXBsb3llZUlkKVxuICAgICAgICAubWFwKGxyID0+ICh7XG4gICAgICAgICAgICBpZDogbHIuaWQsXG4gICAgICAgICAgICBsZWF2ZV90eXBlOiBsci5sZWF2ZV90eXBlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuc3RhcnRfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgICAgICBlbmREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuZW5kX2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICAgICAgc3RhdHVzOiBsci5zdGF0dXMsXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxlYXZlUmVxdWVzdChkYXRhKSB7XG4gICAgY29uc3QgeyBlbXBsb3llZUlkLCBsZWF2ZVR5cGUsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcmVhc29uIH0gPSBkYXRhO1xuICAgIGNvbnN0IG5ld1JlcXVlc3QgPSB7XG4gICAgICAgIGlkOiBNT0NLX0xFQVZFX1JFUVVFU1RTLmxlbmd0aCArIDEsXG4gICAgICAgIGFjY291bnRfaWQ6IGVtcGxveWVlSWQsXG4gICAgICAgIGxlYXZlX3R5cGU6IGxlYXZlVHlwZSxcbiAgICAgICAgc3RhcnRfZGF0ZTogc3RhcnREYXRlLFxuICAgICAgICBlbmRfZGF0ZTogZW5kRGF0ZSxcbiAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgIHN0YXR1czogJ1BlbmRpbmcnXG4gICAgfTtcbiAgICBNT0NLX0xFQVZFX1JFUVVFU1RTLnB1c2gobmV3UmVxdWVzdCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5UGVyaW9kcyhlbXBsb3llZUlkKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NoZWR1bGUoZW1wbG95ZWVJZCkge1xuICAgIHJldHVybiBbXTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVuZGluZ0VtcGxveWVlQXBwcm92YWxzKCkge1xuICAgICByZXR1cm4gTU9DS19BQ0NPVU5UU1xuICAgICAgICAuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdQZW5kaW5nIEFwcHJvdmFsJylcbiAgICAgICAgLm1hcChhID0+ICh7XG4gICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgIGVtcGxveWVlTmFtZTogYCR7YS5maXJzdF9uYW1lfSAke2EubGFzdF9uYW1lfWAsXG4gICAgICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgICAgIHN1Ym1pdHRlZEJ5OiAnT2xpdmlhIENoZW4nLFxuICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IGZvcm1hdChuZXcgRGF0ZShhLmRhdGVfaGlyZWQpLCAneXl5eS1NTS1kZCcpXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcHJvdmVFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgY29uc3QgZW1wbG95ZWUgPSBNT0NLX0FDQ09VTlRTLmZpbmQoYSA9PiBhLmlkID09PSBlbXBsb3llZUlkKTtcbiAgICBpZihlbXBsb3llZSkgZW1wbG95ZWUuc3RhdHVzID0gJ0FjdGl2ZSc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWplY3RFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgTU9DS19BQ0NPVU5UUyA9IE1PQ0tfQUNDT1VOVFMuZmlsdGVyKGEgPT4gYS5pZCAhPT0gZW1wbG95ZWVJZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZU5hbWUoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IGVtcGxveWVlID0gTU9DS19BQ0NPVU5UUy5maW5kKGEgPT4gYS5pZCA9PT0gZW1wbG95ZWVJZCk7XG4gICAgcmV0dXJuIGVtcGxveWVlID8gYCR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9YCA6IFwiVW5rbm93biBFbXBsb3llZVwiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3J0RGV0YWlscyhyZXBvcnRJZCkge1xuICAgIHJldHVybiBudWxsO1xufVxuXG4vLyAtLS0gQnJhbmNoIEFsbG9jYXRpb24gJiBNYW5hZ2VtZW50IEZ1bmN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhyUGVyc29ubmVsKCkge1xuICAgIHJldHVybiBNT0NLX0FDQ09VTlRTXG4gICAgICAgIC5maWx0ZXIoYSA9PiBhLnJvbGUgPT09ICdIUicpXG4gICAgICAgIC5tYXAoYSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhLnBvc2l0aW9uLFxuICAgICAgICAgICAgbWFuYWdlZF9icmFuY2hlczogYS5tYW5hZ2VkX2JyYW5jaGVzIHx8IFtdXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJyYW5jaGVzKCkge1xuICAgIC8vIFdlIG5vdyB1c2UgdGhlIGRlZGljYXRlZCBNT0NLX0JSQU5DSEVTIGFycmF5LlxuICAgIHJldHVybiBNT0NLX0JSQU5DSEVTO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnJhbmNoKGJyYW5jaE5hbWUsIGNvb3JkaW5hdGVzKSB7XG4gICAgLy8gQ2hlY2sgaWYgYnJhbmNoIGFscmVhZHkgZXhpc3RzXG4gICAgaWYgKE1PQ0tfQlJBTkNIRVMuc29tZShiID0+IGIubmFtZS50b0xvd2VyQ2FzZSgpID09PSBicmFuY2hOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQSBicmFuY2ggd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgfVxuICAgIGNvbnN0IG5ld0lkID0gTU9DS19CUkFOQ0hFUy5sZW5ndGggPiAwID8gTWF0aC5tYXgoLi4uTU9DS19CUkFOQ0hFUy5tYXAoYiA9PiBiLmlkKSkgKyAxIDogMTtcbiAgICBjb25zdCBuZXdCcmFuY2ggPSB7IGlkOiBuZXdJZCwgbmFtZTogYnJhbmNoTmFtZSwgY29vcmRpbmF0ZXMgfTtcbiAgICBNT0NLX0JSQU5DSEVTLnB1c2gobmV3QnJhbmNoKTtcbiAgICByZXR1cm4gbmV3QnJhbmNoO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQnJhbmNoKGJyYW5jaElkKSB7XG4gICAgY29uc3QgYnJhbmNoSW5Vc2UgPSBNT0NLX0FDQ09VTlRTLnNvbWUoaHIgPT4gaHIubWFuYWdlZF9icmFuY2hlcz8uaW5jbHVkZXMoTU9DS19CUkFOQ0hFUy5maW5kKGIgPT4gYi5pZCA9PT0gYnJhbmNoSWQpPy5uYW1lKSk7XG4gICAgaWYgKGJyYW5jaEluVXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBicmFuY2ggaXMgY3VycmVudGx5IGFzc2lnbmVkIHRvIEhSIHBlcnNvbm5lbCBhbmQgY2Fubm90IGJlIGRlbGV0ZWQuJyk7XG4gICAgfVxuICAgIE1PQ0tfQlJBTkNIRVMgPSBNT0NLX0JSQU5DSEVTLmZpbHRlcihiID0+IGIuaWQgIT09IGJyYW5jaElkKTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSHJCcmFuY2hBbGxvY2F0aW9uKGhySWQsIGJyYW5jaGVzKSB7XG4gICAgY29uc3QgaHJBY2NvdW50ID0gTU9DS19BQ0NPVU5UUy5maW5kKGEgPT4gYS5pZCA9PT0gaHJJZCk7XG4gICAgaWYgKGhyQWNjb3VudCkge1xuICAgICAgICBockFjY291bnQubWFuYWdlZF9icmFuY2hlcyA9IGJyYW5jaGVzO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkhSIHBlcnNvbm5lbCBub3QgZm91bmQuXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtcGxveWVlKGlkLCBkYXRhKSB7XG4gICAgY29uc3QgaW5kZXggPSBNT0NLX0FDQ09VTlRTLmZpbmRJbmRleChhID0+IGEuaWQgPT09IGlkKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRW1wbG95ZWUgbm90IGZvdW5kLicgfTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkRW1wbG95ZWUgPSB7XG4gICAgICAgIC4uLk1PQ0tfQUNDT1VOVFNbaW5kZXhdLFxuICAgICAgICBmaXJzdF9uYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdF9uYW1lOiBkYXRhLmxhc3ROYW1lLFxuICAgICAgICBtaWRkbGVfbmFtZTogZGF0YS5taWRkbGVOYW1lLFxuICAgICAgICBnZW5kZXI6IGRhdGEuZ2VuZGVyLFxuICAgICAgICBkYXRlX29mX2JpcnRoOiBkYXRhLmRvYixcbiAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24sXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcbiAgICAgICAgYnJhbmNoOiBkYXRhLmJyYW5jaCxcbiAgICAgICAgZGF0ZV9oaXJlZDogZGF0YS5oaXJlRGF0ZSxcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICAgIC8vIEFzc3VtaW5nIHBob25lIG51bWJlciBpcyBub3QgZGlyZWN0bHkgb24gdGhlIG1haW4gYWNjb3VudCBvYmplY3QgaW4gdGhpcyBtb2NrXG4gICAgfTtcblxuICAgIE1PQ0tfQUNDT1VOVFNbaW5kZXhdID0gdXBkYXRlZEVtcGxveWVlO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdFbXBsb3llZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseS4nIH07XG59XG5cblxuLy8gLS0tIFBvc2l0aW9ucyAmIFJhdGVzIEZ1bmN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gTU9DS19QT1NJVElPTlM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3NpdGlvbih0aXRsZSwgcmF0ZSkge1xuICAgIGlmIChNT0NLX1BPU0lUSU9OUy5zb21lKHAgPT4gcC50aXRsZS50b0xvd2VyQ2FzZSgpID09PSB0aXRsZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcG9zaXRpb24gd2l0aCB0aGlzIHRpdGxlIGFscmVhZHkgZXhpc3RzLicpO1xuICAgIH1cbiAgICBjb25zdCBuZXdJZCA9IE1PQ0tfUE9TSVRJT05TLmxlbmd0aCA+IDAgPyBNYXRoLm1heCguLi5NT0NLX1BPU0lUSU9OUy5tYXAocCA9PiBwLmlkKSkgKyAxIDogMTtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHsgaWQ6IG5ld0lkLCB0aXRsZSwgcmF0ZSB9O1xuICAgIE1PQ0tfUE9TSVRJT05TLnB1c2gobmV3UG9zaXRpb24pO1xuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc2l0aW9uKHBvc2l0aW9uSWQpIHtcbiAgICBjb25zdCBwb3NpdGlvbkluVXNlID0gTU9DS19BQ0NPVU5UUy5zb21lKGFjYyA9PiBhY2MucG9zaXRpb24gPT09IE1PQ0tfUE9TSVRJT05TLmZpbmQocCA9PiBwLmlkID09PSBwb3NpdGlvbklkKT8udGl0bGUpO1xuICAgIGlmIChwb3NpdGlvbkluVXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBwb3NpdGlvbiBpcyBjdXJyZW50bHkgYXNzaWduZWQgdG8gZW1wbG95ZWVzIGFuZCBjYW5ub3QgYmUgZGVsZXRlZC4nKTtcbiAgICB9XG4gICAgTU9DS19QT1NJVElPTlMgPSBNT0NLX1BPU0lUSU9OUy5maWx0ZXIocCA9PiBwLmlkICE9PSBwb3NpdGlvbklkKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVJBcVFzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:eadcdc [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00651499873cf7b226d6bebda46391ddb16c9e3017":"getBranches"},"src/lib/data.js",""] */ __turbopack_context__.s({
    "getBranches": (()=>getBranches)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getBranches = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00651499873cf7b226d6bebda46391ddb16c9e3017", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getBranches"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIGZvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGZvcm1hdCwgZm9ybWF0RGlzdGFuY2VUb05vdywgYWRkRGF5cywgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcblxuLy8gLS0tIE1PQ0sgREFUQSAtLS1cblxubGV0IE1PQ0tfQUNDT1VOVFMgPSBbXG4gICAgeyBpZDogJ0VNUC0wMDEyMycsIGZpcnN0X25hbWU6ICdNYXJpYScsIGxhc3RfbmFtZTogJ1JvZHJpZ3VleicsIGVtYWlsOiAnbWFyaWEucm9kcmlndWV6QGV4YW1wbGUuY29tJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcsIHJvbGU6ICdFbXBsb3llZScsIHBvc2l0aW9uOiAnU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyJywgZGVwYXJ0bWVudDogJ1RlY2hub2xvZ3knLCBicmFuY2g6ICdIZWFkcXVhcnRlcnMnLCBzdGF0dXM6ICdBY3RpdmUnLCBkYXRlX2hpcmVkOiAnMjAyMi0wMS0xNScsIGF2YWlsYWJsZV9sZWF2ZXM6IDEyLCBnZW5kZXI6ICdGZW1hbGUnLCBkYXRlX29mX2JpcnRoOiAnMTk5MC0wNS0yMCcsIHNzc19udW1iZXI6ICcwMC0wMDAwMDAwLTAnLCBwaGlsaGVhbHRoX251bWJlcjogJzAwLTAwMDAwMDAwMC0wJywgcGFnaWJpZ19udW1iZXI6ICcwMDAwLTAwMDAtMDAwMCcsIHRpbjogJzAwMC0wMDAtMDAwLTAwMCcgfSxcbiAgICB7IGlkOiAnRU1QLTAwMTI0JywgZmlyc3RfbmFtZTogJ0RhdmlkJywgbGFzdF9uYW1lOiAnTGVlJywgZW1haWw6ICdkYXZpZC5sZWVAZXhhbXBsZS5jb20nLCBwYXNzd29yZDogJ3Bhc3N3b3JkJywgcm9sZTogJ0VtcGxveWVlJywgcG9zaXRpb246ICdQcm9qZWN0IE1hbmFnZXInLCBkZXBhcnRtZW50OiAnTWFuYWdlbWVudCcsIGJyYW5jaDogJ0hlYWRxdWFydGVycycsIHN0YXR1czogJ0FjdGl2ZScsIGRhdGVfaGlyZWQ6ICcyMDIxLTAzLTIwJywgYXZhaWxhYmxlX2xlYXZlczogMTUsIGdlbmRlcjogJ01hbGUnLCBkYXRlX29mX2JpcnRoOiAnMTk4OC0xMS0xMicgfSxcbiAgICB7IGlkOiAnRU1QLTAwMTI1JywgZmlyc3RfbmFtZTogJ1NhcmFoJywgbGFzdF9uYW1lOiAnQ2hlbicsIGVtYWlsOiAnc2FyYWguY2hlbkBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnRW1wbG95ZWUnLCBwb3NpdGlvbjogJ1VYIERlc2lnbmVyJywgZGVwYXJ0bWVudDogJ0Rlc2lnbicsIGJyYW5jaDogJ0Rvd250b3duIE9mZmljZScsIHN0YXR1czogJ0FjdGl2ZScsIGRhdGVfaGlyZWQ6ICcyMDIzLTA1LTEwJywgYXZhaWxhYmxlX2xlYXZlczogMTAsIGdlbmRlcjogJ0ZlbWFsZScsIGRhdGVfb2ZfYmlydGg6ICcxOTk1LTAyLTI1JyB9LFxuICAgIHsgaWQ6ICdFTVAtMDAxMjYnLCBmaXJzdF9uYW1lOiAnSm9obicsIGxhc3RfbmFtZTogJ0RvZScsIGVtYWlsOiAnam9obi5kb2VAZXhhbXBsZS5jb20nLCBwYXNzd29yZDogJ3Bhc3N3b3JkJywgcm9sZTogJ0VtcGxveWVlJywgcG9zaXRpb246ICdRQSBUZXN0ZXInLCBkZXBhcnRtZW50OiAnVGVjaG5vbG9neScsIGJyYW5jaDogJ1JlbW90ZScsIHN0YXR1czogJ09uIExlYXZlJywgZGF0ZV9oaXJlZDogJzIwMjItMDgtMDEnLCBhdmFpbGFibGVfbGVhdmVzOiA1LCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5OTItMDctMzAnIH0sXG4gICAgeyBpZDogJ0hSLTAwMScsIGZpcnN0X25hbWU6ICdPbGl2aWEnLCBsYXN0X25hbWU6ICdDaGVuJywgZW1haWw6ICdvbGl2aWEuY2hlbi5ockBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnSFInLCBwb3NpdGlvbjogJ0hSIE1hbmFnZXInLCBkZXBhcnRtZW50OiAnSHVtYW4gUmVzb3VyY2VzJywgYnJhbmNoOiAnSGVhZHF1YXJ0ZXJzJywgc3RhdHVzOiAnQWN0aXZlJywgZGF0ZV9oaXJlZDogJzIwMjAtMDEtMDEnLCBhdmFpbGFibGVfbGVhdmVzOiAxNSwgZ2VuZGVyOiAnRmVtYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5ODUtMDktMDUnLCBtYW5hZ2VkX2JyYW5jaGVzOiBbJ0hlYWRxdWFydGVycycsICdEb3dudG93biBPZmZpY2UnXSB9LFxuICAgIHsgaWQ6ICdBRE0tMDAxJywgZmlyc3RfbmFtZTogJ1N1cGVyJywgbGFzdF9uYW1lOiAnQWRtaW4nLCBlbWFpbDogJ3N1cGVyQGV4YW1wbGUuY29tJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcsIHJvbGU6ICdBZG1pbicsIHBvc2l0aW9uOiAnU3lzdGVtIEFkbWluaXN0cmF0b3InLCBkZXBhcnRtZW50OiAnSVQnLCBicmFuY2g6ICdIZWFkcXVhcnRlcnMnLCBzdGF0dXM6ICdBY3RpdmUnLCBkYXRlX2hpcmVkOiAnMjAxOS0wMS0wMScsIGF2YWlsYWJsZV9sZWF2ZXM6IDIwLCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5ODAtMDEtMDEnIH0sXG4gICAgeyBpZDogJ0VNUC1QRU5ESU5HLTAxJywgZmlyc3RfbmFtZTogJ01pY2hhZWwnLCBsYXN0X25hbWU6ICdCcm93bicsIGVtYWlsOiAnbWljaGFlbC5icm93bkBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnRW1wbG95ZWUnLCBwb3NpdGlvbjogJ0p1bmlvciBEZXZlbG9wZXInLCBkZXBhcnRtZW50OiAnVGVjaG5vbG9neScsIGJyYW5jaDogJ0hlYWRxdWFydGVycycsIHN0YXR1czogJ1BlbmRpbmcgQXBwcm92YWwnLCBkYXRlX2hpcmVkOiAnMjAyNC0wMS0wMScsIGF2YWlsYWJsZV9sZWF2ZXM6IDE1LCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5OTgtMDYtMTUnIH0sXG5dO1xubGV0IE1PQ0tfQlJBTkNIRVMgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogJ0hlYWRxdWFydGVycycsIGNvb3JkaW5hdGVzOiAnMTQuNTU0NywgMTIxLjAyNDQnIH0sXG4gICAgeyBpZDogMiwgbmFtZTogJ0Rvd250b3duIE9mZmljZScsIGNvb3JkaW5hdGVzOiAnMTQuNTk5NSwgMTIwLjk4NDInIH0sXG4gICAgeyBpZDogMywgbmFtZTogJ1JlbW90ZScsIGNvb3JkaW5hdGVzOiAnTi9BJyB9LFxuXTtcbmxldCBNT0NLX1BPU0lUSU9OUyA9IFtcbiAgICB7IGlkOiAxLCB0aXRsZTogJ1NlbmlvciBTb2Z0d2FyZSBFbmdpbmVlcicsIHJhdGU6IDUwLjAwIH0sXG4gICAgeyBpZDogMiwgdGl0bGU6ICdQcm9qZWN0IE1hbmFnZXInLCByYXRlOiA1NS4wMCB9LFxuICAgIHsgaWQ6IDMsIHRpdGxlOiAnVVggRGVzaWduZXInLCByYXRlOiA0NS4wMCB9LFxuICAgIHsgaWQ6IDQsIHRpdGxlOiAnUUEgVGVzdGVyJywgcmF0ZTogMzUuMDAgfSxcbiAgICB7IGlkOiA1LCB0aXRsZTogJ0p1bmlvciBEZXZlbG9wZXInLCByYXRlOiAzMC4wMCB9LFxuICAgIHsgaWQ6IDYsIHRpdGxlOiAnSFIgTWFuYWdlcicsIHJhdGU6IDQ4LjAwIH0sXG4gICAgeyBpZDogNywgdGl0bGU6ICdTeXN0ZW0gQWRtaW5pc3RyYXRvcicsIHJhdGU6IDUyLjAwIH0sXG5dO1xubGV0IE1PQ0tfQU5OT1VOQ0VNRU5UUyA9IFtdO1xubGV0IE1PQ0tfTEVBVkVfUkVRVUVTVFMgPSBbXTtcbmxldCBNT0NLX1NDSEVEVUxFUyA9IFtdO1xubGV0IE1PQ0tfQVRURU5EQU5DRSA9IFtdO1xubGV0IE1PQ0tfUEFZU0xJUFMgPSBbXTtcblxuLy8gLS0tIEVORCBNT0NLIERBVEEgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIUkRhc2hib2FyZERhdGEoKSB7XG4gIGNvbnN0IHRvdGFsRW1wbG95ZWVzID0gTU9DS19BQ0NPVU5UUy5maWx0ZXIoYSA9PiBhLnJvbGUgPT09ICdFbXBsb3llZScpLmxlbmd0aDtcbiAgY29uc3QgcGVuZGluZ0xlYXZlUmVxdWVzdHMgPSBNT0NLX0xFQVZFX1JFUVVFU1RTLmZpbHRlcihsciA9PiBsci5zdGF0dXMgPT09ICdQZW5kaW5nJykubGVuZ3RoO1xuXG4gIGNvbnN0IHN0YXRzID0gW1xuICAgICAgeyB0aXRsZTogJ1RvdGFsIEVtcGxveWVlcycsIHZhbHVlOiBTdHJpbmcodG90YWxFbXBsb3llZXMpLCBjaGFuZ2U6ICcnIH0sXG4gICAgICB7IHRpdGxlOiAnT24gVGltZSBQZXJjZW50YWdlJywgdmFsdWU6IGAwJWAsIGNoYW5nZTogJycgfSxcbiAgICAgIHsgdGl0bGU6ICdBY3RpdmUgSm9iIFBvc3RpbmdzJywgdmFsdWU6ICc0JywgY2hhbmdlOiAnRXh0ZXJuYWwgQVBJJyB9LFxuICAgICAgeyB0aXRsZTogJ1BlbmRpbmcgTGVhdmUgUmVxdWVzdHMnLCB2YWx1ZTogU3RyaW5nKHBlbmRpbmdMZWF2ZVJlcXVlc3RzKSwgY2hhbmdlOiAnJyB9LFxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgc3RhdHMsXG4gICAgcmVjZW50QWN0aXZpdGllczogW11cbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhc3RBbm5vdW5jZW1lbnRzKCkge1xuICAgIHJldHVybiBNT0NLX0FOTk9VTkNFTUVOVFMubWFwKGEgPT4ge1xuICAgICAgICBjb25zdCBwb3N0ZWRCeSA9IE1PQ0tfQUNDT1VOVFMuZmluZChhY2MgPT4gYWNjLmlkID09PSBhLnBvc3RlZF9ieV9pZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5hLFxuICAgICAgICAgICAgcG9zdGVkQnk6IHBvc3RlZEJ5ID8gYCR7Jyd9JHtwb3N0ZWRCeS5maXJzdF9uYW1lfSAke3Bvc3RlZEJ5Lmxhc3RfbmFtZX1gIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEucG9zdGVkX2F0KSwgJ3l5eXktTU0tZGQnKVxuICAgICAgICB9O1xuICAgIH0pLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIucG9zdGVkX2F0KSAtIG5ldyBEYXRlKGEucG9zdGVkX2F0KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBbm5vdW5jZW1lbnQodGl0bGUsIGNvbnRlbnQsIHN0YXR1cykge1xuICAgIGNvbnN0IGhyVXNlcklkID0gJ0hSLTAwMSc7XG4gICAgY29uc3QgbmV3QW5ub3VuY2VtZW50ID0ge1xuICAgICAgICBpZDogTU9DS19BTk5PVU5DRU1FTlRTLmxlbmd0aCArIDEsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBwb3N0ZWRfYnlfaWQ6IGhyVXNlcklkLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHBvc3RlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgfTtcbiAgICBNT0NLX0FOTk9VTkNFTUVOVFMucHVzaChuZXdBbm5vdW5jZW1lbnQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQW5ub3VuY2VtZW50KGlkKSB7XG4gICAgTU9DS19BTk5PVU5DRU1FTlRTID0gTU9DS19BTk5PVU5DRU1FTlRTLmZpbHRlcihhID0+IGEuaWQgIT09IGlkKTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFpbHlBdHRlbmRhbmNlRGF0YShkYXRlKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXMoKSB7XG4gICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFMuZmlsdGVyKGEgPT4gYS5yb2xlID09PSAnRW1wbG95ZWUnICYmIGEuc3RhdHVzICE9PSAnUGVuZGluZyBBcHByb3ZhbCcpLm1hcChhID0+ICh7XG4gICAgICAgIGlkOiBhLmlkLFxuICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgIGJyYW5jaDogYS5icmFuY2gsXG4gICAgICAgIHN0YXR1czogYS5zdGF0dXNcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZUJ5SWQoaWQpIHtcbiAgICBjb25zdCBlbXBsb3llZSA9IE1PQ0tfQUNDT1VOVFMuZmluZChhID0+IGEuaWQgPT09IGlkKTtcbiAgICBpZiAoIWVtcGxveWVlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmVtcGxveWVlLFxuICAgICAgICBuYW1lOiBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gLFxuICAgICAgICBkYXRlX2hpcmVkOiBmb3JtYXQobmV3IERhdGUoZW1wbG95ZWUuZGF0ZV9oaXJlZCksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIGRhdGVfb2ZfYmlydGg6IGZvcm1hdChuZXcgRGF0ZShlbXBsb3llZS5kYXRlX29mX2JpcnRoKSwgJ3l5eXktTU0tZGQnKSxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZCkge1xuICAgIGNvbnN0IGluaXRpYWxMZW5ndGggPSBNT0NLX0FDQ09VTlRTLmxlbmd0aDtcbiAgICBNT0NLX0FDQ09VTlRTID0gTU9DS19BQ0NPVU5UUy5maWx0ZXIoYSA9PiBhLmlkICE9PSBpZCk7XG4gICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFMubGVuZ3RoIDwgaW5pdGlhbExlbmd0aDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XG4gICAgcmV0dXJuIE1PQ0tfTEVBVkVfUkVRVUVTVFMubWFwKGxyID0+IHtcbiAgICAgICAgY29uc3QgZW1wbG95ZWUgPSBNT0NLX0FDQ09VTlRTLmZpbmQoYSA9PiBhLmlkID09PSBsci5hY2NvdW50X2lkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBsci5pZCxcbiAgICAgICAgICAgIGVtcGxveWVlSWQ6IGVtcGxveWVlLmlkLFxuICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgbGVhdmVfdHlwZTogbHIubGVhdmVfdHlwZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLnN0YXJ0X2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLmVuZF9kYXRlKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgICAgICAgIHJlYXNvbjogbHIucmVhc29uLFxuICAgICAgICAgICAgc3RhdHVzOiBsci5zdGF0dXNcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTGVhdmVSZXF1ZXN0U3RhdHVzKHJlcXVlc3RJZCwgc3RhdHVzKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IE1PQ0tfTEVBVkVfUkVRVUVTVFMuZmluZChsciA9PiBsci5pZCA9PT0gcmVxdWVzdElkKTtcbiAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICByZXF1ZXN0LnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXNXaXRoUGF5c2xpcFN0YXR1cygpIHtcbiAgICByZXR1cm4gTU9DS19BQ0NPVU5UU1xuICAgICAgICAuZmlsdGVyKGEgPT4gYS5yb2xlID09PSAnRW1wbG95ZWUnKVxuICAgICAgICAubWFwKGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzQmVuZWZpdHMgPSBhLnNzc19udW1iZXIgJiYgYS5waGlsaGVhbHRoX251bWJlciAmJiBhLnBhZ2liaWdfbnVtYmVyICYmIGEudGluO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50OiBhLmRlcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgcGF5c2xpcFN0YXR1czogJ1BlbmRpbmcnLFxuICAgICAgICAgICAgICAgIGJlbmVmaXRzU3RhdHVzOiBoYXNCZW5lZml0cyA/ICdDb21wbGV0ZScgOiAnSW5jb21wbGV0ZScsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlc0ZvclNjaGVkdWxpbmcoKSB7XG4gICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFNcbiAgICAgICAgLmZpbHRlcihhID0+IGEucm9sZSA9PT0gJ0VtcGxveWVlJyAmJiBhLnN0YXR1cyA9PT0gJ0FjdGl2ZScpXG4gICAgICAgIC5tYXAoYSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgIHNoaWZ0OiAnOTowMCAtIDE3OjAwJ1xuICAgICAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZURhc2hib2FyZERhdGEoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IGVtcGxveWVlID0gTU9DS19BQ0NPVU5UUy5maW5kKGEgPT4gYS5pZCA9PT0gZW1wbG95ZWVJZCk7XG4gICAgaWYgKCFlbXBsb3llZSkge1xuICAgICAgICByZXR1cm4geyBlbXBsb3llZTogeyBuYW1lOiAnRW1wbG95ZWUgTm90IEZvdW5kJyB9LCBhbm5vdW5jZW1lbnRzOiBbXSB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlbXBsb3llZToge1xuICAgICAgICAgICAgZW1wbG95ZWVJZDogZW1wbG95ZWUuaWQsXG4gICAgICAgICAgICBuYW1lOiBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgcG9zaXRpb246IGVtcGxveWVlLnBvc2l0aW9uLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogZW1wbG95ZWUuZGVwYXJ0bWVudCxcbiAgICAgICAgICAgIGVtYWlsOiBlbXBsb3llZS5lbWFpbCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5ub3VuY2VtZW50czogW11cbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZURhdGEoZW1wbG95ZWVJZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1bW1hcnk6IHsgZGF5c0F0dGVuZGVkOiAwLCBsYXRlczogMCwgYWJzZW5jZXM6IDAsIHRvdGFsSG91cnM6IDAsIGF2YWlsYWJsZUxlYXZlczogMCB9LFxuICAgICAgICByZWNvcmRzOiBbXVxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXN0TGVhdmVSZXF1ZXN0cyhlbXBsb3llZUlkKSB7XG4gICAgcmV0dXJuIE1PQ0tfTEVBVkVfUkVRVUVTVFNcbiAgICAgICAgLmZpbHRlcihsciA9PiBsci5hY2NvdW50X2lkID09PSBlbXBsb3llZUlkKVxuICAgICAgICAubWFwKGxyID0+ICh7XG4gICAgICAgICAgICBpZDogbHIuaWQsXG4gICAgICAgICAgICBsZWF2ZV90eXBlOiBsci5sZWF2ZV90eXBlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuc3RhcnRfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgICAgICBlbmREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuZW5kX2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICAgICAgc3RhdHVzOiBsci5zdGF0dXMsXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxlYXZlUmVxdWVzdChkYXRhKSB7XG4gICAgY29uc3QgeyBlbXBsb3llZUlkLCBsZWF2ZVR5cGUsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcmVhc29uIH0gPSBkYXRhO1xuICAgIGNvbnN0IG5ld1JlcXVlc3QgPSB7XG4gICAgICAgIGlkOiBNT0NLX0xFQVZFX1JFUVVFU1RTLmxlbmd0aCArIDEsXG4gICAgICAgIGFjY291bnRfaWQ6IGVtcGxveWVlSWQsXG4gICAgICAgIGxlYXZlX3R5cGU6IGxlYXZlVHlwZSxcbiAgICAgICAgc3RhcnRfZGF0ZTogc3RhcnREYXRlLFxuICAgICAgICBlbmRfZGF0ZTogZW5kRGF0ZSxcbiAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgIHN0YXR1czogJ1BlbmRpbmcnXG4gICAgfTtcbiAgICBNT0NLX0xFQVZFX1JFUVVFU1RTLnB1c2gobmV3UmVxdWVzdCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5UGVyaW9kcyhlbXBsb3llZUlkKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NoZWR1bGUoZW1wbG95ZWVJZCkge1xuICAgIHJldHVybiBbXTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVuZGluZ0VtcGxveWVlQXBwcm92YWxzKCkge1xuICAgICByZXR1cm4gTU9DS19BQ0NPVU5UU1xuICAgICAgICAuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdQZW5kaW5nIEFwcHJvdmFsJylcbiAgICAgICAgLm1hcChhID0+ICh7XG4gICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgIGVtcGxveWVlTmFtZTogYCR7YS5maXJzdF9uYW1lfSAke2EubGFzdF9uYW1lfWAsXG4gICAgICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgICAgIHN1Ym1pdHRlZEJ5OiAnT2xpdmlhIENoZW4nLFxuICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IGZvcm1hdChuZXcgRGF0ZShhLmRhdGVfaGlyZWQpLCAneXl5eS1NTS1kZCcpXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcHJvdmVFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgY29uc3QgZW1wbG95ZWUgPSBNT0NLX0FDQ09VTlRTLmZpbmQoYSA9PiBhLmlkID09PSBlbXBsb3llZUlkKTtcbiAgICBpZihlbXBsb3llZSkgZW1wbG95ZWUuc3RhdHVzID0gJ0FjdGl2ZSc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWplY3RFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgTU9DS19BQ0NPVU5UUyA9IE1PQ0tfQUNDT1VOVFMuZmlsdGVyKGEgPT4gYS5pZCAhPT0gZW1wbG95ZWVJZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZU5hbWUoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IGVtcGxveWVlID0gTU9DS19BQ0NPVU5UUy5maW5kKGEgPT4gYS5pZCA9PT0gZW1wbG95ZWVJZCk7XG4gICAgcmV0dXJuIGVtcGxveWVlID8gYCR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9YCA6IFwiVW5rbm93biBFbXBsb3llZVwiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3J0RGV0YWlscyhyZXBvcnRJZCkge1xuICAgIHJldHVybiBudWxsO1xufVxuXG4vLyAtLS0gQnJhbmNoIEFsbG9jYXRpb24gJiBNYW5hZ2VtZW50IEZ1bmN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhyUGVyc29ubmVsKCkge1xuICAgIHJldHVybiBNT0NLX0FDQ09VTlRTXG4gICAgICAgIC5maWx0ZXIoYSA9PiBhLnJvbGUgPT09ICdIUicpXG4gICAgICAgIC5tYXAoYSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhLnBvc2l0aW9uLFxuICAgICAgICAgICAgbWFuYWdlZF9icmFuY2hlczogYS5tYW5hZ2VkX2JyYW5jaGVzIHx8IFtdXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJyYW5jaGVzKCkge1xuICAgIC8vIFdlIG5vdyB1c2UgdGhlIGRlZGljYXRlZCBNT0NLX0JSQU5DSEVTIGFycmF5LlxuICAgIHJldHVybiBNT0NLX0JSQU5DSEVTO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnJhbmNoKGJyYW5jaE5hbWUsIGNvb3JkaW5hdGVzKSB7XG4gICAgLy8gQ2hlY2sgaWYgYnJhbmNoIGFscmVhZHkgZXhpc3RzXG4gICAgaWYgKE1PQ0tfQlJBTkNIRVMuc29tZShiID0+IGIubmFtZS50b0xvd2VyQ2FzZSgpID09PSBicmFuY2hOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQSBicmFuY2ggd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgfVxuICAgIGNvbnN0IG5ld0lkID0gTU9DS19CUkFOQ0hFUy5sZW5ndGggPiAwID8gTWF0aC5tYXgoLi4uTU9DS19CUkFOQ0hFUy5tYXAoYiA9PiBiLmlkKSkgKyAxIDogMTtcbiAgICBjb25zdCBuZXdCcmFuY2ggPSB7IGlkOiBuZXdJZCwgbmFtZTogYnJhbmNoTmFtZSwgY29vcmRpbmF0ZXMgfTtcbiAgICBNT0NLX0JSQU5DSEVTLnB1c2gobmV3QnJhbmNoKTtcbiAgICByZXR1cm4gbmV3QnJhbmNoO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQnJhbmNoKGJyYW5jaElkKSB7XG4gICAgY29uc3QgYnJhbmNoSW5Vc2UgPSBNT0NLX0FDQ09VTlRTLnNvbWUoaHIgPT4gaHIubWFuYWdlZF9icmFuY2hlcz8uaW5jbHVkZXMoTU9DS19CUkFOQ0hFUy5maW5kKGIgPT4gYi5pZCA9PT0gYnJhbmNoSWQpPy5uYW1lKSk7XG4gICAgaWYgKGJyYW5jaEluVXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBicmFuY2ggaXMgY3VycmVudGx5IGFzc2lnbmVkIHRvIEhSIHBlcnNvbm5lbCBhbmQgY2Fubm90IGJlIGRlbGV0ZWQuJyk7XG4gICAgfVxuICAgIE1PQ0tfQlJBTkNIRVMgPSBNT0NLX0JSQU5DSEVTLmZpbHRlcihiID0+IGIuaWQgIT09IGJyYW5jaElkKTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSHJCcmFuY2hBbGxvY2F0aW9uKGhySWQsIGJyYW5jaGVzKSB7XG4gICAgY29uc3QgaHJBY2NvdW50ID0gTU9DS19BQ0NPVU5UUy5maW5kKGEgPT4gYS5pZCA9PT0gaHJJZCk7XG4gICAgaWYgKGhyQWNjb3VudCkge1xuICAgICAgICBockFjY291bnQubWFuYWdlZF9icmFuY2hlcyA9IGJyYW5jaGVzO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkhSIHBlcnNvbm5lbCBub3QgZm91bmQuXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtcGxveWVlKGlkLCBkYXRhKSB7XG4gICAgY29uc3QgaW5kZXggPSBNT0NLX0FDQ09VTlRTLmZpbmRJbmRleChhID0+IGEuaWQgPT09IGlkKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRW1wbG95ZWUgbm90IGZvdW5kLicgfTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkRW1wbG95ZWUgPSB7XG4gICAgICAgIC4uLk1PQ0tfQUNDT1VOVFNbaW5kZXhdLFxuICAgICAgICBmaXJzdF9uYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdF9uYW1lOiBkYXRhLmxhc3ROYW1lLFxuICAgICAgICBtaWRkbGVfbmFtZTogZGF0YS5taWRkbGVOYW1lLFxuICAgICAgICBnZW5kZXI6IGRhdGEuZ2VuZGVyLFxuICAgICAgICBkYXRlX29mX2JpcnRoOiBkYXRhLmRvYixcbiAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24sXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcbiAgICAgICAgYnJhbmNoOiBkYXRhLmJyYW5jaCxcbiAgICAgICAgZGF0ZV9oaXJlZDogZGF0YS5oaXJlRGF0ZSxcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICAgIC8vIEFzc3VtaW5nIHBob25lIG51bWJlciBpcyBub3QgZGlyZWN0bHkgb24gdGhlIG1haW4gYWNjb3VudCBvYmplY3QgaW4gdGhpcyBtb2NrXG4gICAgfTtcblxuICAgIE1PQ0tfQUNDT1VOVFNbaW5kZXhdID0gdXBkYXRlZEVtcGxveWVlO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdFbXBsb3llZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseS4nIH07XG59XG5cblxuLy8gLS0tIFBvc2l0aW9ucyAmIFJhdGVzIEZ1bmN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gTU9DS19QT1NJVElPTlM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3NpdGlvbih0aXRsZSwgcmF0ZSkge1xuICAgIGlmIChNT0NLX1BPU0lUSU9OUy5zb21lKHAgPT4gcC50aXRsZS50b0xvd2VyQ2FzZSgpID09PSB0aXRsZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcG9zaXRpb24gd2l0aCB0aGlzIHRpdGxlIGFscmVhZHkgZXhpc3RzLicpO1xuICAgIH1cbiAgICBjb25zdCBuZXdJZCA9IE1PQ0tfUE9TSVRJT05TLmxlbmd0aCA+IDAgPyBNYXRoLm1heCguLi5NT0NLX1BPU0lUSU9OUy5tYXAocCA9PiBwLmlkKSkgKyAxIDogMTtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHsgaWQ6IG5ld0lkLCB0aXRsZSwgcmF0ZSB9O1xuICAgIE1PQ0tfUE9TSVRJT05TLnB1c2gobmV3UG9zaXRpb24pO1xuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc2l0aW9uKHBvc2l0aW9uSWQpIHtcbiAgICBjb25zdCBwb3NpdGlvbkluVXNlID0gTU9DS19BQ0NPVU5UUy5zb21lKGFjYyA9PiBhY2MucG9zaXRpb24gPT09IE1PQ0tfUE9TSVRJT05TLmZpbmQocCA9PiBwLmlkID09PSBwb3NpdGlvbklkKT8udGl0bGUpO1xuICAgIGlmIChwb3NpdGlvbkluVXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBwb3NpdGlvbiBpcyBjdXJyZW50bHkgYXNzaWduZWQgdG8gZW1wbG95ZWVzIGFuZCBjYW5ub3QgYmUgZGVsZXRlZC4nKTtcbiAgICB9XG4gICAgTU9DS19QT1NJVElPTlMgPSBNT0NLX1BPU0lUSU9OUy5maWx0ZXIocCA9PiBwLmlkICE9PSBwb3NpdGlvbklkKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1JBZ1JzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:584b2e [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"6034bd75e3ee5334cb7cb149ba648ab4d639d921dd":"updateHrBranchAllocation"},"src/lib/data.js",""] */ __turbopack_context__.s({
    "updateHrBranchAllocation": (()=>updateHrBranchAllocation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateHrBranchAllocation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6034bd75e3ee5334cb7cb149ba648ab4d639d921dd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateHrBranchAllocation"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIGZvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGZvcm1hdCwgZm9ybWF0RGlzdGFuY2VUb05vdywgYWRkRGF5cywgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcblxuLy8gLS0tIE1PQ0sgREFUQSAtLS1cblxubGV0IE1PQ0tfQUNDT1VOVFMgPSBbXG4gICAgeyBpZDogJ0VNUC0wMDEyMycsIGZpcnN0X25hbWU6ICdNYXJpYScsIGxhc3RfbmFtZTogJ1JvZHJpZ3VleicsIGVtYWlsOiAnbWFyaWEucm9kcmlndWV6QGV4YW1wbGUuY29tJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcsIHJvbGU6ICdFbXBsb3llZScsIHBvc2l0aW9uOiAnU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyJywgZGVwYXJ0bWVudDogJ1RlY2hub2xvZ3knLCBicmFuY2g6ICdIZWFkcXVhcnRlcnMnLCBzdGF0dXM6ICdBY3RpdmUnLCBkYXRlX2hpcmVkOiAnMjAyMi0wMS0xNScsIGF2YWlsYWJsZV9sZWF2ZXM6IDEyLCBnZW5kZXI6ICdGZW1hbGUnLCBkYXRlX29mX2JpcnRoOiAnMTk5MC0wNS0yMCcsIHNzc19udW1iZXI6ICcwMC0wMDAwMDAwLTAnLCBwaGlsaGVhbHRoX251bWJlcjogJzAwLTAwMDAwMDAwMC0wJywgcGFnaWJpZ19udW1iZXI6ICcwMDAwLTAwMDAtMDAwMCcsIHRpbjogJzAwMC0wMDAtMDAwLTAwMCcgfSxcbiAgICB7IGlkOiAnRU1QLTAwMTI0JywgZmlyc3RfbmFtZTogJ0RhdmlkJywgbGFzdF9uYW1lOiAnTGVlJywgZW1haWw6ICdkYXZpZC5sZWVAZXhhbXBsZS5jb20nLCBwYXNzd29yZDogJ3Bhc3N3b3JkJywgcm9sZTogJ0VtcGxveWVlJywgcG9zaXRpb246ICdQcm9qZWN0IE1hbmFnZXInLCBkZXBhcnRtZW50OiAnTWFuYWdlbWVudCcsIGJyYW5jaDogJ0hlYWRxdWFydGVycycsIHN0YXR1czogJ0FjdGl2ZScsIGRhdGVfaGlyZWQ6ICcyMDIxLTAzLTIwJywgYXZhaWxhYmxlX2xlYXZlczogMTUsIGdlbmRlcjogJ01hbGUnLCBkYXRlX29mX2JpcnRoOiAnMTk4OC0xMS0xMicgfSxcbiAgICB7IGlkOiAnRU1QLTAwMTI1JywgZmlyc3RfbmFtZTogJ1NhcmFoJywgbGFzdF9uYW1lOiAnQ2hlbicsIGVtYWlsOiAnc2FyYWguY2hlbkBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnRW1wbG95ZWUnLCBwb3NpdGlvbjogJ1VYIERlc2lnbmVyJywgZGVwYXJ0bWVudDogJ0Rlc2lnbicsIGJyYW5jaDogJ0Rvd250b3duIE9mZmljZScsIHN0YXR1czogJ0FjdGl2ZScsIGRhdGVfaGlyZWQ6ICcyMDIzLTA1LTEwJywgYXZhaWxhYmxlX2xlYXZlczogMTAsIGdlbmRlcjogJ0ZlbWFsZScsIGRhdGVfb2ZfYmlydGg6ICcxOTk1LTAyLTI1JyB9LFxuICAgIHsgaWQ6ICdFTVAtMDAxMjYnLCBmaXJzdF9uYW1lOiAnSm9obicsIGxhc3RfbmFtZTogJ0RvZScsIGVtYWlsOiAnam9obi5kb2VAZXhhbXBsZS5jb20nLCBwYXNzd29yZDogJ3Bhc3N3b3JkJywgcm9sZTogJ0VtcGxveWVlJywgcG9zaXRpb246ICdRQSBUZXN0ZXInLCBkZXBhcnRtZW50OiAnVGVjaG5vbG9neScsIGJyYW5jaDogJ1JlbW90ZScsIHN0YXR1czogJ09uIExlYXZlJywgZGF0ZV9oaXJlZDogJzIwMjItMDgtMDEnLCBhdmFpbGFibGVfbGVhdmVzOiA1LCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5OTItMDctMzAnIH0sXG4gICAgeyBpZDogJ0hSLTAwMScsIGZpcnN0X25hbWU6ICdPbGl2aWEnLCBsYXN0X25hbWU6ICdDaGVuJywgZW1haWw6ICdvbGl2aWEuY2hlbi5ockBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnSFInLCBwb3NpdGlvbjogJ0hSIE1hbmFnZXInLCBkZXBhcnRtZW50OiAnSHVtYW4gUmVzb3VyY2VzJywgYnJhbmNoOiAnSGVhZHF1YXJ0ZXJzJywgc3RhdHVzOiAnQWN0aXZlJywgZGF0ZV9oaXJlZDogJzIwMjAtMDEtMDEnLCBhdmFpbGFibGVfbGVhdmVzOiAxNSwgZ2VuZGVyOiAnRmVtYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5ODUtMDktMDUnLCBtYW5hZ2VkX2JyYW5jaGVzOiBbJ0hlYWRxdWFydGVycycsICdEb3dudG93biBPZmZpY2UnXSB9LFxuICAgIHsgaWQ6ICdBRE0tMDAxJywgZmlyc3RfbmFtZTogJ1N1cGVyJywgbGFzdF9uYW1lOiAnQWRtaW4nLCBlbWFpbDogJ3N1cGVyQGV4YW1wbGUuY29tJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcsIHJvbGU6ICdBZG1pbicsIHBvc2l0aW9uOiAnU3lzdGVtIEFkbWluaXN0cmF0b3InLCBkZXBhcnRtZW50OiAnSVQnLCBicmFuY2g6ICdIZWFkcXVhcnRlcnMnLCBzdGF0dXM6ICdBY3RpdmUnLCBkYXRlX2hpcmVkOiAnMjAxOS0wMS0wMScsIGF2YWlsYWJsZV9sZWF2ZXM6IDIwLCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5ODAtMDEtMDEnIH0sXG4gICAgeyBpZDogJ0VNUC1QRU5ESU5HLTAxJywgZmlyc3RfbmFtZTogJ01pY2hhZWwnLCBsYXN0X25hbWU6ICdCcm93bicsIGVtYWlsOiAnbWljaGFlbC5icm93bkBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnRW1wbG95ZWUnLCBwb3NpdGlvbjogJ0p1bmlvciBEZXZlbG9wZXInLCBkZXBhcnRtZW50OiAnVGVjaG5vbG9neScsIGJyYW5jaDogJ0hlYWRxdWFydGVycycsIHN0YXR1czogJ1BlbmRpbmcgQXBwcm92YWwnLCBkYXRlX2hpcmVkOiAnMjAyNC0wMS0wMScsIGF2YWlsYWJsZV9sZWF2ZXM6IDE1LCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5OTgtMDYtMTUnIH0sXG5dO1xubGV0IE1PQ0tfQlJBTkNIRVMgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogJ0hlYWRxdWFydGVycycsIGNvb3JkaW5hdGVzOiAnMTQuNTU0NywgMTIxLjAyNDQnIH0sXG4gICAgeyBpZDogMiwgbmFtZTogJ0Rvd250b3duIE9mZmljZScsIGNvb3JkaW5hdGVzOiAnMTQuNTk5NSwgMTIwLjk4NDInIH0sXG4gICAgeyBpZDogMywgbmFtZTogJ1JlbW90ZScsIGNvb3JkaW5hdGVzOiAnTi9BJyB9LFxuXTtcbmxldCBNT0NLX1BPU0lUSU9OUyA9IFtcbiAgICB7IGlkOiAxLCB0aXRsZTogJ1NlbmlvciBTb2Z0d2FyZSBFbmdpbmVlcicsIHJhdGU6IDUwLjAwIH0sXG4gICAgeyBpZDogMiwgdGl0bGU6ICdQcm9qZWN0IE1hbmFnZXInLCByYXRlOiA1NS4wMCB9LFxuICAgIHsgaWQ6IDMsIHRpdGxlOiAnVVggRGVzaWduZXInLCByYXRlOiA0NS4wMCB9LFxuICAgIHsgaWQ6IDQsIHRpdGxlOiAnUUEgVGVzdGVyJywgcmF0ZTogMzUuMDAgfSxcbiAgICB7IGlkOiA1LCB0aXRsZTogJ0p1bmlvciBEZXZlbG9wZXInLCByYXRlOiAzMC4wMCB9LFxuICAgIHsgaWQ6IDYsIHRpdGxlOiAnSFIgTWFuYWdlcicsIHJhdGU6IDQ4LjAwIH0sXG4gICAgeyBpZDogNywgdGl0bGU6ICdTeXN0ZW0gQWRtaW5pc3RyYXRvcicsIHJhdGU6IDUyLjAwIH0sXG5dO1xubGV0IE1PQ0tfQU5OT1VOQ0VNRU5UUyA9IFtdO1xubGV0IE1PQ0tfTEVBVkVfUkVRVUVTVFMgPSBbXTtcbmxldCBNT0NLX1NDSEVEVUxFUyA9IFtdO1xubGV0IE1PQ0tfQVRURU5EQU5DRSA9IFtdO1xubGV0IE1PQ0tfUEFZU0xJUFMgPSBbXTtcblxuLy8gLS0tIEVORCBNT0NLIERBVEEgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIUkRhc2hib2FyZERhdGEoKSB7XG4gIGNvbnN0IHRvdGFsRW1wbG95ZWVzID0gTU9DS19BQ0NPVU5UUy5maWx0ZXIoYSA9PiBhLnJvbGUgPT09ICdFbXBsb3llZScpLmxlbmd0aDtcbiAgY29uc3QgcGVuZGluZ0xlYXZlUmVxdWVzdHMgPSBNT0NLX0xFQVZFX1JFUVVFU1RTLmZpbHRlcihsciA9PiBsci5zdGF0dXMgPT09ICdQZW5kaW5nJykubGVuZ3RoO1xuXG4gIGNvbnN0IHN0YXRzID0gW1xuICAgICAgeyB0aXRsZTogJ1RvdGFsIEVtcGxveWVlcycsIHZhbHVlOiBTdHJpbmcodG90YWxFbXBsb3llZXMpLCBjaGFuZ2U6ICcnIH0sXG4gICAgICB7IHRpdGxlOiAnT24gVGltZSBQZXJjZW50YWdlJywgdmFsdWU6IGAwJWAsIGNoYW5nZTogJycgfSxcbiAgICAgIHsgdGl0bGU6ICdBY3RpdmUgSm9iIFBvc3RpbmdzJywgdmFsdWU6ICc0JywgY2hhbmdlOiAnRXh0ZXJuYWwgQVBJJyB9LFxuICAgICAgeyB0aXRsZTogJ1BlbmRpbmcgTGVhdmUgUmVxdWVzdHMnLCB2YWx1ZTogU3RyaW5nKHBlbmRpbmdMZWF2ZVJlcXVlc3RzKSwgY2hhbmdlOiAnJyB9LFxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgc3RhdHMsXG4gICAgcmVjZW50QWN0aXZpdGllczogW11cbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhc3RBbm5vdW5jZW1lbnRzKCkge1xuICAgIHJldHVybiBNT0NLX0FOTk9VTkNFTUVOVFMubWFwKGEgPT4ge1xuICAgICAgICBjb25zdCBwb3N0ZWRCeSA9IE1PQ0tfQUNDT1VOVFMuZmluZChhY2MgPT4gYWNjLmlkID09PSBhLnBvc3RlZF9ieV9pZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5hLFxuICAgICAgICAgICAgcG9zdGVkQnk6IHBvc3RlZEJ5ID8gYCR7Jyd9JHtwb3N0ZWRCeS5maXJzdF9uYW1lfSAke3Bvc3RlZEJ5Lmxhc3RfbmFtZX1gIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEucG9zdGVkX2F0KSwgJ3l5eXktTU0tZGQnKVxuICAgICAgICB9O1xuICAgIH0pLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIucG9zdGVkX2F0KSAtIG5ldyBEYXRlKGEucG9zdGVkX2F0KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBbm5vdW5jZW1lbnQodGl0bGUsIGNvbnRlbnQsIHN0YXR1cykge1xuICAgIGNvbnN0IGhyVXNlcklkID0gJ0hSLTAwMSc7XG4gICAgY29uc3QgbmV3QW5ub3VuY2VtZW50ID0ge1xuICAgICAgICBpZDogTU9DS19BTk5PVU5DRU1FTlRTLmxlbmd0aCArIDEsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBwb3N0ZWRfYnlfaWQ6IGhyVXNlcklkLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHBvc3RlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgfTtcbiAgICBNT0NLX0FOTk9VTkNFTUVOVFMucHVzaChuZXdBbm5vdW5jZW1lbnQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQW5ub3VuY2VtZW50KGlkKSB7XG4gICAgTU9DS19BTk5PVU5DRU1FTlRTID0gTU9DS19BTk5PVU5DRU1FTlRTLmZpbHRlcihhID0+IGEuaWQgIT09IGlkKTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFpbHlBdHRlbmRhbmNlRGF0YShkYXRlKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXMoKSB7XG4gICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFMuZmlsdGVyKGEgPT4gYS5yb2xlID09PSAnRW1wbG95ZWUnICYmIGEuc3RhdHVzICE9PSAnUGVuZGluZyBBcHByb3ZhbCcpLm1hcChhID0+ICh7XG4gICAgICAgIGlkOiBhLmlkLFxuICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgIGJyYW5jaDogYS5icmFuY2gsXG4gICAgICAgIHN0YXR1czogYS5zdGF0dXNcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZUJ5SWQoaWQpIHtcbiAgICBjb25zdCBlbXBsb3llZSA9IE1PQ0tfQUNDT1VOVFMuZmluZChhID0+IGEuaWQgPT09IGlkKTtcbiAgICBpZiAoIWVtcGxveWVlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmVtcGxveWVlLFxuICAgICAgICBuYW1lOiBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gLFxuICAgICAgICBkYXRlX2hpcmVkOiBmb3JtYXQobmV3IERhdGUoZW1wbG95ZWUuZGF0ZV9oaXJlZCksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIGRhdGVfb2ZfYmlydGg6IGZvcm1hdChuZXcgRGF0ZShlbXBsb3llZS5kYXRlX29mX2JpcnRoKSwgJ3l5eXktTU0tZGQnKSxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZCkge1xuICAgIGNvbnN0IGluaXRpYWxMZW5ndGggPSBNT0NLX0FDQ09VTlRTLmxlbmd0aDtcbiAgICBNT0NLX0FDQ09VTlRTID0gTU9DS19BQ0NPVU5UUy5maWx0ZXIoYSA9PiBhLmlkICE9PSBpZCk7XG4gICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFMubGVuZ3RoIDwgaW5pdGlhbExlbmd0aDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XG4gICAgcmV0dXJuIE1PQ0tfTEVBVkVfUkVRVUVTVFMubWFwKGxyID0+IHtcbiAgICAgICAgY29uc3QgZW1wbG95ZWUgPSBNT0NLX0FDQ09VTlRTLmZpbmQoYSA9PiBhLmlkID09PSBsci5hY2NvdW50X2lkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBsci5pZCxcbiAgICAgICAgICAgIGVtcGxveWVlSWQ6IGVtcGxveWVlLmlkLFxuICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgbGVhdmVfdHlwZTogbHIubGVhdmVfdHlwZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLnN0YXJ0X2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLmVuZF9kYXRlKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgICAgICAgIHJlYXNvbjogbHIucmVhc29uLFxuICAgICAgICAgICAgc3RhdHVzOiBsci5zdGF0dXNcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTGVhdmVSZXF1ZXN0U3RhdHVzKHJlcXVlc3RJZCwgc3RhdHVzKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IE1PQ0tfTEVBVkVfUkVRVUVTVFMuZmluZChsciA9PiBsci5pZCA9PT0gcmVxdWVzdElkKTtcbiAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICByZXF1ZXN0LnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXNXaXRoUGF5c2xpcFN0YXR1cygpIHtcbiAgICByZXR1cm4gTU9DS19BQ0NPVU5UU1xuICAgICAgICAuZmlsdGVyKGEgPT4gYS5yb2xlID09PSAnRW1wbG95ZWUnKVxuICAgICAgICAubWFwKGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzQmVuZWZpdHMgPSBhLnNzc19udW1iZXIgJiYgYS5waGlsaGVhbHRoX251bWJlciAmJiBhLnBhZ2liaWdfbnVtYmVyICYmIGEudGluO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50OiBhLmRlcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgcGF5c2xpcFN0YXR1czogJ1BlbmRpbmcnLFxuICAgICAgICAgICAgICAgIGJlbmVmaXRzU3RhdHVzOiBoYXNCZW5lZml0cyA/ICdDb21wbGV0ZScgOiAnSW5jb21wbGV0ZScsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlc0ZvclNjaGVkdWxpbmcoKSB7XG4gICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFNcbiAgICAgICAgLmZpbHRlcihhID0+IGEucm9sZSA9PT0gJ0VtcGxveWVlJyAmJiBhLnN0YXR1cyA9PT0gJ0FjdGl2ZScpXG4gICAgICAgIC5tYXAoYSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgIHNoaWZ0OiAnOTowMCAtIDE3OjAwJ1xuICAgICAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZURhc2hib2FyZERhdGEoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IGVtcGxveWVlID0gTU9DS19BQ0NPVU5UUy5maW5kKGEgPT4gYS5pZCA9PT0gZW1wbG95ZWVJZCk7XG4gICAgaWYgKCFlbXBsb3llZSkge1xuICAgICAgICByZXR1cm4geyBlbXBsb3llZTogeyBuYW1lOiAnRW1wbG95ZWUgTm90IEZvdW5kJyB9LCBhbm5vdW5jZW1lbnRzOiBbXSB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlbXBsb3llZToge1xuICAgICAgICAgICAgZW1wbG95ZWVJZDogZW1wbG95ZWUuaWQsXG4gICAgICAgICAgICBuYW1lOiBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgcG9zaXRpb246IGVtcGxveWVlLnBvc2l0aW9uLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogZW1wbG95ZWUuZGVwYXJ0bWVudCxcbiAgICAgICAgICAgIGVtYWlsOiBlbXBsb3llZS5lbWFpbCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5ub3VuY2VtZW50czogW11cbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZURhdGEoZW1wbG95ZWVJZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1bW1hcnk6IHsgZGF5c0F0dGVuZGVkOiAwLCBsYXRlczogMCwgYWJzZW5jZXM6IDAsIHRvdGFsSG91cnM6IDAsIGF2YWlsYWJsZUxlYXZlczogMCB9LFxuICAgICAgICByZWNvcmRzOiBbXVxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXN0TGVhdmVSZXF1ZXN0cyhlbXBsb3llZUlkKSB7XG4gICAgcmV0dXJuIE1PQ0tfTEVBVkVfUkVRVUVTVFNcbiAgICAgICAgLmZpbHRlcihsciA9PiBsci5hY2NvdW50X2lkID09PSBlbXBsb3llZUlkKVxuICAgICAgICAubWFwKGxyID0+ICh7XG4gICAgICAgICAgICBpZDogbHIuaWQsXG4gICAgICAgICAgICBsZWF2ZV90eXBlOiBsci5sZWF2ZV90eXBlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuc3RhcnRfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgICAgICBlbmREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuZW5kX2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICAgICAgc3RhdHVzOiBsci5zdGF0dXMsXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxlYXZlUmVxdWVzdChkYXRhKSB7XG4gICAgY29uc3QgeyBlbXBsb3llZUlkLCBsZWF2ZVR5cGUsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcmVhc29uIH0gPSBkYXRhO1xuICAgIGNvbnN0IG5ld1JlcXVlc3QgPSB7XG4gICAgICAgIGlkOiBNT0NLX0xFQVZFX1JFUVVFU1RTLmxlbmd0aCArIDEsXG4gICAgICAgIGFjY291bnRfaWQ6IGVtcGxveWVlSWQsXG4gICAgICAgIGxlYXZlX3R5cGU6IGxlYXZlVHlwZSxcbiAgICAgICAgc3RhcnRfZGF0ZTogc3RhcnREYXRlLFxuICAgICAgICBlbmRfZGF0ZTogZW5kRGF0ZSxcbiAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgIHN0YXR1czogJ1BlbmRpbmcnXG4gICAgfTtcbiAgICBNT0NLX0xFQVZFX1JFUVVFU1RTLnB1c2gobmV3UmVxdWVzdCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5UGVyaW9kcyhlbXBsb3llZUlkKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NoZWR1bGUoZW1wbG95ZWVJZCkge1xuICAgIHJldHVybiBbXTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVuZGluZ0VtcGxveWVlQXBwcm92YWxzKCkge1xuICAgICByZXR1cm4gTU9DS19BQ0NPVU5UU1xuICAgICAgICAuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09ICdQZW5kaW5nIEFwcHJvdmFsJylcbiAgICAgICAgLm1hcChhID0+ICh7XG4gICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgIGVtcGxveWVlTmFtZTogYCR7YS5maXJzdF9uYW1lfSAke2EubGFzdF9uYW1lfWAsXG4gICAgICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgICAgIHN1Ym1pdHRlZEJ5OiAnT2xpdmlhIENoZW4nLFxuICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IGZvcm1hdChuZXcgRGF0ZShhLmRhdGVfaGlyZWQpLCAneXl5eS1NTS1kZCcpXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcHJvdmVFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgY29uc3QgZW1wbG95ZWUgPSBNT0NLX0FDQ09VTlRTLmZpbmQoYSA9PiBhLmlkID09PSBlbXBsb3llZUlkKTtcbiAgICBpZihlbXBsb3llZSkgZW1wbG95ZWUuc3RhdHVzID0gJ0FjdGl2ZSc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWplY3RFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgTU9DS19BQ0NPVU5UUyA9IE1PQ0tfQUNDT1VOVFMuZmlsdGVyKGEgPT4gYS5pZCAhPT0gZW1wbG95ZWVJZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZU5hbWUoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IGVtcGxveWVlID0gTU9DS19BQ0NPVU5UUy5maW5kKGEgPT4gYS5pZCA9PT0gZW1wbG95ZWVJZCk7XG4gICAgcmV0dXJuIGVtcGxveWVlID8gYCR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9YCA6IFwiVW5rbm93biBFbXBsb3llZVwiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3J0RGV0YWlscyhyZXBvcnRJZCkge1xuICAgIHJldHVybiBudWxsO1xufVxuXG4vLyAtLS0gQnJhbmNoIEFsbG9jYXRpb24gJiBNYW5hZ2VtZW50IEZ1bmN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhyUGVyc29ubmVsKCkge1xuICAgIHJldHVybiBNT0NLX0FDQ09VTlRTXG4gICAgICAgIC5maWx0ZXIoYSA9PiBhLnJvbGUgPT09ICdIUicpXG4gICAgICAgIC5tYXAoYSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhLnBvc2l0aW9uLFxuICAgICAgICAgICAgbWFuYWdlZF9icmFuY2hlczogYS5tYW5hZ2VkX2JyYW5jaGVzIHx8IFtdXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJyYW5jaGVzKCkge1xuICAgIC8vIFdlIG5vdyB1c2UgdGhlIGRlZGljYXRlZCBNT0NLX0JSQU5DSEVTIGFycmF5LlxuICAgIHJldHVybiBNT0NLX0JSQU5DSEVTO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnJhbmNoKGJyYW5jaE5hbWUsIGNvb3JkaW5hdGVzKSB7XG4gICAgLy8gQ2hlY2sgaWYgYnJhbmNoIGFscmVhZHkgZXhpc3RzXG4gICAgaWYgKE1PQ0tfQlJBTkNIRVMuc29tZShiID0+IGIubmFtZS50b0xvd2VyQ2FzZSgpID09PSBicmFuY2hOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQSBicmFuY2ggd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgfVxuICAgIGNvbnN0IG5ld0lkID0gTU9DS19CUkFOQ0hFUy5sZW5ndGggPiAwID8gTWF0aC5tYXgoLi4uTU9DS19CUkFOQ0hFUy5tYXAoYiA9PiBiLmlkKSkgKyAxIDogMTtcbiAgICBjb25zdCBuZXdCcmFuY2ggPSB7IGlkOiBuZXdJZCwgbmFtZTogYnJhbmNoTmFtZSwgY29vcmRpbmF0ZXMgfTtcbiAgICBNT0NLX0JSQU5DSEVTLnB1c2gobmV3QnJhbmNoKTtcbiAgICByZXR1cm4gbmV3QnJhbmNoO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQnJhbmNoKGJyYW5jaElkKSB7XG4gICAgY29uc3QgYnJhbmNoSW5Vc2UgPSBNT0NLX0FDQ09VTlRTLnNvbWUoaHIgPT4gaHIubWFuYWdlZF9icmFuY2hlcz8uaW5jbHVkZXMoTU9DS19CUkFOQ0hFUy5maW5kKGIgPT4gYi5pZCA9PT0gYnJhbmNoSWQpPy5uYW1lKSk7XG4gICAgaWYgKGJyYW5jaEluVXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBicmFuY2ggaXMgY3VycmVudGx5IGFzc2lnbmVkIHRvIEhSIHBlcnNvbm5lbCBhbmQgY2Fubm90IGJlIGRlbGV0ZWQuJyk7XG4gICAgfVxuICAgIE1PQ0tfQlJBTkNIRVMgPSBNT0NLX0JSQU5DSEVTLmZpbHRlcihiID0+IGIuaWQgIT09IGJyYW5jaElkKTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSHJCcmFuY2hBbGxvY2F0aW9uKGhySWQsIGJyYW5jaGVzKSB7XG4gICAgY29uc3QgaHJBY2NvdW50ID0gTU9DS19BQ0NPVU5UUy5maW5kKGEgPT4gYS5pZCA9PT0gaHJJZCk7XG4gICAgaWYgKGhyQWNjb3VudCkge1xuICAgICAgICBockFjY291bnQubWFuYWdlZF9icmFuY2hlcyA9IGJyYW5jaGVzO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkhSIHBlcnNvbm5lbCBub3QgZm91bmQuXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtcGxveWVlKGlkLCBkYXRhKSB7XG4gICAgY29uc3QgaW5kZXggPSBNT0NLX0FDQ09VTlRTLmZpbmRJbmRleChhID0+IGEuaWQgPT09IGlkKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRW1wbG95ZWUgbm90IGZvdW5kLicgfTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkRW1wbG95ZWUgPSB7XG4gICAgICAgIC4uLk1PQ0tfQUNDT1VOVFNbaW5kZXhdLFxuICAgICAgICBmaXJzdF9uYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdF9uYW1lOiBkYXRhLmxhc3ROYW1lLFxuICAgICAgICBtaWRkbGVfbmFtZTogZGF0YS5taWRkbGVOYW1lLFxuICAgICAgICBnZW5kZXI6IGRhdGEuZ2VuZGVyLFxuICAgICAgICBkYXRlX29mX2JpcnRoOiBkYXRhLmRvYixcbiAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24sXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcbiAgICAgICAgYnJhbmNoOiBkYXRhLmJyYW5jaCxcbiAgICAgICAgZGF0ZV9oaXJlZDogZGF0YS5oaXJlRGF0ZSxcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICAgIC8vIEFzc3VtaW5nIHBob25lIG51bWJlciBpcyBub3QgZGlyZWN0bHkgb24gdGhlIG1haW4gYWNjb3VudCBvYmplY3QgaW4gdGhpcyBtb2NrXG4gICAgfTtcblxuICAgIE1PQ0tfQUNDT1VOVFNbaW5kZXhdID0gdXBkYXRlZEVtcGxveWVlO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdFbXBsb3llZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseS4nIH07XG59XG5cblxuLy8gLS0tIFBvc2l0aW9ucyAmIFJhdGVzIEZ1bmN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gTU9DS19QT1NJVElPTlM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3NpdGlvbih0aXRsZSwgcmF0ZSkge1xuICAgIGlmIChNT0NLX1BPU0lUSU9OUy5zb21lKHAgPT4gcC50aXRsZS50b0xvd2VyQ2FzZSgpID09PSB0aXRsZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcG9zaXRpb24gd2l0aCB0aGlzIHRpdGxlIGFscmVhZHkgZXhpc3RzLicpO1xuICAgIH1cbiAgICBjb25zdCBuZXdJZCA9IE1PQ0tfUE9TSVRJT05TLmxlbmd0aCA+IDAgPyBNYXRoLm1heCguLi5NT0NLX1BPU0lUSU9OUy5tYXAocCA9PiBwLmlkKSkgKyAxIDogMTtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHsgaWQ6IG5ld0lkLCB0aXRsZSwgcmF0ZSB9O1xuICAgIE1PQ0tfUE9TSVRJT05TLnB1c2gobmV3UG9zaXRpb24pO1xuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc2l0aW9uKHBvc2l0aW9uSWQpIHtcbiAgICBjb25zdCBwb3NpdGlvbkluVXNlID0gTU9DS19BQ0NPVU5UUy5zb21lKGFjYyA9PiBhY2MucG9zaXRpb24gPT09IE1PQ0tfUE9TSVRJT05TLmZpbmQocCA9PiBwLmlkID09PSBwb3NpdGlvbklkKT8udGl0bGUpO1xuICAgIGlmIChwb3NpdGlvbkluVXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBwb3NpdGlvbiBpcyBjdXJyZW50bHkgYXNzaWduZWQgdG8gZW1wbG95ZWVzIGFuZCBjYW5ub3QgYmUgZGVsZXRlZC4nKTtcbiAgICB9XG4gICAgTU9DS19QT1NJVElPTlMgPSBNT0NLX1BPU0lUSU9OUy5maWx0ZXIocCA9PiBwLmlkICE9PSBwb3NpdGlvbklkKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBeVNzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/branch-allocation/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview This file defines the Branch Allocation page for the Admin portal.
 * It allows administrators to assign specific branches to HR personnel.
 */ __turbopack_context__.s({
    "default": (()=>BranchAllocationPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$53ead2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:53ead2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$eadcdc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:eadcdc [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$584b2e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:584b2e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function BranchAllocationPage() {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [hrPersonnel, setHrPersonnel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [branches, setBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedHr, setSelectedHr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedBranches, setSelectedBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BranchAllocationPage.useCallback[fetchData]": async ()=>{
            const hrData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$53ead2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getHrPersonnel"])();
            const branchData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$eadcdc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBranches"])();
            setHrPersonnel(hrData);
            setBranches(branchData);
        }
    }["BranchAllocationPage.useCallback[fetchData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BranchAllocationPage.useEffect": ()=>{
            fetchData();
        }
    }["BranchAllocationPage.useEffect"], [
        fetchData
    ]);
    const handleManageClick = (hr)=>{
        setSelectedHr(hr);
        setSelectedBranches(new Set(hr.managed_branches || []));
    };
    const handleBranchChange = (branchName, isChecked)=>{
        setSelectedBranches((prev)=>{
            const newSet = new Set(prev);
            if (isChecked) {
                newSet.add(branchName);
            } else {
                newSet.delete(branchName);
            }
            return newSet;
        });
    };
    const handleSaveAllocation = async ()=>{
        if (!selectedHr) return;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$584b2e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateHrBranchAllocation"])(selectedHr.id, Array.from(selectedBranches));
        if (result.success) {
            toast({
                title: 'Success',
                description: `Branch allocation for ${selectedHr.name} has been updated.`
            });
            fetchData(); // Refresh data
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.message || 'Failed to update branch allocation.'
            });
        }
    };
    // Determine which branches are already assigned to other HR personnel
    const assignedBranchesByOthers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BranchAllocationPage.useMemo[assignedBranchesByOthers]": ()=>{
            const assignedSet = new Set();
            hrPersonnel.forEach({
                "BranchAllocationPage.useMemo[assignedBranchesByOthers]": (hr)=>{
                    if (hr.id !== selectedHr?.id) {
                        hr.managed_branches?.forEach({
                            "BranchAllocationPage.useMemo[assignedBranchesByOthers]": (branch)=>assignedSet.add(branch)
                        }["BranchAllocationPage.useMemo[assignedBranchesByOthers]"]);
                    }
                }
            }["BranchAllocationPage.useMemo[assignedBranchesByOthers]"]);
            return assignedSet;
        }
    }["BranchAllocationPage.useMemo[assignedBranchesByOthers]"], [
        hrPersonnel,
        selectedHr
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold font-headline",
                children: "HR Branch Allocation"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Manage HR Personnel Branches"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "Assign the branches that each HR personnel is responsible for. A branch cannot be assigned to more than one HR person."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "HR Personnel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                lineNumber: 125,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Assigned Branches"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                lineNumber: 126,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                lineNumber: 127,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                        lineNumber: 124,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: hrPersonnel.map((hr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium",
                                                            children: hr.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                            lineNumber: 134,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: hr.position
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                            lineNumber: 135,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                    lineNumber: 133,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: hr.managed_branches?.length > 0 ? hr.managed_branches.map((branch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "secondary",
                                                                children: branch
                                                            }, branch, false, {
                                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                lineNumber: 141,
                                                                columnNumber: 53
                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground text-sm",
                                                            children: "No branches assigned"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                            lineNumber: 144,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                        lineNumber: 138,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                                                        onOpenChange: (isOpen)=>!isOpen && setSelectedHr(null),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                                                asChild: true,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    size: "sm",
                                                                    onClick: ()=>handleManageClick(hr),
                                                                    children: "Manage"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                lineNumber: 150,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                                children: [
                                                                                    "Allocate Branches for ",
                                                                                    selectedHr?.name
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                lineNumber: 157,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                                                children: "Select the branches this HR person will manage. Unavailable branches are already assigned."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                lineNumber: 158,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                        lineNumber: 156,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "py-4 space-y-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                                                                            children: branches.map((branch)=>{
                                                                                const isAssignedToOther = assignedBranchesByOthers.has(branch.name);
                                                                                const isChecked = selectedBranches.has(branch.name);
                                                                                const checkbox = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center space-x-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                            id: `branch-${branch.id}`,
                                                                                            checked: isChecked,
                                                                                            disabled: isAssignedToOther,
                                                                                            onCheckedChange: (checked)=>handleBranchChange(branch.name, checked)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                            lineNumber: 170,
                                                                                            columnNumber: 69
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                            htmlFor: `branch-${branch.id}`,
                                                                                            className: isAssignedToOther ? 'text-muted-foreground cursor-not-allowed' : '',
                                                                                            children: branch.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                            lineNumber: 176,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    ]
                                                                                }, branch.id, true, {
                                                                                    fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                    lineNumber: 169,
                                                                                    columnNumber: 66
                                                                                }, this);
                                                                                if (isAssignedToOther) {
                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                                                                asChild: true,
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: checkbox
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                                    lineNumber: 184,
                                                                                                    columnNumber: 77
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                                lineNumber: 183,
                                                                                                columnNumber: 73
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    children: "This branch is already managed by another HR person."
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                                    lineNumber: 187,
                                                                                                    columnNumber: 77
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                                lineNumber: 186,
                                                                                                columnNumber: 73
                                                                                            }, this)
                                                                                        ]
                                                                                    }, branch.id, true, {
                                                                                        fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                        lineNumber: 182,
                                                                                        columnNumber: 69
                                                                                    }, this);
                                                                                }
                                                                                return checkbox;
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                            lineNumber: 163,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                                                                                asChild: true,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    variant: "outline",
                                                                                    children: "Cancel"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                    lineNumber: 198,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                lineNumber: 197,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                                                                                asChild: true,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    onClick: handleSaveAllocation,
                                                                                    children: "Save Changes"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                    lineNumber: 201,
                                                                                    columnNumber: 55
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                                lineNumber: 200,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                        lineNumber: 196,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                                lineNumber: 155,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                        lineNumber: 149,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                                    lineNumber: 148,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, hr.id, true, {
                                            fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                            lineNumber: 132,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                            lineNumber: 122,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
                lineNumber: 116,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/branch-allocation/page.jsx",
        lineNumber: 113,
        columnNumber: 9
    }, this);
}
_s(BranchAllocationPage, "ZKZITQ5ISQLKtKVwwsNhVHkqk7A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = BranchAllocationPage;
var _c;
__turbopack_context__.k.register(_c, "BranchAllocationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_7e34be32._.js.map