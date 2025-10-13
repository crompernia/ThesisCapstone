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
"[project]/src/components/ui/textarea.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview Defines the Textarea component.
 * It is a multi-line text input field with styling that matches the application's theme.
 */ __turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
/**
 * The Textarea component.
 * @param {React.ComponentProps<'textarea'>} props - The properties for the textarea element.
 * @returns {JSX.Element} The rendered textarea element.
 */ const Textarea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.jsx",
        lineNumber: 17,
        columnNumber: 7
    }, this);
});
_c1 = Textarea;
Textarea.displayName = 'Textarea';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
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
"[project]/src/lib/data:229591 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0081b652a1ba97ae17200b5330a84c1eaee2045820":"getPastAnnouncements"},"src/lib/data.js",""] */ __turbopack_context__.s({
    "getPastAnnouncements": (()=>getPastAnnouncements)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getPastAnnouncements = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0081b652a1ba97ae17200b5330a84c1eaee2045820", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPastAnnouncements"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIGZvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGZvcm1hdCwgZm9ybWF0RGlzdGFuY2VUb05vdywgYWRkRGF5cywgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJztcblxuLy8gLS0tIE1PQ0sgREFUQSAtLS1cblxubGV0IE1PQ0tfQUNDT1VOVFMgPSBbXG4gICAgeyBpZDogJ0VNUC0wMDEyMycsIGZpcnN0X25hbWU6ICdNYXJpYScsIGxhc3RfbmFtZTogJ1JvZHJpZ3VleicsIGVtYWlsOiAnbWFyaWEucm9kcmlndWV6QGV4YW1wbGUuY29tJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcsIHJvbGU6ICdFbXBsb3llZScsIHBvc2l0aW9uOiAnU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyJywgZGVwYXJ0bWVudDogJ1RlY2hub2xvZ3knLCBicmFuY2g6ICdIZWFkcXVhcnRlcnMnLCBzdGF0dXM6ICdBY3RpdmUnLCBkYXRlX2hpcmVkOiAnMjAyMi0wMS0xNScsIGF2YWlsYWJsZV9sZWF2ZXM6IDEyLCBnZW5kZXI6ICdGZW1hbGUnLCBkYXRlX29mX2JpcnRoOiAnMTk5MC0wNS0yMCcsIHNzc19udW1iZXI6ICcwMC0wMDAwMDAwLTAnLCBwaGlsaGVhbHRoX251bWJlcjogJzAwLTAwMDAwMDAwMC0wJywgcGFnaWJpZ19udW1iZXI6ICcwMDAwLTAwMDAtMDAwMCcsIHRpbjogJzAwMC0wMDAtMDAwLTAwMCcgfSxcbiAgICB7IGlkOiAnRU1QLTAwMTI0JywgZmlyc3RfbmFtZTogJ0RhdmlkJywgbGFzdF9uYW1lOiAnTGVlJywgZW1haWw6ICdkYXZpZC5sZWVAZXhhbXBsZS5jb20nLCBwYXNzd29yZDogJ3Bhc3N3b3JkJywgcm9sZTogJ0VtcGxveWVlJywgcG9zaXRpb246ICdQcm9qZWN0IE1hbmFnZXInLCBkZXBhcnRtZW50OiAnTWFuYWdlbWVudCcsIGJyYW5jaDogJ0hlYWRxdWFydGVycycsIHN0YXR1czogJ0FjdGl2ZScsIGRhdGVfaGlyZWQ6ICcyMDIxLTAzLTIwJywgYXZhaWxhYmxlX2xlYXZlczogMTUsIGdlbmRlcjogJ01hbGUnLCBkYXRlX29mX2JpcnRoOiAnMTk4OC0xMS0xMicgfSxcbiAgICB7IGlkOiAnRU1QLTAwMTI1JywgZmlyc3RfbmFtZTogJ1NhcmFoJywgbGFzdF9uYW1lOiAnQ2hlbicsIGVtYWlsOiAnc2FyYWguY2hlbkBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnRW1wbG95ZWUnLCBwb3NpdGlvbjogJ1VYIERlc2lnbmVyJywgZGVwYXJ0bWVudDogJ0Rlc2lnbicsIGJyYW5jaDogJ0Rvd250b3duIE9mZmljZScsIHN0YXR1czogJ0FjdGl2ZScsIGRhdGVfaGlyZWQ6ICcyMDIzLTA1LTEwJywgYXZhaWxhYmxlX2xlYXZlczogMTAsIGdlbmRlcjogJ0ZlbWFsZScsIGRhdGVfb2ZfYmlydGg6ICcxOTk1LTAyLTI1JyB9LFxuICAgIHsgaWQ6ICdFTVAtMDAxMjYnLCBmaXJzdF9uYW1lOiAnSm9obicsIGxhc3RfbmFtZTogJ0RvZScsIGVtYWlsOiAnam9obi5kb2VAZXhhbXBsZS5jb20nLCBwYXNzd29yZDogJ3Bhc3N3b3JkJywgcm9sZTogJ0VtcGxveWVlJywgcG9zaXRpb246ICdRQSBUZXN0ZXInLCBkZXBhcnRtZW50OiAnVGVjaG5vbG9neScsIGJyYW5jaDogJ1JlbW90ZScsIHN0YXR1czogJ09uIExlYXZlJywgZGF0ZV9oaXJlZDogJzIwMjItMDgtMDEnLCBhdmFpbGFibGVfbGVhdmVzOiA1LCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5OTItMDctMzAnIH0sXG4gICAgeyBpZDogJ0hSLTAwMScsIGZpcnN0X25hbWU6ICdPbGl2aWEnLCBsYXN0X25hbWU6ICdDaGVuJywgZW1haWw6ICdvbGl2aWEuY2hlbi5ockBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnSFInLCBwb3NpdGlvbjogJ0hSIE1hbmFnZXInLCBkZXBhcnRtZW50OiAnSHVtYW4gUmVzb3VyY2VzJywgYnJhbmNoOiAnSGVhZHF1YXJ0ZXJzJywgc3RhdHVzOiAnQWN0aXZlJywgZGF0ZV9oaXJlZDogJzIwMjAtMDEtMDEnLCBhdmFpbGFibGVfbGVhdmVzOiAxNSwgZ2VuZGVyOiAnRmVtYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5ODUtMDktMDUnLCBtYW5hZ2VkX2JyYW5jaGVzOiBbJ0hlYWRxdWFydGVycycsICdEb3dudG93biBPZmZpY2UnXSB9LFxuICAgIHsgaWQ6ICdBRE0tMDAxJywgZmlyc3RfbmFtZTogJ1N1cGVyJywgbGFzdF9uYW1lOiAnQWRtaW4nLCBlbWFpbDogJ3N1cGVyQGV4YW1wbGUuY29tJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcsIHJvbGU6ICdBZG1pbicsIHBvc2l0aW9uOiAnU3lzdGVtIEFkbWluaXN0cmF0b3InLCBkZXBhcnRtZW50OiAnSVQnLCBicmFuY2g6ICdIZWFkcXVhcnRlcnMnLCBzdGF0dXM6ICdBY3RpdmUnLCBkYXRlX2hpcmVkOiAnMjAxOS0wMS0wMScsIGF2YWlsYWJsZV9sZWF2ZXM6IDIwLCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5ODAtMDEtMDEnIH0sXG4gICAgeyBpZDogJ0VNUC1QRU5ESU5HLTAxJywgZmlyc3RfbmFtZTogJ01pY2hhZWwnLCBsYXN0X25hbWU6ICdCcm93bicsIGVtYWlsOiAnbWljaGFlbC5icm93bkBleGFtcGxlLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCByb2xlOiAnRW1wbG95ZWUnLCBwb3NpdGlvbjogJ0p1bmlvciBEZXZlbG9wZXInLCBkZXBhcnRtZW50OiAnVGVjaG5vbG9neScsIGJyYW5jaDogJ0hlYWRxdWFydGVycycsIHN0YXR1czogJ1BlbmRpbmcgQXBwcm92YWwnLCBkYXRlX2hpcmVkOiAnMjAyNC0wMS0wMScsIGF2YWlsYWJsZV9sZWF2ZXM6IDE1LCBnZW5kZXI6ICdNYWxlJywgZGF0ZV9vZl9iaXJ0aDogJzE5OTgtMDYtMTUnIH0sXG5dO1xubGV0IE1PQ0tfQlJBTkNIRVMgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogJ0hlYWRxdWFydGVycycsIGNvb3JkaW5hdGVzOiAnMTQuNTU0NywgMTIxLjAyNDQnIH0sXG4gICAgeyBpZDogMiwgbmFtZTogJ0Rvd250b3duIE9mZmljZScsIGNvb3JkaW5hdGVzOiAnMTQuNTk5NSwgMTIwLjk4NDInIH0sXG4gICAgeyBpZDogMywgbmFtZTogJ1JlbW90ZScsIGNvb3JkaW5hdGVzOiAnTi9BJyB9LFxuXTtcbmxldCBNT0NLX1BPU0lUSU9OUyA9IFtcbiAgICB7IGlkOiAxLCB0aXRsZTogJ1NlbmlvciBTb2Z0d2FyZSBFbmdpbmVlcicsIHJhdGU6IDUwLjAwIH0sXG4gICAgeyBpZDogMiwgdGl0bGU6ICdQcm9qZWN0IE1hbmFnZXInLCByYXRlOiA1NS4wMCB9LFxuICAgIHsgaWQ6IDMsIHRpdGxlOiAnVVggRGVzaWduZXInLCByYXRlOiA0NS4wMCB9LFxuICAgIHsgaWQ6IDQsIHRpdGxlOiAnUUEgVGVzdGVyJywgcmF0ZTogMzUuMDAgfSxcbiAgICB7IGlkOiA1LCB0aXRsZTogJ0p1bmlvciBEZXZlbG9wZXInLCByYXRlOiAzMC4wMCB9LFxuICAgIHsgaWQ6IDYsIHRpdGxlOiAnSFIgTWFuYWdlcicsIHJhdGU6IDQ4LjAwIH0sXG4gICAgeyBpZDogNywgdGl0bGU6ICdTeXN0ZW0gQWRtaW5pc3RyYXRvcicsIHJhdGU6IDUyLjAwIH0sXG5dO1xuY29uc3QgTU9DS19TVFJVQ1RVUkUgPSB7XG4gICAgJ0hlYWRxdWFydGVycyc6IHtcbiAgICAgICAgJ1RlY2hub2xvZ3knOiBbJ1NlbmlvciBTb2Z0d2FyZSBFbmdpbmVlcicsICdKdW5pb3IgRGV2ZWxvcGVyJywgJ1FBIFRlc3RlciddLFxuICAgICAgICAnTWFuYWdlbWVudCc6IFsnUHJvamVjdCBNYW5hZ2VyJ10sXG4gICAgICAgICdIdW1hbiBSZXNvdXJjZXMnOiBbJ0hSIE1hbmFnZXInXSxcbiAgICAgICAgJ0lUJzogWydTeXN0ZW0gQWRtaW5pc3RyYXRvciddXG4gICAgfSxcbiAgICAnRG93bnRvd24gT2ZmaWNlJzoge1xuICAgICAgICAnRGVzaWduJzogWydVWCBEZXNpZ25lciddLFxuICAgICAgICAnU2FsZXMnOiBbJ1NhbGVzIEFzc29jaWF0ZSddLFxuICAgICAgICAnTWFya2V0aW5nJzogWydNYXJrZXRpbmcgU3BlY2lhbGlzdCddXG4gICAgfSxcbiAgICAnUmVtb3RlJzoge1xuICAgICAgICAnVGVjaG5vbG9neSc6IFsnU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyJywgJ1FBIFRlc3RlciddLFxuICAgICAgICAnRGVzaWduJzogWydVWCBEZXNpZ25lciddXG4gICAgfVxufTtcblxubGV0IE1PQ0tfQU5OT1VOQ0VNRU5UUyA9IFtdO1xubGV0IE1PQ0tfTEVBVkVfUkVRVUVTVFMgPSBbXTtcbmxldCBNT0NLX1NDSEVEVUxFUyA9IFtdO1xubGV0IE1PQ0tfQVRURU5EQU5DRSA9IFtdO1xubGV0IE1PQ0tfUEFZU0xJUFMgPSBbXTtcblxuLy8gLS0tIEVORCBNT0NLIERBVEEgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIUkRhc2hib2FyZERhdGEoKSB7XG4gIGNvbnN0IHRvdGFsRW1wbG95ZWVzID0gTU9DS19BQ0NPVU5UUy5maWx0ZXIoYSA9PiBhLnJvbGUgPT09ICdFbXBsb3llZScpLmxlbmd0aDtcbiAgY29uc3QgcGVuZGluZ0xlYXZlUmVxdWVzdHMgPSBNT0NLX0xFQVZFX1JFUVVFU1RTLmZpbHRlcihsciA9PiBsci5zdGF0dXMgPT09ICdQZW5kaW5nJykubGVuZ3RoO1xuXG4gIGNvbnN0IHN0YXRzID0gW1xuICAgICAgeyB0aXRsZTogJ1RvdGFsIEVtcGxveWVlcycsIHZhbHVlOiBTdHJpbmcodG90YWxFbXBsb3llZXMpLCBjaGFuZ2U6ICcnIH0sXG4gICAgICB7IHRpdGxlOiAnT24gVGltZSBQZXJjZW50YWdlJywgdmFsdWU6IGAwJWAsIGNoYW5nZTogJycgfSxcbiAgICAgIHsgdGl0bGU6ICdBY3RpdmUgSm9iIFBvc3RpbmdzJywgdmFsdWU6ICc0JywgY2hhbmdlOiAnRXh0ZXJuYWwgQVBJJyB9LFxuICAgICAgeyB0aXRsZTogJ1BlbmRpbmcgTGVhdmUgUmVxdWVzdHMnLCB2YWx1ZTogU3RyaW5nKHBlbmRpbmdMZWF2ZVJlcXVlc3RzKSwgY2hhbmdlOiAnJyB9LFxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgc3RhdHMsXG4gICAgcmVjZW50QWN0aXZpdGllczogW11cbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhc3RBbm5vdW5jZW1lbnRzKCkge1xuICAgIHJldHVybiBNT0NLX0FOTk9VTkNFTUVOVFMubWFwKGEgPT4ge1xuICAgICAgICBjb25zdCBwb3N0ZWRCeSA9IE1PQ0tfQUNDT1VOVFMuZmluZChhY2MgPT4gYWNjLmlkID09PSBhLnBvc3RlZF9ieV9pZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5hLFxuICAgICAgICAgICAgcG9zdGVkQnk6IHBvc3RlZEJ5ID8gYCR7Jyd9JHtwb3N0ZWRCeS5maXJzdF9uYW1lfSAke3Bvc3RlZEJ5Lmxhc3RfbmFtZX1gIDogJ1Vua25vd24nLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEucG9zdGVkX2F0KSwgJ3l5eXktTU0tZGQnKVxuICAgICAgICB9O1xuICAgIH0pLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIucG9zdGVkX2F0KSAtIG5ldyBEYXRlKGEucG9zdGVkX2F0KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBbm5vdW5jZW1lbnQodGl0bGUsIGNvbnRlbnQsIHN0YXR1cykge1xuICAgIGNvbnN0IGhyVXNlcklkID0gJ0hSLTAwMSc7XG4gICAgY29uc3QgbmV3QW5ub3VuY2VtZW50ID0ge1xuICAgICAgICBpZDogTU9DS19BTk5PVU5DRU1FTlRTLmxlbmd0aCArIDEsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBwb3N0ZWRfYnlfaWQ6IGhyVXNlcklkLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHBvc3RlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgfTtcbiAgICBNT0NLX0FOTk9VTkNFTUVOVFMucHVzaChuZXdBbm5vdW5jZW1lbnQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQW5ub3VuY2VtZW50KGlkKSB7XG4gICAgTU9DS19BTk5PVU5DRU1FTlRTID0gTU9DS19BTk5PVU5DRU1FTlRTLmZpbHRlcihhID0+IGEuaWQgIT09IGlkKTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFpbHlBdHRlbmRhbmNlRGF0YShkYXRlKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXMoKSB7XG4gICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFMuZmlsdGVyKGEgPT4gYS5yb2xlID09PSAnRW1wbG95ZWUnICYmIGEuc3RhdHVzICE9PSAnUGVuZGluZyBBcHByb3ZhbCcpLm1hcChhID0+ICh7XG4gICAgICAgIGlkOiBhLmlkLFxuICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgIGJyYW5jaDogYS5icmFuY2gsXG4gICAgICAgIHN0YXR1czogYS5zdGF0dXNcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZUJ5SWQoaWQpIHtcbiAgICBjb25zdCBlbXBsb3llZSA9IE1PQ0tfQUNDT1VOVFMuZmluZChhID0+IGEuaWQgPT09IGlkKTtcbiAgICBpZiAoIWVtcGxveWVlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmVtcGxveWVlLFxuICAgICAgICBuYW1lOiBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gLFxuICAgICAgICBkYXRlX2hpcmVkOiBmb3JtYXQobmV3IERhdGUoZW1wbG95ZWUuZGF0ZV9oaXJlZCksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIGRhdGVfb2ZfYmlydGg6IGZvcm1hdChuZXcgRGF0ZShlbXBsb3llZS5kYXRlX29mX2JpcnRoKSwgJ3l5eXktTU0tZGQnKSxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZCkge1xuICAgIGNvbnN0IGluaXRpYWxMZW5ndGggPSBNT0NLX0FDQ09VTlRTLmxlbmd0aDtcbiAgICBNT0NLX0FDQ09VTlRTID0gTU9DS19BQ0NPVU5UUy5maWx0ZXIoYSA9PiBhLmlkICE9PSBpZCk7XG4gICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFMubGVuZ3RoIDwgaW5pdGlhbExlbmd0aDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XG4gICAgcmV0dXJuIE1PQ0tfTEVBVkVfUkVRVUVTVFMubWFwKGxyID0+IHtcbiAgICAgICAgY29uc3QgZW1wbG95ZWUgPSBNT0NLX0FDQ09VTlRTLmZpbmQoYSA9PiBhLmlkID09PSBsci5hY2NvdW50X2lkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBsci5pZCxcbiAgICAgICAgICAgIGVtcGxveWVlSWQ6IGVtcGxveWVlLmlkLFxuICAgICAgICAgICAgZW1wbG95ZWVOYW1lOiBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgbGVhdmVfdHlwZTogbHIubGVhdmVfdHlwZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLnN0YXJ0X2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLmVuZF9kYXRlKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgICAgICAgIHJlYXNvbjogbHIucmVhc29uLFxuICAgICAgICAgICAgc3RhdHVzOiBsci5zdGF0dXNcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTGVhdmVSZXF1ZXN0U3RhdHVzKHJlcXVlc3RJZCwgc3RhdHVzKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IE1PQ0tfTEVBVkVfUkVRVUVTVFMuZmluZChsciA9PiBsci5pZCA9PT0gcmVxdWVzdElkKTtcbiAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICByZXF1ZXN0LnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXNXaXRoUGF5c2xpcFN0YXR1cygpIHtcbiAgICByZXR1cm4gTU9DS19BQ0NPVU5UU1xuICAgICAgICAuZmlsdGVyKGEgPT4gYS5yb2xlID09PSAnRW1wbG95ZWUnKVxuICAgICAgICAubWFwKGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzQmVuZWZpdHMgPSBhLnNzc19udW1iZXIgJiYgYS5waGlsaGVhbHRoX251bWJlciAmJiBhLnBhZ2liaWdfbnVtYmVyICYmIGEudGluO1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25EZXRhaWxzID0gTU9DS19QT1NJVElPTlMuZmluZChwID0+IHAudGl0bGUgPT09IGEucG9zaXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50OiBhLmRlcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgcmF0ZTogcG9zaXRpb25EZXRhaWxzID8gcG9zaXRpb25EZXRhaWxzLnJhdGUgOiAwLFxuICAgICAgICAgICAgICAgIHBheXNsaXBTdGF0dXM6ICdQZW5kaW5nJyxcbiAgICAgICAgICAgICAgICBiZW5lZml0c1N0YXR1czogaGFzQmVuZWZpdHMgPyAnQ29tcGxldGUnIDogJ0luY29tcGxldGUnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXNGb3JTY2hlZHVsaW5nKCkge1xuICAgIHJldHVybiBNT0NLX0FDQ09VTlRTXG4gICAgICAgIC5maWx0ZXIoYSA9PiBhLnJvbGUgPT09ICdFbXBsb3llZScgJiYgYS5zdGF0dXMgPT09ICdBY3RpdmUnKVxuICAgICAgICAubWFwKGEgPT4gKHtcbiAgICAgICAgICAgIGlkOiBhLmlkLFxuICAgICAgICAgICAgbmFtZTogYCR7YS5maXJzdF9uYW1lfSAke2EubGFzdF9uYW1lfWAsXG4gICAgICAgICAgICBzaGlmdDogJzk6MDAgLSAxNzowMCdcbiAgICAgICAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVEYXNoYm9hcmREYXRhKGVtcGxveWVlSWQpIHtcbiAgICBjb25zdCBlbXBsb3llZSA9IE1PQ0tfQUNDT1VOVFMuZmluZChhID0+IGEuaWQgPT09IGVtcGxveWVlSWQpO1xuICAgIGlmICghZW1wbG95ZWUpIHtcbiAgICAgICAgcmV0dXJuIHsgZW1wbG95ZWU6IHsgbmFtZTogJ0VtcGxveWVlIE5vdCBGb3VuZCcgfSwgYW5ub3VuY2VtZW50czogW10gfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1wbG95ZWU6IHtcbiAgICAgICAgICAgIGVtcGxveWVlSWQ6IGVtcGxveWVlLmlkLFxuICAgICAgICAgICAgbmFtZTogYCR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBlbXBsb3llZS5wb3NpdGlvbixcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IGVtcGxveWVlLmRlcGFydG1lbnQsXG4gICAgICAgICAgICBlbWFpbDogZW1wbG95ZWUuZW1haWwsXG4gICAgICAgIH0sXG4gICAgICAgIGFubm91bmNlbWVudHM6IFtdXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF0dGVuZGFuY2VEYXRhKGVtcGxveWVlSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdW1tYXJ5OiB7IGRheXNBdHRlbmRlZDogMCwgbGF0ZXM6IDAsIGFic2VuY2VzOiAwLCB0b3RhbEhvdXJzOiAwLCBhdmFpbGFibGVMZWF2ZXM6IDAgfSxcbiAgICAgICAgcmVjb3JkczogW11cbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFzdExlYXZlUmVxdWVzdHMoZW1wbG95ZWVJZCkge1xuICAgIHJldHVybiBNT0NLX0xFQVZFX1JFUVVFU1RTXG4gICAgICAgIC5maWx0ZXIobHIgPT4gbHIuYWNjb3VudF9pZCA9PT0gZW1wbG95ZWVJZClcbiAgICAgICAgLm1hcChsciA9PiAoe1xuICAgICAgICAgICAgaWQ6IGxyLmlkLFxuICAgICAgICAgICAgbGVhdmVfdHlwZTogbHIubGVhdmVfdHlwZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLnN0YXJ0X2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLmVuZF9kYXRlKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgICAgICAgIHN0YXR1czogbHIuc3RhdHVzLFxuICAgICAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMZWF2ZVJlcXVlc3QoZGF0YSkge1xuICAgIGNvbnN0IHsgZW1wbG95ZWVJZCwgbGVhdmVUeXBlLCBzdGFydERhdGUsIGVuZERhdGUsIHJlYXNvbiB9ID0gZGF0YTtcbiAgICBjb25zdCBuZXdSZXF1ZXN0ID0ge1xuICAgICAgICBpZDogTU9DS19MRUFWRV9SRVFVRVNUUy5sZW5ndGggKyAxLFxuICAgICAgICBhY2NvdW50X2lkOiBlbXBsb3llZUlkLFxuICAgICAgICBsZWF2ZV90eXBlOiBsZWF2ZVR5cGUsXG4gICAgICAgIHN0YXJ0X2RhdGU6IHN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kX2RhdGU6IGVuZERhdGUsXG4gICAgICAgIHJlYXNvbjogcmVhc29uLFxuICAgICAgICBzdGF0dXM6ICdQZW5kaW5nJ1xuICAgIH07XG4gICAgTU9DS19MRUFWRV9SRVFVRVNUUy5wdXNoKG5ld1JlcXVlc3QpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBheVBlcmlvZHMoZW1wbG95ZWVJZCkge1xuICAgIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNjaGVkdWxlKGVtcGxveWVlSWQpIHtcbiAgICByZXR1cm4gW107XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBlbmRpbmdFbXBsb3llZUFwcHJvdmFscygpIHtcbiAgICAgcmV0dXJuIE1PQ0tfQUNDT1VOVFNcbiAgICAgICAgLmZpbHRlcihhID0+IGEuc3RhdHVzID09PSAnUGVuZGluZyBBcHByb3ZhbCcpXG4gICAgICAgIC5tYXAoYSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgICAgICBlbXBsb3llZU5hbWU6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgICAgICBzdWJtaXR0ZWRCeTogJ09saXZpYSBDaGVuJyxcbiAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBmb3JtYXQobmV3IERhdGUoYS5kYXRlX2hpcmVkKSwgJ3l5eXktTU0tZGQnKVxuICAgICAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHByb3ZlRW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IGVtcGxveWVlID0gTU9DS19BQ0NPVU5UUy5maW5kKGEgPT4gYS5pZCA9PT0gZW1wbG95ZWVJZCk7XG4gICAgaWYoZW1wbG95ZWUpIGVtcGxveWVlLnN0YXR1cyA9ICdBY3RpdmUnO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVqZWN0RW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIE1PQ0tfQUNDT1VOVFMgPSBNT0NLX0FDQ09VTlRTLmZpbHRlcihhID0+IGEuaWQgIT09IGVtcGxveWVlSWQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVOYW1lKGVtcGxveWVlSWQpIHtcbiAgICBjb25zdCBlbXBsb3llZSA9IE1PQ0tfQUNDT1VOVFMuZmluZChhID0+IGEuaWQgPT09IGVtcGxveWVlSWQpO1xuICAgIHJldHVybiBlbXBsb3llZSA/IGAke2VtcGxveWVlLmZpcnN0X25hbWV9ICR7ZW1wbG95ZWUubGFzdF9uYW1lfWAgOiBcIlVua25vd24gRW1wbG95ZWVcIjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9ydERldGFpbHMocmVwb3J0SWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLy8gLS0tIEJyYW5jaCBBbGxvY2F0aW9uICYgTWFuYWdlbWVudCBGdW5jdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIclBlcnNvbm5lbCgpIHtcbiAgICByZXR1cm4gTU9DS19BQ0NPVU5UU1xuICAgICAgICAuZmlsdGVyKGEgPT4gYS5yb2xlID09PSAnSFInKVxuICAgICAgICAubWFwKGEgPT4gKHtcbiAgICAgICAgICAgIGlkOiBhLmlkLFxuICAgICAgICAgICAgbmFtZTogYCR7YS5maXJzdF9uYW1lfSAke2EubGFzdF9uYW1lfWAsXG4gICAgICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgICAgIG1hbmFnZWRfYnJhbmNoZXM6IGEubWFuYWdlZF9icmFuY2hlcyB8fCBbXVxuICAgICAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCcmFuY2hlcygpIHtcbiAgICByZXR1cm4gTU9DS19CUkFOQ0hFUztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJyYW5jaChicmFuY2hOYW1lLCBjb29yZGluYXRlcykge1xuICAgIGlmIChNT0NLX0JSQU5DSEVTLnNvbWUoYiA9PiBiLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gYnJhbmNoTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgYnJhbmNoIHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzLicpO1xuICAgIH1cbiAgICBjb25zdCBuZXdJZCA9IE1PQ0tfQlJBTkNIRVMubGVuZ3RoID4gMCA/IE1hdGgubWF4KC4uLk1PQ0tfQlJBTkNIRVMubWFwKGIgPT4gYi5pZCkpICsgMSA6IDE7XG4gICAgY29uc3QgbmV3QnJhbmNoID0geyBpZDogbmV3SWQsIG5hbWU6IGJyYW5jaE5hbWUsIGNvb3JkaW5hdGVzIH07XG4gICAgTU9DS19CUkFOQ0hFUy5wdXNoKG5ld0JyYW5jaCk7XG4gICAgcmV0dXJuIG5ld0JyYW5jaDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJyYW5jaChicmFuY2hJZCkge1xuICAgIGNvbnN0IGJyYW5jaEluVXNlID0gTU9DS19BQ0NPVU5UUy5zb21lKGhyID0+IGhyLm1hbmFnZWRfYnJhbmNoZXM/LmluY2x1ZGVzKE1PQ0tfQlJBTkNIRVMuZmluZChiID0+IGIuaWQgPT09IGJyYW5jaElkKT8ubmFtZSkpO1xuICAgIGlmIChicmFuY2hJblVzZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYnJhbmNoIGlzIGN1cnJlbnRseSBhc3NpZ25lZCB0byBIUiBwZXJzb25uZWwgYW5kIGNhbm5vdCBiZSBkZWxldGVkLicpO1xuICAgIH1cbiAgICBNT0NLX0JSQU5DSEVTID0gTU9DS19CUkFOQ0hFUy5maWx0ZXIoYiA9PiBiLmlkICE9PSBicmFuY2hJZCk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUhyQnJhbmNoQWxsb2NhdGlvbihocklkLCBicmFuY2hlcykge1xuICAgIGNvbnN0IGhyQWNjb3VudCA9IE1PQ0tfQUNDT1VOVFMuZmluZChhID0+IGEuaWQgPT09IGhySWQpO1xuICAgIGlmIChockFjY291bnQpIHtcbiAgICAgICAgaHJBY2NvdW50Lm1hbmFnZWRfYnJhbmNoZXMgPSBicmFuY2hlcztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJIUiBwZXJzb25uZWwgbm90IGZvdW5kLlwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZCwgZGF0YSkge1xuICAgIGNvbnN0IGluZGV4ID0gTU9DS19BQ0NPVU5UUy5maW5kSW5kZXgoYSA9PiBhLmlkID09PSBpZCk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0VtcGxveWVlIG5vdCBmb3VuZC4nIH07XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZEVtcGxveWVlID0ge1xuICAgICAgICAuLi5NT0NLX0FDQ09VTlRTW2luZGV4XSxcbiAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0TmFtZSxcbiAgICAgICAgbWlkZGxlX25hbWU6IGRhdGEubWlkZGxlTmFtZSxcbiAgICAgICAgZ2VuZGVyOiBkYXRhLmdlbmRlcixcbiAgICAgICAgZGF0ZV9vZl9iaXJ0aDogZGF0YS5kb2IsXG4gICAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxuICAgICAgICBkZXBhcnRtZW50OiBkYXRhLmRlcGFydG1lbnQsXG4gICAgICAgIGJyYW5jaDogZGF0YS5icmFuY2gsXG4gICAgICAgIGRhdGVfaGlyZWQ6IGRhdGEuaGlyZURhdGUsXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgICAvLyBBc3N1bWluZyBwaG9uZSBudW1iZXIgaXMgbm90IGRpcmVjdGx5IG9uIHRoZSBtYWluIGFjY291bnQgb2JqZWN0IGluIHRoaXMgbW9ja1xuICAgIH07XG5cbiAgICBNT0NLX0FDQ09VTlRTW2luZGV4XSA9IHVwZGF0ZWRFbXBsb3llZTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnRW1wbG95ZWUgdXBkYXRlZCBzdWNjZXNzZnVsbHkuJyB9O1xufVxuXG5cbi8vIC0tLSBQb3NpdGlvbnMgJiBSYXRlcyBGdW5jdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3NpdGlvbnMoKSB7XG4gICAgLy8gVGhpcyBub3cgcmV0dXJucyBhbGwgdW5pcXVlIHBvc2l0aW9uIHRpdGxlcyBhY3Jvc3MgYWxsIGRlcGFydG1lbnRzL2JyYW5jaGVzXG4gICAgY29uc3QgYWxsUG9zaXRpb25zID0gbmV3IFNldCgpO1xuICAgIE9iamVjdC52YWx1ZXMoTU9DS19TVFJVQ1RVUkUpLmZvckVhY2goZGVwYXJ0bWVudHMgPT4ge1xuICAgICAgICBPYmplY3QudmFsdWVzKGRlcGFydG1lbnRzKS5mb3JFYWNoKHBvc2l0aW9ucyA9PiB7XG4gICAgICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaChwID0+IGFsbFBvc2l0aW9ucy5hZGQocCkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxQb3NpdGlvbnMpLm1hcCgodGl0bGUsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEZpbmQgb3JpZ2luYWwgcmF0ZSBpZiBwb3NzaWJsZSwgb3RoZXJ3aXNlIGRlZmF1bHRcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQb3NpdGlvbiA9IE1PQ0tfUE9TSVRJT05TLmZpbmQocCA9PiBwLnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogaW5kZXggKyAxLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICByYXRlOiBvcmlnaW5hbFBvc2l0aW9uID8gb3JpZ2luYWxQb3NpdGlvbi5yYXRlIDogMFxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3NpdGlvbih0aXRsZSwgcmF0ZSkge1xuICAgIGlmIChNT0NLX1BPU0lUSU9OUy5zb21lKHAgPT4gcC50aXRsZS50b0xvd2VyQ2FzZSgpID09PSB0aXRsZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcG9zaXRpb24gd2l0aCB0aGlzIHRpdGxlIGFscmVhZHkgZXhpc3RzLicpO1xuICAgIH1cbiAgICBjb25zdCBuZXdJZCA9IE1PQ0tfUE9TSVRJT05TLmxlbmd0aCA+IDAgPyBNYXRoLm1heCguLi5NT0NLX1BPU0lUSU9OUy5tYXAocCA9PiBwLmlkKSkgKyAxIDogMTtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHsgaWQ6IG5ld0lkLCB0aXRsZSwgcmF0ZSB9O1xuICAgIE1PQ0tfUE9TSVRJT05TLnB1c2gobmV3UG9zaXRpb24pO1xuICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc2l0aW9uKHBvc2l0aW9uSWQpIHtcbiAgICBjb25zdCBwb3NpdGlvbkluVXNlID0gTU9DS19BQ0NPVU5UUy5zb21lKGFjYyA9PiBhY2MucG9zaXRpb24gPT09IE1PQ0tfUE9TSVRJT05TLmZpbmQocCA9PiBwLmlkID09PSBwb3NpdGlvbklkKT8udGl0bGUpO1xuICAgIGlmIChwb3NpdGlvbkluVXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBwb3NpdGlvbiBpcyBjdXJyZW50bHkgYXNzaWduZWQgdG8gZW1wbG95ZWVzIGFuZCBjYW5ub3QgYmUgZGVsZXRlZC4nKTtcbiAgICB9XG4gICAgTU9DS19QT1NJVElPTlMgPSBNT0NLX1BPU0lUSU9OUy5maWx0ZXIocCA9PiBwLmlkICE9PSBwb3NpdGlvbklkKTtcbn1cblxuLy8gLS0tIENhc2NhZGluZyBEcm9wZG93biBGdW5jdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZXBhcnRtZW50c0ZvckJyYW5jaChicmFuY2hOYW1lKSB7XG4gICAgaWYgKCFicmFuY2hOYW1lIHx8ICFNT0NLX1NUUlVDVFVSRVticmFuY2hOYW1lXSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhNT0NLX1NUUlVDVFVSRVticmFuY2hOYW1lXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3NpdGlvbnNGb3JEZXBhcnRtZW50KGRlcGFydG1lbnROYW1lKSB7XG4gICAgZm9yIChjb25zdCBicmFuY2ggaW4gTU9DS19TVFJVQ1RVUkUpIHtcbiAgICAgICAgaWYgKE1PQ0tfU1RSVUNUVVJFW2JyYW5jaF1bZGVwYXJ0bWVudE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gTU9DS19TVFJVQ1RVUkVbYnJhbmNoXVtkZXBhcnRtZW50TmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufVxuXG4gICAgIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2UkEyRXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hr/announcements/data:6d5afa [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"70c11b4e51180d8f9642412688db45cf9ac9031b55":"createAnnouncementAction"},"src/app/hr/announcements/actions.js",""] */ __turbopack_context__.s({
    "createAnnouncementAction": (()=>createAnnouncementAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createAnnouncementAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("70c11b4e51180d8f9642412688db45cf9ac9031b55", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createAnnouncementAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIGFubm91bmNlbWVudHMgcGFnZS5cbiAqL1xuJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBjcmVhdGVBbm5vdW5jZW1lbnQsIGRlbGV0ZUFubm91bmNlbWVudCB9IGZyb20gJ0AvbGliL2RhdGEnO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFubm91bmNlbWVudEFjdGlvbih0aXRsZSwgY29udGVudCwgc3RhdHVzKSB7XG4gICAgaWYgKCF0aXRsZSB8fCAhY29udGVudCB8fCAhc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVGl0bGUsIGNvbnRlbnQsIGFuZCBzdGF0dXMgYXJlIHJlcXVpcmVkLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY3JlYXRlQW5ub3VuY2VtZW50KHRpdGxlLCBjb250ZW50LCBzdGF0dXMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2hyL2Fubm91bmNlbWVudHMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQnKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBhbm5vdW5jZW1lbnQ6JywgZSk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSBhbm5vdW5jZW1lbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFubm91bmNlbWVudEFjdGlvbihpZCkge1xuICAgICBpZiAoIWlkKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnQW5ub3VuY2VtZW50IElEIGlzIHJlcXVpcmVkLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsZXRlQW5ub3VuY2VtZW50KGlkKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9oci9hbm5vdW5jZW1lbnRzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgYW5ub3VuY2VtZW50OicsIGUpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byBkZWxldGUgYW5ub3VuY2VtZW50LicgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFUQVFzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hr/announcements/data:4f4855 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40c6ede960f8c39f8d3f6b77178454537629dde43e":"deleteAnnouncementAction"},"src/app/hr/announcements/actions.js",""] */ __turbopack_context__.s({
    "deleteAnnouncementAction": (()=>deleteAnnouncementAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteAnnouncementAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c6ede960f8c39f8d3f6b77178454537629dde43e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteAnnouncementAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIGFubm91bmNlbWVudHMgcGFnZS5cbiAqL1xuJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBjcmVhdGVBbm5vdW5jZW1lbnQsIGRlbGV0ZUFubm91bmNlbWVudCB9IGZyb20gJ0AvbGliL2RhdGEnO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFubm91bmNlbWVudEFjdGlvbih0aXRsZSwgY29udGVudCwgc3RhdHVzKSB7XG4gICAgaWYgKCF0aXRsZSB8fCAhY29udGVudCB8fCAhc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVGl0bGUsIGNvbnRlbnQsIGFuZCBzdGF0dXMgYXJlIHJlcXVpcmVkLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY3JlYXRlQW5ub3VuY2VtZW50KHRpdGxlLCBjb250ZW50LCBzdGF0dXMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2hyL2Fubm91bmNlbWVudHMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQnKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBhbm5vdW5jZW1lbnQ6JywgZSk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSBhbm5vdW5jZW1lbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFubm91bmNlbWVudEFjdGlvbihpZCkge1xuICAgICBpZiAoIWlkKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnQW5ub3VuY2VtZW50IElEIGlzIHJlcXVpcmVkLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsZXRlQW5ub3VuY2VtZW50KGlkKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9oci9hbm5vdW5jZW1lbnRzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgYW5ub3VuY2VtZW50OicsIGUpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byBkZWxldGUgYW5ub3VuY2VtZW50LicgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFUQXVCc0IifQ==
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
"[project]/src/app/hr/announcements/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview This file defines the Announcements page for the HR portal.
 * It provides HR personnel with tools to create, view, and manage company-wide announcements.
 */ __turbopack_context__.s({
    "default": (()=>AnnouncementsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$229591__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:229591 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hr$2f$announcements$2f$data$3a$6d5afa__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/hr/announcements/data:6d5afa [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hr$2f$announcements$2f$data$3a$4f4855__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/hr/announcements/data:4f4855 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.jsx [app-client] (ecmascript)");
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
;
;
;
function AnnouncementsPage() {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [pastAnnouncements, setPastAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchAnnouncements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AnnouncementsPage.useCallback[fetchAnnouncements]": async ()=>{
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$229591__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPastAnnouncements"])();
            setPastAnnouncements(data);
        }
    }["AnnouncementsPage.useCallback[fetchAnnouncements]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnnouncementsPage.useEffect": ()=>{
            fetchAnnouncements();
        }
    }["AnnouncementsPage.useEffect"], [
        fetchAnnouncements
    ]);
    const handleSubmit = async (status)=>{
        setIsSubmitting(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hr$2f$announcements$2f$data$3a$6d5afa__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createAnnouncementAction"])(title, content, status);
        if (result?.success) {
            toast({
                title: 'Success',
                description: `Announcement has been ${status === 'Published' ? 'posted' : 'saved as draft'}.`
            });
            setTitle('');
            setContent('');
            fetchAnnouncements();
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result?.message || 'Failed to create announcement.'
            });
        }
        setIsSubmitting(false);
    };
    const handleDelete = async (id)=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hr$2f$announcements$2f$data$3a$4f4855__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteAnnouncementAction"])(id);
        if (result?.success) {
            toast({
                title: 'Success',
                description: 'Announcement has been deleted.'
            });
            fetchAnnouncements();
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result?.message || 'Failed to delete announcement.'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold font-headline",
                children: "Company Announcements"
            }, void 0, false, {
                fileName: "[project]/src/app/hr/announcements/page.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "New Announcement"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                            lineNumber: 119,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Create a new announcement for all employees."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                            lineNumber: 120,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "announcement-title",
                                                    children: "Title"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "announcement-title",
                                                    placeholder: "Enter the title",
                                                    value: title,
                                                    onChange: (e)=>setTitle(e.target.value),
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                    lineNumber: 125,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                            lineNumber: 123,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "announcement-content",
                                                    children: "Content"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    id: "announcement-content",
                                                    placeholder: "Type your announcement here...",
                                                    className: "min-h-[200px]",
                                                    value: content,
                                                    onChange: (e)=>setContent(e.target.value),
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                    lineNumber: 129,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                            lineNumber: 127,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: ()=>handleSubmit('Draft'),
                                            disabled: isSubmitting || !title || !content,
                                            children: "Save Draft"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                            lineNumber: 133,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>handleSubmit('Published'),
                                            disabled: isSubmitting || !title || !content,
                                            children: "Post Announcement"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                            lineNumber: 134,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/hr/announcements/page.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "Past Announcements"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                            lineNumber: 143,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Manage and view previous announcements."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                            lineNumber: 144,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: pastAnnouncements.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                            lineNumber: 151,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "Posted By"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                            lineNumber: 152,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                            lineNumber: 153,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                            lineNumber: 154,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "text-right",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                            lineNumber: 155,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                    lineNumber: 150,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                lineNumber: 149,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                                children: pastAnnouncements.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "font-medium",
                                                                children: a.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                lineNumber: 161,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: a.postedBy
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                lineNumber: 162,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: a.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                lineNumber: 163,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: a.status === 'Published' ? 'default' : 'secondary',
                                                                    className: a.status === 'Published' ? 'bg-blue-500' : '',
                                                                    children: a.status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 52
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                lineNumber: 164,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                                            asChild: true,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: "ghost",
                                                                                size: "icon",
                                                                                className: "text-destructive",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                                    lineNumber: 169,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                                lineNumber: 168,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                            lineNumber: 167,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                                            children: "Are you sure?"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                                            lineNumber: 174,
                                                                                            columnNumber: 57
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                                            children: "This action cannot be undone. This will permanently delete the announcement."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                                            lineNumber: 175,
                                                                                            columnNumber: 57
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                                    lineNumber: 173,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                                            children: "Cancel"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                                            lineNumber: 180,
                                                                                            columnNumber: 57
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                                            onClick: ()=>handleDelete(a.id),
                                                                                            children: "Delete"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                                            lineNumber: 181,
                                                                                            columnNumber: 57
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                                    lineNumber: 179,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                            lineNumber: 172,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, a.id, true, {
                                                        fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                        lineNumber: 160,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/hr/announcements/page.jsx",
                                                lineNumber: 158,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/hr/announcements/page.jsx",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-center",
                                        children: "No past announcements found."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/hr/announcements/page.jsx",
                                        lineNumber: 191,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/hr/announcements/page.jsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/hr/announcements/page.jsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/hr/announcements/page.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/hr/announcements/page.jsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/hr/announcements/page.jsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(AnnouncementsPage, "hr+7x7TlHPieaC2cN2aBUOPN63c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = AnnouncementsPage;
var _c;
__turbopack_context__.k.register(_c, "AnnouncementsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_34bfdd67._.js.map