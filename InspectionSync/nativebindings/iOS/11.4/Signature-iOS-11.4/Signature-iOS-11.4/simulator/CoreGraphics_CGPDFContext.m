#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
}
static void registerCFunctions(JSContext* context)
{
	context[@"CGPDFContextSetOutline"] = ^void(id arg0, id arg1) {
		CGPDFContextSetOutline(arg0, arg1);
	};
	context[@"CGPDFContextAddDocumentMetadata"] = ^void(id arg0, id arg1) {
		CGPDFContextAddDocumentMetadata(arg0, arg1);
	};
	context[@"CGPDFContextSetDestinationForRect"] = ^void(id arg0, id arg1, CGRect arg2) {
		CGPDFContextSetDestinationForRect(arg0, arg1, arg2);
	};
	context[@"CGPDFContextEndPage"] = ^void(id arg0) {
		CGPDFContextEndPage(arg0);
	};
	context[@"CGPDFContextAddDestinationAtPoint"] = ^void(id arg0, id arg1, CGPoint arg2) {
		CGPDFContextAddDestinationAtPoint(arg0, arg1, arg2);
	};
	context[@"CGPDFContextClose"] = ^void(id arg0) {
		CGPDFContextClose(arg0);
	};
	context[@"CGPDFContextSetURLForRect"] = ^void(id arg0, id arg1, CGRect arg2) {
		CGPDFContextSetURLForRect(arg0, arg1, arg2);
	};
	context[@"CGPDFContextBeginPage"] = ^void(id arg0, id arg1) {
		CGPDFContextBeginPage(arg0, arg1);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCGPDFContextAllowsCopying;
	if (p != NULL) context[@"kCGPDFContextAllowsCopying"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextAllowsCopying inContext: context];
	p = (void*) &kCGPDFContextUserPassword;
	if (p != NULL) context[@"kCGPDFContextUserPassword"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextUserPassword inContext: context];
	p = (void*) &kCGPDFContextTrimBox;
	if (p != NULL) context[@"kCGPDFContextTrimBox"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextTrimBox inContext: context];
	p = (void*) &kCGPDFContextSubject;
	if (p != NULL) context[@"kCGPDFContextSubject"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextSubject inContext: context];
	p = (void*) &kCGPDFContextOwnerPassword;
	if (p != NULL) context[@"kCGPDFContextOwnerPassword"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextOwnerPassword inContext: context];
	p = (void*) &kCGPDFContextAccessPermissions;
	if (p != NULL) context[@"kCGPDFContextAccessPermissions"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextAccessPermissions inContext: context];
	p = (void*) &kCGPDFContextAllowsPrinting;
	if (p != NULL) context[@"kCGPDFContextAllowsPrinting"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextAllowsPrinting inContext: context];
	p = (void*) &kCGPDFContextBleedBox;
	if (p != NULL) context[@"kCGPDFContextBleedBox"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextBleedBox inContext: context];
	p = (void*) &kCGPDFContextMediaBox;
	if (p != NULL) context[@"kCGPDFContextMediaBox"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextMediaBox inContext: context];
	p = (void*) &kCGPDFContextEncryptionKeyLength;
	if (p != NULL) context[@"kCGPDFContextEncryptionKeyLength"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextEncryptionKeyLength inContext: context];
	p = (void*) &kCGPDFContextKeywords;
	if (p != NULL) context[@"kCGPDFContextKeywords"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextKeywords inContext: context];
	p = (void*) &kCGPDFContextArtBox;
	if (p != NULL) context[@"kCGPDFContextArtBox"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextArtBox inContext: context];
	p = (void*) &kCGPDFContextCropBox;
	if (p != NULL) context[@"kCGPDFContextCropBox"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextCropBox inContext: context];
	p = (void*) &kCGPDFContextTitle;
	if (p != NULL) context[@"kCGPDFContextTitle"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextTitle inContext: context];
	p = (void*) &kCGPDFContextAuthor;
	if (p != NULL) context[@"kCGPDFContextAuthor"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextAuthor inContext: context];
	p = (void*) &kCGPDFContextCreator;
	if (p != NULL) context[@"kCGPDFContextCreator"] = [JSValue valueWithObject: (__bridge id) kCGPDFContextCreator inContext: context];
}
void load_CoreGraphics_CGPDFContext_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
