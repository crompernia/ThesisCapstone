module.exports = {

"[project]/src/components/ui/card.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
/**
 * The main container for the card component.
 */ const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 14,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
/**
 * The header section of the card. Typically contains the title and description.
 */ const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 29,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
/**
 * The title of the card. Should be placed inside a CardHeader.
 */ const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 41,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
/**
 * A description for the card. Should be placed inside a CardHeader.
 */ const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
/**
 * The main content area of the card.
 */ const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 68,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
/**
_The footer section of the card.
*/ const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 76,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/table.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
/** The root `<table>` element. */ const Table = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
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
Table.displayName = "Table";
/** The `<thead>` element. */ const TableHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 23,
        columnNumber: 3
    }, this));
TableHeader.displayName = "TableHeader";
/** The `<tbody>` element. */ const TableBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 29,
        columnNumber: 3
    }, this));
TableBody.displayName = "TableBody";
/** The `<tfoot>` element. */ const TableFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
TableFooter.displayName = "TableFooter";
/** The `<tr>` element. */ const TableRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 52,
        columnNumber: 3
    }, this));
TableRow.displayName = "TableRow";
/** The `<th>` element. */ const TableHead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 65,
        columnNumber: 3
    }, this));
TableHead.displayName = "TableHead";
/** The `<td>` element. */ const TableCell = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 78,
        columnNumber: 3
    }, this));
TableCell.displayName = "TableCell";
/** The `<caption>` element. */ const TableCaption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.jsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
TableCaption.displayName = "TableCaption";
;
}}),
"[project]/src/components/ui/label.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileoverview Defines the Label component.
 * It is a styled text label, typically used for form fields.
 * It is built on top of the Radix UI Label primitive.
 * @see https://www.radix-ui.com/primitives/docs/components/label
 */ __turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * Defines the base styles for the label.
 */ const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
/**
 * The Label component.
 */ const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.jsx",
        lineNumber: 26,
        columnNumber: 3
    }, this));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}}),
"[project]/src/lib/data:683927 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00651499873cf7b226d6bebda46391ddb16c9e3017":"getBranches"},"src/lib/data.js",""] */ __turbopack_context__.s({
    "getBranches": (()=>getBranches)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getBranches = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00651499873cf7b226d6bebda46391ddb16c9e3017", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getBranches"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIGZvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHF1ZXJ5IH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIUkRhc2hib2FyZERhdGEoKSB7XG4gICAgY29uc3QgdG90YWxFbXBsb3llZXNSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCBDT1VOVCgqKSBGUk9NIGFjY291bnRzIFdIRVJFIHJvbGUgPSAnRW1wbG95ZWUnXCIpO1xuICAgIGNvbnN0IHRvdGFsRW1wbG95ZWVzID0gdG90YWxFbXBsb3llZXNSZXN1bHQucm93c1swXS5jb3VudCB8fCAnMCc7XG5cbiAgICBjb25zdCBwZW5kaW5nTGVhdmVSZXF1ZXN0c1Jlc3VsdCA9IGF3YWl0IHF1ZXJ5KFwiU0VMRUNUIENPVU5UKCopIEZST00gbGVhdmVfcmVxdWVzdHMgV0hFUkUgc3RhdHVzID0gJ1BlbmRpbmcnXCIpO1xuICAgIGNvbnN0IHBlbmRpbmdMZWF2ZVJlcXVlc3RzID0gcGVuZGluZ0xlYXZlUmVxdWVzdHNSZXN1bHQucm93c1swXS5jb3VudCB8fCAnMCc7XG5cbiAgICAvLyBNb2NraW5nIHNvbWUgc3RhdHMgYXMgdGhlcmUncyBubyB0YWJsZSBmb3IgdGhlbSB5ZXRcbiAgICBjb25zdCBzdGF0cyA9IFtcbiAgICAgICAgeyB0aXRsZTogJ1RvdGFsIEVtcGxveWVlcycsIHZhbHVlOiBTdHJpbmcodG90YWxFbXBsb3llZXMpLCBjaGFuZ2U6ICcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdPbiBUaW1lIFBlcmNlbnRhZ2UnLCB2YWx1ZTogYDAlYCwgY2hhbmdlOiAnJyB9LCAvLyBObyBhdHRlbmRhbmNlIGRhdGEgeWV0XG4gICAgICAgIHsgdGl0bGU6ICdBY3RpdmUgSm9iIFBvc3RpbmdzJywgdmFsdWU6ICc0JywgY2hhbmdlOiAnRXh0ZXJuYWwgQVBJJyB9LFxuICAgICAgICB7IHRpdGxlOiAnUGVuZGluZyBMZWF2ZSBSZXF1ZXN0cycsIHZhbHVlOiBTdHJpbmcocGVuZGluZ0xlYXZlUmVxdWVzdHMpLCBjaGFuZ2U6ICcnIH0sXG4gICAgXTtcblxuICAgIC8vIE5vIGFjdGl2aXR5IGxvZyB0YWJsZSB5ZXRcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0cyxcbiAgICAgICAgcmVjZW50QWN0aXZpdGllczogW11cbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXN0QW5ub3VuY2VtZW50cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBhLmlkLCBhLnRpdGxlLCBhLmNvbnRlbnQsIGEuc3RhdHVzLCBhLnBvc3RlZF9hdCwgYWNjLmZpcnN0X25hbWUsIGFjYy5sYXN0X25hbWVcbiAgICAgICAgRlJPTSBhbm5vdW5jZW1lbnRzIGFcbiAgICAgICAgSk9JTiBhY2NvdW50cyBhY2MgT04gYS5wb3N0ZWRfYnlfaWQgPSBhY2MuaWRcbiAgICAgICAgT1JERVIgQlkgYS5wb3N0ZWRfYXQgREVTQ1xuICAgIGApO1xuICAgIHJldHVybiByZXN1bHQucm93cy5tYXAoYSA9PiAoe1xuICAgICAgICAuLi5hLFxuICAgICAgICBwb3N0ZWRCeTogYCR7YS5maXJzdF9uYW1lfSAke2EubGFzdF9uYW1lfWAsXG4gICAgICAgIGRhdGU6IGZvcm1hdChuZXcgRGF0ZShhLnBvc3RlZF9hdCksICd5eXl5LU1NLWRkJylcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBbm5vdW5jZW1lbnQodGl0bGUsIGNvbnRlbnQsIHN0YXR1cykge1xuICAgIGNvbnN0IGhyVXNlcklkID0gJ0hSLTAwMSc7IC8vIEluIGEgcmVhbCBhcHAsIHRoaXMgc2hvdWxkIGNvbWUgZnJvbSBzZXNzaW9uXG4gICAgYXdhaXQgcXVlcnkoXG4gICAgICAgICdJTlNFUlQgSU5UTyBhbm5vdW5jZW1lbnRzICh0aXRsZSwgY29udGVudCwgc3RhdHVzLCBwb3N0ZWRfYnlfaWQpIFZBTFVFUyAoJDEsICQyLCAkMywgJDQpJyxcbiAgICAgICAgW3RpdGxlLCBjb250ZW50LCBzdGF0dXMsIGhyVXNlcklkXVxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBbm5vdW5jZW1lbnQoaWQpIHtcbiAgICBhd2FpdCBxdWVyeSgnREVMRVRFIEZST00gYW5ub3VuY2VtZW50cyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYWlseUF0dGVuZGFuY2VEYXRhKGRhdGUpIHtcbiAgICAvLyBUaGlzIGlzIGEgcGxhY2Vob2xkZXIgYXMgdGhlcmUgaXMgbm8gYXR0ZW5kYW5jZSB0YWJsZSB5ZXQuXG4gICAgcmV0dXJuIFtdO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoYFxuICAgICAgICBTRUxFQ1QgaWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgcG9zaXRpb24sIGJyYW5jaCwgc3RhdHVzXG4gICAgICAgIEZST00gYWNjb3VudHNcbiAgICAgICAgV0hFUkUgcm9sZSA9ICdFbXBsb3llZScgQU5EIHN0YXR1cyAhPSAnUGVuZGluZyBBcHByb3ZhbCdcbiAgICBgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4gKHtcbiAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgIG5hbWU6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgYnJhbmNoOiBhLmJyYW5jaCxcbiAgICAgICAgc3RhdHVzOiBhLnN0YXR1c1xuICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlQnlJZChpZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGFjY291bnRzIFdIRVJFIGlkID0gJDEnLCBbaWRdKTtcbiAgICBjb25zdCBlbXBsb3llZSA9IHJlc3VsdC5yb3dzWzBdO1xuICAgIGlmICghZW1wbG95ZWUpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZW1wbG95ZWUsXG4gICAgICAgIG5hbWU6IGAke2VtcGxveWVlLmZpcnN0X25hbWV9ICR7ZW1wbG95ZWUubGFzdF9uYW1lfWAsXG4gICAgICAgIGRhdGVfaGlyZWQ6IGZvcm1hdChuZXcgRGF0ZShlbXBsb3llZS5kYXRlX2hpcmVkKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgICAgZGF0ZV9vZl9iaXJ0aDogZm9ybWF0KG5ldyBEYXRlKGVtcGxveWVlLmRhdGVfb2ZfYmlydGgpLCAneXl5eS1NTS1kZCcpLFxuICAgIH07XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUVtcGxveWVlKGlkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ0RFTEVURSBGUk9NIGFjY291bnRzIFdIRVJFIGlkID0gJDEnLCBbaWRdKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd0NvdW50ID4gMDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoYFxuICAgICAgICBTRUxFQ1QgbHIuaWQsIGxyLmxlYXZlX3R5cGUsIGxyLnN0YXJ0X2RhdGUsIGxyLmVuZF9kYXRlLCBsci5yZWFzb24sIGxyLnN0YXR1cyxcbiAgICAgICAgICAgICAgIGEuaWQgYXMgXCJlbXBsb3llZUlkXCIsIGEuZmlyc3RfbmFtZSwgYS5sYXN0X25hbWVcbiAgICAgICAgRlJPTSBsZWF2ZV9yZXF1ZXN0cyBsclxuICAgICAgICBKT0lOIGFjY291bnRzIGEgT04gbHIuYWNjb3VudF9pZCA9IGEuaWRcbiAgICAgICAgT1JERVIgQlkgbHIuY3JlYXRlZF9hdCBERVNDXG4gICAgYCk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChsciA9PiAoe1xuICAgICAgICBpZDogbHIuaWQsXG4gICAgICAgIGVtcGxveWVlSWQ6IGxyLmVtcGxveWVlSWQsXG4gICAgICAgIGVtcGxveWVlTmFtZTogYCR7bHIuZmlyc3RfbmFtZX0gJHtsci5sYXN0X25hbWV9YCxcbiAgICAgICAgbGVhdmVfdHlwZTogbHIubGVhdmVfdHlwZSxcbiAgICAgICAgc3RhcnREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuc3RhcnRfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdChuZXcgRGF0ZShsci5lbmRfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIHJlYXNvbjogbHIucmVhc29uLFxuICAgICAgICBzdGF0dXM6IGxyLnN0YXR1c1xuICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUxlYXZlUmVxdWVzdFN0YXR1cyhyZXF1ZXN0SWQsIHN0YXR1cykge1xuICAgIGF3YWl0IHF1ZXJ5KCdVUERBVEUgbGVhdmVfcmVxdWVzdHMgU0VUIHN0YXR1cyA9ICQxIFdIRVJFIGlkID0gJDInLCBbc3RhdHVzLCByZXF1ZXN0SWRdKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlc1dpdGhQYXlzbGlwU3RhdHVzKCkge1xuICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBcInBvc2l0aW9uXCIsIGRlcGFydG1lbnQsIHNzc19udW1iZXIsIHBoaWxoZWFsdGhfbnVtYmVyLCBwYWdpYmlnX251bWJlciwgdGluXG4gICAgICAgIEZST00gYWNjb3VudHNcbiAgICAgICAgV0hFUkUgcm9sZSA9ICdFbXBsb3llZSdcbiAgICBgKTtcbiAgICBcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4ge1xuICAgICAgICBjb25zdCBoYXNCZW5lZml0cyA9IGEuc3NzX251bWJlciAmJiBhLnBoaWxoZWFsdGhfbnVtYmVyICYmIGEucGFnaWJpZ19udW1iZXIgJiYgYS50aW47XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgIG5hbWU6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgICAgICBkZXBhcnRtZW50OiBhLmRlcGFydG1lbnQsXG4gICAgICAgICAgICBwYXlzbGlwU3RhdHVzOiAnUGVuZGluZycsIC8vIE5vIHBheXNsaXAgdGFibGUgeWV0XG4gICAgICAgICAgICBiZW5lZml0c1N0YXR1czogaGFzQmVuZWZpdHMgPyAnQ29tcGxldGUnIDogJ0luY29tcGxldGUnLFxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzRm9yU2NoZWR1bGluZygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdFbXBsb3llZScgQU5EIHN0YXR1cyA9ICdBY3RpdmUnXG4gICAgYCk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChhID0+ICh7XG4gICAgICAgIGlkOiBhLmlkLFxuICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgc2hpZnQ6ICc5OjAwIC0gMTc6MDAnIC8vIERlZmF1bHQgc2hpZnRcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZURhc2hib2FyZERhdGEoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KCdTRUxFQ1QgaWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgXCJwb3NpdGlvblwiLCBkZXBhcnRtZW50LCBicmFuY2gsIGVtYWlsIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMScsIFtlbXBsb3llZUlkXSk7XG4gICAgY29uc3QgZW1wbG95ZWUgPSByZXN1bHQucm93c1swXTtcbiAgICBcbiAgICBpZiAoIWVtcGxveWVlKSB7XG4gICAgICAgIHJldHVybiB7IGVtcGxveWVlOiB7IG5hbWU6ICdFbXBsb3llZSBOb3QgRm91bmQnIH0sIGFubm91bmNlbWVudHM6IFtdIH07XG4gICAgfVxuXG4gICAgY29uc3QgYW5ub3VuY2VtZW50c1Jlc3VsdCA9IGF3YWl0IHF1ZXJ5KFwiU0VMRUNUIHRpdGxlLCBjb250ZW50LCBwb3N0ZWRfYXQgRlJPTSBhbm5vdW5jZW1lbnRzIFdIRVJFIHN0YXR1cyA9ICdQdWJsaXNoZWQnIE9SREVSIEJZIHBvc3RlZF9hdCBERVNDIExJTUlUIDVcIik7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1wbG95ZWU6IHtcbiAgICAgICAgICAgIGVtcGxveWVlSWQ6IGVtcGxveWVlLmlkLFxuICAgICAgICAgICAgbmFtZTogYCR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBlbXBsb3llZS5wb3NpdGlvbixcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IGVtcGxveWVlLmRlcGFydG1lbnQsXG4gICAgICAgICAgICBicmFuY2g6IGVtcGxveWVlLmJyYW5jaCxcbiAgICAgICAgICAgIGVtYWlsOiBlbXBsb3llZS5lbWFpbCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5ub3VuY2VtZW50czogYW5ub3VuY2VtZW50c1Jlc3VsdC5yb3dzLm1hcChhID0+ICh7XG4gICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgIHRpdGxlOiBhLnRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogYS5jb250ZW50LFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEucG9zdGVkX2F0KSwgJ01NTU0gZCwgeXl5eScpXG4gICAgICAgIH0pKVxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdHRlbmRhbmNlRGF0YShlbXBsb3llZUlkKSB7XG4gICAgLy8gVGhpcyBpcyBhIHBsYWNlaG9sZGVyIGFzIHRoZXJlIGlzIG5vIGF0dGVuZGFuY2UgdGFibGUgeWV0LlxuICAgIHJldHVybiB7XG4gICAgICAgIHN1bW1hcnk6IHsgZGF5c0F0dGVuZGVkOiAwLCBsYXRlczogMCwgYWJzZW5jZXM6IDAsIHRvdGFsSG91cnM6IDAsIGF2YWlsYWJsZUxlYXZlczogMCB9LFxuICAgICAgICByZWNvcmRzOiBbXVxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXN0TGVhdmVSZXF1ZXN0cyhlbXBsb3llZUlkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXG4gICAgICAgICdTRUxFQ1QgaWQsIGxlYXZlX3R5cGUsIHN0YXJ0X2RhdGUsIGVuZF9kYXRlLCBzdGF0dXMgRlJPTSBsZWF2ZV9yZXF1ZXN0cyBXSEVSRSBhY2NvdW50X2lkID0gJDEgT1JERVIgQlkgc3RhcnRfZGF0ZSBERVNDJyxcbiAgICAgICAgW2VtcGxveWVlSWRdXG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQucm93cy5tYXAobHIgPT4gKHtcbiAgICAgICAgaWQ6IGxyLmlkLFxuICAgICAgICBsZWF2ZV90eXBlOiBsci5sZWF2ZV90eXBlLFxuICAgICAgICBzdGFydERhdGU6IGZvcm1hdChuZXcgRGF0ZShsci5zdGFydF9kYXRlKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgICAgZW5kRGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLmVuZF9kYXRlKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgICAgc3RhdHVzOiBsci5zdGF0dXMsXG4gICAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhdmVSZXF1ZXN0KGRhdGEpIHtcbiAgICBjb25zdCB7IGVtcGxveWVlSWQsIGxlYXZlVHlwZSwgc3RhcnREYXRlLCBlbmREYXRlLCByZWFzb24gfSA9IGRhdGE7XG4gICAgYXdhaXQgcXVlcnkoXG4gICAgICAgICdJTlNFUlQgSU5UTyBsZWF2ZV9yZXF1ZXN0cyAoYWNjb3VudF9pZCwgbGVhdmVfdHlwZSwgc3RhcnRfZGF0ZSwgZW5kX2RhdGUsIHJlYXNvbikgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpJyxcbiAgICAgICAgW2VtcGxveWVlSWQsIGxlYXZlVHlwZSwgc3RhcnREYXRlLCBlbmREYXRlLCByZWFzb25dXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXlQZXJpb2RzKGVtcGxveWVlSWQpIHtcbiAgICAvLyBUaGlzIGlzIGEgcGxhY2Vob2xkZXIgYXMgdGhlcmUgaXMgbm8gcGF5c2xpcCB0YWJsZSB5ZXQuXG4gICAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NoZWR1bGUoZW1wbG95ZWVJZCkge1xuICAgIC8vIFRoaXMgaXMgYSBwbGFjZWhvbGRlciBhcyB0aGVyZSBpcyBubyBzY2hlZHVsZSB0YWJsZSB5ZXQuXG4gICAgcmV0dXJuIFtdO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZW5kaW5nRW1wbG95ZWVBcHByb3ZhbHMoKSB7XG4gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgU0VMRUNUIGlkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIFwicG9zaXRpb25cIiwgZGF0ZV9oaXJlZFxuICAgICAgICBGUk9NIGFjY291bnRzXG4gICAgICAgIFdIRVJFIHN0YXR1cyA9ICdQZW5kaW5nIEFwcHJvdmFsJ1xuICAgIGApO1xuICAgIHJldHVybiByZXN1bHQucm93cy5tYXAoYSA9PiAoe1xuICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgIHN1Ym1pdHRlZEJ5OiAnT2xpdmlhIENoZW4nLCAvLyBQbGFjZWhvbGRlclxuICAgICAgICBzdWJtaXNzaW9uRGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEuZGF0ZV9oaXJlZCksICd5eXl5LU1NLWRkJylcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHByb3ZlRW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIGF3YWl0IHF1ZXJ5KFwiVVBEQVRFIGFjY291bnRzIFNFVCBzdGF0dXMgPSAnQWN0aXZlJyBXSEVSRSBpZCA9ICQxXCIsIFtlbXBsb3llZUlkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWplY3RFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgYXdhaXQgcXVlcnkoXCJERUxFVEUgRlJPTSBhY2NvdW50cyBXSEVSRSBpZCA9ICQxXCIsIFtlbXBsb3llZUlkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZU5hbWUoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KCdTRUxFQ1QgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMScsIFtlbXBsb3llZUlkXSk7XG4gICAgY29uc3QgZW1wbG95ZWUgPSByZXN1bHQucm93c1swXTtcbiAgICByZXR1cm4gZW1wbG95ZWUgPyBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gIDogXCJVbmtub3duIEVtcGxveWVlXCI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvcnREZXRhaWxzKHJlcG9ydElkKSB7XG4gICAgLy8gVGhpcyBpcyBhIHBsYWNlaG9sZGVyIGFzIHRoZXJlIGlzIG5vIHJlcG9ydHMgdGFibGUgeWV0LlxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SHJQZXJzb25uZWwoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoYFxuICAgICAgICBTRUxFQ1QgaWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgXCJwb3NpdGlvblwiLCBtYW5hZ2VkX2JyYW5jaGVzXG4gICAgICAgIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdIUidcbiAgICBgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4gKHtcbiAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgIG5hbWU6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgbWFuYWdlZF9icmFuY2hlczogYS5tYW5hZ2VkX2JyYW5jaGVzIHx8IFtdXG4gICAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnJhbmNoZXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29vcmRpbmF0ZXMgRlJPTSBicmFuY2hlcyBPUkRFUiBCWSBuYW1lJyk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnJhbmNoKGJyYW5jaE5hbWUsIGNvb3JkaW5hdGVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXG4gICAgICAgICAgICAnSU5TRVJUIElOVE8gYnJhbmNoZXMgKG5hbWUsIGNvb3JkaW5hdGVzKSBWQUxVRVMgKCQxLCAkMikgUkVUVVJOSU5HIConLFxuICAgICAgICAgICAgW2JyYW5jaE5hbWUsIGNvb3JkaW5hdGVzXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LnJvd3NbMF07XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gdW5pcXVlX3Zpb2xhdGlvblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGJyYW5jaCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJyYW5jaChicmFuY2hJZCkge1xuICAgIC8vIENoZWNrIGlmIGFueSBIUiBwZXJzb25uZWwgaXMgYXNzaWduZWQgdG8gdGhpcyBicmFuY2hcbiAgICBjb25zdCBicmFuY2hSZXN1bHQgPSBhd2FpdCBxdWVyeSgnU0VMRUNUIG5hbWUgRlJPTSBicmFuY2hlcyBXSEVSRSBpZCA9ICQxJywgW2JyYW5jaElkXSk7XG4gICAgaWYgKGJyYW5jaFJlc3VsdC5yb3dDb3VudCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IGJyYW5jaE5hbWUgPSBicmFuY2hSZXN1bHQucm93c1swXS5uYW1lO1xuXG4gICAgY29uc3QgaHJSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCAxIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdIUicgQU5EICQxID0gQU5ZKG1hbmFnZWRfYnJhbmNoZXMpXCIsIFticmFuY2hOYW1lXSk7XG4gICAgaWYgKGhyUmVzdWx0LnJvd0NvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYnJhbmNoIGlzIGN1cnJlbnRseSBhc3NpZ25lZCB0byBIUiBwZXJzb25uZWwgYW5kIGNhbm5vdCBiZSBkZWxldGVkLicpO1xuICAgIH1cbiAgICBhd2FpdCBxdWVyeSgnREVMRVRFIEZST00gYnJhbmNoZXMgV0hFUkUgaWQgPSAkMScsIFticmFuY2hJZF0pO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVIckJyYW5jaEFsbG9jYXRpb24oaHJJZCwgYnJhbmNoZXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShcbiAgICAgICAgJ1VQREFURSBhY2NvdW50cyBTRVQgbWFuYWdlZF9icmFuY2hlcyA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICBbYnJhbmNoZXMsIGhySWRdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiByZXN1bHQucm93Q291bnQgPiAwIH07XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtcGxveWVlKGlkLCBkYXRhKSB7XG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBtaWRkbGVOYW1lLCBnZW5kZXIsIGRvYiwgcG9zaXRpb24sIGRlcGFydG1lbnQsIGJyYW5jaCwgaGlyZURhdGUsIGVtYWlsIH0gPSBkYXRhO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgVVBEQVRFIGFjY291bnRzIFNFVFxuICAgICAgICAgICAgZmlyc3RfbmFtZSA9ICQxLCBsYXN0X25hbWUgPSAkMiwgbWlkZGxlX25hbWUgPSAkMywgZ2VuZGVyID0gJDQsXG4gICAgICAgICAgICBkYXRlX29mX2JpcnRoID0gJDUsIFwicG9zaXRpb25cIiA9ICQ2LCBkZXBhcnRtZW50ID0gJDcsIGJyYW5jaCA9ICQ4LFxuICAgICAgICAgICAgZGF0ZV9oaXJlZCA9ICQ5LCBlbWFpbCA9ICQxMFxuICAgICAgICBXSEVSRSBpZCA9ICQxMVxuICAgIGAsIFtmaXJzdE5hbWUsIGxhc3ROYW1lLCBtaWRkbGVOYW1lLCBnZW5kZXIsIGRvYiwgcG9zaXRpb24sIGRlcGFydG1lbnQsIGJyYW5jaCwgaGlyZURhdGUsIGVtYWlsLCBpZF0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHJlc3VsdC5yb3dDb3VudCA+IDAsIG1lc3NhZ2U6IHJlc3VsdC5yb3dDb3VudCA+IDAgPyAnRW1wbG95ZWUgdXBkYXRlZCBzdWNjZXNzZnVsbHkuJyA6ICdFbXBsb3llZSBub3QgZm91bmQuJyB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCBpZCwgdGl0bGUsIHJhdGUgRlJPTSBwb3NpdGlvbnMgT1JERVIgQlkgdGl0bGUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3M7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3NpdGlvbih0aXRsZSwgcmF0ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAgICAgJ0lOU0VSVCBJTlRPIHBvc2l0aW9ucyAodGl0bGUsIHJhdGUpIFZBTFVFUyAoJDEsICQyKSBSRVRVUk5JTkcgKicsXG4gICAgICAgICAgICBbdGl0bGUsIHJhdGVdXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQucm93c1swXTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1JykgeyAvLyB1bmlxdWVfdmlvbGF0aW9uXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcG9zaXRpb24gd2l0aCB0aGlzIHRpdGxlIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zaXRpb24ocG9zaXRpb25JZCkge1xuICAgIGNvbnN0IHBvc2l0aW9uUmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCB0aXRsZSBGUk9NIHBvc2l0aW9ucyBXSEVSRSBpZCA9ICQxJywgW3Bvc2l0aW9uSWRdKTtcbiAgICBpZiAocG9zaXRpb25SZXN1bHQucm93Q291bnQgPT09IDApIHJldHVybjtcbiAgICBjb25zdCBwb3NpdGlvblRpdGxlID0gcG9zaXRpb25SZXN1bHQucm93c1swXS50aXRsZTtcblxuICAgIGNvbnN0IGFjY291bnRSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCAxIEZST00gYWNjb3VudHMgV0hFUkUgcG9zaXRpb24gPSAkMVwiLCBbcG9zaXRpb25UaXRsZV0pO1xuICAgIGlmIChhY2NvdW50UmVzdWx0LnJvd0NvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgcG9zaXRpb24gaXMgY3VycmVudGx5IGFzc2lnbmVkIHRvIGVtcGxveWVlcyBhbmQgY2Fubm90IGJlIGRlbGV0ZWQuJyk7XG4gICAgfVxuICAgIGF3YWl0IHF1ZXJ5KCdERUxFVEUgRlJPTSBwb3NpdGlvbnMgV0hFUkUgaWQgPSAkMScsIFtwb3NpdGlvbklkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZXBhcnRtZW50c0ZvckJyYW5jaChicmFuY2hOYW1lKSB7XG4gICAgLy8gVGhpcyBhc3N1bWVzIGEgc2VwYXJhdGUgJ2RlcGFydG1lbnRzJyB0YWJsZSBvciBzaW1pbGFyIHN0cnVjdHVyZS5cbiAgICAvLyBGb3Igbm93LCBsZXQncyBxdWVyeSBkaXN0aW5jdCBkZXBhcnRtZW50cyBmcm9tIGFjY291bnRzIGluIHRoYXQgYnJhbmNoLlxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAnU0VMRUNUIERJU1RJTkNUIGRlcGFydG1lbnQgRlJPTSBhY2NvdW50cyBXSEVSRSBicmFuY2ggPSAkMSBBTkQgZGVwYXJ0bWVudCBJUyBOT1QgTlVMTCBPUkRFUiBCWSBkZXBhcnRtZW50JyxcbiAgICAgICAgW2JyYW5jaE5hbWVdXG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHIgPT4gci5kZXBhcnRtZW50KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2l0aW9uc0ZvckRlcGFydG1lbnQoZGVwYXJ0bWVudE5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgc2ltcGxpZmljYXRpb24uIEEgcmVhbCBhcHAgbWlnaHQgaGF2ZSBhIGRlcGFydG1lbnRzX3Bvc2l0aW9ucyBsaW5rIHRhYmxlLlxuICAgIC8vIEhlcmUgd2UgZ2V0IGFsbCBwb3NpdGlvbnMgYXNzb2NpYXRlZCB3aXRoIGVtcGxveWVlcyBpbiB0aGF0IGRlcGFydG1lbnQuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXG4gICAgICAgICdTRUxFQ1QgRElTVElOQ1QgXCJwb3NpdGlvblwiIEZST00gYWNjb3VudHMgV0hFUkUgZGVwYXJ0bWVudCA9ICQxIEFORCBcInBvc2l0aW9uXCIgSVMgTk9UIE5VTEwgT1JERVIgQlkgXCJwb3NpdGlvblwiJyxcbiAgICAgICAgW2RlcGFydG1lbnROYW1lXVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChyID0+IHIucG9zaXRpb24pO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvUkE4UXNCIn0=
}}),
"[project]/src/app/admin/branches/data:143b4e [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"605431ae73af1df41c7f1c3e5b01b396c392321f8e":"createBranchAction"},"src/app/admin/branches/actions.js",""] */ __turbopack_context__.s({
    "createBranchAction": (()=>createBranchAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createBranchAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("605431ae73af1df41c7f1c3e5b01b396c392321f8e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createBranchAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIGJyYW5jaGVzIG1hbmFnZW1lbnQgcGFnZS5cbiAqL1xuJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBjcmVhdGVCcmFuY2gsIGRlbGV0ZUJyYW5jaCB9IGZyb20gJ0AvbGliL2RhdGEnO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJyYW5jaEFjdGlvbihicmFuY2hOYW1lLCBjb29yZGluYXRlcykge1xuICAgIGlmICghYnJhbmNoTmFtZSB8fCAhY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdCcmFuY2ggbmFtZSBhbmQgY29vcmRpbmF0ZXMgYXJlIHJlcXVpcmVkLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY3JlYXRlQnJhbmNoKGJyYW5jaE5hbWUsIGNvb3JkaW5hdGVzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9icmFuY2hlcycpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2JyYW5jaC1hbGxvY2F0aW9uJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBjcmVhdGUgYnJhbmNoLicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCcmFuY2hBY3Rpb24oaWQpIHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnQnJhbmNoIElEIGlzIHJlcXVpcmVkLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsZXRlQnJhbmNoKGlkKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9icmFuY2hlcycpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2JyYW5jaC1hbGxvY2F0aW9uJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGRlbGV0ZSBicmFuY2guJyB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlNBUXNCIn0=
}}),
"[project]/src/app/admin/branches/data:bd9c1c [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40460d65aa254e01f8e53bf9f8a5344d44247c850c":"deleteBranchAction"},"src/app/admin/branches/actions.js",""] */ __turbopack_context__.s({
    "deleteBranchAction": (()=>deleteBranchAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteBranchAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40460d65aa254e01f8e53bf9f8a5344d44247c850c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteBranchAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIGJyYW5jaGVzIG1hbmFnZW1lbnQgcGFnZS5cbiAqL1xuJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBjcmVhdGVCcmFuY2gsIGRlbGV0ZUJyYW5jaCB9IGZyb20gJ0AvbGliL2RhdGEnO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJyYW5jaEFjdGlvbihicmFuY2hOYW1lLCBjb29yZGluYXRlcykge1xuICAgIGlmICghYnJhbmNoTmFtZSB8fCAhY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdCcmFuY2ggbmFtZSBhbmQgY29vcmRpbmF0ZXMgYXJlIHJlcXVpcmVkLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY3JlYXRlQnJhbmNoKGJyYW5jaE5hbWUsIGNvb3JkaW5hdGVzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9icmFuY2hlcycpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2JyYW5jaC1hbGxvY2F0aW9uJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBjcmVhdGUgYnJhbmNoLicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVCcmFuY2hBY3Rpb24oaWQpIHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnQnJhbmNoIElEIGlzIHJlcXVpcmVkLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsZXRlQnJhbmNoKGlkKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9icmFuY2hlcycpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2JyYW5jaC1hbGxvY2F0aW9uJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGRlbGV0ZSBicmFuY2guJyB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlNBc0JzQiJ9
}}),
"[project]/src/components/ui/alert-dialog.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * The root component for an alert dialog.
 */ const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
/**
 * The trigger that opens the alert dialog.
 */ const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
/**
 * A portal that renders its children into a new stacking context.
 */ const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
/**
 * A semi-transparent overlay that is rendered behind the dialog.
 */ const AlertDialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 34,
        columnNumber: 3
    }, this));
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
/**
 * The main content of the alert dialog.
 */ const AlertDialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.jsx",
                lineNumber: 50,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
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
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
/**
 * The header of the alert dialog, containing the title and description.
 */ const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 70,
        columnNumber: 3
    }, this);
AlertDialogHeader.displayName = "AlertDialogHeader";
/**
 * The footer of the alert dialog, containing action buttons.
 */ const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 87,
        columnNumber: 3
    }, this);
AlertDialogFooter.displayName = "AlertDialogFooter";
/**
 * The title of the alert dialog.
 */ const AlertDialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 101,
        columnNumber: 3
    }, this));
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
/**
 * The description of the alert dialog.
 */ const AlertDialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 113,
        columnNumber: 3
    }, this));
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
/**
 * The action button that typically performs the primary action of the dialog.
 */ const AlertDialogAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 126,
        columnNumber: 3
    }, this));
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
/**
 * The cancel button that closes the dialog.
 */ const AlertDialogCancel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.jsx",
        lineNumber: 138,
        columnNumber: 3
    }, this));
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"].displayName;
;
}}),
"[project]/src/app/admin/branches/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileoverview This file defines the Branches page for the Admin portal.
 * It allows administrators to view, add, and delete company branches.
 */ __turbopack_context__.s({
    "default": (()=>BranchesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$683927__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:683927 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$branches$2f$data$3a$143b4e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/branches/data:143b4e [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$branches$2f$data$3a$bd9c1c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/branches/data:bd9c1c [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.jsx [app-ssr] (ecmascript)");
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
function BranchesPage() {
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [branches, setBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newBranchName, setNewBranchName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newBranchCoordinates, setNewBranchCoordinates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const fetchBranches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$683927__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBranches"])();
        setBranches(data);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchBranches();
    }, [
        fetchBranches
    ]);
    const handleAddBranch = async ()=>{
        if (!newBranchName.trim() || !newBranchCoordinates.trim()) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Branch name and coordinates cannot be empty.'
            });
            return;
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$branches$2f$data$3a$143b4e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBranchAction"])(newBranchName, newBranchCoordinates);
        if (result.success) {
            toast({
                title: 'Success',
                description: 'New branch has been added.'
            });
            setNewBranchName('');
            setNewBranchCoordinates('');
            fetchBranches();
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.message || 'Failed to add branch.'
            });
        }
    };
    const handleDeleteBranch = async (id)=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$branches$2f$data$3a$bd9c1c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteBranchAction"])(id);
        if (result.success) {
            toast({
                title: 'Success',
                description: 'Branch has been deleted.'
            });
            fetchBranches();
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.message || 'Failed to delete branch.'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold font-headline",
                children: "Manage Branches"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/branches/page.jsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "Add New Branch"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Create a new branch location."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "branch-name",
                                                    children: "Branch Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                                    lineNumber: 120,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "branch-name",
                                                    placeholder: "e.g., North Campus",
                                                    value: newBranchName,
                                                    onChange: (e)=>setNewBranchName(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                                    lineNumber: 121,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "branch-coordinates",
                                                    children: "Coordinates"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                                    lineNumber: 129,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "branch-coordinates",
                                                    placeholder: "e.g., 14.5547, 121.0244",
                                                    value: newBranchCoordinates,
                                                    onChange: (e)=>setNewBranchCoordinates(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                            lineNumber: 128,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "w-full",
                                        onClick: handleAddBranch,
                                        children: "Add Branch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/branches/page.jsx",
                                        lineNumber: 139,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                    lineNumber: 138,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/branches/page.jsx",
                            lineNumber: 113,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/branches/page.jsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "Existing Branches"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                            lineNumber: 148,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "The list of all current company branches."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                            lineNumber: 149,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                    lineNumber: 147,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: branches.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "Branch Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                                            lineNumber: 156,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "Coordinates"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                                            lineNumber: 157,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "text-right",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                                            lineNumber: 158,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                                    lineNumber: 155,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/branches/page.jsx",
                                                lineNumber: 154,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                children: branches.map((branch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "font-medium",
                                                                children: branch.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                lineNumber: 164,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "font-mono text-xs",
                                                                children: branch.coordinates
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                                            asChild: true,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: "ghost",
                                                                                size: "icon",
                                                                                className: "text-destructive",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                                    lineNumber: 170,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                                lineNumber: 169,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                            lineNumber: 168,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                                            children: "Are you sure?"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                                            lineNumber: 175,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                                            children: "This will permanently delete the branch. This action cannot be undone."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                                            lineNumber: 176,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                                    lineNumber: 174,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                                            children: "Cancel"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                                            lineNumber: 181,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                                            onClick: ()=>handleDeleteBranch(branch.id),
                                                                                            children: "Delete"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                                            lineNumber: 182,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                                    lineNumber: 180,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                            lineNumber: 173,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/branches/page.jsx",
                                                                lineNumber: 166,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, branch.id, true, {
                                                        fileName: "[project]/src/app/admin/branches/page.jsx",
                                                        lineNumber: 163,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/branches/page.jsx",
                                                lineNumber: 161,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/branches/page.jsx",
                                        lineNumber: 153,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-center",
                                        children: "No branches found. Add one to get started."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/branches/page.jsx",
                                        lineNumber: 192,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/branches/page.jsx",
                                    lineNumber: 151,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/branches/page.jsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/branches/page.jsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/branches/page.jsx",
                lineNumber: 110,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/branches/page.jsx",
        lineNumber: 107,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=src_2001ca3d._.js.map