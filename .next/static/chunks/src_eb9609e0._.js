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
"[project]/src/lib/data:daa4f2 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0067b71c9617499970f47f615b607f992a7b35b7ca":"getPendingEmployeeApprovals"},"src/lib/data.js",""] */ __turbopack_context__.s({
    "getPendingEmployeeApprovals": (()=>getPendingEmployeeApprovals)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getPendingEmployeeApprovals = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0067b71c9617499970f47f615b607f992a7b35b7ca", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPendingEmployeeApprovals"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIGZvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICogSXQgYWN0cyBhcyBhIGNlbnRyYWxpemVkIGFuZCBzZXJ2ZXItc2lkZS1vbmx5IGRhdGEgYWNjZXNzIGxheWVyLlxuICogQWxsIGZ1bmN0aW9ucyBpbmNsdWRlIGVycm9yIGhhbmRsaW5nIHRvIHJldHVybiBzYWZlIGRlZmF1bHQgdmFsdWVzIGluIGNhc2Ugb2ZcbiAqIGEgZGF0YWJhc2UgZXJyb3IsIHByZXZlbnRpbmcgdGhlIGFwcGxpY2F0aW9uIGZyb20gY3Jhc2hpbmcuXG4gKi9cbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgcXVlcnkgfSBmcm9tICcuL2RiJztcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tICdkYXRlLWZucyc7XG5cbi8qKlxuICogRmV0Y2hlcyBhbGwgdGhlIG5lY2Vzc2FyeSBkYXRhIGZvciB0aGUgSFIgZGFzaGJvYXJkIGZyb20gdGhlIGRhdGFiYXNlLlxuICogVGhpcyBpbmNsdWRlcyBlbXBsb3llZSBjb3VudHMsIGxlYXZlIHJlcXVlc3RzLCBhbmQgcmVjZW50IGFjdGl2aXRpZXMuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBkYXNoYm9hcmQgZGF0YS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhSRGFzaGJvYXJkRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBlbXBsb3llZUNvdW50UXVlcnkgPSBcIlNFTEVDVCBDT1VOVCgqKSBGUk9NIGFjY291bnRzIFdIRVJFIHJvbGUgPSAnRW1wbG95ZWUnIEFORCBzdGF0dXMgPSAnQWN0aXZlJ1wiO1xuICAgICAgICBjb25zdCBwZW5kaW5nTGVhdmVRdWVyeSA9IFwiU0VMRUNUIENPVU5UKCopIEZST00gbGVhdmVfcmVxdWVzdHMgV0hFUkUgc3RhdHVzID0gJ1BlbmRpbmcnXCI7XG4gICAgICAgIGNvbnN0IHJlY2VudEFjdGl2aXR5UXVlcnkgPSBgXG4gICAgICAgICAgICBTRUxFQ1QgXG4gICAgICAgICAgICAgICAgbHIuaWQsIFxuICAgICAgICAgICAgICAgIGEuZmlyc3RfbmFtZSB8fCAnICcgfHwgYS5sYXN0X25hbWUgYXMgZW1wbG95ZWVfbmFtZSwgXG4gICAgICAgICAgICAgICAgbHIubGVhdmVfdHlwZSwgXG4gICAgICAgICAgICAgICAgbHIuc3RhcnRfZGF0ZSBcbiAgICAgICAgICAgIEZST00gbGVhdmVfcmVxdWVzdHMgbHJcbiAgICAgICAgICAgIEpPSU4gYWNjb3VudHMgYSBPTiBsci5hY2NvdW50X2lkID0gYS5pZFxuICAgICAgICAgICAgT1JERVIgQlkgbHIuaWQgREVTQ1xuICAgICAgICAgICAgTElNSVQgNTtcbiAgICAgICAgYDtcblxuICAgICAgICBjb25zdCBbZW1wbG95ZWVSZXN1bHQsIHBlbmRpbmdMZWF2ZVJlc3VsdCwgYWN0aXZpdHlSZXN1bHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgcXVlcnkoZW1wbG95ZWVDb3VudFF1ZXJ5KSxcbiAgICAgICAgICAgIHF1ZXJ5KHBlbmRpbmdMZWF2ZVF1ZXJ5KSxcbiAgICAgICAgICAgIHF1ZXJ5KHJlY2VudEFjdGl2aXR5UXVlcnkpXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IGVtcGxveWVlQ291bnQgPSBlbXBsb3llZVJlc3VsdD8ucm93cz8uWzBdPy5jb3VudCA/PyAwO1xuICAgICAgICBjb25zdCBwZW5kaW5nTGVhdmVzID0gcGVuZGluZ0xlYXZlUmVzdWx0Py5yb3dzPy5bMF0/LmNvdW50ID8/IDA7XG4gICAgICAgIGNvbnN0IHJlY2VudEFjdGl2aXRpZXMgPSBhY3Rpdml0eVJlc3VsdD8ucm93cz8ubWFwKHJvdyA9PiAoe1xuICAgICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICAgIGFjdGl2aXR5OiBgJHtyb3cuZW1wbG95ZWVfbmFtZX0gcmVxdWVzdGVkICR7cm93LmxlYXZlX3R5cGUudG9Mb3dlckNhc2UoKX0gbGVhdmVgLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKHJvdy5zdGFydF9kYXRlKSwgeyBhZGRTdWZmaXg6IHRydWUgfSksXG4gICAgICAgICAgICB0eXBlOiAnTGVhdmUnXG4gICAgICAgIH0pKSA/PyBbXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHM6IFtcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiAnVG90YWwgRW1wbG95ZWVzJywgdmFsdWU6IGVtcGxveWVlQ291bnQsIGljb246ICc8VXNlcnMgLz4nLCBjaGFuZ2U6ICcrMiB0aGlzIG1vbnRoJyB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdPbiBUaW1lIFBlcmNlbnRhZ2UnLCB2YWx1ZTogJzk2JScsIGljb246ICc8Q2hlY2tDaXJjbGUgLz4nLCBjaGFuZ2U6ICctMSUgZnJvbSBsYXN0IG1vbnRoJyB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdBY3RpdmUgSm9iIFBvc3RpbmdzJywgdmFsdWU6ICc0JywgaWNvbjogJzxCcmllZmNhc2UgLz4nLCBjaGFuZ2U6ICcrMSBuZXcgcG9zdGluZycgfSxcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiAnUGVuZGluZyBMZWF2ZSBSZXF1ZXN0cycsIHZhbHVlOiBwZW5kaW5nTGVhdmVzLCBpY29uOiAnPEJlbGwgLz4nLCBjaGFuZ2U6IGAke3BlbmRpbmdMZWF2ZXN9IG5ldyB0b2RheWAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZWNlbnRBY3Rpdml0aWVzXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIEVycm9yIGZldGNoaW5nIEhSIGRhc2hib2FyZCBkYXRhOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0czogW10sXG4gICAgICAgICAgICByZWNlbnRBY3Rpdml0aWVzOiBbXVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBGZXRjaGVzIHBhc3QgYW5ub3VuY2VtZW50cyBmcm9tIHRoZSBkYXRhYmFzZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdFtdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhc3RBbm5vdW5jZW1lbnRzKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFubm91bmNlbWVudHNRdWVyeSA9IGBcbiAgICAgICAgICAgIFNFTEVDVCBcbiAgICAgICAgICAgICAgICBhLmlkLCBcbiAgICAgICAgICAgICAgICBhLnRpdGxlLCBcbiAgICAgICAgICAgICAgICBwLmZpcnN0X25hbWUgfHwgJyAnIHx8IHAubGFzdF9uYW1lIGFzIFwicG9zdGVkQnlcIixcbiAgICAgICAgICAgICAgICB0b19jaGFyKGEucG9zdGVkX2F0LCAnWVlZWS1NTS1ERCcpIGFzIGRhdGUsXG4gICAgICAgICAgICAgICAgYS5zdGF0dXNcbiAgICAgICAgICAgIEZST00gYW5ub3VuY2VtZW50cyBhXG4gICAgICAgICAgICBKT0lOIGFjY291bnRzIHAgT04gYS5wb3N0ZWRfYnlfaWQgPSBwLmlkIEFORCBwLnJvbGUgPSAnSFInXG4gICAgICAgICAgICBPUkRFUiBCWSBhLnBvc3RlZF9hdCBERVNDO1xuICAgICAgICBgO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShhbm5vdW5jZW1lbnRzUXVlcnkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0LnJvd3MgOiBbXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgZXJyb3IgZmV0Y2hpbmcgYW5ub3VuY2VtZW50czpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgYXR0ZW5kYW5jZSBkYXRhIGZvciBhIHNwZWNpZmljIGRhdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSAtIFRoZSBkYXRlIHRvIGZldGNoIGRhdGEgZm9yIGluICdZWVlZLU1NLUREJyBmb3JtYXQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3RbXT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYWlseUF0dGVuZGFuY2VEYXRhKGRhdGUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhdHRlbmRhbmNlUXVlcnkgPSBgXG4gICAgICAgICAgICBTRUxFQ1QgXG4gICAgICAgICAgICAgICAgYS5pZCwgXG4gICAgICAgICAgICAgICAgYS5maXJzdF9uYW1lIHx8ICcgJyB8fCBhLmxhc3RfbmFtZSBhcyBuYW1lLFxuICAgICAgICAgICAgICAgIGEucG9zaXRpb24sXG4gICAgICAgICAgICAgICAgYS5icmFuY2gsXG4gICAgICAgICAgICAgICAgdG9fY2hhcihhdHQudGltZV9pbiwgJ0hIMjQ6TUknKSBhcyBcInRpbWVJblwiLFxuICAgICAgICAgICAgICAgIHRvX2NoYXIoYXR0LnRpbWVfb3V0LCAnSEgyNDpNSScpIGFzIFwidGltZU91dFwiLFxuICAgICAgICAgICAgICAgIGF0dC5zdGF0dXNcbiAgICAgICAgICAgIEZST00gYWNjb3VudHMgYVxuICAgICAgICAgICAgTEVGVCBKT0lOIGF0dGVuZGFuY2UgYXR0IE9OIGEuaWQgPSBhdHQuYWNjb3VudF9pZCBBTkQgYXR0LmF0dGVuZGFuY2VfZGF0ZSA9ICQxXG4gICAgICAgICAgICBXSEVSRSBhLnN0YXR1cyA9ICdBY3RpdmUnIEFORCBhLnJvbGUgPSAnRW1wbG95ZWUnXG4gICAgICAgICAgICBPUkRFUiBCWSBhLmxhc3RfbmFtZSwgYS5maXJzdF9uYW1lO1xuICAgICAgICBgO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShhdHRlbmRhbmNlUXVlcnksIFtkYXRlXSk7XG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gW107XG4gICAgICAgIHJldHVybiByZXN1bHQucm93cy5tYXAocm93ID0+ICh7XG4gICAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAgICBzdGF0dXM6IHJvdy5zdGF0dXMgfHwgJ0Fic2VudCdcbiAgICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvciBmZXRjaGluZyBkYWlseSBhdHRlbmRhbmNlIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBGZXRjaGVzIGFsbCBlbXBsb3llZXMgZnJvbSB0aGUgZGF0YWJhc2UuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3RbXT59IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIGFycmF5IG9mIGVtcGxveWVlIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZW1wbG95ZWVzUXVlcnkgPSBgXG4gICAgICAgICAgICBTRUxFQ1QgXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSB8fCAnICcgfHwgbGFzdF9uYW1lIGFzIG5hbWUsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgYnJhbmNoLFxuICAgICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgRlJPTSBhY2NvdW50c1xuICAgICAgICAgICAgV0hFUkUgcm9sZSA9ICdFbXBsb3llZSdcbiAgICAgICAgICAgIE9SREVSIEJZIGxhc3RfbmFtZSwgZmlyc3RfbmFtZTtcbiAgICAgICAgYDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoZW1wbG95ZWVzUXVlcnkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0LnJvd3MgOiBbXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgZXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWVzOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8qKlxuICogRmV0Y2hlcyBhbGwgbGVhdmUgcmVxdWVzdHMgZnJvbSB0aGUgZGF0YWJhc2UuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3RbXT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMZWF2ZVJlcXVlc3RzKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGxlYXZlUmVxdWVzdHNRdWVyeSA9IGBcbiAgICAgICAgICAgIFNFTEVDVCBcbiAgICAgICAgICAgICAgICBsci5pZCxcbiAgICAgICAgICAgICAgICBhLmZpcnN0X25hbWUgfHwgJyAnIHx8IGEubGFzdF9uYW1lIGFzIFwiZW1wbG95ZWVOYW1lXCIsXG4gICAgICAgICAgICAgICAgYS5pZCBhcyBcImVtcGxveWVlSWRcIixcbiAgICAgICAgICAgICAgICBsci5sZWF2ZV90eXBlLFxuICAgICAgICAgICAgICAgIHRvX2NoYXIobHIuc3RhcnRfZGF0ZSwgJ1lZWVktTU0tREQnKSBhcyBcInN0YXJ0RGF0ZVwiLFxuICAgICAgICAgICAgICAgIHRvX2NoYXIobHIuZW5kX2RhdGUsICdZWVlZLU1NLUREJykgYXMgXCJlbmREYXRlXCIsXG4gICAgICAgICAgICAgICAgbHIucmVhc29uLFxuICAgICAgICAgICAgICAgIGxyLnN0YXR1c1xuICAgICAgICAgICAgRlJPTSBsZWF2ZV9yZXF1ZXN0cyBsclxuICAgICAgICAgICAgSk9JTiBhY2NvdW50cyBhIE9OIGxyLmFjY291bnRfaWQgPSBhLmlkXG4gICAgICAgICAgICBPUkRFUiBCWSBcbiAgICAgICAgICAgICAgICBDQVNFIGxyLnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICBXSEVOICdQZW5kaW5nJyBUSEVOIDFcbiAgICAgICAgICAgICAgICAgICAgV0hFTiAnQXBwcm92ZWQnIFRIRU4gMlxuICAgICAgICAgICAgICAgICAgICBXSEVOICdSZWplY3RlZCcgVEhFTiAzXG4gICAgICAgICAgICAgICAgICAgIEVMU0UgNFxuICAgICAgICAgICAgICAgIEVORCxcbiAgICAgICAgICAgICAgICBsci5zdGFydF9kYXRlIEFTQztcbiAgICAgICAgYDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkobGVhdmVSZXF1ZXN0c1F1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdC5yb3dzIDogW107XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIGVycm9yIGZldGNoaW5nIGxlYXZlIHJlcXVlc3RzOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8qKlxuICogRmV0Y2hlcyBhbGwgZW1wbG95ZWVzIGFuZCB0aGVpciBsYXRlc3QgcGF5c2xpcCBzdGF0dXMuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3RbXT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXNXaXRoUGF5c2xpcFN0YXR1cygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBlbXBsb3llZXNRdWVyeSA9IGBcbiAgICAgICAgICAgIFNFTEVDVCBcbiAgICAgICAgICAgICAgICBlLmlkLFxuICAgICAgICAgICAgICAgIGUuZmlyc3RfbmFtZSB8fCAnICcgfHwgZS5sYXN0X25hbWUgYXMgbmFtZSxcbiAgICAgICAgICAgICAgICBlLnBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIGUuZGVwYXJ0bWVudCxcbiAgICAgICAgICAgICAgICBDQVNFIFxuICAgICAgICAgICAgICAgICAgICBXSEVOIHAuaWQgSVMgTk9UIE5VTEwgVEhFTiAnR2VuZXJhdGVkJ1xuICAgICAgICAgICAgICAgICAgICBFTFNFICdQZW5kaW5nJ1xuICAgICAgICAgICAgICAgIEVORCBhcyBcInBheXNsaXBTdGF0dXNcIlxuICAgICAgICAgICAgRlJPTSBhY2NvdW50cyBlXG4gICAgICAgICAgICBMRUZUIEpPSU4gcGF5c2xpcHMgcCBPTiBlLmlkID0gcC5hY2NvdW50X2lkIFxuICAgICAgICAgICAgICAgIEFORCBwLnBlcmlvZF9zdGFydCA+PSBkYXRlX3RydW5jKCdtb250aCcsIGN1cnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgICBBTkQgcC5wZXJpb2RfZW5kIDw9IChkYXRlX3RydW5jKCdtb250aCcsIGN1cnJlbnRfZGF0ZSkgKyBpbnRlcnZhbCAnMSBtb250aCAtIDEgZGF5JylcbiAgICAgICAgICAgIFdIRVJFIGUuc3RhdHVzID0gJ0FjdGl2ZScgQU5EIGUucm9sZSA9ICdFbXBsb3llZSdcbiAgICAgICAgICAgIE9SREVSIEJZIGUubGFzdF9uYW1lLCBlLmZpcnN0X25hbWU7XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGVtcGxveWVlc1F1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdC5yb3dzIDogW107XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIGVycm9yIGZldGNoaW5nIGVtcGxveWVlIHBheXNsaXAgc3RhdHVzOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8qKlxuICogRmV0Y2hlcyBhbGwgYWN0aXZlIGVtcGxveWVlcyB0byBiZSBzY2hlZHVsZWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3RbXT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXNGb3JTY2hlZHVsaW5nKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGVtcGxveWVlc1F1ZXJ5ID0gYFxuICAgICAgICAgICAgU0VMRUNUIGlkLCBmaXJzdF9uYW1lIHx8ICcgJyB8fCBsYXN0X25hbWUgYXMgbmFtZVxuICAgICAgICAgICAgRlJPTSBhY2NvdW50c1xuICAgICAgICAgICAgV0hFUkUgc3RhdHVzID0gJ0FjdGl2ZScgQU5EIHJvbGUgPSAnRW1wbG95ZWUnXG4gICAgICAgICAgICBPUkRFUiBCWSBsYXN0X25hbWUsIGZpcnN0X25hbWU7XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGVtcGxveWVlc1F1ZXJ5KTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChlbXAgPT4gKHsuLi5lbXAsIHNoaWZ0OiAnOTowMCAtIDE3OjAwJ30pKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWVzIGZvciBzY2hlZHVsaW5nOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8qKlxuICogRmV0Y2hlcyB0aGUgZGFzaGJvYXJkIGRhdGEgZm9yIGEgc3BlY2lmaWMgZW1wbG95ZWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZW1wbG95ZWVJZCAtIFRoZSBJRCBvZiB0aGUgZW1wbG95ZWUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7ZW1wbG95ZWU6IG9iamVjdCwgYW5ub3VuY2VtZW50czogb2JqZWN0W119Pn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlRGFzaGJvYXJkRGF0YShlbXBsb3llZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZW1wbG95ZWVRdWVyeSA9IFwiU0VMRUNUIGlkIGFzIFxcXCJlbXBsb3llZUlkXFxcIiwgZmlyc3RfbmFtZSB8fCAnICcgfHwgbGFzdF9uYW1lIGFzIG5hbWUsIHBvc2l0aW9uLCBkZXBhcnRtZW50LCBlbWFpbCBGUk9NIGFjY291bnRzIFdIRVJFIGlkID0gJDEgQU5EIHJvbGUgPSAnRW1wbG95ZWUnXCI7XG4gICAgICAgIGNvbnN0IGFubm91bmNlbWVudHNRdWVyeSA9IFwiU0VMRUNUIGlkLCB0aXRsZSwgY29udGVudCwgdG9fY2hhcihwb3N0ZWRfYXQsICdNb250aCBERCwgWVlZWScpIGFzIGRhdGUgRlJPTSBhbm5vdW5jZW1lbnRzIFdIRVJFIHN0YXR1cyA9ICdQdWJsaXNoZWQnIE9SREVSIEJZIHBvc3RlZF9hdCBERVNDIExJTUlUIDVcIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFtlbXBsb3llZVJlc3VsdCwgYW5ub3VuY2VtZW50c1Jlc3VsdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBxdWVyeShlbXBsb3llZVF1ZXJ5LCBbZW1wbG95ZWVJZF0pLFxuICAgICAgICAgICAgcXVlcnkoYW5ub3VuY2VtZW50c1F1ZXJ5KVxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zdCBlbXBsb3llZURhdGEgPSBlbXBsb3llZVJlc3VsdD8ucm93c1swXSB8fCBudWxsO1xuICAgICAgICBpZihlbXBsb3llZURhdGEpe1xuICAgICAgICAgICAgLy8gVXNlIGV4aXN0aW5nIGVtYWlsIGZyb20gREIsIGRvbid0IGdlbmVyYXRlIGl0XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1wbG95ZWU6IGVtcGxveWVlRGF0YSxcbiAgICAgICAgICAgIGFubm91bmNlbWVudHM6IGFubm91bmNlbWVudHNSZXN1bHQ/LnJvd3MgfHwgW11cbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWUgZGFzaGJvYXJkIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgZW1wbG95ZWU6IG51bGwsIGFubm91bmNlbWVudHM6IFtdIH07XG4gICAgfVxufVxuXG5cbi8qKlxuICogRmV0Y2hlcyBhdHRlbmRhbmNlIGRhdGEgZm9yIGEgc3BlY2lmaWMgZW1wbG95ZWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZW1wbG95ZWVJZCAtIFRoZSBJRCBvZiB0aGUgZW1wbG95ZWUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VtbWFyeTogb2JqZWN0LCByZWNvcmRzOiBvYmplY3RbXX0+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZURhdGEoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IGRlZmF1bHREYXRhID0geyBcbiAgICAgICAgc3VtbWFyeTogeyBkYXlzQXR0ZW5kZWQ6IDAsIGxhdGVzOiAwLCBhYnNlbmNlczogMCwgdG90YWxIb3VyczogMCwgYXZhaWxhYmxlTGVhdmVzOiAwIH0sXG4gICAgICAgIHJlY29yZHM6IFtdIFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhdHRlbmRhbmNlUXVlcnkgPSBgXG4gICAgICAgICAgICBTRUxFQ1QgXG4gICAgICAgICAgICAgICAgYXR0ZW5kYW5jZV9kYXRlLCBcbiAgICAgICAgICAgICAgICB0b19jaGFyKHRpbWVfaW4sICdISDI0Ok1JJykgYXMgXCJ0aW1lX2luXCIsIFxuICAgICAgICAgICAgICAgIHRvX2NoYXIodGltZV9vdXQsICdISDI0Ok1JJykgYXMgXCJ0aW1lX291dFwiLCBcbiAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgIEZST00gYXR0ZW5kYW5jZVxuICAgICAgICAgICAgV0hFUkUgYWNjb3VudF9pZCA9ICQxIFxuICAgICAgICAgICAgICBBTkQgYXR0ZW5kYW5jZV9kYXRlID49IGRhdGVfdHJ1bmMoJ21vbnRoJywgY3VycmVudF9kYXRlKVxuICAgICAgICAgICAgT1JERVIgQlkgYXR0ZW5kYW5jZV9kYXRlIERFU0M7XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnN0IGxlYXZlQmFsYW5jZVF1ZXJ5ID0gYFxuICAgICAgICAgICAgU0VMRUNUIGF2YWlsYWJsZV9sZWF2ZXMgRlJPTSBhY2NvdW50cyBXSEVSRSBpZCA9ICQxO1xuICAgICAgICBgO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgW2F0dGVuZGFuY2VSZXN1bHQsIGxlYXZlUmVzdWx0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHF1ZXJ5KGF0dGVuZGFuY2VRdWVyeSwgW2VtcGxveWVlSWRdKSxcbiAgICAgICAgICAgIHF1ZXJ5KGxlYXZlQmFsYW5jZVF1ZXJ5LCBbZW1wbG95ZWVJZF0pXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICghYXR0ZW5kYW5jZVJlc3VsdCB8fCAhbGVhdmVSZXN1bHQpIHtcbiAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdERhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXR0ZW5kYW5jZVJlc3VsdC5yb3dzLm1hcChyID0+ICh7XG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShyLmF0dGVuZGFuY2VfZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIHllYXI6ICdudW1lcmljJ30pLFxuICAgICAgICAgICAgdGltZUluOiByLnRpbWVfaW4sXG4gICAgICAgICAgICB0aW1lT3V0OiByLnRpbWVfb3V0LFxuICAgICAgICAgICAgc3RhdHVzOiByLnN0YXR1c1xuICAgICAgICB9KSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGF5c0F0dGVuZGVkID0gMDtcbiAgICAgICAgbGV0IGxhdGVzID0gMDtcbiAgICAgICAgbGV0IGFic2VuY2VzID0gMDtcbiAgICAgICAgbGV0IHRvdGFsSG91cnMgPSAwO1xuXG4gICAgICAgIHJlY29yZHMuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5zdGF0dXMgPT09ICdQcmVzZW50JyB8fCByZWNvcmQuc3RhdHVzID09PSAnTGF0ZScpIHtcbiAgICAgICAgICAgICAgICBkYXlzQXR0ZW5kZWQrKztcbiAgICAgICAgICAgICAgICB0b3RhbEhvdXJzICs9IDg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjb3JkLnN0YXR1cyA9PT0gJ0xhdGUnKSB7XG4gICAgICAgICAgICAgICAgbGF0ZXMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhdmFpbGFibGVMZWF2ZXMgPSBsZWF2ZVJlc3VsdD8ucm93cz8uWzBdPy5hdmFpbGFibGVfbGVhdmVzID8/IDA7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSB7IGRheXNBdHRlbmRlZCwgbGF0ZXMsIGFic2VuY2VzLCB0b3RhbEhvdXJzLCBhdmFpbGFibGVMZWF2ZXMgfTtcblxuICAgICAgICByZXR1cm4geyBzdW1tYXJ5LCByZWNvcmRzIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIEVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGE7XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgcGFzdCBsZWF2ZSByZXF1ZXN0cyBmb3IgYSBnaXZlbiBlbXBsb3llZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlbXBsb3llZUlkIC0gVGhlIElEIG9mIHRoZSBlbXBsb3llZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdFtdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhc3RMZWF2ZVJlcXVlc3RzKGVtcGxveWVlSWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXN0UmVxdWVzdHNRdWVyeSA9IGBcbiAgICAgICAgICAgIFNFTEVDVCBcbiAgICAgICAgICAgICAgICBpZCwgXG4gICAgICAgICAgICAgICAgbGVhdmVfdHlwZSwgXG4gICAgICAgICAgICAgICAgdG9fY2hhcihzdGFydF9kYXRlLCAnWVlZWS1NTS1ERCcpIGFzIFwic3RhcnREYXRlXCIsIFxuICAgICAgICAgICAgICAgIHRvX2NoYXIoZW5kX2RhdGUsICdZWVlZLU1NLUREJykgYXMgXCJlbmREYXRlXCIsIFxuICAgICAgICAgICAgICAgIHN0YXR1cyBcbiAgICAgICAgICAgIEZST00gbGVhdmVfcmVxdWVzdHMgXG4gICAgICAgICAgICBXSEVSRSBhY2NvdW50X2lkID0gJDEgXG4gICAgICAgICAgICBPUkRFUiBCWSBzdGFydF9kYXRlIERFU0M7XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KHBhc3RSZXF1ZXN0c1F1ZXJ5LCBbZW1wbG95ZWVJZF0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0LnJvd3MgOiBbXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgZXJyb3IgZmV0Y2hpbmcgbGVhdmUgcmVxdWVzdHM6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGxlYXZlIHJlcXVlc3QgaW4gdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHtvYmplY3R9IGxlYXZlUmVxdWVzdCAtIFRoZSBsZWF2ZSByZXF1ZXN0IGRhdGEuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxlYXZlUmVxdWVzdChsZWF2ZVJlcXVlc3QpIHtcbiAgICBjb25zdCB7IGVtcGxveWVlSWQsIGxlYXZlVHlwZSwgc3RhcnREYXRlLCBlbmREYXRlLCByZWFzb24gfSA9IGxlYXZlUmVxdWVzdDtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBpbnNlcnRRdWVyeSA9IGBcbiAgICAgICAgICAgIElOU0VSVCBJTlRPIGxlYXZlX3JlcXVlc3RzIChhY2NvdW50X2lkLCBsZWF2ZV90eXBlLCBzdGFydF9kYXRlLCBlbmRfZGF0ZSwgcmVhc29uKVxuICAgICAgICAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpO1xuICAgICAgICBgO1xuICAgICAgICBhd2FpdCBxdWVyeShpbnNlcnRRdWVyeSwgW2VtcGxveWVlSWQsIGxlYXZlVHlwZSwgc3RhcnREYXRlLCBlbmREYXRlLCByZWFzb25dKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgZXJyb3IgY3JlYXRpbmcgbGVhdmUgcmVxdWVzdDpcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGxlYXZlIHJlcXVlc3QgaW4gZGF0YWJhc2UuXCIpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBGZXRjaGVzIHRoZSBwYXkgcGVyaW9kcyBmb3IgdGhlIHNwZWNpZmllZCBlbXBsb3llZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlbXBsb3llZUlkIC0gVGhlIElEIG9mIHRoZSBlbXBsb3llZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdFtdPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgcGF5IHBlcmlvZHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXlQZXJpb2RzKGVtcGxveWVlSWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShcbiAgICAgICAgICAgIGBTRUxFQ1QgXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgcGVyaW9kX3N0YXJ0LFxuICAgICAgICAgICAgICAgIHBlcmlvZF9lbmQsXG4gICAgICAgICAgICAgICAgdG9fY2hhcihwYXlfZGF0ZSwgJ01vbnRoIERELCBZWVlZJykgYXMgXCJwYXlEYXRlXCIsXG4gICAgICAgICAgICAgICAgZWFybmluZ3MsXG4gICAgICAgICAgICAgICAgZGVkdWN0aW9ucyxcbiAgICAgICAgICAgICAgICBuZXRfcGF5XG4gICAgICAgICAgICAgRlJPTSBwYXlzbGlwcyBcbiAgICAgICAgICAgICBXSEVSRSBhY2NvdW50X2lkID0gJDEgXG4gICAgICAgICAgICAgT1JERVIgQlkgcGVyaW9kX3N0YXJ0IERFU0NgLFxuICAgICAgICAgICAgW2VtcGxveWVlSWRdXG4gICAgICAgICk7XG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gW107XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFBlcmlvZHMgPSByZXN1bHQucm93cy5tYXAocCA9PiAoe1xuICAgICAgICAgICAgLi4ucCxcbiAgICAgICAgICAgIHBlcmlvZDogYCR7bmV3IERhdGUocC5wZXJpb2Rfc3RhcnQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAtICR7bmV3IERhdGUocC5wZXJpb2RfZW5kKS50b0xvY2FsZURhdGVTdHJpbmcoKX1gXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFBlcmlvZHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBwYXkgcGVyaW9kczpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgdGhlIHNjaGVkdWxlIGZvciBhIGdpdmVuIGVtcGxveWVlIGZvciB0aGUgY3VycmVudCB3ZWVrLlxuICogQHBhcmFtIHtzdHJpbmd9IGVtcGxveWVlSWQgVGhlIElEIG9mIHRoZSBlbXBsb3llZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdFtdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNjaGVkdWxlKGVtcGxveWVlSWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzY2hlZHVsZVF1ZXJ5ID0gYFxuICAgICAgICAgICAgU0VMRUNUIHNjaGVkdWxlX2RhdGEgXG4gICAgICAgICAgICBGUk9NIHNjaGVkdWxlc1xuICAgICAgICAgICAgV0hFUkUgYWNjb3VudF9pZCA9ICQxIFxuICAgICAgICAgICAgICBBTkQgd2Vla19zdGFydF9kYXRlID0gZGF0ZV90cnVuYygnd2VlaycsIGN1cnJlbnRfZGF0ZSk7XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KHNjaGVkdWxlUXVlcnksIFtlbXBsb3llZUlkXSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJvd3MubGVuZ3RoID4gMCAmJiByZXN1bHQucm93c1swXS5zY2hlZHVsZV9kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJvd3NbMF0uc2NoZWR1bGVfZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIGVycm9yIGZldGNoaW5nIHNjaGVkdWxlOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8qKlxuICogRmV0Y2hlcyB0aGUgZGV0YWlscyBmb3IgYSBzcGVjaWZpYyByZXBvcnQuXG4gKiBJbiB0aGlzIG1vY2sgdmVyc2lvbiwgaXQgcmV0dXJucyBudWxsLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gVGhlIElEIG9mIHRoZSByZXBvcnQgdG8gZmV0Y2guXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxudWxsPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBudWxsLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3J0RGV0YWlscyhpZCkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIEluIGEgcmVhbCBhcHBsaWNhdGlvbiwgdGhpcyB3b3VsZCBxdWVyeSB0aGUgZGF0YWJhc2UuXG4gICAgICAgIC8vIEZvciBub3csIHdlIHJldHVybiBudWxsIHRvIHNpbXVsYXRlIGEgcmVwb3J0IG5vdCBiZWluZyBmb3VuZFxuICAgICAgICAvLyB3aGljaCBkZW1vbnN0cmF0ZXMgdGhlIFVJJ3MgaGFuZGxpbmcgb2YgdGhpcyBjYXNlLlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3IgZmV0Y2hpbmcgcmVwb3J0IGRldGFpbHM6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgYWxsIHBlbmRpbmcgZW1wbG95ZWUgYXBwcm92YWxzIGZyb20gdGhlIGRhdGFiYXNlLlxuICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0W10+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVuZGluZ0VtcGxveWVlQXBwcm92YWxzKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgICAgIFNFTEVDVCBcbiAgICAgICAgICAgICAgICBpZCwgXG4gICAgICAgICAgICAgICAgJ09saXZpYSBDaGVuIChIUiknIGFzIFwic3VibWl0dGVkQnlcIiwgXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSB8fCAnICcgfHwgbGFzdF9uYW1lIGFzIFwiZW1wbG95ZWVOYW1lXCIsIFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLCBcbiAgICAgICAgICAgICAgICB0b19jaGFyKGRhdGVfaGlyZWQsICdZWVlZLU1NLUREJykgYXMgXCJzdWJtaXNzaW9uRGF0ZVwiXG4gICAgICAgICAgICBGUk9NIGFjY291bnRzIFxuICAgICAgICAgICAgV0hFUkUgc3RhdHVzID0gJ1BlbmRpbmcgQXBwcm92YWwnXG4gICAgICAgICAgICBPUkRFUiBCWSBkYXRlX2hpcmVkIERFU0NcbiAgICAgICAgYCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ/LnJvd3MgPz8gW107XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIEVycm9yIGZldGNoaW5nIHBlbmRpbmcgYXBwcm92YWxzOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8qKlxuICogQXBwcm92ZXMgYSBwZW5kaW5nIGVtcGxveWVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVtcGxveWVlSWQgVGhlIElEIG9mIHRoZSBlbXBsb3llZSB0byBhcHByb3ZlLlxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHByb3ZlRW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIGNvbnNvbGUubG9nKGBBcHByb3ZpbmcgZW1wbG95ZWUgJHtlbXBsb3llZUlkfWApO1xuICAgIC8vIEluIGEgcmVhbCBhcHAsIHlvdSB3b3VsZCBydW4gYW4gVVBEQVRFIHF1ZXJ5OlxuICAgIGF3YWl0IHF1ZXJ5KFwiVVBEQVRFIGFjY291bnRzIFNFVCBzdGF0dXMgPSAnQWN0aXZlJyBXSEVSRSBpZCA9ICQxXCIsIFtlbXBsb3llZUlkXSk7XG59XG5cbi8qKlxuICogUmVqZWN0cyBhIHBlbmRpbmcgZW1wbG95ZWUuXG4gKiBJbiB0aGlzIG1vY2sgdmVyc2lvbiwgaXQganVzdCBzaW11bGF0ZXMgc3VjY2VzcyB3aXRob3V0IGEgZGF0YWJhc2Ugd3JpdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZW1wbG95ZWVJZCBUaGUgSUQgb2YgdGhlIGVtcGxveWVlIHRvIHJlamVjdC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVqZWN0RW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIGNvbnNvbGUubG9nKGBSZWplY3RpbmcgZW1wbG95ZWUgJHtlbXBsb3llZUlkfWApO1xuICAgIC8vIEluIGEgcmVhbCBhcHAsIHlvdSB3b3VsZCBydW4gYSBERUxFVEUgcXVlcnkgb3IgdXBkYXRlIHN0YXR1cyB0byAnUmVqZWN0ZWQnOlxuICAgIGF3YWl0IHF1ZXJ5KFwiREVMRVRFIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMSBBTkQgc3RhdHVzID0gJ1BlbmRpbmcgQXBwcm92YWwnXCIsIFtlbXBsb3llZUlkXSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQTBjc0IifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$daa4f2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:daa4f2 [app-client] (ecmascript) <text/javascript>");
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
            const fetchData = {
                "PendingApprovalsPage.useEffect.fetchData": async ()=>{
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$daa4f2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPendingEmployeeApprovals"])();
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
                lineNumber: 104,
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
                                lineNumber: 109,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "Review and act on new employee profiles submitted by HR."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                        lineNumber: 108,
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
                                                lineNumber: 117,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Employee Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 118,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Position"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 119,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Submission Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 120,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 121,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                        lineNumber: 116,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                    lineNumber: 115,
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
                                                        lineNumber: 128,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: req.employeeName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: req.position
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 131,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: req.submissionDate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 132,
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
                                                                                    lineNumber: 138,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                " View Details"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                            lineNumber: 137,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 136,
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
                                                                                        lineNumber: 143,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                                                        children: "Review the details of this new employee submission."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 144,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 142,
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
                                                                                                lineNumber: 149,
                                                                                                columnNumber: 64
                                                                                            }, this),
                                                                                            " ",
                                                                                            req.submittedBy
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 149,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                children: "Position:"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                                lineNumber: 150,
                                                                                                columnNumber: 64
                                                                                            }, this),
                                                                                            " ",
                                                                                            req.position
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 150,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                children: "Submission Date:"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                                lineNumber: 151,
                                                                                                columnNumber: 64
                                                                                            }, this),
                                                                                            " ",
                                                                                            req.submissionDate
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 151,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 148,
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
                                                                                        lineNumber: 155,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                    lineNumber: 154,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 153,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                lineNumber: 135,
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
                                                                                    lineNumber: 163,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                " Approve"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                            lineNumber: 162,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 161,
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
                                                                                        lineNumber: 168,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                                        children: "This action will approve the new employee and create their profile."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 169,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 167,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                                        children: "Cancel"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 174,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                                        onClick: ()=>handleApprove(req.id),
                                                                                        children: "Approve"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 175,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 173,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                lineNumber: 160,
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
                                                                                    lineNumber: 182,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                " Reject"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                            lineNumber: 181,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 180,
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
                                                                                        lineNumber: 187,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                                        children: "This action will reject the new employee submission. This cannot be undone."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 188,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 186,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                                        children: "Cancel"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 193,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                                        onClick: ()=>handleReject(req.id),
                                                                                        children: "Reject"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 194,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                        lineNumber: 185,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                lineNumber: 179,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                        lineNumber: 134,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 133,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, req.id, true, {
                                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                                            lineNumber: 126,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                            lineNumber: 114,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-center",
                            children: "No pending employee approvals."
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/approvals/page.jsx",
                            lineNumber: 205,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/approvals/page.jsx",
                lineNumber: 107,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/approvals/page.jsx",
        lineNumber: 103,
        columnNumber: 9
    }, this);
}
_s(PendingApprovalsPage, "sEB6tmvfYAEjmI2+BSoUQ0NS3jw=", false, function() {
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

//# sourceMappingURL=src_eb9609e0._.js.map