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
"[project]/src/lib/data:2439a1 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40ed5a75d32568df3e02e1d7138130c11b0fa518ff":"getEmployeeById"},"src/lib/data.js",""] */ __turbopack_context__.s({
    "getEmployeeById": (()=>getEmployeeById)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getEmployeeById = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40ed5a75d32568df3e02e1d7138130c11b0fa518ff", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getEmployeeById"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIGZvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHF1ZXJ5IH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIUkRhc2hib2FyZERhdGEoKSB7XG4gICAgY29uc3QgdG90YWxFbXBsb3llZXNSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCBDT1VOVCgqKSBGUk9NIGFjY291bnRzIFdIRVJFIHJvbGUgPSAnRW1wbG95ZWUnXCIpO1xuICAgIGNvbnN0IHRvdGFsRW1wbG95ZWVzID0gdG90YWxFbXBsb3llZXNSZXN1bHQucm93c1swXS5jb3VudCB8fCAnMCc7XG5cbiAgICBjb25zdCBwZW5kaW5nTGVhdmVSZXF1ZXN0c1Jlc3VsdCA9IGF3YWl0IHF1ZXJ5KFwiU0VMRUNUIENPVU5UKCopIEZST00gbGVhdmVfcmVxdWVzdHMgV0hFUkUgc3RhdHVzID0gJ1BlbmRpbmcnXCIpO1xuICAgIGNvbnN0IHBlbmRpbmdMZWF2ZVJlcXVlc3RzID0gcGVuZGluZ0xlYXZlUmVxdWVzdHNSZXN1bHQucm93c1swXS5jb3VudCB8fCAnMCc7XG5cbiAgICAvLyBNb2NraW5nIHNvbWUgc3RhdHMgYXMgdGhlcmUncyBubyB0YWJsZSBmb3IgdGhlbSB5ZXRcbiAgICBjb25zdCBzdGF0cyA9IFtcbiAgICAgICAgeyB0aXRsZTogJ1RvdGFsIEVtcGxveWVlcycsIHZhbHVlOiBTdHJpbmcodG90YWxFbXBsb3llZXMpLCBjaGFuZ2U6ICcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdPbiBUaW1lIFBlcmNlbnRhZ2UnLCB2YWx1ZTogYDAlYCwgY2hhbmdlOiAnJyB9LCAvLyBObyBhdHRlbmRhbmNlIGRhdGEgeWV0XG4gICAgICAgIHsgdGl0bGU6ICdQZW5kaW5nIExlYXZlIFJlcXVlc3RzJywgdmFsdWU6IFN0cmluZyhwZW5kaW5nTGVhdmVSZXF1ZXN0cyksIGNoYW5nZTogJycgfSxcbiAgICBdO1xuXG4gICAgLy8gTm8gYWN0aXZpdHkgbG9nIHRhYmxlIHlldFxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXRzLFxuICAgICAgICByZWNlbnRBY3Rpdml0aWVzOiBbXVxuICAgIH07XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhc3RBbm5vdW5jZW1lbnRzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgU0VMRUNUIGEuaWQsIGEudGl0bGUsIGEuY29udGVudCwgYS5zdGF0dXMsIGEuY3JlYXRlZF9hdCwgYWNjLmZpcnN0X25hbWUsIGFjYy5sYXN0X25hbWVcbiAgICAgICAgRlJPTSBhbm5vdW5jZW1lbnRzIGFcbiAgICAgICAgSk9JTiBhY2NvdW50cyBhY2MgT04gYS5wb3N0ZWRfYnkgPSBhY2MuaWRcbiAgICAgICAgT1JERVIgQlkgYS5jcmVhdGVkX2F0IERFU0NcbiAgICBgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4gKHtcbiAgICAgICAgLi4uYSxcbiAgICAgICAgcG9zdGVkQnk6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICBkYXRlOiBmb3JtYXQobmV3IERhdGUoYS5jcmVhdGVkX2F0KSwgJ3l5eXktTU0tZGQnKVxuICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFubm91bmNlbWVudCh0aXRsZSwgY29udGVudCwgc3RhdHVzKSB7XG4gICAgY29uc3QgaWQgPSAnSFItMDAxJzsgLy8gSW4gYSByZWFsIGFwcCwgdGhpcyBzaG91bGQgY29tZSBmcm9tIHNlc3Npb25cbiAgICBhd2FpdCBxdWVyeShcbiAgICAgICAgJ0lOU0VSVCBJTlRPIGFubm91bmNlbWVudHMgKHRpdGxlLCBjb250ZW50LCBzdGF0dXMsIHBvc3RlZF9ieSkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgICBbdGl0bGUsIGNvbnRlbnQsIHN0YXR1cywgaWRdXG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFubm91bmNlbWVudChpZCkge1xuICAgIGF3YWl0IHF1ZXJ5KCdERUxFVEUgRlJPTSBhbm5vdW5jZW1lbnRzIFdIRVJFIGlkID0gJDEnLCBbaWRdKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhaWx5QXR0ZW5kYW5jZURhdGEoZGF0ZSkge1xuICAgIC8vIFRoaXMgaXMgYSBwbGFjZWhvbGRlciBhcyB0aGVyZSBpcyBubyBhdHRlbmRhbmNlIHRhYmxlIHlldC5cbiAgICByZXR1cm4gW107XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlcygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBwb3NpdGlvbiwgYnJhbmNoLCBzdGF0dXNcbiAgICAgICAgRlJPTSBhY2NvdW50c1xuICAgICAgICBXSEVSRSByb2xlID0gJ0VtcGxveWVlJyBBTkQgc3RhdHVzICE9ICdQZW5kaW5nIEFwcHJvdmFsJ1xuICAgIGApO1xuICAgIHJldHVybiByZXN1bHQucm93cy5tYXAoYSA9PiAoe1xuICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgbmFtZTogYCR7YS5maXJzdF9uYW1lfSAke2EubGFzdF9uYW1lfWAsXG4gICAgICAgIHBvc2l0aW9uOiBhLnBvc2l0aW9uLFxuICAgICAgICBicmFuY2g6IGEuYnJhbmNoLFxuICAgICAgICBzdGF0dXM6IGEuc3RhdHVzXG4gICAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVCeUlkKGlkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCAqIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMScsIFtpZF0pO1xuICAgIGNvbnN0IGVtcGxveWVlID0gcmVzdWx0LnJvd3NbMF07XG4gICAgaWYgKCFlbXBsb3llZSkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5lbXBsb3llZSxcbiAgICAgICAgbmFtZTogYCR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9YCxcbiAgICAgICAgZGF0ZV9oaXJlZDogZm9ybWF0KG5ldyBEYXRlKGVtcGxveWVlLmRhdGVfaGlyZWQpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICBkYXRlX29mX2JpcnRoOiBmb3JtYXQobmV3IERhdGUoZW1wbG95ZWUuZGF0ZV9vZl9iaXJ0aCksICd5eXl5LU1NLWRkJyksXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRW1wbG95ZWUoaWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeSgnREVMRVRFIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMScsIFtpZF0pO1xuICAgIHJldHVybiByZXN1bHQucm93Q291bnQgPiAwO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhdmVSZXF1ZXN0cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBsci5pZCwgbHIubGVhdmVfdHlwZSwgbHIuc3RhcnRfZGF0ZSwgbHIuZW5kX2RhdGUsIGxyLnJlYXNvbiwgbHIuc3RhdHVzLFxuICAgICAgICAgICAgICAgYS5pZCBhcyBcImVtcGxveWVlSWRcIiwgYS5maXJzdF9uYW1lLCBhLmxhc3RfbmFtZVxuICAgICAgICBGUk9NIGxlYXZlX3JlcXVlc3RzIGxyXG4gICAgICAgIEpPSU4gYWNjb3VudHMgYSBPTiBsci5lbXBsb3llZV9pZCA9IGEuaWRcbiAgICAgICAgT1JERVIgQlkgbHIuY3JlYXRlZF9hdCBERVNDXG4gICAgYCk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChsciA9PiAoe1xuICAgICAgICBpZDogbHIuaWQsXG4gICAgICAgIGVtcGxveWVlSWQ6IGxyLmVtcGxveWVlSWQsXG4gICAgICAgIGVtcGxveWVlTmFtZTogYCR7bHIuZmlyc3RfbmFtZX0gJHtsci5sYXN0X25hbWV9YCxcbiAgICAgICAgbGVhdmVfdHlwZTogbHIubGVhdmVfdHlwZSxcbiAgICAgICAgc3RhcnREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuc3RhcnRfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdChuZXcgRGF0ZShsci5lbmRfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIHJlYXNvbjogbHIucmVhc29uLFxuICAgICAgICBzdGF0dXM6IGxyLnN0YXR1c1xuICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUxlYXZlUmVxdWVzdFN0YXR1cyhyZXF1ZXN0SWQsIHN0YXR1cykge1xuICAgIGF3YWl0IHF1ZXJ5KCdVUERBVEUgbGVhdmVfcmVxdWVzdHMgU0VUIHN0YXR1cyA9ICQxIFdIRVJFIGlkID0gJDInLCBbc3RhdHVzLCByZXF1ZXN0SWRdKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlc1dpdGhQYXlzbGlwU3RhdHVzKCkge1xuICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBcInBvc2l0aW9uXCIsIGRlcGFydG1lbnQsIHNzc19udW1iZXIsIHBoaWxoZWFsdGhfbnVtYmVyLCBwYWdpYmlnX251bWJlciwgdGluXG4gICAgICAgIEZST00gYWNjb3VudHNcbiAgICAgICAgV0hFUkUgcm9sZSA9ICdFbXBsb3llZSdcbiAgICBgKTtcbiAgICBcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4ge1xuICAgICAgICBjb25zdCBoYXNCZW5lZml0cyA9IGEuc3NzX251bWJlciAmJiBhLnBoaWxoZWFsdGhfbnVtYmVyICYmIGEucGFnaWJpZ19udW1iZXIgJiYgYS50aW47XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgIG5hbWU6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgICAgICBkZXBhcnRtZW50OiBhLmRlcGFydG1lbnQsXG4gICAgICAgICAgICBwYXlzbGlwU3RhdHVzOiAnUGVuZGluZycsIC8vIE5vIHBheXNsaXAgdGFibGUgeWV0XG4gICAgICAgICAgICBiZW5lZml0c1N0YXR1czogaGFzQmVuZWZpdHMgPyAnQ29tcGxldGUnIDogJ0luY29tcGxldGUnLFxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzRm9yU2NoZWR1bGluZygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdFbXBsb3llZScgQU5EIHN0YXR1cyA9ICdBY3RpdmUnXG4gICAgYCk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChhID0+ICh7XG4gICAgICAgIGlkOiBhLmlkLFxuICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgc2hpZnQ6ICc5OjAwIC0gMTc6MDAnIC8vIERlZmF1bHQgc2hpZnRcbiAgICB9KSk7XG59XG4gICAgLy8gRmV0Y2ggRW1wbG95ZWUgRGF0YSBmcm9tIERhdGFiYXNlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVEYXNoYm9hcmREYXRhKGVtcGxveWVlaWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeSgnU0VMRUNUIGlkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIFwicG9zaXRpb25cIiwgZGVwYXJ0bWVudCwgYnJhbmNoLCBlbWFpbCBGUk9NIGFjY291bnRzIFdIRVJFIGlkID0gJDEnLCBbZW1wbG95ZWVpZF0pO1xuICAgIGNvbnN0IGVtcGxveWVlID0gcmVzdWx0LnJvd3NbMF07XG4gICAgXG4gICAgaWYgKCFlbXBsb3llZSkge1xuICAgICAgICByZXR1cm4geyBlbXBsb3llZTogeyBuYW1lOiAnRW1wbG95ZWUgTm90IEZvdW5kJyB9LCBhbm5vdW5jZW1lbnRzOiBbXSB9O1xuICAgIH1cblxuICAgIGNvbnN0IGFubm91bmNlbWVudHNSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCB0aXRsZSwgY29udGVudCwgY3JlYXRlZF9hdCBGUk9NIGFubm91bmNlbWVudHMgV0hFUkUgc3RhdHVzID0gJ1B1Ymxpc2hlZCcgT1JERVIgQlkgY3JlYXRlZF9hdCBERVNDIExJTUlUIDVcIik7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1wbG95ZWU6IHtcbiAgICAgICAgICAgIGVtcGxveWVlSWQ6IGVtcGxveWVlLmlkLFxuICAgICAgICAgICAgbmFtZTogYCR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBlbXBsb3llZS5wb3NpdGlvbixcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IGVtcGxveWVlLmRlcGFydG1lbnQsXG4gICAgICAgICAgICBicmFuY2g6IGVtcGxveWVlLmJyYW5jaCxcbiAgICAgICAgICAgIGVtYWlsOiBlbXBsb3llZS5lbWFpbCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5ub3VuY2VtZW50czogYW5ub3VuY2VtZW50c1Jlc3VsdC5yb3dzLm1hcChhID0+ICh7XG4gICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgIHRpdGxlOiBhLnRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogYS5jb250ZW50LFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEuY3JlYXRlZF9hdCksICdNTU1NIGQsIHl5eXknKVxuICAgICAgICB9KSlcbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZURhdGEoZW1wbG95ZWVJZCkge1xuICAgIC8vIFRoaXMgaXMgYSBwbGFjZWhvbGRlciBhcyB0aGVyZSBpcyBubyBhdHRlbmRhbmNlIHRhYmxlIHlldC5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdW1tYXJ5OiB7IGRheXNBdHRlbmRlZDogMCwgbGF0ZXM6IDAsIGFic2VuY2VzOiAwLCB0b3RhbEhvdXJzOiAwLCBhdmFpbGFibGVMZWF2ZXM6IDAgfSxcbiAgICAgICAgcmVjb3JkczogW11cbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFzdExlYXZlUmVxdWVzdHMoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAnU0VMRUNUIGlkLCBsZWF2ZV90eXBlLCBzdGFydF9kYXRlLCBlbmRfZGF0ZSwgc3RhdHVzIEZST00gbGVhdmVfcmVxdWVzdHMgV0hFUkUgZW1wbG95ZWVfaWQgPSAkMSBPUkRFUiBCWSBzdGFydF9kYXRlIERFU0MnLFxuICAgICAgICBbZW1wbG95ZWVJZF1cbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChsciA9PiAoe1xuICAgICAgICBpZDogbHIuaWQsXG4gICAgICAgIGxlYXZlX3R5cGU6IGxyLmxlYXZlX3R5cGUsXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLnN0YXJ0X2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICBlbmREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuZW5kX2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICBzdGF0dXM6IGxyLnN0YXR1cyxcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMZWF2ZVJlcXVlc3QoZGF0YSkge1xuICAgIGNvbnN0IHsgZW1wbG95ZWVJZCwgbGVhdmVUeXBlLCBzdGFydERhdGUsIGVuZERhdGUsIHJlYXNvbiB9ID0gZGF0YTtcbiAgICBhd2FpdCBxdWVyeShcbiAgICAgICAgJ0lOU0VSVCBJTlRPIGxlYXZlX3JlcXVlc3RzIChlbXBsb3llZV9pZCwgbGVhdmVfdHlwZSwgc3RhcnRfZGF0ZSwgZW5kX2RhdGUsIHJlYXNvbikgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpJyxcbiAgICAgICAgW2VtcGxveWVlSWQsIGxlYXZlVHlwZSwgc3RhcnREYXRlLCBlbmREYXRlLCByZWFzb25dXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXlQZXJpb2RzKGVtcGxveWVlSWQpIHtcbiAgICAvLyBUaGlzIGlzIGEgcGxhY2Vob2xkZXIgYXMgdGhlcmUgaXMgbm8gcGF5c2xpcCB0YWJsZSB5ZXQuXG4gICAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NoZWR1bGUoZW1wbG95ZWVJZCkge1xuICAgIC8vIFRoaXMgaXMgYSBwbGFjZWhvbGRlciBhcyB0aGVyZSBpcyBubyBzY2hlZHVsZSB0YWJsZSB5ZXQuXG4gICAgcmV0dXJuIFtdO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZW5kaW5nRW1wbG95ZWVBcHByb3ZhbHMoKSB7XG4gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgU0VMRUNUIGlkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIFwicG9zaXRpb25cIiwgZGF0ZV9oaXJlZFxuICAgICAgICBGUk9NIGFjY291bnRzXG4gICAgICAgIFdIRVJFIHN0YXR1cyA9ICdQZW5kaW5nIEFwcHJvdmFsJ1xuICAgIGApO1xuICAgIHJldHVybiByZXN1bHQucm93cy5tYXAoYSA9PiAoe1xuICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgIHN1Ym1pdHRlZEJ5OiAnT2xpdmlhIENoZW4nLCAvLyBQbGFjZWhvbGRlclxuICAgICAgICBzdWJtaXNzaW9uRGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEuZGF0ZV9oaXJlZCksICd5eXl5LU1NLWRkJylcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHByb3ZlRW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIGF3YWl0IHF1ZXJ5KFwiVVBEQVRFIGFjY291bnRzIFNFVCBzdGF0dXMgPSAnQWN0aXZlJyBXSEVSRSBpZCA9ICQxXCIsIFtlbXBsb3llZUlkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWplY3RFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgYXdhaXQgcXVlcnkoXCJERUxFVEUgRlJPTSBhY2NvdW50cyBXSEVSRSBpZCA9ICQxXCIsIFtlbXBsb3llZUlkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZU5hbWUoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KCdTRUxFQ1QgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMScsIFtlbXBsb3llZUlkXSk7XG4gICAgY29uc3QgZW1wbG95ZWUgPSByZXN1bHQucm93c1swXTtcbiAgICByZXR1cm4gZW1wbG95ZWUgPyBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gIDogXCJVbmtub3duIEVtcGxveWVlXCI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvcnREZXRhaWxzKHJlcG9ydElkKSB7XG4gICAgLy8gVGhpcyBpcyBhIHBsYWNlaG9sZGVyIGFzIHRoZXJlIGlzIG5vIHJlcG9ydHMgdGFibGUgeWV0LlxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SHJQZXJzb25uZWwoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoYFxuICAgICAgICBTRUxFQ1QgaWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgXCJwb3NpdGlvblwiLCBtYW5hZ2VkX2JyYW5jaGVzXG4gICAgICAgIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdIUidcbiAgICBgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4gKHtcbiAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgIG5hbWU6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgbWFuYWdlZF9icmFuY2hlczogYS5tYW5hZ2VkX2JyYW5jaGVzIHx8IFtdXG4gICAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnJhbmNoZXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29vcmRpbmF0ZXMgRlJPTSBicmFuY2hlcyBPUkRFUiBCWSBuYW1lJyk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnJhbmNoKGJyYW5jaE5hbWUsIGNvb3JkaW5hdGVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXG4gICAgICAgICAgICAnSU5TRVJUIElOVE8gYnJhbmNoZXMgKG5hbWUsIGNvb3JkaW5hdGVzKSBWQUxVRVMgKCQxLCAkMikgUkVUVVJOSU5HIConLFxuICAgICAgICAgICAgW2JyYW5jaE5hbWUsIGNvb3JkaW5hdGVzXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LnJvd3NbMF07XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gdW5pcXVlX3Zpb2xhdGlvblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGJyYW5jaCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJyYW5jaChicmFuY2hJZCkge1xuICAgIC8vIENoZWNrIGlmIGFueSBIUiBwZXJzb25uZWwgaXMgYXNzaWduZWQgdG8gdGhpcyBicmFuY2hcbiAgICBjb25zdCBicmFuY2hSZXN1bHQgPSBhd2FpdCBxdWVyeSgnU0VMRUNUIG5hbWUgRlJPTSBicmFuY2hlcyBXSEVSRSBpZCA9ICQxJywgW2JyYW5jaElkXSk7XG4gICAgaWYgKGJyYW5jaFJlc3VsdC5yb3dDb3VudCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IGJyYW5jaE5hbWUgPSBicmFuY2hSZXN1bHQucm93c1swXS5uYW1lO1xuXG4gICAgY29uc3QgaHJSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCAxIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdIUicgQU5EICQxID0gQU5ZKG1hbmFnZWRfYnJhbmNoZXMpXCIsIFticmFuY2hOYW1lXSk7XG4gICAgaWYgKGhyUmVzdWx0LnJvd0NvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYnJhbmNoIGlzIGN1cnJlbnRseSBhc3NpZ25lZCB0byBIUiBwZXJzb25uZWwgYW5kIGNhbm5vdCBiZSBkZWxldGVkLicpO1xuICAgIH1cbiAgICBhd2FpdCBxdWVyeSgnREVMRVRFIEZST00gYnJhbmNoZXMgV0hFUkUgaWQgPSAkMScsIFticmFuY2hJZF0pO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVIckJyYW5jaEFsbG9jYXRpb24oaHJJZCwgYnJhbmNoZXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShcbiAgICAgICAgJ1VQREFURSBhY2NvdW50cyBTRVQgbWFuYWdlZF9icmFuY2hlcyA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICBbYnJhbmNoZXMsIGhySWRdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiByZXN1bHQucm93Q291bnQgPiAwIH07XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtcGxveWVlKGlkLCBkYXRhKSB7XG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBtaWRkbGVOYW1lLCBnZW5kZXIsIGRvYiwgcG9zaXRpb24sIGRlcGFydG1lbnQsIGJyYW5jaCwgaGlyZURhdGUsIGVtYWlsIH0gPSBkYXRhO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgVVBEQVRFIGFjY291bnRzIFNFVFxuICAgICAgICAgICAgZmlyc3RfbmFtZSA9ICQxLCBsYXN0X25hbWUgPSAkMiwgbWlkZGxlX25hbWUgPSAkMywgZ2VuZGVyID0gJDQsXG4gICAgICAgICAgICBkYXRlX29mX2JpcnRoID0gJDUsIFwicG9zaXRpb25cIiA9ICQ2LCBkZXBhcnRtZW50ID0gJDcsIGJyYW5jaCA9ICQ4LFxuICAgICAgICAgICAgZGF0ZV9oaXJlZCA9ICQ5LCBlbWFpbCA9ICQxMFxuICAgICAgICBXSEVSRSBpZCA9ICQxMVxuICAgIGAsIFtmaXJzdE5hbWUsIGxhc3ROYW1lLCBtaWRkbGVOYW1lLCBnZW5kZXIsIGRvYiwgcG9zaXRpb24sIGRlcGFydG1lbnQsIGJyYW5jaCwgaGlyZURhdGUsIGVtYWlsLCBpZF0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHJlc3VsdC5yb3dDb3VudCA+IDAsIG1lc3NhZ2U6IHJlc3VsdC5yb3dDb3VudCA+IDAgPyAnRW1wbG95ZWUgdXBkYXRlZCBzdWNjZXNzZnVsbHkuJyA6ICdFbXBsb3llZSBub3QgZm91bmQuJyB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCBpZCwgdGl0bGUsIHJhdGUgRlJPTSBwb3NpdGlvbnMgT1JERVIgQlkgdGl0bGUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3M7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3NpdGlvbih0aXRsZSwgcmF0ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAgICAgJ0lOU0VSVCBJTlRPIHBvc2l0aW9ucyAodGl0bGUsIHJhdGUpIFZBTFVFUyAoJDEsICQyKSBSRVRVUk5JTkcgKicsXG4gICAgICAgICAgICBbdGl0bGUsIHJhdGVdXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQucm93c1swXTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1JykgeyAvLyB1bmlxdWVfdmlvbGF0aW9uXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcG9zaXRpb24gd2l0aCB0aGlzIHRpdGxlIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zaXRpb24ocG9zaXRpb25JZCkge1xuICAgIGNvbnN0IHBvc2l0aW9uUmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCB0aXRsZSBGUk9NIHBvc2l0aW9ucyBXSEVSRSBpZCA9ICQxJywgW3Bvc2l0aW9uSWRdKTtcbiAgICBpZiAocG9zaXRpb25SZXN1bHQucm93Q291bnQgPT09IDApIHJldHVybjtcbiAgICBjb25zdCBwb3NpdGlvblRpdGxlID0gcG9zaXRpb25SZXN1bHQucm93c1swXS50aXRsZTtcblxuICAgIGNvbnN0IGFjY291bnRSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCAxIEZST00gYWNjb3VudHMgV0hFUkUgcG9zaXRpb24gPSAkMVwiLCBbcG9zaXRpb25UaXRsZV0pO1xuICAgIGlmIChhY2NvdW50UmVzdWx0LnJvd0NvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgcG9zaXRpb24gaXMgY3VycmVudGx5IGFzc2lnbmVkIHRvIGVtcGxveWVlcyBhbmQgY2Fubm90IGJlIGRlbGV0ZWQuJyk7XG4gICAgfVxuICAgIGF3YWl0IHF1ZXJ5KCdERUxFVEUgRlJPTSBwb3NpdGlvbnMgV0hFUkUgaWQgPSAkMScsIFtwb3NpdGlvbklkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZXBhcnRtZW50c0ZvckJyYW5jaChicmFuY2hOYW1lKSB7XG4gICAgLy8gVGhpcyBhc3N1bWVzIGEgc2VwYXJhdGUgJ2RlcGFydG1lbnRzJyB0YWJsZSBvciBzaW1pbGFyIHN0cnVjdHVyZS5cbiAgICAvLyBGb3Igbm93LCBsZXQncyBxdWVyeSBkaXN0aW5jdCBkZXBhcnRtZW50cyBmcm9tIGFjY291bnRzIGluIHRoYXQgYnJhbmNoLlxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAnU0VMRUNUIERJU1RJTkNUIGRlcGFydG1lbnQgRlJPTSBhY2NvdW50cyBXSEVSRSBicmFuY2ggPSAkMSBBTkQgZGVwYXJ0bWVudCBJUyBOT1QgTlVMTCBPUkRFUiBCWSBkZXBhcnRtZW50JyxcbiAgICAgICAgW2JyYW5jaE5hbWVdXG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHIgPT4gci5kZXBhcnRtZW50KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2l0aW9uc0ZvckRlcGFydG1lbnQoZGVwYXJ0bWVudE5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgc2ltcGxpZmljYXRpb24uIEEgcmVhbCBhcHAgbWlnaHQgaGF2ZSBhIGRlcGFydG1lbnRzX3Bvc2l0aW9ucyBsaW5rIHRhYmxlLlxuICAgIC8vIEhlcmUgd2UgZ2V0IGFsbCBwb3NpdGlvbnMgYXNzb2NpYXRlZCB3aXRoIGVtcGxveWVlcyBpbiB0aGF0IGRlcGFydG1lbnQuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXG4gICAgICAgICdTRUxFQ1QgRElTVElOQ1QgXCJwb3NpdGlvblwiIEZST00gYWNjb3VudHMgV0hFUkUgZGVwYXJ0bWVudCA9ICQxIEFORCBcInBvc2l0aW9uXCIgSVMgTk9UIE5VTEwgT1JERVIgQlkgXCJwb3NpdGlvblwiJyxcbiAgICAgICAgW2RlcGFydG1lbnROYW1lXVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChyID0+IHIucG9zaXRpb24pO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3UkE2RXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:f6c308 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"009e1e55ed3679817775f3fa1467d6a8d3d8736c4a":"getPositions"},"src/lib/data.js",""] */ __turbopack_context__.s({
    "getPositions": (()=>getPositions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getPositions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("009e1e55ed3679817775f3fa1467d6a8d3d8736c4a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPositions"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIGZvciBmZXRjaGluZyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG4ndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHF1ZXJ5IH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIUkRhc2hib2FyZERhdGEoKSB7XG4gICAgY29uc3QgdG90YWxFbXBsb3llZXNSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCBDT1VOVCgqKSBGUk9NIGFjY291bnRzIFdIRVJFIHJvbGUgPSAnRW1wbG95ZWUnXCIpO1xuICAgIGNvbnN0IHRvdGFsRW1wbG95ZWVzID0gdG90YWxFbXBsb3llZXNSZXN1bHQucm93c1swXS5jb3VudCB8fCAnMCc7XG5cbiAgICBjb25zdCBwZW5kaW5nTGVhdmVSZXF1ZXN0c1Jlc3VsdCA9IGF3YWl0IHF1ZXJ5KFwiU0VMRUNUIENPVU5UKCopIEZST00gbGVhdmVfcmVxdWVzdHMgV0hFUkUgc3RhdHVzID0gJ1BlbmRpbmcnXCIpO1xuICAgIGNvbnN0IHBlbmRpbmdMZWF2ZVJlcXVlc3RzID0gcGVuZGluZ0xlYXZlUmVxdWVzdHNSZXN1bHQucm93c1swXS5jb3VudCB8fCAnMCc7XG5cbiAgICAvLyBNb2NraW5nIHNvbWUgc3RhdHMgYXMgdGhlcmUncyBubyB0YWJsZSBmb3IgdGhlbSB5ZXRcbiAgICBjb25zdCBzdGF0cyA9IFtcbiAgICAgICAgeyB0aXRsZTogJ1RvdGFsIEVtcGxveWVlcycsIHZhbHVlOiBTdHJpbmcodG90YWxFbXBsb3llZXMpLCBjaGFuZ2U6ICcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdPbiBUaW1lIFBlcmNlbnRhZ2UnLCB2YWx1ZTogYDAlYCwgY2hhbmdlOiAnJyB9LCAvLyBObyBhdHRlbmRhbmNlIGRhdGEgeWV0XG4gICAgICAgIHsgdGl0bGU6ICdQZW5kaW5nIExlYXZlIFJlcXVlc3RzJywgdmFsdWU6IFN0cmluZyhwZW5kaW5nTGVhdmVSZXF1ZXN0cyksIGNoYW5nZTogJycgfSxcbiAgICBdO1xuXG4gICAgLy8gTm8gYWN0aXZpdHkgbG9nIHRhYmxlIHlldFxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXRzLFxuICAgICAgICByZWNlbnRBY3Rpdml0aWVzOiBbXVxuICAgIH07XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhc3RBbm5vdW5jZW1lbnRzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgU0VMRUNUIGEuaWQsIGEudGl0bGUsIGEuY29udGVudCwgYS5zdGF0dXMsIGEuY3JlYXRlZF9hdCwgYWNjLmZpcnN0X25hbWUsIGFjYy5sYXN0X25hbWVcbiAgICAgICAgRlJPTSBhbm5vdW5jZW1lbnRzIGFcbiAgICAgICAgSk9JTiBhY2NvdW50cyBhY2MgT04gYS5wb3N0ZWRfYnkgPSBhY2MuaWRcbiAgICAgICAgT1JERVIgQlkgYS5jcmVhdGVkX2F0IERFU0NcbiAgICBgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4gKHtcbiAgICAgICAgLi4uYSxcbiAgICAgICAgcG9zdGVkQnk6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICBkYXRlOiBmb3JtYXQobmV3IERhdGUoYS5jcmVhdGVkX2F0KSwgJ3l5eXktTU0tZGQnKVxuICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFubm91bmNlbWVudCh0aXRsZSwgY29udGVudCwgc3RhdHVzKSB7XG4gICAgY29uc3QgaWQgPSAnSFItMDAxJzsgLy8gSW4gYSByZWFsIGFwcCwgdGhpcyBzaG91bGQgY29tZSBmcm9tIHNlc3Npb25cbiAgICBhd2FpdCBxdWVyeShcbiAgICAgICAgJ0lOU0VSVCBJTlRPIGFubm91bmNlbWVudHMgKHRpdGxlLCBjb250ZW50LCBzdGF0dXMsIHBvc3RlZF9ieSkgVkFMVUVTICgkMSwgJDIsICQzLCAkNCknLFxuICAgICAgICBbdGl0bGUsIGNvbnRlbnQsIHN0YXR1cywgaWRdXG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFubm91bmNlbWVudChpZCkge1xuICAgIGF3YWl0IHF1ZXJ5KCdERUxFVEUgRlJPTSBhbm5vdW5jZW1lbnRzIFdIRVJFIGlkID0gJDEnLCBbaWRdKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhaWx5QXR0ZW5kYW5jZURhdGEoZGF0ZSkge1xuICAgIC8vIFRoaXMgaXMgYSBwbGFjZWhvbGRlciBhcyB0aGVyZSBpcyBubyBhdHRlbmRhbmNlIHRhYmxlIHlldC5cbiAgICByZXR1cm4gW107XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlcygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBwb3NpdGlvbiwgYnJhbmNoLCBzdGF0dXNcbiAgICAgICAgRlJPTSBhY2NvdW50c1xuICAgICAgICBXSEVSRSByb2xlID0gJ0VtcGxveWVlJyBBTkQgc3RhdHVzICE9ICdQZW5kaW5nIEFwcHJvdmFsJ1xuICAgIGApO1xuICAgIHJldHVybiByZXN1bHQucm93cy5tYXAoYSA9PiAoe1xuICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgbmFtZTogYCR7YS5maXJzdF9uYW1lfSAke2EubGFzdF9uYW1lfWAsXG4gICAgICAgIHBvc2l0aW9uOiBhLnBvc2l0aW9uLFxuICAgICAgICBicmFuY2g6IGEuYnJhbmNoLFxuICAgICAgICBzdGF0dXM6IGEuc3RhdHVzXG4gICAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVCeUlkKGlkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCAqIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMScsIFtpZF0pO1xuICAgIGNvbnN0IGVtcGxveWVlID0gcmVzdWx0LnJvd3NbMF07XG4gICAgaWYgKCFlbXBsb3llZSkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5lbXBsb3llZSxcbiAgICAgICAgbmFtZTogYCR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9YCxcbiAgICAgICAgZGF0ZV9oaXJlZDogZm9ybWF0KG5ldyBEYXRlKGVtcGxveWVlLmRhdGVfaGlyZWQpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICBkYXRlX29mX2JpcnRoOiBmb3JtYXQobmV3IERhdGUoZW1wbG95ZWUuZGF0ZV9vZl9iaXJ0aCksICd5eXl5LU1NLWRkJyksXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRW1wbG95ZWUoaWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeSgnREVMRVRFIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMScsIFtpZF0pO1xuICAgIHJldHVybiByZXN1bHQucm93Q291bnQgPiAwO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhdmVSZXF1ZXN0cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBsci5pZCwgbHIubGVhdmVfdHlwZSwgbHIuc3RhcnRfZGF0ZSwgbHIuZW5kX2RhdGUsIGxyLnJlYXNvbiwgbHIuc3RhdHVzLFxuICAgICAgICAgICAgICAgYS5pZCBhcyBcImVtcGxveWVlSWRcIiwgYS5maXJzdF9uYW1lLCBhLmxhc3RfbmFtZVxuICAgICAgICBGUk9NIGxlYXZlX3JlcXVlc3RzIGxyXG4gICAgICAgIEpPSU4gYWNjb3VudHMgYSBPTiBsci5lbXBsb3llZV9pZCA9IGEuaWRcbiAgICAgICAgT1JERVIgQlkgbHIuY3JlYXRlZF9hdCBERVNDXG4gICAgYCk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChsciA9PiAoe1xuICAgICAgICBpZDogbHIuaWQsXG4gICAgICAgIGVtcGxveWVlSWQ6IGxyLmVtcGxveWVlSWQsXG4gICAgICAgIGVtcGxveWVlTmFtZTogYCR7bHIuZmlyc3RfbmFtZX0gJHtsci5sYXN0X25hbWV9YCxcbiAgICAgICAgbGVhdmVfdHlwZTogbHIubGVhdmVfdHlwZSxcbiAgICAgICAgc3RhcnREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuc3RhcnRfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIGVuZERhdGU6IGZvcm1hdChuZXcgRGF0ZShsci5lbmRfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIHJlYXNvbjogbHIucmVhc29uLFxuICAgICAgICBzdGF0dXM6IGxyLnN0YXR1c1xuICAgIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUxlYXZlUmVxdWVzdFN0YXR1cyhyZXF1ZXN0SWQsIHN0YXR1cykge1xuICAgIGF3YWl0IHF1ZXJ5KCdVUERBVEUgbGVhdmVfcmVxdWVzdHMgU0VUIHN0YXR1cyA9ICQxIFdIRVJFIGlkID0gJDInLCBbc3RhdHVzLCByZXF1ZXN0SWRdKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlc1dpdGhQYXlzbGlwU3RhdHVzKCkge1xuICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBcInBvc2l0aW9uXCIsIGRlcGFydG1lbnQsIHNzc19udW1iZXIsIHBoaWxoZWFsdGhfbnVtYmVyLCBwYWdpYmlnX251bWJlciwgdGluXG4gICAgICAgIEZST00gYWNjb3VudHNcbiAgICAgICAgV0hFUkUgcm9sZSA9ICdFbXBsb3llZSdcbiAgICBgKTtcbiAgICBcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4ge1xuICAgICAgICBjb25zdCBoYXNCZW5lZml0cyA9IGEuc3NzX251bWJlciAmJiBhLnBoaWxoZWFsdGhfbnVtYmVyICYmIGEucGFnaWJpZ19udW1iZXIgJiYgYS50aW47XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgIG5hbWU6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgICAgICBkZXBhcnRtZW50OiBhLmRlcGFydG1lbnQsXG4gICAgICAgICAgICBwYXlzbGlwU3RhdHVzOiAnUGVuZGluZycsIC8vIE5vIHBheXNsaXAgdGFibGUgeWV0XG4gICAgICAgICAgICBiZW5lZml0c1N0YXR1czogaGFzQmVuZWZpdHMgPyAnQ29tcGxldGUnIDogJ0luY29tcGxldGUnLFxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzRm9yU2NoZWR1bGluZygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdFbXBsb3llZScgQU5EIHN0YXR1cyA9ICdBY3RpdmUnXG4gICAgYCk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChhID0+ICh7XG4gICAgICAgIGlkOiBhLmlkLFxuICAgICAgICBuYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgc2hpZnQ6ICc5OjAwIC0gMTc6MDAnIC8vIERlZmF1bHQgc2hpZnRcbiAgICB9KSk7XG59XG4gICAgLy8gRmV0Y2ggRW1wbG95ZWUgRGF0YSBmcm9tIERhdGFiYXNlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVEYXNoYm9hcmREYXRhKGVtcGxveWVlaWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeSgnU0VMRUNUIGlkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIFwicG9zaXRpb25cIiwgZGVwYXJ0bWVudCwgYnJhbmNoLCBlbWFpbCBGUk9NIGFjY291bnRzIFdIRVJFIGlkID0gJDEnLCBbZW1wbG95ZWVpZF0pO1xuICAgIGNvbnN0IGVtcGxveWVlID0gcmVzdWx0LnJvd3NbMF07XG4gICAgXG4gICAgaWYgKCFlbXBsb3llZSkge1xuICAgICAgICByZXR1cm4geyBlbXBsb3llZTogeyBuYW1lOiAnRW1wbG95ZWUgTm90IEZvdW5kJyB9LCBhbm5vdW5jZW1lbnRzOiBbXSB9O1xuICAgIH1cblxuICAgIGNvbnN0IGFubm91bmNlbWVudHNSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCB0aXRsZSwgY29udGVudCwgY3JlYXRlZF9hdCBGUk9NIGFubm91bmNlbWVudHMgV0hFUkUgc3RhdHVzID0gJ1B1Ymxpc2hlZCcgT1JERVIgQlkgY3JlYXRlZF9hdCBERVNDIExJTUlUIDVcIik7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1wbG95ZWU6IHtcbiAgICAgICAgICAgIGVtcGxveWVlSWQ6IGVtcGxveWVlLmlkLFxuICAgICAgICAgICAgbmFtZTogYCR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBlbXBsb3llZS5wb3NpdGlvbixcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IGVtcGxveWVlLmRlcGFydG1lbnQsXG4gICAgICAgICAgICBicmFuY2g6IGVtcGxveWVlLmJyYW5jaCxcbiAgICAgICAgICAgIGVtYWlsOiBlbXBsb3llZS5lbWFpbCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5ub3VuY2VtZW50czogYW5ub3VuY2VtZW50c1Jlc3VsdC5yb3dzLm1hcChhID0+ICh7XG4gICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgIHRpdGxlOiBhLnRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogYS5jb250ZW50LFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEuY3JlYXRlZF9hdCksICdNTU1NIGQsIHl5eXknKVxuICAgICAgICB9KSlcbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZURhdGEoZW1wbG95ZWVJZCkge1xuICAgIC8vIFRoaXMgaXMgYSBwbGFjZWhvbGRlciBhcyB0aGVyZSBpcyBubyBhdHRlbmRhbmNlIHRhYmxlIHlldC5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdW1tYXJ5OiB7IGRheXNBdHRlbmRlZDogMCwgbGF0ZXM6IDAsIGFic2VuY2VzOiAwLCB0b3RhbEhvdXJzOiAwLCBhdmFpbGFibGVMZWF2ZXM6IDAgfSxcbiAgICAgICAgcmVjb3JkczogW11cbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFzdExlYXZlUmVxdWVzdHMoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAnU0VMRUNUIGlkLCBsZWF2ZV90eXBlLCBzdGFydF9kYXRlLCBlbmRfZGF0ZSwgc3RhdHVzIEZST00gbGVhdmVfcmVxdWVzdHMgV0hFUkUgZW1wbG95ZWVfaWQgPSAkMSBPUkRFUiBCWSBzdGFydF9kYXRlIERFU0MnLFxuICAgICAgICBbZW1wbG95ZWVJZF1cbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChsciA9PiAoe1xuICAgICAgICBpZDogbHIuaWQsXG4gICAgICAgIGxlYXZlX3R5cGU6IGxyLmxlYXZlX3R5cGUsXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybWF0KG5ldyBEYXRlKGxyLnN0YXJ0X2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICBlbmREYXRlOiBmb3JtYXQobmV3IERhdGUobHIuZW5kX2RhdGUpLCAneXl5eS1NTS1kZCcpLFxuICAgICAgICBzdGF0dXM6IGxyLnN0YXR1cyxcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMZWF2ZVJlcXVlc3QoZGF0YSkge1xuICAgIGNvbnN0IHsgZW1wbG95ZWVJZCwgbGVhdmVUeXBlLCBzdGFydERhdGUsIGVuZERhdGUsIHJlYXNvbiB9ID0gZGF0YTtcbiAgICBhd2FpdCBxdWVyeShcbiAgICAgICAgJ0lOU0VSVCBJTlRPIGxlYXZlX3JlcXVlc3RzIChlbXBsb3llZV9pZCwgbGVhdmVfdHlwZSwgc3RhcnRfZGF0ZSwgZW5kX2RhdGUsIHJlYXNvbikgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUpJyxcbiAgICAgICAgW2VtcGxveWVlSWQsIGxlYXZlVHlwZSwgc3RhcnREYXRlLCBlbmREYXRlLCByZWFzb25dXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXlQZXJpb2RzKGVtcGxveWVlSWQpIHtcbiAgICAvLyBUaGlzIGlzIGEgcGxhY2Vob2xkZXIgYXMgdGhlcmUgaXMgbm8gcGF5c2xpcCB0YWJsZSB5ZXQuXG4gICAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NoZWR1bGUoZW1wbG95ZWVJZCkge1xuICAgIC8vIFRoaXMgaXMgYSBwbGFjZWhvbGRlciBhcyB0aGVyZSBpcyBubyBzY2hlZHVsZSB0YWJsZSB5ZXQuXG4gICAgcmV0dXJuIFtdO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZW5kaW5nRW1wbG95ZWVBcHByb3ZhbHMoKSB7XG4gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgU0VMRUNUIGlkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIFwicG9zaXRpb25cIiwgZGF0ZV9oaXJlZFxuICAgICAgICBGUk9NIGFjY291bnRzXG4gICAgICAgIFdIRVJFIHN0YXR1cyA9ICdQZW5kaW5nIEFwcHJvdmFsJ1xuICAgIGApO1xuICAgIHJldHVybiByZXN1bHQucm93cy5tYXAoYSA9PiAoe1xuICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBgJHthLmZpcnN0X25hbWV9ICR7YS5sYXN0X25hbWV9YCxcbiAgICAgICAgcG9zaXRpb246IGEucG9zaXRpb24sXG4gICAgICAgIHN1Ym1pdHRlZEJ5OiAnT2xpdmlhIENoZW4nLCAvLyBQbGFjZWhvbGRlclxuICAgICAgICBzdWJtaXNzaW9uRGF0ZTogZm9ybWF0KG5ldyBEYXRlKGEuZGF0ZV9oaXJlZCksICd5eXl5LU1NLWRkJylcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHByb3ZlRW1wbG95ZWUoZW1wbG95ZWVJZCkge1xuICAgIGF3YWl0IHF1ZXJ5KFwiVVBEQVRFIGFjY291bnRzIFNFVCBzdGF0dXMgPSAnQWN0aXZlJyBXSEVSRSBpZCA9ICQxXCIsIFtlbXBsb3llZUlkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWplY3RFbXBsb3llZShlbXBsb3llZUlkKSB7XG4gICAgYXdhaXQgcXVlcnkoXCJERUxFVEUgRlJPTSBhY2NvdW50cyBXSEVSRSBpZCA9ICQxXCIsIFtlbXBsb3llZUlkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZU5hbWUoZW1wbG95ZWVJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KCdTRUxFQ1QgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gYWNjb3VudHMgV0hFUkUgaWQgPSAkMScsIFtlbXBsb3llZUlkXSk7XG4gICAgY29uc3QgZW1wbG95ZWUgPSByZXN1bHQucm93c1swXTtcbiAgICByZXR1cm4gZW1wbG95ZWUgPyBgJHtlbXBsb3llZS5maXJzdF9uYW1lfSAke2VtcGxveWVlLmxhc3RfbmFtZX1gIDogXCJVbmtub3duIEVtcGxveWVlXCI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXBvcnREZXRhaWxzKHJlcG9ydElkKSB7XG4gICAgLy8gVGhpcyBpcyBhIHBsYWNlaG9sZGVyIGFzIHRoZXJlIGlzIG5vIHJlcG9ydHMgdGFibGUgeWV0LlxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SHJQZXJzb25uZWwoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoYFxuICAgICAgICBTRUxFQ1QgaWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgXCJwb3NpdGlvblwiLCBtYW5hZ2VkX2JyYW5jaGVzXG4gICAgICAgIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdIUidcbiAgICBgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKGEgPT4gKHtcbiAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgIG5hbWU6IGAke2EuZmlyc3RfbmFtZX0gJHthLmxhc3RfbmFtZX1gLFxuICAgICAgICBwb3NpdGlvbjogYS5wb3NpdGlvbixcbiAgICAgICAgbWFuYWdlZF9icmFuY2hlczogYS5tYW5hZ2VkX2JyYW5jaGVzIHx8IFtdXG4gICAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnJhbmNoZXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCBpZCwgbmFtZSwgY29vcmRpbmF0ZXMgRlJPTSBicmFuY2hlcyBPUkRFUiBCWSBuYW1lJyk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnJhbmNoKGJyYW5jaE5hbWUsIGNvb3JkaW5hdGVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXG4gICAgICAgICAgICAnSU5TRVJUIElOVE8gYnJhbmNoZXMgKG5hbWUsIGNvb3JkaW5hdGVzKSBWQUxVRVMgKCQxLCAkMikgUkVUVVJOSU5HIConLFxuICAgICAgICAgICAgW2JyYW5jaE5hbWUsIGNvb3JkaW5hdGVzXVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LnJvd3NbMF07XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09ICcyMzUwNScpIHsgLy8gdW5pcXVlX3Zpb2xhdGlvblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGJyYW5jaCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJyYW5jaChicmFuY2hJZCkge1xuICAgIC8vIENoZWNrIGlmIGFueSBIUiBwZXJzb25uZWwgaXMgYXNzaWduZWQgdG8gdGhpcyBicmFuY2hcbiAgICBjb25zdCBicmFuY2hSZXN1bHQgPSBhd2FpdCBxdWVyeSgnU0VMRUNUIG5hbWUgRlJPTSBicmFuY2hlcyBXSEVSRSBpZCA9ICQxJywgW2JyYW5jaElkXSk7XG4gICAgaWYgKGJyYW5jaFJlc3VsdC5yb3dDb3VudCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IGJyYW5jaE5hbWUgPSBicmFuY2hSZXN1bHQucm93c1swXS5uYW1lO1xuXG4gICAgY29uc3QgaHJSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCAxIEZST00gYWNjb3VudHMgV0hFUkUgcm9sZSA9ICdIUicgQU5EICQxID0gQU5ZKG1hbmFnZWRfYnJhbmNoZXMpXCIsIFticmFuY2hOYW1lXSk7XG4gICAgaWYgKGhyUmVzdWx0LnJvd0NvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYnJhbmNoIGlzIGN1cnJlbnRseSBhc3NpZ25lZCB0byBIUiBwZXJzb25uZWwgYW5kIGNhbm5vdCBiZSBkZWxldGVkLicpO1xuICAgIH1cbiAgICBhd2FpdCBxdWVyeSgnREVMRVRFIEZST00gYnJhbmNoZXMgV0hFUkUgaWQgPSAkMScsIFticmFuY2hJZF0pO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVIckJyYW5jaEFsbG9jYXRpb24oaHJJZCwgYnJhbmNoZXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBxdWVyeShcbiAgICAgICAgJ1VQREFURSBhY2NvdW50cyBTRVQgbWFuYWdlZF9icmFuY2hlcyA9ICQxIFdIRVJFIGlkID0gJDInLFxuICAgICAgICBbYnJhbmNoZXMsIGhySWRdXG4gICAgKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiByZXN1bHQucm93Q291bnQgPiAwIH07XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtcGxveWVlKGlkLCBkYXRhKSB7XG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBtaWRkbGVOYW1lLCBnZW5kZXIsIGRvYiwgcG9zaXRpb24sIGRlcGFydG1lbnQsIGJyYW5jaCwgaGlyZURhdGUsIGVtYWlsIH0gPSBkYXRhO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgVVBEQVRFIGFjY291bnRzIFNFVFxuICAgICAgICAgICAgZmlyc3RfbmFtZSA9ICQxLCBsYXN0X25hbWUgPSAkMiwgbWlkZGxlX25hbWUgPSAkMywgZ2VuZGVyID0gJDQsXG4gICAgICAgICAgICBkYXRlX29mX2JpcnRoID0gJDUsIFwicG9zaXRpb25cIiA9ICQ2LCBkZXBhcnRtZW50ID0gJDcsIGJyYW5jaCA9ICQ4LFxuICAgICAgICAgICAgZGF0ZV9oaXJlZCA9ICQ5LCBlbWFpbCA9ICQxMFxuICAgICAgICBXSEVSRSBpZCA9ICQxMVxuICAgIGAsIFtmaXJzdE5hbWUsIGxhc3ROYW1lLCBtaWRkbGVOYW1lLCBnZW5kZXIsIGRvYiwgcG9zaXRpb24sIGRlcGFydG1lbnQsIGJyYW5jaCwgaGlyZURhdGUsIGVtYWlsLCBpZF0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHJlc3VsdC5yb3dDb3VudCA+IDAsIG1lc3NhZ2U6IHJlc3VsdC5yb3dDb3VudCA+IDAgPyAnRW1wbG95ZWUgdXBkYXRlZCBzdWNjZXNzZnVsbHkuJyA6ICdFbXBsb3llZSBub3QgZm91bmQuJyB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCBpZCwgdGl0bGUsIHJhdGUgRlJPTSBwb3NpdGlvbnMgT1JERVIgQlkgdGl0bGUnKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3M7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3NpdGlvbih0aXRsZSwgcmF0ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAgICAgJ0lOU0VSVCBJTlRPIHBvc2l0aW9ucyAodGl0bGUsIHJhdGUpIFZBTFVFUyAoJDEsICQyKSBSRVRVUk5JTkcgKicsXG4gICAgICAgICAgICBbdGl0bGUsIHJhdGVdXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQucm93c1swXTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJzIzNTA1JykgeyAvLyB1bmlxdWVfdmlvbGF0aW9uXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcG9zaXRpb24gd2l0aCB0aGlzIHRpdGxlIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zaXRpb24ocG9zaXRpb25JZCkge1xuICAgIGNvbnN0IHBvc2l0aW9uUmVzdWx0ID0gYXdhaXQgcXVlcnkoJ1NFTEVDVCB0aXRsZSBGUk9NIHBvc2l0aW9ucyBXSEVSRSBpZCA9ICQxJywgW3Bvc2l0aW9uSWRdKTtcbiAgICBpZiAocG9zaXRpb25SZXN1bHQucm93Q291bnQgPT09IDApIHJldHVybjtcbiAgICBjb25zdCBwb3NpdGlvblRpdGxlID0gcG9zaXRpb25SZXN1bHQucm93c1swXS50aXRsZTtcblxuICAgIGNvbnN0IGFjY291bnRSZXN1bHQgPSBhd2FpdCBxdWVyeShcIlNFTEVDVCAxIEZST00gYWNjb3VudHMgV0hFUkUgcG9zaXRpb24gPSAkMVwiLCBbcG9zaXRpb25UaXRsZV0pO1xuICAgIGlmIChhY2NvdW50UmVzdWx0LnJvd0NvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgcG9zaXRpb24gaXMgY3VycmVudGx5IGFzc2lnbmVkIHRvIGVtcGxveWVlcyBhbmQgY2Fubm90IGJlIGRlbGV0ZWQuJyk7XG4gICAgfVxuICAgIGF3YWl0IHF1ZXJ5KCdERUxFVEUgRlJPTSBwb3NpdGlvbnMgV0hFUkUgaWQgPSAkMScsIFtwb3NpdGlvbklkXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZXBhcnRtZW50c0ZvckJyYW5jaChicmFuY2hOYW1lKSB7XG4gICAgLy8gVGhpcyBhc3N1bWVzIGEgc2VwYXJhdGUgJ2RlcGFydG1lbnRzJyB0YWJsZSBvciBzaW1pbGFyIHN0cnVjdHVyZS5cbiAgICAvLyBGb3Igbm93LCBsZXQncyBxdWVyeSBkaXN0aW5jdCBkZXBhcnRtZW50cyBmcm9tIGFjY291bnRzIGluIHRoYXQgYnJhbmNoLlxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICAnU0VMRUNUIERJU1RJTkNUIGRlcGFydG1lbnQgRlJPTSBhY2NvdW50cyBXSEVSRSBicmFuY2ggPSAkMSBBTkQgZGVwYXJ0bWVudCBJUyBOT1QgTlVMTCBPUkRFUiBCWSBkZXBhcnRtZW50JyxcbiAgICAgICAgW2JyYW5jaE5hbWVdXG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0LnJvd3MubWFwKHIgPT4gci5kZXBhcnRtZW50KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2l0aW9uc0ZvckRlcGFydG1lbnQoZGVwYXJ0bWVudE5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgc2ltcGxpZmljYXRpb24uIEEgcmVhbCBhcHAgbWlnaHQgaGF2ZSBhIGRlcGFydG1lbnRzX3Bvc2l0aW9ucyBsaW5rIHRhYmxlLlxuICAgIC8vIEhlcmUgd2UgZ2V0IGFsbCBwb3NpdGlvbnMgYXNzb2NpYXRlZCB3aXRoIGVtcGxveWVlcyBpbiB0aGF0IGRlcGFydG1lbnQuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcXVlcnkoXG4gICAgICAgICdTRUxFQ1QgRElTVElOQ1QgXCJwb3NpdGlvblwiIEZST00gYWNjb3VudHMgV0hFUkUgZGVwYXJ0bWVudCA9ICQxIEFORCBcInBvc2l0aW9uXCIgSVMgTk9UIE5VTEwgT1JERVIgQlkgXCJwb3NpdGlvblwiJyxcbiAgICAgICAgW2RlcGFydG1lbnROYW1lXVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdC5yb3dzLm1hcChyID0+IHIucG9zaXRpb24pO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkFzVXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hr/payslip-generation/[id]/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @fileoverview This file defines the individual employee payslip calculation page.
 * It allows HR personnel to review attendance data, input adjustments like paid absences
 * and deductions, and calculate the final net pay for an employee.
 */ __turbopack_context__.s({
    "default": (()=>GenerateEmployeePayslipPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-client] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$2439a1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:2439a1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$f6c308__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:f6c308 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
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
function GenerateEmployeePayslipPage({ params }) {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [employee, setEmployee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [additionalEarnings, setAdditionalEarnings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            name: '',
            amount: ''
        }
    ]);
    const [deductions, setDeductions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            name: '',
            amount: ''
        }
    ]);
    // Mock data for attendance summary
    const dataSummary = {
        scheduledHours: 160,
        workedHours: 158,
        overtimeHours: 5,
        lates: 2,
        absences: 1
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GenerateEmployeePayslipPage.useEffect": ()=>{
            const fetchData = {
                "GenerateEmployeePayslipPage.useEffect.fetchData": async ()=>{
                    setIsLoading(true);
                    try {
                        const [empData, posData] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$2439a1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getEmployeeById"])(params.id),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$f6c308__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPositions"])()
                        ]);
                        setEmployee(empData);
                        setPositions(posData);
                    } catch (error) {
                        toast({
                            variant: 'destructive',
                            title: 'Error',
                            description: 'Failed to fetch initial data.'
                        });
                    }
                    setIsLoading(false);
                }
            }["GenerateEmployeePayslipPage.useEffect.fetchData"];
            fetchData();
        }
    }["GenerateEmployeePayslipPage.useEffect"], [
        params.id,
        toast
    ]);
    const employeePosition = positions.find((p)=>p.title === employee?.position);
    const hourlyRate = employeePosition?.rate ?? 0;
    const overtimeRate = hourlyRate * 1.5;
    const basicPay = dataSummary.workedHours * hourlyRate;
    const overtimePay = dataSummary.overtimeHours * overtimeRate;
    const addEarning = ()=>{
        setAdditionalEarnings([
            ...additionalEarnings,
            {
                id: Date.now(),
                name: '',
                amount: ''
            }
        ]);
    };
    const removeEarning = (id)=>{
        setAdditionalEarnings(additionalEarnings.filter((d)=>d.id !== id));
    };
    const addDeduction = ()=>{
        setDeductions([
            ...deductions,
            {
                id: Date.now(),
                name: '',
                amount: ''
            }
        ]);
    };
    const removeDeduction = (id)=>{
        setDeductions(deductions.filter((d)=>d.id !== id));
    };
    const handleCalculateAndSave = ()=>{
        // In a real application, you would send this data to the server.
        console.log("Saving payslip data...");
        toast({
            title: "Success",
            description: `Payslip for ${employee.name} has been calculated and saved.`
        });
        router.push('/hr/payslip-generation');
    };
    const formatCurrency = (value)=>{
        return new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP'
        }).format(value);
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "outline",
                        size: "sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/hr/payslip-generation",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this),
                                "Back to Employee List"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                            lineNumber: 131,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                        lineNumber: 130,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                    lineNumber: 129,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-24 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-48 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                    lineNumber: 140,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                            lineNumber: 138,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-96 w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                lineNumber: 143,
                                columnNumber: 26
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                    lineNumber: 137,
                    columnNumber: 18
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
            lineNumber: 128,
            columnNumber: 14
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    asChild: true,
                    variant: "outline",
                    size: "sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/hr/payslip-generation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, this),
                            "Back to Employee List"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                        lineNumber: 154,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                    lineNumber: 153,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                lineNumber: 152,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                        lineNumber: 166,
                                                        columnNumber: 72
                                                    }, this),
                                                    " ",
                                                    employee.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                lineNumber: 166,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: [
                                                    employee.position,
                                                    " - ID: ",
                                                    employee.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                lineNumber: 167,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                        lineNumber: 165,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                    className: "h-4 w-4 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                    lineNumber: 171,
                                                    columnNumber: 30
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Hourly Rate: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: formatCurrency(hourlyRate)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                            lineNumber: 172,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                            lineNumber: 170,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                        lineNumber: 169,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                lineNumber: 164,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: "Data Summary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                lineNumber: 180,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: "Comparison of scheduled vs. actual work."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                lineNumber: 181,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                        lineNumber: 179,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between p-2 rounded-lg bg-muted/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {}, void 0, false, {
                                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                lineNumber: 185,
                                                                columnNumber: 83
                                                            }, this),
                                                            "Scheduled Hours"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                        lineNumber: 185,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: dataSummary.scheduledHours
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                lineNumber: 184,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between p-2 rounded-lg bg-muted/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {}, void 0, false, {
                                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                lineNumber: 189,
                                                                columnNumber: 83
                                                            }, this),
                                                            "Actual Worked Hours"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                        lineNumber: 189,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: dataSummary.workedHours
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                        lineNumber: 190,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                lineNumber: 188,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                lineNumber: 192,
                                                columnNumber: 26
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "absences-paid",
                                                        children: "Paid Absences (Days)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                        lineNumber: 194,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "absences-paid",
                                                        type: "number",
                                                        placeholder: "e.g., 0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                        lineNumber: 195,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: [
                                                            "Total absences this period: ",
                                                            dataSummary.absences
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                        lineNumber: 196,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                lineNumber: 193,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                        lineNumber: 183,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                lineNumber: 178,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "Payslip Calculation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                            lineNumber: 206,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Review earnings and enter deductions for this pay period."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                            lineNumber: 207,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                    lineNumber: 205,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold mb-2",
                                                    children: "Earnings"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: "basic-pay",
                                                                            children: "Basic Pay"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                            lineNumber: 216,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            id: "basic-pay",
                                                                            value: formatCurrency(basicPay),
                                                                            readOnly: true,
                                                                            className: "font-mono bg-muted"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                            lineNumber: 217,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: "overtime-pay",
                                                                            children: "Overtime Pay"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                            lineNumber: 220,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            id: "overtime-pay",
                                                                            value: formatCurrency(overtimePay),
                                                                            readOnly: true,
                                                                            className: "font-mono bg-muted"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                            lineNumber: 214,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                            lineNumber: 225,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-medium",
                                                                    children: "Additional Earnings"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    size: "sm",
                                                                    onClick: addEarning,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                                            className: "mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                            lineNumber: 230,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        " Add Earning"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                            lineNumber: 227,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: additionalEarnings.map((earning, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-end gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid grid-cols-2 gap-2 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                            htmlFor: `earning-name-${index}`,
                                                                                            className: "sr-only",
                                                                                            children: "Earning Name"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                                            lineNumber: 238,
                                                                                            columnNumber: 53
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                            id: `earning-name-${index}`,
                                                                                            placeholder: "e.g., Holiday Bonus"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                                            lineNumber: 239,
                                                                                            columnNumber: 53
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                                    lineNumber: 237,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                            htmlFor: `earning-amount-${index}`,
                                                                                            className: "sr-only",
                                                                                            children: "Amount"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                                            lineNumber: 242,
                                                                                            columnNumber: 53
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                            id: `earning-amount-${index}`,
                                                                                            type: "number",
                                                                                            placeholder: "e.g., 1000.00"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                                            lineNumber: 243,
                                                                                            columnNumber: 53
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                                    lineNumber: 241,
                                                                                    columnNumber: 49
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                            lineNumber: 236,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "ghost",
                                                                            size: "icon",
                                                                            onClick: ()=>removeEarning(earning.id),
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                className: "text-destructive"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                                lineNumber: 247,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                            lineNumber: 246,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, earning.id, true, {
                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 41
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                            lineNumber: 233,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                    lineNumber: 213,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                            lineNumber: 211,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                            lineNumber: 255,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold",
                                                            children: "Deductions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                            lineNumber: 260,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: addDeduction,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                                    className: "mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 37
                                                                }, this),
                                                                " Add Deduction"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                            lineNumber: 261,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                    lineNumber: 259,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: deductions.map((ded, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-end gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    htmlFor: `ded-name-${index}`,
                                                                                    className: "sr-only",
                                                                                    children: "Deduction Name"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                                    lineNumber: 270,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    id: `ded-name-${index}`,
                                                                                    placeholder: "e.g., Government Loan"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                                    lineNumber: 271,
                                                                                    columnNumber: 49
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                            lineNumber: 269,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    htmlFor: `ded-amount-${index}`,
                                                                                    className: "sr-only",
                                                                                    children: "Amount"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                                    lineNumber: 274,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    id: `ded-amount-${index}`,
                                                                                    type: "number",
                                                                                    placeholder: "e.g., 500.00"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                                    lineNumber: 275,
                                                                                    columnNumber: 49
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                            lineNumber: 273,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "ghost",
                                                                    size: "icon",
                                                                    onClick: ()=>removeDeduction(ded.id),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "text-destructive"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, ded.id, true, {
                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                            lineNumber: 267,
                                                            columnNumber: 37
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                    lineNumber: 265,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                            lineNumber: 258,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                    lineNumber: 209,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                    className: "flex justify-end gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                            lineNumber: 290,
                                                            columnNumber: 37
                                                        }, this),
                                                        "Calculate & Save"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                    lineNumber: 289,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                lineNumber: 288,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                children: "Are you sure you want to calculate and save?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                lineNumber: 296,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                children: "This will finalize and save the payslip for this employee. This action cannot be easily undone."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                lineNumber: 297,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                        lineNumber: 295,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                children: "Cancel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                lineNumber: 302,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                onClick: handleCalculateAndSave,
                                                                children: "Calculate & Save"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                                lineNumber: 303,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                        lineNumber: 301,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                                lineNumber: 294,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                        lineNumber: 287,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                                    lineNumber: 286,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                            lineNumber: 204,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                        lineNumber: 203,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
                lineNumber: 161,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/hr/payslip-generation/[id]/page.jsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(GenerateEmployeePayslipPage, "qcM0K+QCl9R8sAPohf45HlYl5hM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GenerateEmployeePayslipPage;
var _c;
__turbopack_context__.k.register(_c, "GenerateEmployeePayslipPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_be1c15bd._.js.map