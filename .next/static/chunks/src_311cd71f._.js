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
"[project]/src/lib/data:a5f3e4 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0067b71c9617499970f47f615b607f992a7b35b7ca":"getPendingEmployeeApprovals"},"src/lib/data.js",""] */ __turbopack_context__.s({
    "getPendingEmployeeApprovals": (()=>getPendingEmployeeApprovals)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getPendingEmployeeApprovals = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0067b71c9617499970f47f615b607f992a7b35b7ca", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPendingEmployeeApprovals"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIGZvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHF1ZXJ5IH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIUkRhc2hib2FyZERhdGEoKSB7XG4gICAgY29uc3QgdG90YWxFbXBsb3llZXNSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCBDT1VOVCgqKSBGUk9NIGFjY291bnRzIFdIRVJFIHJvbGUgPSAnRW1wbG95ZWUnXCIpO1xuICAgIGNvbnN0IHRvdGFsRW1wbG95ZWVzID0gdG90YWxFbXBsb3llZXNSZXN1bHQucm93c1swXS5jb3VudCB8fCAnMCc7XG5cbiAgICBjb25zdCBwZW5kaW5nTGVhdmVSZXF1ZXN0c1Jlc3VsdCA9IGF3YWl0IHF1ZXJ5KFwiU0VMRUNUIENPVU5UKCopIEZST00gbGVhdmVfcmVxdWVzdHMgV0hFUkUgc3RhdHVzID0gJ1BlbmRpbmcnXCIpO1xuICAgIGNvbnN0IHBlbmRpbmdMZWF2ZVJlcXVlc3RzID0gcGVuZGluZ0xlYXZlUmVxdWVzdHNSZXN1bHQucm93c1swXS5jb3VudCB8fCAnMCc7XG5cbiAgICAvLyBNb2NraW5nIHNvbWUgc3RhdHMgYXMgdGhlcmUncyBubyB0YWJsZSBmb3IgdGhlbSB5ZXRcbiAgICBjb25zdCBzdGF0cyA9IFtcbiAgICAgICAgeyB0aXRsZTogJ1RvdGFsIEVtcGxveWVlcycsIHZhbHVlOiBTdHJpbmcodG90YWxFbXBsb3llZXMpLCBjaGFuZ2U6ICcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdPbiBUaW1lIFBlcmNlbnRhZ2UnLCB2YWx1ZTogYDAlYCwgY2hhbmdlOiAnJyB9LCAvLyBObyBhdHRlbmRhbmNlIGRhdGEgeWV0XG4gICAgICAgIHsgdGl0bGU6ICdQZW5kaW5nIExlYXZlIFJlcXVlc3RzJywgdmFsdWU6IFN0cmluZyhwZW5kaW5nTGVhdmVSZXF1ZXN0cyksIGNoYW5nZTogJycgfSxcbiAgICBdO1xuXG4gICAgLy8gTm8gYWN0aXZpdHkgbG9nIHRhYmxlIHlldFxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXRzLFxuICAgICAgICByZWNlbnRBY3Rpdml0aWVzOiBbXVxuICAgIH07XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhc3RBbm5vdW5jZW1lbnRzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgU0VMRUNUIGEuaWQsIGEudGl0bGUsIGEuY29udGVudCwgYS5zdGF0dXMsIGEuY3JlYXRlZF9hdCwgYWNjLmZpcnN0X25hbWUsIGFjYy5sYXN0X25hbWVcbiAgICAgICAgRlJPTSBhbm5vdW5jZW1lbnRzIGFcbiAgICAgICAgSk9JTiBhY2NvdW50cyBhY2MgT04gYS5wb3N0ZWRfYnkgPSBhY2MuaWRcbiAgICAgICAgT1JERVIgQlkgYS5jcmVhdGVkX2F0IERFU0NcbiAgICBgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4gKHtcbiAgICAgICAgLi4uYSxcbiAgICAgICAgcG9zdGVkQnk6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICBkYXRlOiBmb3JtYXQobmV3IERhdGUoYS5jcmVhdGVkX2F0KSwgJ3l5eXktTU0tZGQnKVxuICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFubm91bmNlbWVudCh0aXRsZSwgY29udGVudCwgc3RhdHVzKSB7XG4gICAgY29uc3QgaWQgPSAnSFItMDAxJzsgLy8gSW4gYSByZWFsIGFwcCwgdGhpcyBzaG91bGQgY29tZSBmcm9tIHNlc3Npb25cbiAgICBhd2FpdCBxdWVyeShcbiAgICAgICAgJ0lOU0VSVCBJTlRPIGFubm91bmNlbWVudHMgKHRpdGxlLCBjb250ZW50LCBzdGF0dXMsIHBvc3RlZF9ieSkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgICBbdGl0bGUsIGNvbnRlbnQsIHN0YXR1cywgaWRdXG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFubm91bmNlbWVudChpZCkge1xuICAgIGF3YWl0IHF1ZXJ5KCdERUxFVEUgRlJPTSBhbm5vdW5jZW1lbnRzIFdIRVJFIGlkID0gJDEnLCBbaWRdKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhaWx5QXR0ZW5kYW5jZURhdGEoZGF0ZSkge1xuICAgIC8vIFRoaXMgaXMgYSBwbGFjZWhvbGRlciBhcyB0aGVyZSBpcyBubyBhdHRlbmRhbmNlIHRhYmxlIHlldC5cbiAgICByZXR1cm4gW107XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlcygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBwb3NpdGlvbiwgYnJhbmNoLCBzdGF0dXNcbiAgICAgICAgRlJPTSBhY2NvdW50c1xuICAgICAgICBXSEVSRSByb2xlID0gJ0VtcGxveWVlJyBBTkQgc3RhdHVzICE9ICdQZW5kaW5nIEFwcHJvdmFsJ1xuICAgIGApO1xuICAgIHJldHVybiByZXN1bHQucm93cy5tYXAoYSA9PiAoe1xuICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgbmFtZTogYCR7YS5maXJzdF9uYW1lfSAke2EubGFzdF9uYW1lfWAsXG4gICAgICAgIHBvc2l0aW9uOiBhLnBvc2l0aW9uLFxuICAgICAgICBicmFuY2g6IGEuYnJhbmNoLFxuICAgICAgICBzdGF0dXM6IGEuc3RhdHVzXG4gICAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVCeUlkKGlkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCAqIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMScsIFtpZF0pO1xuICAgIGNvbnN0IGVtcGxveWVlID0gcmVzdWx0LnJvd3NbMF07XG4gICAgaWYgKCFlbXBsb3llZSkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5lbXBsb3llZSxcbiAgICAgICAgbmFtZTogYCR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9YCxcbiAgICAgICAgZGF0ZV9oaXJlZDogZm9ybWF0KG5ldyBEYXRlKGVtcGxveWVlLmRhdGVfaGlyZWQpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICBkYXRlX29mX2JpcnRoOiBmb3JtYXQobmV3IERhdGUoZW1wbG95ZWUuZGF0ZV9vZl9iaXJ0aCksICd5eXl5LU1NLWRkJyksXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRW1wbG95ZWUoaWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeSgnREVMRVRFIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMScsIFtpZF0pO1xuICAgIHJldHVybiByZXN1bHQucm93Q291bnQgPiAwO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhdmVSZXF1ZXN0cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBsci5pZCwgbHIubGVhdmVfdHlwZSwgbHIuc3RhcnRfZGF0ZSwgbHIuZW5kX2RhdGUsIGxyLnJlYXNvbiwgbHIuc3RhdHVzLFxuICAgICAgICAgICAgICAgYS5pZCBhcyBcImVtcGxveWVlSWRcIiwgYS5maXJzdF9uYW1lLCBhLmxhc3RfbmFtZVxuICAgICAgICBGUk9NIGxlYXZlX3JlcXVlc3RzIGxyXG4gICAgICAgIEpPSU4gYWNjb3VudHMgYSBPTiBsci5lbXBsb3llZV9pZCA9IGEuaWRcbiAgICAgICAgT1JERVIgQlkgbHIuY3JlYXRlZF9hdCBERVNDXG4gICAgYCk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChsciA9PiAoe1xuICAgICAgICBpZDogbHIuaWQsXG4gICAgICAgIGVtcGxveWVlSWQ6IGxyLmVtcGxveWVlSWQsXG4gICAgICAgIGVtcGxveWVlTmFtZTogYCR7bHIuZmlyc3RfbmFtZX0gJHtsci5sYXN0X25hbWV9YCxcbiAgICAgICAgbGVhdmVfdHlwZTogbHIubGVhdmVfdHlwZSxcbiAgICAgICAgc3RhcnREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuc3RhcnRfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdChuZXcgRGF0ZShsci5lbmRfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIHJlYXNvbjogbHIucmVhc29uLFxuICAgICAgICBzdGF0dXM6IGxyLnN0YXR1c1xuICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUxlYXZlUmVxdWVzdFN0YXR1cyhyZXF1ZXN0SWQsIHN0YXR1cykge1xuICAgIGF3YWl0IHF1ZXJ5KCdVUERBVEUgbGVhdmVfcmVxdWVzdHMgU0VUIHN0YXR1cyA9ICQxIFdIRVJFIGlkID0gJDInLCBbc3RhdHVzLCByZXF1ZXN0SWRdKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlc1dpdGhQYXlzbGlwU3RhdHVzKCkge1xuICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBcInBvc2l0aW9uXCIsIGRlcGFydG1lbnQsIHNzc19udW1iZXIsIHBoaWxoZWFsdGhfbnVtYmVyLCBwYWdpYmlnX251bWJlciwgdGluXG4gICAgICAgIEZST00gYWNjb3VudHNcbiAgICAgICAgV0hFUkUgcm9sZSA9ICdFbXBsb3llZSdcbiAgICBgKTtcbiAgICBcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4ge1xuICAgICAgICBjb25zdCBoYXNCZW5lZml0cyA9IGEuc3NzX251bWJlciAmJiBhLnBoaWxoZWFsdGhfbnVtYmVyICYmIGEucGFnaWJpZ19udW1iZXIgJiYgYS50aW47XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgIG5hbWU6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgICAgICBkZXBhcnRtZW50OiBhLmRlcGFydG1lbnQsXG4gICAgICAgICAgICBwYXlzbGlwU3RhdHVzOiAnUGVuZGluZycsIC8vIE5vIHBheXNsaXAgdGFibGUgeWV0XG4gICAgICAgICAgICBiZW5lZml0c1N0YXR1czogaGFzQmVuZWZpdHMgPyAnQ29tcGxldGUnIDogJ0luY29tcGxldGUnLFxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzRm9yU2NoZWR1bGluZygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdFbXBsb3llZScgQU5EIHN0YXR1cyA9ICdBY3RpdmUnXG4gICAgYCk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChhID0+ICh7XG4gICAgICAgIGlkOiBhLmlkLFxuICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgc2hpZnQ6ICc5OjAwIC0gMTc6MDAnIC8vIERlZmF1bHQgc2hpZnRcbiAgICB9KSk7XG59XG4gICAgLy8gRmV0Y2ggRW1wbG95ZWUgRGF0YSBmcm9tIERhdGFiYXNlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVEYXNoYm9hcmREYXRhKGVtcGxveWVlaWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeSgnU0VMRUNUIGlkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIFwicG9zaXRpb25cIiwgZGVwYXJ0bWVudCwgYnJhbmNoLCBlbWFpbCBGUk9NIGFjY291bnRzIFdIRVJFIGlkID0gJDEnLCBbZW1wbG95ZWVpZF0pO1xuICAgIGNvbnN0IGVtcGxveWVlID0gcmVzdWx0LnJvd3NbMF07XG4gICAgXG4gICAgaWYgKCFlbXBsb3llZSkge1xuICAgICAgICByZXR1cm4geyBlbXBsb3llZTogeyBuYW1lOiAnRW1wbG95ZWUgTm90IEZvdW5kJyB9LCBhbm5vdW5jZW1lbnRzOiBbXSB9O1xuICAgIH1cblxuICAgIGNvbnN0IGFubm91bmNlbWVudHNSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCB0aXRsZSwgY29udGVudCwgY3JlYXRlZF9hdCBGUk9NIGFubm91bmNlbWVudHMgV0hFUkUgc3RhdHVzID0gJ1B1Ymxpc2hlZCcgT1JERVIgQlkgY3JlYXRlZF9hdCBERVNDIExJTUlUIDVcIik7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1wbG95ZWU6IHtcbiAgICAgICAgICAgIGVtcGxveWVlSWQ6IGVtcGxveWVlLmlkLFxuICAgICAgICAgICAgbmFtZTogYCR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBlbXBsb3llZS5wb3NpdGlvbixcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IGVtcGxveWVlLmRlcGFydG1lbnQsXG4gICAgICAgICAgICBicmFuY2g6IGVtcGxveWVlLmJyYW5jaCxcbiAgICAgICAgICAgIGVtYWlsOiBlbXBsb3llZS5lbWFpbCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5ub3VuY2VtZW50czogYW5ub3VuY2VtZW50c1Jlc3VsdC5yb3dzLm1hcChhID0+ICh7XG4gICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgIHRpdGxlOiBhLnRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogYS5jb250ZW50LFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEuY3JlYXRlZF9hdCksICdNTU1NIGQsIHl5eXknKVxuICAgICAgICB9KSlcbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZURhdGEoZW1wbG95ZWVJZCkge1xuICAgIC8vIFRoaXMgaXMgYSBwbGFjZWhvbGRlciBhcyB0aGVyZSBpcyBubyBhdHRlbmRhbmNlIHRhYmxlIHlldC5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdW1tYXJ5OiB7IGRheXNBdHRlbmRlZDogMCwgbGF0ZXM6IDAsIGFic2VuY2VzOiAwLCB0b3RhbEhvdXJzOiAwLCBhdmFpbGFibGVMZWF2ZXM6IDAgfSxcbiAgICAgICAgcmVjb3JkczogW11cbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFzdExlYXZlUmVxdWVzdHMoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAnU0VMRUNUIGlkLCBsZWF2ZV90eXBlLCBzdGFydF9kYXRlLCBlbmRfZGF0ZSwgc3RhdHVzIEZST00gbGVhdmVfcmVxdWVzdHMgV0hFUkUgZW1wbG95ZWVfaWQgPSAkMSBPUkRFUiBCWSBzdGFydF9kYXRlIERFU0MnLFxuICAgICAgICBbZW1wbG95ZWVJZF1cbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChsciA9PiAoe1xuICAgICAgICBpZDogbHIuaWQsXG4gICAgICAgIGxlYXZlX3R5cGU6IGxyLmxlYXZlX3R5cGUsXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLnN0YXJ0X2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICBlbmREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuZW5kX2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICBzdGF0dXM6IGxyLnN0YXR1cyxcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMZWF2ZVJlcXVlc3QoZGF0YSkge1xuICAgIGNvbnN0IHsgZW1wbG95ZWVJZCwgbGVhdmVUeXBlLCBzdGFydERhdGUsIGVuZERhdGUsIHJlYXNvbiB9ID0gZGF0YTtcbiAgICBhd2FpdCBxdWVyeShcbiAgICAgICAgJ0lOU0VSVCBJTlRPIGxlYXZlX3JlcXVlc3RzIChlbXBsb3llZV9pZCwgbGVhdmVfdHlwZSwgc3RhcnRfZGF0ZSwgZW5kX2RhdGUsIHJlYXNvbikgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpJyxcbiAgICAgICAgW2VtcGxveWVlSWQsIGxlYXZlVHlwZSwgc3RhcnREYXRlLCBlbmREYXRlLCByZWFzb25dXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXlQZXJpb2RzKGVtcGxveWVlSWQpIHtcbiAgICAvLyBUaGlzIGlzIGEgcGxhY2Vob2xkZXIgYXMgdGhlcmUgaXMgbm8gcGF5c2xpcCB0YWJsZSB5ZXQuXG4gICAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NoZWR1bGUoZW1wbG95ZWVJZCkge1xuICAgIC8vIFRoaXMgaXMgYSBwbGFjZWhvbGRlciBhcyB0aGVyZSBpcyBubyBzY2hlZHVsZSB0YWJsZSB5ZXQuXG4gICAgcmV0dXJuIFtdO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZW5kaW5nRW1wbG95ZWVBcHByb3ZhbHMoKSB7XG4gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgU0VMRUNUIGlkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIFwicG9zaXRpb25cIiwgZGF0ZV9oaXJlZFxuICAgICAgICBGUk9NIGFjY291bnRzXG4gICAgICAgIFdIRVJFIHN0YXR1cyA9ICdQZW5kaW5nIEFwcHJvdmFsJ1xuICAgIGApO1xuICAgIHJldHVybiByZXN1bHQucm93cy5tYXAoYSA9PiAoe1xuICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgIHN1Ym1pdHRlZEJ5OiAnT2xpdmlhIENoZW4nLCAvLyBQbGFjZWhvbGRlclxuICAgICAgICBzdWJtaXNzaW9uRGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEuZGF0ZV9oaXJlZCksICd5eXl5LU1NLWRkJylcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHByb3ZlRW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIGF3YWl0IHF1ZXJ5KFwiVVBEQVRFIGFjY291bnRzIFNFVCBzdGF0dXMgPSAnQWN0aXZlJyBXSEVSRSBpZCA9ICQxXCIsIFtlbXBsb3llZUlkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWplY3RFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgYXdhaXQgcXVlcnkoXCJERUxFVEUgRlJPTSBhY2NvdW50cyBXSEVSRSBpZCA9ICQxXCIsIFtlbXBsb3llZUlkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZU5hbWUoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KCdTRUxFQ1QgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMScsIFtlbXBsb3llZUlkXSk7XG4gICAgY29uc3QgZW1wbG95ZWUgPSByZXN1bHQucm93c1swXTtcbiAgICByZXR1cm4gZW1wbG95ZWUgPyBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gIDogXCJVbmtub3duIEVtcGxveWVlXCI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvcnREZXRhaWxzKHJlcG9ydElkKSB7XG4gICAgLy8gVGhpcyBpcyBhIHBsYWNlaG9sZGVyIGFzIHRoZXJlIGlzIG5vIHJlcG9ydHMgdGFibGUgeWV0LlxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SHJQZXJzb25uZWwoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoYFxuICAgICAgICBTRUxFQ1QgaWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgXCJwb3NpdGlvblwiLCBtYW5hZ2VkX2JyYW5jaGVzXG4gICAgICAgIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdIUidcbiAgICBgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4gKHtcbiAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgIG5hbWU6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgbWFuYWdlZF9icmFuY2hlczogYS5tYW5hZ2VkX2JyYW5jaGVzIHx8IFtdXG4gICAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnJhbmNoZXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29vcmRpbmF0ZXMgRlJPTSBicmFuY2hlcyBPUkRFUiBCWSBuYW1lJyk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnJhbmNoKGJyYW5jaE5hbWUsIGNvb3JkaW5hdGVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXG4gICAgICAgICAgICAnSU5TRVJUIElOVE8gYnJhbmNoZXMgKG5hbWUsIGNvb3JkaW5hdGVzKSBWQUxVRVMgKCQxLCAkMikgUkVUVVJOSU5HIConLFxuICAgICAgICAgICAgW2JyYW5jaE5hbWUsIGNvb3JkaW5hdGVzXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LnJvd3NbMF07XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gdW5pcXVlX3Zpb2xhdGlvblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGJyYW5jaCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJyYW5jaChicmFuY2hJZCkge1xuICAgIC8vIENoZWNrIGlmIGFueSBIUiBwZXJzb25uZWwgaXMgYXNzaWduZWQgdG8gdGhpcyBicmFuY2hcbiAgICBjb25zdCBicmFuY2hSZXN1bHQgPSBhd2FpdCBxdWVyeSgnU0VMRUNUIG5hbWUgRlJPTSBicmFuY2hlcyBXSEVSRSBpZCA9ICQxJywgW2JyYW5jaElkXSk7XG4gICAgaWYgKGJyYW5jaFJlc3VsdC5yb3dDb3VudCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IGJyYW5jaE5hbWUgPSBicmFuY2hSZXN1bHQucm93c1swXS5uYW1lO1xuXG4gICAgY29uc3QgaHJSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCAxIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdIUicgQU5EICQxID0gQU5ZKG1hbmFnZWRfYnJhbmNoZXMpXCIsIFticmFuY2hOYW1lXSk7XG4gICAgaWYgKGhyUmVzdWx0LnJvd0NvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYnJhbmNoIGlzIGN1cnJlbnRseSBhc3NpZ25lZCB0byBIUiBwZXJzb25uZWwgYW5kIGNhbm5vdCBiZSBkZWxldGVkLicpO1xuICAgIH1cbiAgICBhd2FpdCBxdWVyeSgnREVMRVRFIEZST00gYnJhbmNoZXMgV0hFUkUgaWQgPSAkMScsIFticmFuY2hJZF0pO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVIckJyYW5jaEFsbG9jYXRpb24oaHJJZCwgYnJhbmNoZXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShcbiAgICAgICAgJ1VQREFURSBhY2NvdW50cyBTRVQgbWFuYWdlZF9icmFuY2hlcyA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICBbYnJhbmNoZXMsIGhySWRdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiByZXN1bHQucm93Q291bnQgPiAwIH07XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtcGxveWVlKGlkLCBkYXRhKSB7XG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBtaWRkbGVOYW1lLCBnZW5kZXIsIGRvYiwgcG9zaXRpb24sIGRlcGFydG1lbnQsIGJyYW5jaCwgaGlyZURhdGUsIGVtYWlsIH0gPSBkYXRhO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgVVBEQVRFIGFjY291bnRzIFNFVFxuICAgICAgICAgICAgZmlyc3RfbmFtZSA9ICQxLCBsYXN0X25hbWUgPSAkMiwgbWlkZGxlX25hbWUgPSAkMywgZ2VuZGVyID0gJDQsXG4gICAgICAgICAgICBkYXRlX29mX2JpcnRoID0gJDUsIFwicG9zaXRpb25cIiA9ICQ2LCBkZXBhcnRtZW50ID0gJDcsIGJyYW5jaCA9ICQ4LFxuICAgICAgICAgICAgZGF0ZV9oaXJlZCA9ICQ5LCBlbWFpbCA9ICQxMFxuICAgICAgICBXSEVSRSBpZCA9ICQxMVxuICAgIGAsIFtmaXJzdE5hbWUsIGxhc3ROYW1lLCBtaWRkbGVOYW1lLCBnZW5kZXIsIGRvYiwgcG9zaXRpb24sIGRlcGFydG1lbnQsIGJyYW5jaCwgaGlyZURhdGUsIGVtYWlsLCBpZF0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHJlc3VsdC5yb3dDb3VudCA+IDAsIG1lc3NhZ2U6IHJlc3VsdC5yb3dDb3VudCA+IDAgPyAnRW1wbG95ZWUgdXBkYXRlZCBzdWNjZXNzZnVsbHkuJyA6ICdFbXBsb3llZSBub3QgZm91bmQuJyB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCBpZCwgdGl0bGUsIHJhdGUgRlJPTSBwb3NpdGlvbnMgT1JERVIgQlkgdGl0bGUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3M7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3NpdGlvbih0aXRsZSwgcmF0ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAgICAgJ0lOU0VSVCBJTlRPIHBvc2l0aW9ucyAodGl0bGUsIHJhdGUpIFZBTFVFUyAoJDEsICQyKSBSRVRVUk5JTkcgKicsXG4gICAgICAgICAgICBbdGl0bGUsIHJhdGVdXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQucm93c1swXTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1JykgeyAvLyB1bmlxdWVfdmlvbGF0aW9uXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcG9zaXRpb24gd2l0aCB0aGlzIHRpdGxlIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zaXRpb24ocG9zaXRpb25JZCkge1xuICAgIGNvbnN0IHBvc2l0aW9uUmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCB0aXRsZSBGUk9NIHBvc2l0aW9ucyBXSEVSRSBpZCA9ICQxJywgW3Bvc2l0aW9uSWRdKTtcbiAgICBpZiAocG9zaXRpb25SZXN1bHQucm93Q291bnQgPT09IDApIHJldHVybjtcbiAgICBjb25zdCBwb3NpdGlvblRpdGxlID0gcG9zaXRpb25SZXN1bHQucm93c1swXS50aXRsZTtcblxuICAgIGNvbnN0IGFjY291bnRSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCAxIEZST00gYWNjb3VudHMgV0hFUkUgcG9zaXRpb24gPSAkMVwiLCBbcG9zaXRpb25UaXRsZV0pO1xuICAgIGlmIChhY2NvdW50UmVzdWx0LnJvd0NvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgcG9zaXRpb24gaXMgY3VycmVudGx5IGFzc2lnbmVkIHRvIGVtcGxveWVlcyBhbmQgY2Fubm90IGJlIGRlbGV0ZWQuJyk7XG4gICAgfVxuICAgIGF3YWl0IHF1ZXJ5KCdERUxFVEUgRlJPTSBwb3NpdGlvbnMgV0hFUkUgaWQgPSAkMScsIFtwb3NpdGlvbklkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZXBhcnRtZW50c0ZvckJyYW5jaChicmFuY2hOYW1lKSB7XG4gICAgLy8gVGhpcyBhc3N1bWVzIGEgc2VwYXJhdGUgJ2RlcGFydG1lbnRzJyB0YWJsZSBvciBzaW1pbGFyIHN0cnVjdHVyZS5cbiAgICAvLyBGb3Igbm93LCBsZXQncyBxdWVyeSBkaXN0aW5jdCBkZXBhcnRtZW50cyBmcm9tIGFjY291bnRzIGluIHRoYXQgYnJhbmNoLlxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAnU0VMRUNUIERJU1RJTkNUIGRlcGFydG1lbnQgRlJPTSBhY2NvdW50cyBXSEVSRSBicmFuY2ggPSAkMSBBTkQgZGVwYXJ0bWVudCBJUyBOT1QgTlVMTCBPUkRFUiBCWSBkZXBhcnRtZW50JyxcbiAgICAgICAgW2JyYW5jaE5hbWVdXG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHIgPT4gci5kZXBhcnRtZW50KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2l0aW9uc0ZvckRlcGFydG1lbnQoZGVwYXJ0bWVudE5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgc2ltcGxpZmljYXRpb24uIEEgcmVhbCBhcHAgbWlnaHQgaGF2ZSBhIGRlcGFydG1lbnRzX3Bvc2l0aW9ucyBsaW5rIHRhYmxlLlxuICAgIC8vIEhlcmUgd2UgZ2V0IGFsbCBwb3NpdGlvbnMgYXNzb2NpYXRlZCB3aXRoIGVtcGxveWVlcyBpbiB0aGF0IGRlcGFydG1lbnQuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXG4gICAgICAgICdTRUxFQ1QgRElTVElOQ1QgXCJwb3NpdGlvblwiIEZST00gYWNjb3VudHMgV0hFUkUgZGVwYXJ0bWVudCA9ICQxIEFORCBcInBvc2l0aW9uXCIgSVMgTk9UIE5VTEwgT1JERVIgQlkgXCJwb3NpdGlvblwiJyxcbiAgICAgICAgW2RlcGFydG1lbnROYW1lXVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChyID0+IHIucG9zaXRpb24pO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvU0E4TnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/approvals/data:59a14c [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"400a1da22bb7d7cb687721aaaf3321bbddc10612b0":"approveEmployee"},"src/app/admin/approvals/actions.js",""] */ __turbopack_context__.s({
    "approveEmployee": (()=>approveEmployee)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var approveEmployee = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400a1da22bb7d7cb687721aaaf3321bbddc10612b0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "approveEmployee"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIGVtcGxveWVlIGFwcHJvdmFscyBwYWdlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGFwcHJvdmVFbXBsb3llZSBhcyBhcHByb3ZlRW1wbG95ZWVEYiwgcmVqZWN0RW1wbG95ZWUgYXMgcmVqZWN0RW1wbG95ZWVEYiB9IGZyb20gJ0AvbGliL2RhdGEnO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcHJvdmVFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBwcm92ZUVtcGxveWVlRGIoZW1wbG95ZWVJZCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYXBwcm92YWxzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vZGFzaGJvYXJkJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdFbXBsb3llZSBhcHByb3ZlZCBzdWNjZXNzZnVsbHkuJyB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gYXBwcm92ZSBlbXBsb3llZS4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVqZWN0RW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHJlamVjdEVtcGxveWVlRGIoZW1wbG95ZWVJZCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYXBwcm92YWxzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vZGFzaGJvYXJkJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdFbXBsb3llZSByZWplY3RlZCBzdWNjZXNzZnVsbHkuJyB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gcmVqZWN0IGVtcGxveWVlLicgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJTQVFzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/approvals/data:9e8d7d [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4026e4b39b9e3767d3c57d1eec9edba57019fcd194":"rejectEmployee"},"src/app/admin/approvals/actions.js",""] */ __turbopack_context__.s({
    "rejectEmployee": (()=>rejectEmployee)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var rejectEmployee = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4026e4b39b9e3767d3c57d1eec9edba57019fcd194", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "rejectEmployee"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIGVtcGxveWVlIGFwcHJvdmFscyBwYWdlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGFwcHJvdmVFbXBsb3llZSBhcyBhcHByb3ZlRW1wbG95ZWVEYiwgcmVqZWN0RW1wbG95ZWUgYXMgcmVqZWN0RW1wbG95ZWVEYiB9IGZyb20gJ0AvbGliL2RhdGEnO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcHJvdmVFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBwcm92ZUVtcGxveWVlRGIoZW1wbG95ZWVJZCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYXBwcm92YWxzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vZGFzaGJvYXJkJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdFbXBsb3llZSBhcHByb3ZlZCBzdWNjZXNzZnVsbHkuJyB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gYXBwcm92ZSBlbXBsb3llZS4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVqZWN0RW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHJlamVjdEVtcGxveWVlRGIoZW1wbG95ZWVJZCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYXBwcm92YWxzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vZGFzaGJvYXJkJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdFbXBsb3llZSByZWplY3RlZCBzdWNjZXNzZnVsbHkuJyB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gcmVqZWN0IGVtcGxveWVlLicgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBTQW1Cc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/alert-dialog.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview This file defines the AlertDialog component and its parts.
 * It is a modal dialog that interrupts the user with important content and
 * requires a response. It is built on top of the Radix UI Alert Dialog primitive.
 * @see https://www.radix-ui.com/primitives/docs/components/alert-dialog
 */ __turbopack_context__.s({
    "AlertDialog": (()=>AlertDialog),
    "AlertDialogAction": (()=>AlertDialogAction),
    "AlertDialogCancel": (()=>AlertDialogCancel),
    "AlertDialogContent": (()=>AlertDialogContent),
    "AlertDialogDescription": (()=>AlertDialogDescription),
    "AlertDialogFooter": (()=>AlertDialogFooter),
    "AlertDialogHeader": (()=>AlertDialogHeader),
    "AlertDialogOverlay": (()=>AlertDialogOverlay),
    "AlertDialogPortal": (()=>AlertDialogPortal),
    "AlertDialogTitle": (()=>AlertDialogTitle),
    "AlertDialogTrigger": (()=>AlertDialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * The root component for an alert dialog.
 */ const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
/**
 * The trigger that opens the alert dialog.
 */ const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
/**
 * A portal that renders its children into a new stacking context.
 */ const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
/**
 * A semi-transparent overlay that is rendered behind the dialog.
 */ const AlertDialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 34,
        columnNumber: 3
    }, this));
_c = AlertDialogOverlay;
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
/**
 * The main content of the alert dialog.
 */ const AlertDialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.jsx",
                lineNumber: 50,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.jsx",
                lineNumber: 51,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 49,
        columnNumber: 3
    }, this));
_c2 = AlertDialogContent;
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
/**
 * The header of the alert dialog, containing the title and description.
 */ const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 70,
        columnNumber: 3
    }, this);
_c3 = AlertDialogHeader;
AlertDialogHeader.displayName = "AlertDialogHeader";
/**
 * The footer of the alert dialog, containing action buttons.
 */ const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 87,
        columnNumber: 3
    }, this);
_c4 = AlertDialogFooter;
AlertDialogFooter.displayName = "AlertDialogFooter";
/**
 * The title of the alert dialog.
 */ const AlertDialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 101,
        columnNumber: 3
    }, this));
_c6 = AlertDialogTitle;
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
/**
 * The description of the alert dialog.
 */ const AlertDialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 113,
        columnNumber: 3
    }, this));
_c8 = AlertDialogDescription;
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
/**
 * The action button that typically performs the primary action of the dialog.
 */ const AlertDialogAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c9 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 126,
        columnNumber: 3
    }, this));
_c10 = AlertDialogAction;
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
/**
 * The cancel button that closes the dialog.
 */ const AlertDialogCancel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c11 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 138,
        columnNumber: 3
    }, this));
_c12 = AlertDialogCancel;
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "AlertDialogOverlay");
__turbopack_context__.k.register(_c1, "AlertDialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "AlertDialogContent");
__turbopack_context__.k.register(_c3, "AlertDialogHeader");
__turbopack_context__.k.register(_c4, "AlertDialogFooter");
__turbopack_context__.k.register(_c5, "AlertDialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "AlertDialogTitle");
__turbopack_context__.k.register(_c7, "AlertDialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "AlertDialogDescription");
__turbopack_context__.k.register(_c9, "AlertDialogAction$React.forwardRef");
__turbopack_context__.k.register(_c10, "AlertDialogAction");
__turbopack_context__.k.register(_c11, "AlertDialogCancel$React.forwardRef");
__turbopack_context__.k.register(_c12, "AlertDialogCancel");
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
"[project]/src/app/admin/approvals/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview This file defines the Pending Approvals page for the Admin portal.
 * It provides administrators with a view to manage and approve/reject new employee submissions.
 */ __turbopack_context__.s({
    "default": (()=>PendingApprovalsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$a5f3e4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:a5f3e4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$approvals$2f$data$3a$59a14c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/approvals/data:59a14c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$approvals$2f$data$3a$9e8d7d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/approvals/data:9e8d7d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)");
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
function PendingApprovalsPage() {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [pendingApprovals, setPendingApprovals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PendingApprovalsPage.useEffect": ()=>{
            document.title = "Admin Account Approval";
        }
    }["PendingApprovalsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PendingApprovalsPage.useEffect": ()=>{
            const fetchData = {
                "PendingApprovalsPage.useEffect.fetchData": async ()=>{
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$a5f3e4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPendingEmployeeApprovals"])();
                    setPendingApprovals(data);
                }
            }["PendingApprovalsPage.useEffect.fetchData"];
            fetchData();
        }
    }["PendingApprovalsPage.useEffect"], []);
    const handleApprove = async (id)=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$approvals$2f$data$3a$59a14c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["approveEmployee"])(id);
        if (result?.success) {
            toast({
                title: 'Success',
                description: 'Employee has been approved.'
            });
            setPendingApprovals((prev)=>prev.filter((req)=>req.id !== id));
        } else {
            toast({
                variant: "destructive",
                title: 'Error',
                description: result?.message || 'Failed to approve employee.'
            });
        }
    };
    const handleReject = async (id)=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$approvals$2f$data$3a$9e8d7d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["rejectEmployee"])(id);
        if (result?.success) {
            toast({
                title: 'Success',
                description: 'Employee has been rejected.'
            });
            setPendingApprovals((prev)=>prev.filter((req)=>req.id !== id));
        } else {
            toast({
                variant: "destructive",
                title: 'Error',
                description: result?.message || 'Failed to reject employee.'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold font-headline",
                children: "Pending Employee Approvals"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/approvals/page.jsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Incoming Employee Submissions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "Review and act on new employee profiles submitted by HR."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: pendingApprovals.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Submitted By"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 121,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Employee Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 122,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Position"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 123,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Submission Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 124,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 125,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                        lineNumber: 120,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: pendingApprovals.map((req)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium",
                                                        children: req.submittedBy
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                        lineNumber: 132,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 131,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: req.employeeName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: req.position
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 135,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: req.submissionDate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 136,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 justify-end",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                    className: "mr-2 h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                    lineNumber: 142,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                " View Details"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                            lineNumber: 141,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                                        children: [
                                                                                            "Pending Approval: ",
                                                                                            req.employeeName
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 147,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                                                        children: "Review the details of this new employee submission."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 148,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 146,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2 text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                children: "Submitted By:"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                                lineNumber: 153,
                                                                                                columnNumber: 64
                                                                                            }, this),
                                                                                            " ",
                                                                                            req.submittedBy
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 153,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                children: "Position:"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                                lineNumber: 154,
                                                                                                columnNumber: 64
                                                                                            }, this),
                                                                                            " ",
                                                                                            req.position
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 154,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                children: "Submission Date:"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                                lineNumber: 155,
                                                                                                columnNumber: 64
                                                                                            }, this),
                                                                                            " ",
                                                                                            req.submissionDate
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 155,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 152,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                                                                                    asChild: true,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                        variant: "outline",
                                                                                        children: "Close"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 159,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                    lineNumber: 158,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 157,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                lineNumber: 139,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            className: "text-green-600 border-green-600 hover:bg-green-100 hover:text-green-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    className: "h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                    lineNumber: 167,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                " Approve"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                            lineNumber: 166,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                                        children: "Are you sure?"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 172,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                                        children: "This action will approve the new employee and create their profile."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 173,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 171,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                                        children: "Cancel"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 178,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                                        onClick: ()=>handleApprove(req.id),
                                                                                        children: "Approve"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 179,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 177,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 170,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                lineNumber: 164,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            className: "text-red-600 border-red-600 hover:bg-red-100 hover:text-red-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                    className: "h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                    lineNumber: 186,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                " Reject"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                            lineNumber: 185,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 184,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                                        children: "Are you sure?"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 191,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                                        children: "This action will reject the new employee submission. This cannot be undone."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 192,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 190,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                                        children: "Cancel"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 197,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                                        onClick: ()=>handleReject(req.id),
                                                                                        children: "Reject"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 198,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 196,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 189,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                lineNumber: 183,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                        lineNumber: 138,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, req.id, true, {
                                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                                            lineNumber: 130,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                    lineNumber: 128,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                            lineNumber: 118,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-center",
                            children: "No pending employee approvals."
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                            lineNumber: 209,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/approvals/page.jsx",
                lineNumber: 111,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/approvals/page.jsx",
        lineNumber: 107,
        columnNumber: 9
    }, this);
}
_s(PendingApprovalsPage, "mvJzEI2piDTLr/W0LD9Nf0k5/uc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = PendingApprovalsPage;
var _c;
__turbopack_context__.k.register(_c, "PendingApprovalsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_311cd71f._.js.map