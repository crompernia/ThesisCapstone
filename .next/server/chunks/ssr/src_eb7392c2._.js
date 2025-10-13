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
"[project]/src/lib/data:cb6d99 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0067b71c9617499970f47f615b607f992a7b35b7ca":"getPendingEmployeeApprovals"},"src/lib/data.js",""] */ __turbopack_context__.s({
    "getPendingEmployeeApprovals": (()=>getPendingEmployeeApprovals)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getPendingEmployeeApprovals = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("0067b71c9617499970f47f615b607f992a7b35b7ca", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPendingEmployeeApprovals"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIGZvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICogSXQgYWN0cyBhcyBhIGNlbnRyYWxpemVkIGFuZCBzZXJ2ZXItc2lkZS1vbmx5IGRhdGEgYWNjZXNzIGxheWVyLlxuICogQWxsIGZ1bmN0aW9ucyBpbmNsdWRlIGVycm9yIGhhbmRsaW5nIHRvIHJldHVybiBzYWZlIGRlZmF1bHQgdmFsdWVzIGluIGNhc2Ugb2ZcbiAqIGEgZGF0YWJhc2UgZXJyb3IsIHByZXZlbnRpbmcgdGhlIGFwcGxpY2F0aW9uIGZyb20gY3Jhc2hpbmcuXG4gKi9cbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgcXVlcnkgfSBmcm9tICcuL2RiJztcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tICdkYXRlLWZucyc7XG5cbi8qKlxuICogRmV0Y2hlcyBhbGwgdGhlIG5lY2Vzc2FyeSBkYXRhIGZvciB0aGUgSFIgZGFzaGJvYXJkIGZyb20gdGhlIGRhdGFiYXNlLlxuICogVGhpcyBpbmNsdWRlcyBlbXBsb3llZSBjb3VudHMsIGxlYXZlIHJlcXVlc3RzLCBhbmQgcmVjZW50IGFjdGl2aXRpZXMuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBkYXNoYm9hcmQgZGF0YS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhSRGFzaGJvYXJkRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBlbXBsb3llZUNvdW50UXVlcnkgPSBcIlNFTEVDVCBDT1VOVCgqKSBGUk9NIGVtcGxveWVlcyBXSEVSRSBzdGF0dXMgPSAnQWN0aXZlJ1wiO1xuICAgICAgICBjb25zdCBwZW5kaW5nTGVhdmVRdWVyeSA9IFwiU0VMRUNUIENPVU5UKCopIEZST00gbGVhdmVfcmVxdWVzdHMgV0hFUkUgc3RhdHVzID0gJ1BlbmRpbmcnXCI7XG4gICAgICAgIGNvbnN0IHJlY2VudEFjdGl2aXR5UXVlcnkgPSBgXG4gICAgICAgICAgICBTRUxFQ1QgXG4gICAgICAgICAgICAgICAgbHIuaWQsIFxuICAgICAgICAgICAgICAgIGUuZmlyc3RfbmFtZSB8fCAnICcgfHwgZS5sYXN0X25hbWUgYXMgZW1wbG95ZWVfbmFtZSwgXG4gICAgICAgICAgICAgICAgbHIubGVhdmVfdHlwZSwgXG4gICAgICAgICAgICAgICAgbHIuc3RhcnRfZGF0ZSBcbiAgICAgICAgICAgIEZST00gbGVhdmVfcmVxdWVzdHMgbHJcbiAgICAgICAgICAgIEpPSU4gZW1wbG95ZWVzIGUgT04gbHIuZW1wbG95ZWVfaWQgPSBlLmlkXG4gICAgICAgICAgICBPUkRFUiBCWSBsci5pZCBERVNDXG4gICAgICAgICAgICBMSU1JVCA1O1xuICAgICAgICBgO1xuXG4gICAgICAgIGNvbnN0IFtlbXBsb3llZVJlc3VsdCwgcGVuZGluZ0xlYXZlUmVzdWx0LCBhY3Rpdml0eVJlc3VsdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBxdWVyeShlbXBsb3llZUNvdW50UXVlcnkpLFxuICAgICAgICAgICAgcXVlcnkocGVuZGluZ0xlYXZlUXVlcnkpLFxuICAgICAgICAgICAgcXVlcnkocmVjZW50QWN0aXZpdHlRdWVyeSlcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc3QgZW1wbG95ZWVDb3VudCA9IGVtcGxveWVlUmVzdWx0Py5yb3dzPy5bMF0/LmNvdW50ID8/IDA7XG4gICAgICAgIGNvbnN0IHBlbmRpbmdMZWF2ZXMgPSBwZW5kaW5nTGVhdmVSZXN1bHQ/LnJvd3M/LlswXT8uY291bnQgPz8gMDtcbiAgICAgICAgY29uc3QgcmVjZW50QWN0aXZpdGllcyA9IGFjdGl2aXR5UmVzdWx0Py5yb3dzPy5tYXAocm93ID0+ICh7XG4gICAgICAgICAgICBpZDogcm93LmlkLFxuICAgICAgICAgICAgYWN0aXZpdHk6IGAke3Jvdy5lbXBsb3llZV9uYW1lfSByZXF1ZXN0ZWQgJHtyb3cubGVhdmVfdHlwZS50b0xvd2VyQ2FzZSgpfSBsZWF2ZWAsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IGZvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUocm93LnN0YXJ0X2RhdGUpLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KSxcbiAgICAgICAgICAgIHR5cGU6ICdMZWF2ZSdcbiAgICAgICAgfSkpID8/IFtdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0czogW1xuICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdUb3RhbCBFbXBsb3llZXMnLCB2YWx1ZTogZW1wbG95ZWVDb3VudCwgaWNvbjogJzxVc2VycyAvPicsIGNoYW5nZTogJysyIHRoaXMgbW9udGgnIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogJ09uIFRpbWUgUGVyY2VudGFnZScsIHZhbHVlOiAnOTYlJywgaWNvbjogJzxDaGVja0NpcmNsZSAvPicsIGNoYW5nZTogJy0xJSBmcm9tIGxhc3QgbW9udGgnIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogJ0FjdGl2ZSBKb2IgUG9zdGluZ3MnLCB2YWx1ZTogJzQnLCBpY29uOiAnPEJyaWVmY2FzZSAvPicsIGNoYW5nZTogJysxIG5ldyBwb3N0aW5nJyB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdQZW5kaW5nIExlYXZlIFJlcXVlc3RzJywgdmFsdWU6IHBlbmRpbmdMZWF2ZXMsIGljb246ICc8QmVsbCAvPicsIGNoYW5nZTogYCR7cGVuZGluZ0xlYXZlc30gbmV3IHRvZGF5YCB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlY2VudEFjdGl2aXRpZXNcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3IgZmV0Y2hpbmcgSFIgZGFzaGJvYXJkIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXRzOiBbXSxcbiAgICAgICAgICAgIHJlY2VudEFjdGl2aXRpZXM6IFtdXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgcGFzdCBhbm5vdW5jZW1lbnRzIGZyb20gdGhlIGRhdGFiYXNlLlxuICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0W10+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFzdEFubm91bmNlbWVudHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYW5ub3VuY2VtZW50c1F1ZXJ5ID0gYFxuICAgICAgICAgICAgU0VMRUNUIFxuICAgICAgICAgICAgICAgIGEuaWQsIFxuICAgICAgICAgICAgICAgIGEudGl0bGUsIFxuICAgICAgICAgICAgICAgIHAuZmlyc3RfbmFtZSB8fCAnICcgfHwgcC5sYXN0X25hbWUgYXMgXCJwb3N0ZWRCeVwiLFxuICAgICAgICAgICAgICAgIHRvX2NoYXIoYS5wb3N0ZWRfYXQsICdZWVlZLU1NLUREJykgYXMgZGF0ZSxcbiAgICAgICAgICAgICAgICBhLnN0YXR1c1xuICAgICAgICAgICAgRlJPTSBhbm5vdW5jZW1lbnRzIGFcbiAgICAgICAgICAgIEpPSU4gaHJfcGVyc29ubmVsIHAgT04gYS5wb3N0ZWRfYnlfaWQgPSBwLmlkXG4gICAgICAgICAgICBPUkRFUiBCWSBhLnBvc3RlZF9hdCBERVNDO1xuICAgICAgICBgO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShhbm5vdW5jZW1lbnRzUXVlcnkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0LnJvd3MgOiBbXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgZXJyb3IgZmV0Y2hpbmcgYW5ub3VuY2VtZW50czpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgYXR0ZW5kYW5jZSBkYXRhIGZvciBhIHNwZWNpZmljIGRhdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSAtIFRoZSBkYXRlIHRvIGZldGNoIGRhdGEgZm9yIGluICdZWVlZLU1NLUREJyBmb3JtYXQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3RbXT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYWlseUF0dGVuZGFuY2VEYXRhKGRhdGUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhdHRlbmRhbmNlUXVlcnkgPSBgXG4gICAgICAgICAgICBTRUxFQ1QgXG4gICAgICAgICAgICAgICAgZS5pZCwgXG4gICAgICAgICAgICAgICAgZS5maXJzdF9uYW1lIHx8ICcgJyB8fCBlLmxhc3RfbmFtZSBhcyBuYW1lLFxuICAgICAgICAgICAgICAgIGUucG9zaXRpb24sXG4gICAgICAgICAgICAgICAgZS5icmFuY2gsXG4gICAgICAgICAgICAgICAgdG9fY2hhcihhLnRpbWVfaW4sICdISDI0Ok1JJykgYXMgXCJ0aW1lSW5cIixcbiAgICAgICAgICAgICAgICB0b19jaGFyKGEudGltZV9vdXQsICdISDI0Ok1JJykgYXMgXCJ0aW1lT3V0XCIsXG4gICAgICAgICAgICAgICAgYS5zdGF0dXNcbiAgICAgICAgICAgIEZST00gZW1wbG95ZWVzIGVcbiAgICAgICAgICAgIExFRlQgSk9JTiBhdHRlbmRhbmNlIGEgT04gZS5pZCA9IGEuZW1wbG95ZWVfaWQgQU5EIGEuYXR0ZW5kYW5jZV9kYXRlID0gJDFcbiAgICAgICAgICAgIFdIRVJFIGUuc3RhdHVzID0gJ0FjdGl2ZSdcbiAgICAgICAgICAgIE9SREVSIEJZIGUubGFzdF9uYW1lLCBlLmZpcnN0X25hbWU7XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGF0dGVuZGFuY2VRdWVyeSwgW2RhdGVdKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChyb3cgPT4gKHtcbiAgICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICAgIHN0YXR1czogcm93LnN0YXR1cyB8fCAnQWJzZW50J1xuICAgICAgICB9KSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIEVycm9yIGZldGNoaW5nIGRhaWx5IGF0dGVuZGFuY2UgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgYWxsIGVtcGxveWVlcyBmcm9tIHRoZSBkYXRhYmFzZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdFtdPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgZW1wbG95ZWUgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlcygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBlbXBsb3llZXNRdWVyeSA9IGBcbiAgICAgICAgICAgIFNFTEVDVCBcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lIHx8ICcgJyB8fCBsYXN0X25hbWUgYXMgbmFtZSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICBicmFuY2gsXG4gICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICBGUk9NIGVtcGxveWVlc1xuICAgICAgICAgICAgT1JERVIgQlkgbGFzdF9uYW1lLCBmaXJzdF9uYW1lO1xuICAgICAgICBgO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShlbXBsb3llZXNRdWVyeSk7XG4gICAgICAgIHJldHVybiByZXN1bHQgPyByZXN1bHQucm93cyA6IFtdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBlcnJvciBmZXRjaGluZyBlbXBsb3llZXM6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBGZXRjaGVzIGFsbCBsZWF2ZSByZXF1ZXN0cyBmcm9tIHRoZSBkYXRhYmFzZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdFtdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbGVhdmVSZXF1ZXN0c1F1ZXJ5ID0gYFxuICAgICAgICAgICAgU0VMRUNUIFxuICAgICAgICAgICAgICAgIGxyLmlkLFxuICAgICAgICAgICAgICAgIGUuZmlyc3RfbmFtZSB8fCAnICcgfHwgZS5sYXN0X25hbWUgYXMgXCJlbXBsb3llZU5hbWVcIixcbiAgICAgICAgICAgICAgICBlLmlkIGFzIFwiZW1wbG95ZWVJZFwiLFxuICAgICAgICAgICAgICAgIGxyLmxlYXZlX3R5cGUsXG4gICAgICAgICAgICAgICAgdG9fY2hhcihsci5zdGFydF9kYXRlLCAnWVlZWS1NTS1ERCcpIGFzIFwic3RhcnREYXRlXCIsXG4gICAgICAgICAgICAgICAgdG9fY2hhcihsci5lbmRfZGF0ZSwgJ1lZWVktTU0tREQnKSBhcyBcImVuZERhdGVcIixcbiAgICAgICAgICAgICAgICBsci5yZWFzb24sXG4gICAgICAgICAgICAgICAgbHIuc3RhdHVzXG4gICAgICAgICAgICBGUk9NIGxlYXZlX3JlcXVlc3RzIGxyXG4gICAgICAgICAgICBKT0lOIGVtcGxveWVlcyBlIE9OIGxyLmVtcGxveWVlX2lkID0gZS5pZFxuICAgICAgICAgICAgT1JERVIgQlkgXG4gICAgICAgICAgICAgICAgQ0FTRSBsci5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgV0hFTiAnUGVuZGluZycgVEhFTiAxXG4gICAgICAgICAgICAgICAgICAgIFdIRU4gJ0FwcHJvdmVkJyBUSEVOIDJcbiAgICAgICAgICAgICAgICAgICAgV0hFTiAnUmVqZWN0ZWQnIFRIRU4gM1xuICAgICAgICAgICAgICAgICAgICBFTFNFIDRcbiAgICAgICAgICAgICAgICBFTkQsXG4gICAgICAgICAgICAgICAgbHIuc3RhcnRfZGF0ZSBBU0M7XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGxlYXZlUmVxdWVzdHNRdWVyeSk7XG4gICAgICAgIHJldHVybiByZXN1bHQgPyByZXN1bHQucm93cyA6IFtdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBlcnJvciBmZXRjaGluZyBsZWF2ZSByZXF1ZXN0czpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgYWxsIGVtcGxveWVlcyBhbmQgdGhlaXIgbGF0ZXN0IHBheXNsaXAgc3RhdHVzLlxuICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0W10+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzV2l0aFBheXNsaXBTdGF0dXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZW1wbG95ZWVzUXVlcnkgPSBgXG4gICAgICAgICAgICBTRUxFQ1QgXG4gICAgICAgICAgICAgICAgZS5pZCxcbiAgICAgICAgICAgICAgICBlLmZpcnN0X25hbWUgfHwgJyAnIHx8IGUubGFzdF9uYW1lIGFzIG5hbWUsXG4gICAgICAgICAgICAgICAgZS5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICBlLmRlcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgQ0FTRSBcbiAgICAgICAgICAgICAgICAgICAgV0hFTiBwLmlkIElTIE5PVCBOVUxMIFRIRU4gJ0dlbmVyYXRlZCdcbiAgICAgICAgICAgICAgICAgICAgRUxTRSAnUGVuZGluZydcbiAgICAgICAgICAgICAgICBFTkQgYXMgXCJwYXlzbGlwU3RhdHVzXCJcbiAgICAgICAgICAgIEZST00gZW1wbG95ZWVzIGVcbiAgICAgICAgICAgIExFRlQgSk9JTiBwYXlzbGlwcyBwIE9OIGUuaWQgPSBwLmVtcGxveWVlX2lkIFxuICAgICAgICAgICAgICAgIEFORCBwLnBlcmlvZF9zdGFydCA+PSBkYXRlX3RydW5jKCdtb250aCcsIGN1cnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgICBBTkQgcC5wZXJpb2RfZW5kIDw9IChkYXRlX3RydW5jKCdtb250aCcsIGN1cnJlbnRfZGF0ZSkgKyBpbnRlcnZhbCAnMSBtb250aCAtIDEgZGF5JylcbiAgICAgICAgICAgIFdIRVJFIGUuc3RhdHVzID0gJ0FjdGl2ZSdcbiAgICAgICAgICAgIE9SREVSIEJZIGUubGFzdF9uYW1lLCBlLmZpcnN0X25hbWU7XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGVtcGxveWVlc1F1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdC5yb3dzIDogW107XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIGVycm9yIGZldGNoaW5nIGVtcGxveWVlIHBheXNsaXAgc3RhdHVzOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8qKlxuICogRmV0Y2hlcyBhbGwgYWN0aXZlIGVtcGxveWVlcyB0byBiZSBzY2hlZHVsZWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3RbXT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZXNGb3JTY2hlZHVsaW5nKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGVtcGxveWVlc1F1ZXJ5ID0gYFxuICAgICAgICAgICAgU0VMRUNUIGlkLCBmaXJzdF9uYW1lIHx8ICcgJyB8fCBsYXN0X25hbWUgYXMgbmFtZVxuICAgICAgICAgICAgRlJPTSBlbXBsb3llZXNcbiAgICAgICAgICAgIFdIRVJFIHN0YXR1cyA9ICdBY3RpdmUnXG4gICAgICAgICAgICBPUkRFUiBCWSBsYXN0X25hbWUsIGZpcnN0X25hbWU7XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGVtcGxveWVlc1F1ZXJ5KTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChlbXAgPT4gKHsuLi5lbXAsIHNoaWZ0OiAnOTowMCAtIDE3OjAwJ30pKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWVzIGZvciBzY2hlZHVsaW5nOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8qKlxuICogRmV0Y2hlcyB0aGUgZGFzaGJvYXJkIGRhdGEgZm9yIGEgc3BlY2lmaWMgZW1wbG95ZWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZW1wbG95ZWVJZCAtIFRoZSBJRCBvZiB0aGUgZW1wbG95ZWUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7ZW1wbG95ZWU6IG9iamVjdCwgYW5ub3VuY2VtZW50czogb2JqZWN0W119Pn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlRGFzaGJvYXJkRGF0YShlbXBsb3llZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZW1wbG95ZWVRdWVyeSA9IFwiU0VMRUNUIGlkIGFzIFxcXCJlbXBsb3llZUlkXFxcIiwgZmlyc3RfbmFtZSB8fCAnICcgfHwgbGFzdF9uYW1lIGFzIG5hbWUsIHBvc2l0aW9uLCBkZXBhcnRtZW50IEZST00gZW1wbG95ZWVzIFdIRVJFIGlkID0gJDFcIjtcbiAgICAgICAgY29uc3QgYW5ub3VuY2VtZW50c1F1ZXJ5ID0gXCJTRUxFQ1QgaWQsIHRpdGxlLCBjb250ZW50LCB0b19jaGFyKHBvc3RlZF9hdCwgJ01vbnRoIERELCBZWVlZJykgYXMgZGF0ZSBGUk9NIGFubm91bmNlbWVudHMgV0hFUkUgc3RhdHVzID0gJ1B1Ymxpc2hlZCcgT1JERVIgQlkgcG9zdGVkX2F0IERFU0MgTElNSVQgNVwiO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgW2VtcGxveWVlUmVzdWx0LCBhbm5vdW5jZW1lbnRzUmVzdWx0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHF1ZXJ5KGVtcGxveWVlUXVlcnksIFtlbXBsb3llZUlkXSksXG4gICAgICAgICAgICBxdWVyeShhbm5vdW5jZW1lbnRzUXVlcnkpXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbXBsb3llZTogZW1wbG95ZWVSZXN1bHQ/LnJvd3NbMF0gfHwgbnVsbCxcbiAgICAgICAgICAgIGFubm91bmNlbWVudHM6IGFubm91bmNlbWVudHNSZXN1bHQ/LnJvd3MgfHwgW11cbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWUgZGFzaGJvYXJkIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgZW1wbG95ZWU6IG51bGwsIGFubm91bmNlbWVudHM6IFtdIH07XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgYXR0ZW5kYW5jZSBkYXRhIGZvciBhIHNwZWNpZmljIGVtcGxveWVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVtcGxveWVlSWQgLSBUaGUgSUQgb2YgdGhlIGVtcGxveWVlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1bW1hcnk6IG9iamVjdCwgcmVjb3Jkczogb2JqZWN0W119Pn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF0dGVuZGFuY2VEYXRhKGVtcGxveWVlSWQpIHtcbiAgICBjb25zdCBkZWZhdWx0RGF0YSA9IHsgXG4gICAgICAgIHN1bW1hcnk6IHsgZGF5c0F0dGVuZGVkOiAwLCBsYXRlczogMCwgYWJzZW5jZXM6IDAsIHRvdGFsSG91cnM6IDAsIGF2YWlsYWJsZUxlYXZlczogMCB9LFxuICAgICAgICByZWNvcmRzOiBbXSBcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXR0ZW5kYW5jZVF1ZXJ5ID0gYFxuICAgICAgICAgICAgU0VMRUNUIFxuICAgICAgICAgICAgICAgIGF0dGVuZGFuY2VfZGF0ZSwgXG4gICAgICAgICAgICAgICAgdG9fY2hhcih0aW1lX2luLCAnSEgyNDpNSScpIGFzIFwidGltZV9pblwiLCBcbiAgICAgICAgICAgICAgICB0b19jaGFyKHRpbWVfb3V0LCAnSEgyNDpNSScpIGFzIFwidGltZV9vdXRcIiwgXG4gICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICBGUk9NIGF0dGVuZGFuY2VcbiAgICAgICAgICAgIFdIRVJFIGVtcGxveWVlX2lkID0gJDEgXG4gICAgICAgICAgICAgIEFORCBhdHRlbmRhbmNlX2RhdGUgPj0gZGF0ZV90cnVuYygnbW9udGgnLCBjdXJyZW50X2RhdGUpXG4gICAgICAgICAgICBPUkRFUiBCWSBhdHRlbmRhbmNlX2RhdGUgREVTQztcbiAgICAgICAgYDtcbiAgICAgICAgY29uc3QgbGVhdmVCYWxhbmNlUXVlcnkgPSBgXG4gICAgICAgICAgICBTRUxFQ1QgYXZhaWxhYmxlX2xlYXZlcyBGUk9NIGVtcGxveWVlcyBXSEVSRSBpZCA9ICQxO1xuICAgICAgICBgO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgW2F0dGVuZGFuY2VSZXN1bHQsIGxlYXZlUmVzdWx0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHF1ZXJ5KGF0dGVuZGFuY2VRdWVyeSwgW2VtcGxveWVlSWRdKSxcbiAgICAgICAgICAgIHF1ZXJ5KGxlYXZlQmFsYW5jZVF1ZXJ5LCBbZW1wbG95ZWVJZF0pXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICghYXR0ZW5kYW5jZVJlc3VsdCB8fCAhbGVhdmVSZXN1bHQpIHtcbiAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdERhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXR0ZW5kYW5jZVJlc3VsdC5yb3dzLm1hcChyID0+ICh7XG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShyLmF0dGVuZGFuY2VfZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIHllYXI6ICdudW1lcmljJ30pLFxuICAgICAgICAgICAgdGltZUluOiByLnRpbWVfaW4sXG4gICAgICAgICAgICB0aW1lT3V0OiByLnRpbWVfb3V0LFxuICAgICAgICAgICAgc3RhdHVzOiByLnN0YXR1c1xuICAgICAgICB9KSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGF5c0F0dGVuZGVkID0gMDtcbiAgICAgICAgbGV0IGxhdGVzID0gMDtcbiAgICAgICAgbGV0IGFic2VuY2VzID0gMDtcbiAgICAgICAgbGV0IHRvdGFsSG91cnMgPSAwO1xuXG4gICAgICAgIHJlY29yZHMuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5zdGF0dXMgPT09ICdQcmVzZW50JyB8fCByZWNvcmQuc3RhdHVzID09PSAnTGF0ZScpIHtcbiAgICAgICAgICAgICAgICBkYXlzQXR0ZW5kZWQrKztcbiAgICAgICAgICAgICAgICB0b3RhbEhvdXJzICs9IDg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjb3JkLnN0YXR1cyA9PT0gJ0xhdGUnKSB7XG4gICAgICAgICAgICAgICAgbGF0ZXMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhdmFpbGFibGVMZWF2ZXMgPSBsZWF2ZVJlc3VsdD8ucm93cz8uWzBdPy5hdmFpbGFibGVfbGVhdmVzID8/IDA7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSB7IGRheXNBdHRlbmRlZCwgbGF0ZXMsIGFic2VuY2VzLCB0b3RhbEhvdXJzLCBhdmFpbGFibGVMZWF2ZXMgfTtcblxuICAgICAgICByZXR1cm4geyBzdW1tYXJ5LCByZWNvcmRzIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIEVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGE7XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgcGFzdCBsZWF2ZSByZXF1ZXN0cyBmb3IgYSBnaXZlbiBlbXBsb3llZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlbXBsb3llZUlkIC0gVGhlIElEIG9mIHRoZSBlbXBsb3llZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdFtdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhc3RMZWF2ZVJlcXVlc3RzKGVtcGxveWVlSWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXN0UmVxdWVzdHNRdWVyeSA9IGBcbiAgICAgICAgICAgIFNFTEVDVCBcbiAgICAgICAgICAgICAgICBpZCwgXG4gICAgICAgICAgICAgICAgbGVhdmVfdHlwZSwgXG4gICAgICAgICAgICAgICAgdG9fY2hhcihzdGFydF9kYXRlLCAnWVlZWS1NTS1ERCcpIGFzIFwic3RhcnREYXRlXCIsIFxuICAgICAgICAgICAgICAgIHRvX2NoYXIoZW5kX2RhdGUsICdZWVlZLU1NLUREJykgYXMgXCJlbmREYXRlXCIsIFxuICAgICAgICAgICAgICAgIHN0YXR1cyBcbiAgICAgICAgICAgIEZST00gbGVhdmVfcmVxdWVzdHMgXG4gICAgICAgICAgICBXSEVSRSBlbXBsb3llZV9pZCA9ICQxIFxuICAgICAgICAgICAgT1JERVIgQlkgc3RhcnRfZGF0ZSBERVNDO1xuICAgICAgICBgO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShwYXN0UmVxdWVzdHNRdWVyeSwgW2VtcGxveWVlSWRdKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdC5yb3dzIDogW107XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIGVycm9yIGZldGNoaW5nIGxlYXZlIHJlcXVlc3RzOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBsZWF2ZSByZXF1ZXN0IGluIHRoZSBkYXRhYmFzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBsZWF2ZVJlcXVlc3QgLSBUaGUgbGVhdmUgcmVxdWVzdCBkYXRhLlxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMZWF2ZVJlcXVlc3QobGVhdmVSZXF1ZXN0KSB7XG4gICAgY29uc3QgeyBlbXBsb3llZUlkLCBsZWF2ZVR5cGUsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcmVhc29uIH0gPSBsZWF2ZVJlcXVlc3Q7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaW5zZXJ0UXVlcnkgPSBgXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyBsZWF2ZV9yZXF1ZXN0cyAoZW1wbG95ZWVfaWQsIGxlYXZlX3R5cGUsIHN0YXJ0X2RhdGUsIGVuZF9kYXRlLCByZWFzb24pXG4gICAgICAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSk7XG4gICAgICAgIGA7XG4gICAgICAgIGF3YWl0IHF1ZXJ5KGluc2VydFF1ZXJ5LCBbZW1wbG95ZWVJZCwgbGVhdmVUeXBlLCBzdGFydERhdGUsIGVuZERhdGUsIHJlYXNvbl0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBlcnJvciBjcmVhdGluZyBsZWF2ZSByZXF1ZXN0OlwiLCBlcnJvcik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgbGVhdmUgcmVxdWVzdCBpbiBkYXRhYmFzZS5cIik7XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgdGhlIHBheSBwZXJpb2RzIGZvciB0aGUgc3BlY2lmaWVkIGVtcGxveWVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVtcGxveWVlSWQgLSBUaGUgSUQgb2YgdGhlIGVtcGxveWVlLlxuICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0W10+fSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiBhcnJheSBvZiBwYXkgcGVyaW9kcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBheVBlcmlvZHMoZW1wbG95ZWVJZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAgICAgYFNFTEVDVCBcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBwZXJpb2Rfc3RhcnQsXG4gICAgICAgICAgICAgICAgcGVyaW9kX2VuZCxcbiAgICAgICAgICAgICAgICB0b19jaGFyKHBheV9kYXRlLCAnTW9udGggREQsIFlZWVknKSBhcyBcInBheURhdGVcIixcbiAgICAgICAgICAgICAgICBlYXJuaW5ncyxcbiAgICAgICAgICAgICAgICBkZWR1Y3Rpb25zLFxuICAgICAgICAgICAgICAgIG5ldF9wYXlcbiAgICAgICAgICAgICBGUk9NIHBheXNsaXBzIFxuICAgICAgICAgICAgIFdIRVJFIGVtcGxveWVlX2lkID0gJDEgXG4gICAgICAgICAgICAgT1JERVIgQlkgcGVyaW9kX3N0YXJ0IERFU0NgLFxuICAgICAgICAgICAgW2VtcGxveWVlSWRdXG4gICAgICAgICk7XG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gW107XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFBlcmlvZHMgPSByZXN1bHQucm93cy5tYXAocCA9PiAoe1xuICAgICAgICAgICAgLi4ucCxcbiAgICAgICAgICAgIHBlcmlvZDogYCR7bmV3IERhdGUocC5wZXJpb2Rfc3RhcnQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAtICR7bmV3IERhdGUocC5wZXJpb2RfZW5kKS50b0xvY2FsZURhdGVTdHJpbmcoKX1gXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFBlcmlvZHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBwYXkgcGVyaW9kczpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgdGhlIHNjaGVkdWxlIGZvciBhIGdpdmVuIGVtcGxveWVlIGZvciB0aGUgY3VycmVudCB3ZWVrLlxuICogQHBhcmFtIHtzdHJpbmd9IGVtcGxveWVlSWQgVGhlIElEIG9mIHRoZSBlbXBsb3llZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdFtdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNjaGVkdWxlKGVtcGxveWVlSWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzY2hlZHVsZVF1ZXJ5ID0gYFxuICAgICAgICAgICAgU0VMRUNUIHNjaGVkdWxlX2RhdGEgXG4gICAgICAgICAgICBGUk9NIHNjaGVkdWxlc1xuICAgICAgICAgICAgV0hFUkUgZW1wbG95ZWVfaWQgPSAkMSBcbiAgICAgICAgICAgICAgQU5EIHdlZWtfc3RhcnRfZGF0ZSA9IGRhdGVfdHJ1bmMoJ3dlZWsnLCBjdXJyZW50X2RhdGUpO1xuICAgICAgICBgO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShzY2hlZHVsZVF1ZXJ5LCBbZW1wbG95ZWVJZF0pO1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yb3dzLmxlbmd0aCA+IDAgJiYgcmVzdWx0LnJvd3NbMF0uc2NoZWR1bGVfZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yb3dzWzBdLnNjaGVkdWxlX2RhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBlcnJvciBmZXRjaGluZyBzY2hlZHVsZTpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgdGhlIGRldGFpbHMgZm9yIGEgc3BlY2lmaWMgcmVwb3J0LlxuICogSW4gdGhpcyBtb2NrIHZlcnNpb24sIGl0IHJldHVybnMgbnVsbC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIFRoZSBJRCBvZiB0aGUgcmVwb3J0IHRvIGZldGNoLlxuICogQHJldHVybnMge1Byb21pc2U8bnVsbD59IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggbnVsbC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9ydERldGFpbHMoaWQpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBJbiBhIHJlYWwgYXBwbGljYXRpb24sIHRoaXMgd291bGQgcXVlcnkgdGhlIGRhdGFiYXNlLlxuICAgICAgICAvLyBGb3Igbm93LCB3ZSByZXR1cm4gbnVsbCB0byBzaW11bGF0ZSBhIHJlcG9ydCBub3QgYmVpbmcgZm91bmRcbiAgICAgICAgLy8gd2hpY2ggZGVtb25zdHJhdGVzIHRoZSBVSSdzIGhhbmRsaW5nIG9mIHRoaXMgY2FzZS5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIEVycm9yIGZldGNoaW5nIHJlcG9ydCBkZXRhaWxzOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuLyoqXG4gKiBGZXRjaGVzIGFsbCBwZW5kaW5nIGVtcGxveWVlIGFwcHJvdmFscyBmcm9tIHRoZSBkYXRhYmFzZS5cbiAqIEluIHRoaXMgbW9jayB2ZXJzaW9uLCBpdCByZXR1cm5zIGEgaGFyZGNvZGVkIGxpc3QuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3RbXT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZW5kaW5nRW1wbG95ZWVBcHByb3ZhbHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSW4gYSByZWFsIGFwcGxpY2F0aW9uLCB0aGlzIHdvdWxkIHF1ZXJ5IHRoZSBkYXRhYmFzZSBmb3IgZW1wbG95ZWVzIHdpdGggJ1BlbmRpbmcgQXBwcm92YWwnIHN0YXR1cy5cbiAgICAgICAgLy8gRm9yIG5vdywgd2UgcmV0dXJuIGEgaGFyZGNvZGVkIGxpc3QgdG8gZGVtb25zdHJhdGUgdGhlIGZlYXR1cmUuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7IGlkOiAnUEVORC0wMDEnLCBzdWJtaXR0ZWRCeTogJ09saXZpYSBDaGVuIChIUiknLCBlbXBsb3llZU5hbWU6ICdNaWNoYWVsIEpvaG5zb24nLCBwb3NpdGlvbjogJ1NvZnR3YXJlIEVuZ2luZWVyJywgc3VibWlzc2lvbkRhdGU6ICcyMDI0LTA4LTIyJyB9LFxuICAgICAgICAgICAgeyBpZDogJ1BFTkQtMDAyJywgc3VibWl0dGVkQnk6ICdPbGl2aWEgQ2hlbiAoSFIpJywgZW1wbG95ZWVOYW1lOiAnSmVzc2ljYSBXaWxsaWFtcycsIHBvc2l0aW9uOiAnTWFya2V0aW5nIExlYWQnLCBzdWJtaXNzaW9uRGF0ZTogJzIwMjQtMDgtMjEnIH0sXG4gICAgICAgICAgICB7IGlkOiAnUEVORC0wMDMnLCBzdWJtaXR0ZWRCeTogJ09saXZpYSBDaGVuIChIUiknLCBlbXBsb3llZU5hbWU6ICdDaHJpcyBCcm93bicsIHBvc2l0aW9uOiAnSVQgU3VwcG9ydCcsIHN1Ym1pc3Npb25EYXRlOiAnMjAyNC0wOC0yMCcgfSxcbiAgICAgICAgXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgRXJyb3IgZmV0Y2hpbmcgcGVuZGluZyBhcHByb3ZhbHM6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBcHByb3ZlcyBhIHBlbmRpbmcgZW1wbG95ZWUuXG4gKiBJbiB0aGlzIG1vY2sgdmVyc2lvbiwgaXQganVzdCBzaW11bGF0ZXMgc3VjY2VzcyB3aXRob3V0IGEgZGF0YWJhc2Ugd3JpdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZW1wbG95ZWVJZCBUaGUgSUQgb2YgdGhlIGVtcGxveWVlIHRvIGFwcHJvdmUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcHJvdmVFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgY29uc29sZS5sb2coYEFwcHJvdmluZyBlbXBsb3llZSAke2VtcGxveWVlSWR9YCk7XG4gICAgLy8gSW4gYSByZWFsIGFwcCwgeW91IHdvdWxkIHJ1biBhbiBVUERBVEUgcXVlcnk6XG4gICAgLy8gYXdhaXQgcXVlcnkoXCJVUERBVEUgZW1wbG95ZWVzIFNFVCBzdGF0dXMgPSAnQWN0aXZlJyBXSEVSRSBpZCA9ICQxXCIsIFtlbXBsb3llZUlkXSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufVxuXG4vKipcbiAqIFJlamVjdHMgYSBwZW5kaW5nIGVtcGxveWVlLlxuICogSW4gdGhpcyBtb2NrIHZlcnNpb24sIGl0IGp1c3Qgc2ltdWxhdGVzIHN1Y2Nlc3Mgd2l0aG91dCBhIGRhdGFiYXNlIHdyaXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVtcGxveWVlSWQgVGhlIElEIG9mIHRoZSBlbXBsb3llZSB0byByZWplY3QuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlamVjdEVtcGxveWVlKGVtcGxveWVlSWQpIHtcbiAgICBjb25zb2xlLmxvZyhgUmVqZWN0aW5nIGVtcGxveWVlICR7ZW1wbG95ZWVJZH1gKTtcbiAgICAvLyBJbiBhIHJlYWwgYXBwLCB5b3Ugd291bGQgcnVuIGEgREVMRVRFIHF1ZXJ5IG9yIHVwZGF0ZSBzdGF0dXMgdG8gJ1JlamVjdGVkJzpcbiAgICAvLyBhd2FpdCBxdWVyeShcIkRFTEVURSBGUk9NIGVtcGxveWVlcyBXSEVSRSBpZCA9ICQxIEFORCBzdGF0dXMgPSAnUGVuZGluZyBBcHByb3ZhbCdcIiwgW2VtcGxveWVlSWRdKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQW9jc0IifQ==
}}),
"[project]/src/app/admin/approvals/data:59a14c [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"400a1da22bb7d7cb687721aaaf3321bbddc10612b0":"approveEmployee"},"src/app/admin/approvals/actions.js",""] */ __turbopack_context__.s({
    "approveEmployee": (()=>approveEmployee)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var approveEmployee = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("400a1da22bb7d7cb687721aaaf3321bbddc10612b0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "approveEmployee"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIGVtcGxveWVlIGFwcHJvdmFscyBwYWdlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGFwcHJvdmVFbXBsb3llZSBhcyBhcHByb3ZlRW1wbG95ZWVEYiwgcmVqZWN0RW1wbG95ZWUgYXMgcmVqZWN0RW1wbG95ZWVEYiB9IGZyb20gJ0AvbGliL2RhdGEnO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcHJvdmVFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBwcm92ZUVtcGxveWVlRGIoZW1wbG95ZWVJZCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYXBwcm92YWxzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vZGFzaGJvYXJkJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdFbXBsb3llZSBhcHByb3ZlZCBzdWNjZXNzZnVsbHkuJyB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gYXBwcm92ZSBlbXBsb3llZS4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVqZWN0RW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHJlamVjdEVtcGxveWVlRGIoZW1wbG95ZWVJZCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYXBwcm92YWxzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vZGFzaGJvYXJkJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdFbXBsb3llZSByZWplY3RlZCBzdWNjZXNzZnVsbHkuJyB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gcmVqZWN0IGVtcGxveWVlLicgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJTQVFzQiJ9
}}),
"[project]/src/app/admin/approvals/data:9e8d7d [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4026e4b39b9e3767d3c57d1eec9edba57019fcd194":"rejectEmployee"},"src/app/admin/approvals/actions.js",""] */ __turbopack_context__.s({
    "rejectEmployee": (()=>rejectEmployee)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var rejectEmployee = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4026e4b39b9e3767d3c57d1eec9edba57019fcd194", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "rejectEmployee"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIGVtcGxveWVlIGFwcHJvdmFscyBwYWdlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGFwcHJvdmVFbXBsb3llZSBhcyBhcHByb3ZlRW1wbG95ZWVEYiwgcmVqZWN0RW1wbG95ZWUgYXMgcmVqZWN0RW1wbG95ZWVEYiB9IGZyb20gJ0AvbGliL2RhdGEnO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcHJvdmVFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBwcm92ZUVtcGxveWVlRGIoZW1wbG95ZWVJZCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYXBwcm92YWxzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vZGFzaGJvYXJkJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdFbXBsb3llZSBhcHByb3ZlZCBzdWNjZXNzZnVsbHkuJyB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gYXBwcm92ZSBlbXBsb3llZS4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVqZWN0RW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHJlamVjdEVtcGxveWVlRGIoZW1wbG95ZWVJZCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYXBwcm92YWxzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vZGFzaGJvYXJkJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdFbXBsb3llZSByZWplY3RlZCBzdWNjZXNzZnVsbHkuJyB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gcmVqZWN0IGVtcGxveWVlLicgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBTQW1Cc0IifQ==
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
"[project]/src/components/ui/dialog.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * The root component for a dialog.
 */ const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
/**
 * The trigger that opens the dialog.
 */ const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
/**
 * A portal that renders its children into a new stacking context.
 */ const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
/**
 * A button that closes the dialog.
 */ const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
/**
 * A semi-transparent overlay that is rendered behind the dialog.
 */ const DialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
/**
 * The main content of the dialog.
 */ const DialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.jsx",
                lineNumber: 55,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.jsx",
                                lineNumber: 66,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
/**
 * The header of the dialog, containing the title and description.
 */ const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 81,
        columnNumber: 3
    }, this);
DialogHeader.displayName = "DialogHeader";
/**
 * The footer of the dialog, typically containing action buttons.
 */ const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 98,
        columnNumber: 3
    }, this);
DialogFooter.displayName = "DialogFooter";
/**
 * The title of the dialog.
 */ const DialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 112,
        columnNumber: 3
    }, this));
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
/**
 * The description of the dialog.
 */ const DialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 127,
        columnNumber: 3
    }, this));
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}}),
"[project]/src/app/admin/approvals/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileoverview This file defines the Pending Approvals page for the Admin portal.
 * It provides administrators with a view to manage and approve/reject new employee submissions.
 */ __turbopack_context__.s({
    "default": (()=>PendingApprovalsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$cb6d99__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:cb6d99 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$approvals$2f$data$3a$59a14c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/approvals/data:59a14c [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$approvals$2f$data$3a$9e8d7d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/approvals/data:9e8d7d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-ssr] (ecmascript)");
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
function PendingApprovalsPage() {
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [pendingApprovals, setPendingApprovals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$cb6d99__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPendingEmployeeApprovals"])();
            setPendingApprovals(data);
        };
        fetchData();
    }, []);
    const handleApprove = async (id)=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$approvals$2f$data$3a$59a14c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["approveEmployee"])(id);
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$approvals$2f$data$3a$9e8d7d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["rejectEmployee"])(id);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold font-headline",
                children: "Pending Employee Approvals"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/approvals/page.jsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Incoming Employee Submissions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: pendingApprovals.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Submitted By"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 117,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Employee Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 118,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Position"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 119,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Submission Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                lineNumber: 120,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: pendingApprovals.map((req)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: req.employeeName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: req.position
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 131,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: req.submissionDate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                    lineNumber: 132,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 justify-end",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                                        children: [
                                                                                            "Pending Approval: ",
                                                                                            req.employeeName
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 143,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2 text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogClose"], {
                                                                                    asChild: true,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            className: "text-green-600 border-green-600 hover:bg-green-100 hover:text-green-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                                        children: "Are you sure?"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 168,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                                        children: "Cancel"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 174,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            className: "text-red-600 border-red-600 hover:bg-red-100 hover:text-red-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                                        children: "Are you sure?"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 187,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                                        children: "Cancel"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/approvals/page.jsx",
                                                                                        lineNumber: 193,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
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
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}}),

};

//# sourceMappingURL=src_eb7392c2._.js.map